import JSZip from 'jszip';

export interface ProcessedImage {
  id: string;
  originalFile: File;
  originalName: string;
  originalSize: number;
  originalWidth: number;
  originalHeight: number;
  originalPreviewUrl: string;
  
  processedBlob: Blob | null;
  processedUrl: string | null;
  processedSize: number | null;
  processedWidth: number | null;
  processedHeight: number | null;
  processedName: string;
  
  status: 'idle' | 'processing' | 'completed' | 'error';
  errorMessage?: string;
  reductionPercentage?: number;
}

export interface ConvertOptions {
  targetFormat: 'image/png' | 'image/jpeg' | 'image/webp';
  quality?: number; // 0 to 1
  targetKb?: number; // target size in KB
  targetWidth?: number;
  targetHeight?: number;
  maintainAspectRatio?: boolean;
  backgroundColor?: string; // for converting transparent PNG to JPG
}

/**
 * Format bytes into human readable string
 */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Loads an image file into an HTMLImageElement
 */
export function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
}

/**
 * Calculates resized dimensions while optionally maintaining aspect ratio
 */
export function calculateDimensions(
  originalWidth: number,
  originalHeight: number,
  targetWidth?: number,
  targetHeight?: number,
  maintainAspectRatio = true
): { width: number; height: number } {
  if (!targetWidth && !targetHeight) {
    return { width: originalWidth, height: originalHeight };
  }

  if (!maintainAspectRatio) {
    return {
      width: targetWidth || originalWidth,
      height: targetHeight || originalHeight,
    };
  }

  const aspectRatio = originalWidth / originalHeight;

  if (targetWidth && !targetHeight) {
    return {
      width: Math.round(targetWidth),
      height: Math.round(targetWidth / aspectRatio),
    };
  }

  if (!targetWidth && targetHeight) {
    return {
      width: Math.round(targetHeight * aspectRatio),
      height: Math.round(targetHeight),
    };
  }

  if (targetWidth && targetHeight) {
    const widthRatio = targetWidth / originalWidth;
    const heightRatio = targetHeight / originalHeight;
    const scale = Math.min(widthRatio, heightRatio);

    return {
      width: Math.round(originalWidth * scale),
      height: Math.round(originalHeight * scale),
    };
  }

  return { width: originalWidth, height: originalHeight };
}

/**
 * Core image processor using browser Canvas API
 */
export async function processImageOnCanvas(
  file: File,
  options: ConvertOptions
): Promise<{
  blob: Blob;
  width: number;
  height: number;
  format: string;
}> {
  const img = await loadImage(file);
  const originalWidth = img.naturalWidth;
  const originalHeight = img.naturalHeight;

  // Calculate destination dimensions
  let { width, height } = calculateDimensions(
    originalWidth,
    originalHeight,
    options.targetWidth,
    options.targetHeight,
    options.maintainAspectRatio ?? true
  );

  // Fallback safety
  width = Math.max(1, width);
  height = Math.max(1, height);

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    throw new Error('Could not obtain Canvas 2D rendering context');
  }

  // Smooth scaling
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // If converting to JPEG or non-transparent output with background specified
  if (options.targetFormat === 'image/jpeg' || options.backgroundColor) {
    ctx.fillStyle = options.backgroundColor || '#FFFFFF';
    ctx.fillRect(0, 0, width, height);
  }

  ctx.drawImage(img, 0, 0, width, height);

  // Check if user requested a target size in KB (Iterative compression algorithm)
  if (options.targetKb && options.targetKb > 0) {
    const targetBytes = options.targetKb * 1024;
    const format = options.targetFormat === 'image/png' ? 'image/webp' : options.targetFormat;
    
    // Test qualities starting from high to low
    let bestBlob: Blob | null = null;
    let low = 0.05;
    let high = 0.95;
    let iterations = 0;

    while (iterations < 7) {
      const midQuality = (low + high) / 2;
      const currentBlob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((b) => resolve(b), format, midQuality)
      );

      if (!currentBlob) break;

      if (currentBlob.size <= targetBytes) {
        bestBlob = currentBlob;
        // Try higher quality to get as close as possible without exceeding target
        low = midQuality;
      } else {
        // Exceeded target, reduce quality
        high = midQuality;
      }
      iterations++;
    }

    // If even at lowest quality it's still bigger than targetBytes,
    // we downscale dimensions proportionally until it fits
    if (!bestBlob || bestBlob.size > targetBytes) {
      let scale = 0.85;
      let downscaledCanvas = document.createElement('canvas');
      
      while (scale > 0.15) {
        const sw = Math.max(50, Math.round(width * scale));
        const sh = Math.max(50, Math.round(height * scale));
        downscaledCanvas.width = sw;
        downscaledCanvas.height = sh;
        const dctx = downscaledCanvas.getContext('2d');
        if (dctx) {
          dctx.imageSmoothingEnabled = true;
          dctx.imageSmoothingQuality = 'high';
          if (format === 'image/jpeg' || options.backgroundColor) {
            dctx.fillStyle = options.backgroundColor || '#FFFFFF';
            dctx.fillRect(0, 0, sw, sh);
          }
          dctx.drawImage(canvas, 0, 0, sw, sh);
          const scaledBlob = await new Promise<Blob | null>((resolve) =>
            downscaledCanvas.toBlob((b) => resolve(b), format, 0.6)
          );

          if (scaledBlob) {
            bestBlob = scaledBlob;
            width = sw;
            height = sh;
            if (scaledBlob.size <= targetBytes) {
              break;
            }
          }
        }
        scale -= 0.15;
      }
    }

    if (bestBlob) {
      return {
        blob: bestBlob,
        width,
        height,
        format,
      };
    }
  }

  // Standard conversion without strict target KB
  const quality = options.quality !== undefined ? options.quality : 0.92;
  const finalBlob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (b) => {
        if (b) resolve(b);
        else reject(new Error('Failed to generate image blob from canvas'));
      },
      options.targetFormat,
      options.targetFormat === 'image/png' ? undefined : quality
    );
  });

  return {
    blob: finalBlob,
    width,
    height,
    format: options.targetFormat,
  };
}

/**
 * Downloads a single Blob with custom filename
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Bundles multiple blobs into a zip file and triggers download
 */
export async function downloadAllAsZip(
  items: { name: string; blob: Blob }[],
  zipFilename = 'imagesuite-export.zip'
): Promise<void> {
  const zip = new JSZip();

  items.forEach((item, index) => {
    // Avoid duplicate filenames in zip
    let name = item.name;
    const extIndex = name.lastIndexOf('.');
    const base = extIndex !== -1 ? name.slice(0, extIndex) : name;
    const ext = extIndex !== -1 ? name.slice(extIndex) : '';
    name = `${base}_${index + 1}${ext}`;
    zip.file(name, item.blob);
  });

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  downloadBlob(zipBlob, zipFilename);
}

/**
 * Generates an output filename based on original and new extension
 */
export function getOutputFilename(
  originalName: string,
  newExtension: string,
  suffix = ''
): string {
  const lastDot = originalName.lastIndexOf('.');
  const baseName = lastDot !== -1 ? originalName.slice(0, lastDot) : originalName;
  const cleanExt = newExtension.replace(/^\./, '');
  return `${baseName}${suffix ? `-${suffix}` : ''}.${cleanExt}`;
}
