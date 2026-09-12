'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { 
  FileCode2, 
  Sparkles, 
  Minimize2, 
  Scaling, 
  Download, 
  Trash2, 
  RefreshCw, 
  Eye, 
  CheckCircle2, 
  AlertCircle, 
  Sliders, 
  Lock, 
  Unlock,
  Archive,
  ArrowRight,
  Plus
} from 'lucide-react';
import Dropzone from './Dropzone';
import ComparisonModal from './ComparisonModal';
import { 
  ProcessedImage, 
  processImageOnCanvas, 
  formatBytes, 
  downloadBlob, 
  downloadAllAsZip, 
  getOutputFilename 
} from '@/lib/image-processing';

export type ToolType = 'jpg-to-png' | 'png-to-webp' | 'image-compressor' | 'image-resizer' | 'general';

interface ToolWorkspaceProps {
  toolType: ToolType;
  title?: string;
  description?: string;
  targetFormatDefault?: 'image/png' | 'image/jpeg' | 'image/webp';
}

const RESIZE_PRESETS = [
  { label: 'Instagram Square (1:1)', width: 1080, height: 1080 },
  { label: 'Instagram Story (9:16)', width: 1080, height: 1920 },
  { label: 'Twitter / X Post (16:9)', width: 1200, height: 675 },
  { label: 'YouTube Thumbnail', width: 1280, height: 720 },
  { label: 'Website Hero Banner', width: 1920, height: 1080 },
  { label: 'Email Newsletter (Standard)', width: 600, height: 400 },
];

export default function ToolWorkspace({
  toolType,
  title,
  description,
  targetFormatDefault,
}: ToolWorkspaceProps) {
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Compressor settings
  const [targetKb, setTargetKb] = useState<number>(150);
  const [compressFormat, setCompressFormat] = useState<'image/webp' | 'image/jpeg' | 'image/png'>('image/webp');
  
  // WebP / Quality settings
  const [quality, setQuality] = useState<number>(85);
  
  // Resizer settings
  const [resizeWidth, setResizeWidth] = useState<number>(1200);
  const [resizeHeight, setResizeHeight] = useState<number>(800);
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [resizeFormat, setResizeFormat] = useState<'image/webp' | 'image/jpeg' | 'image/png'>('image/webp');
  const [resizeQuality, setResizeQuality] = useState(90);

  // Active comparison modal
  const [comparingItem, setComparingItem] = useState<ProcessedImage | null>(null);

  // Determine effective target format
  const getTargetFormat = useCallback((): 'image/png' | 'image/jpeg' | 'image/webp' => {
    if (toolType === 'jpg-to-png') return 'image/png';
    if (toolType === 'png-to-webp') return 'image/webp';
    if (toolType === 'image-compressor') return compressFormat;
    if (toolType === 'image-resizer') return resizeFormat;
    return targetFormatDefault || 'image/webp';
  }, [toolType, compressFormat, resizeFormat, targetFormatDefault]);

  // Handle newly selected files
  const handleFilesSelected = async (files: File[]) => {
    const newItems: ProcessedImage[] = [];

    for (const file of files) {
      const originalPreviewUrl = URL.createObjectURL(file);
      
      // Load dimensions
      let originalWidth = 0;
      let originalHeight = 0;
      try {
        const img = new Image();
        img.src = originalPreviewUrl;
        await new Promise((res) => {
          img.onload = () => {
            originalWidth = img.naturalWidth;
            originalHeight = img.naturalHeight;
            res(true);
          };
          img.onerror = () => res(false);
        });
      } catch {
        // ignore
      }

      newItems.push({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        originalFile: file,
        originalName: file.name,
        originalSize: file.size,
        originalWidth,
        originalHeight,
        originalPreviewUrl,
        processedBlob: null,
        processedUrl: null,
        processedSize: null,
        processedWidth: null,
        processedHeight: null,
        processedName: '',
        status: 'processing',
      });
    }

    // Add them to state with processing status
    setImages((prev) => [...prev, ...newItems]);
    setIsProcessing(true);

    // Process each newly added item
    for (let i = 0; i < newItems.length; i++) {
      const processed = await processItem(newItems[i]);
      setImages((prev) =>
        prev.map((img) => (img.id === newItems[i].id ? processed : img))
      );
    }

    setIsProcessing(false);
  };

  // Process a single item
  const processItem = async (item: ProcessedImage): Promise<ProcessedImage> => {
    const format = getTargetFormat();
    let ext = 'webp';
    if (format === 'image/png') ext = 'png';
    if (format === 'image/jpeg') ext = 'jpg';

    const outputName = getOutputFilename(
      item.originalName,
      ext,
      toolType === 'image-compressor' ? 'compressed' : toolType === 'image-resizer' ? 'resized' : 'converted'
    );

    try {
      const options = {
        targetFormat: format,
        quality: (toolType === 'image-resizer' ? resizeQuality : quality) / 100,
        targetKb: toolType === 'image-compressor' ? targetKb : undefined,
        targetWidth: toolType === 'image-resizer' ? resizeWidth : undefined,
        targetHeight: toolType === 'image-resizer' ? resizeHeight : undefined,
        maintainAspectRatio: lockAspectRatio,
      };

      const result = await processImageOnCanvas(item.originalFile, options);
      const processedUrl = URL.createObjectURL(result.blob);
      const reduction = Math.round(
        ((item.originalSize - result.blob.size) / item.originalSize) * 100
      );

      return {
        ...item,
        processedBlob: result.blob,
        processedUrl,
        processedSize: result.blob.size,
        processedWidth: result.width,
        processedHeight: result.height,
        processedName: outputName,
        status: 'completed',
        reductionPercentage: reduction,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Processing failed';
      return {
        ...item,
        status: 'error',
        errorMessage: message,
      };
    }
  };

  // Process all idle or pending images
  const handleProcessAll = async () => {
    if (images.length === 0 || isProcessing) return;
    setIsProcessing(true);

    const updatedImages = [...images];
    for (let i = 0; i < updatedImages.length; i++) {
      if (updatedImages[i].status !== 'completed') {
        updatedImages[i] = { ...updatedImages[i], status: 'processing' };
        setImages([...updatedImages]);
        const processed = await processItem(updatedImages[i]);
        updatedImages[i] = processed;
        setImages([...updatedImages]);
      }
    }

    setIsProcessing(false);
  };

  // Re-process all images if settings change and user requests it
  const handleReapplySettings = async () => {
    if (images.length === 0 || isProcessing) return;
    setIsProcessing(true);

    const updatedImages: ProcessedImage[] = images.map((img) => ({ ...img, status: 'processing' }));
    setImages(updatedImages);

    for (let i = 0; i < updatedImages.length; i++) {
      const processed = await processItem(updatedImages[i]);
      updatedImages[i] = processed;
      setImages([...updatedImages]);
    }

    setIsProcessing(false);
  };

  const handleDownloadSingle = (item: ProcessedImage) => {
    if (item.processedBlob) {
      downloadBlob(item.processedBlob, item.processedName);
    }
  };

  const handleDownloadAllZip = async () => {
    const completed = images.filter((i) => i.processedBlob !== null);
    if (completed.length === 0) return;

    const items = completed.map((i) => ({
      name: i.processedName,
      blob: i.processedBlob!,
    }));

    await downloadAllAsZip(items, `imagesuite-${toolType}.zip`);
  };

  const handleRemoveImage = (id: string) => {
    setImages((prev) => {
      const target = prev.find((i) => i.id === id);
      if (target?.originalPreviewUrl) URL.revokeObjectURL(target.originalPreviewUrl);
      if (target?.processedUrl) URL.revokeObjectURL(target.processedUrl);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleClearAll = () => {
    images.forEach((i) => {
      if (i.originalPreviewUrl) URL.revokeObjectURL(i.originalPreviewUrl);
      if (i.processedUrl) URL.revokeObjectURL(i.processedUrl);
    });
    setImages([]);
  };

  const completedImages = images.filter((i) => i.status === 'completed');
  const totalOriginalBytes = images.reduce((acc, curr) => acc + curr.originalSize, 0);
  const totalProcessedBytes = completedImages.reduce((acc, curr) => acc + (curr.processedSize || 0), 0);
  const overallSavings =
    totalOriginalBytes > 0 && totalProcessedBytes > 0
      ? Math.round(((totalOriginalBytes - totalProcessedBytes) / totalOriginalBytes) * 100)
      : 0;

  return (
    <div className="w-full space-y-6">
      {/* Tool Custom Settings Panel */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-xs font-semibold text-indigo-700 uppercase tracking-wider">
                Active Engine
              </span>
              <span className="text-xs text-slate-400 font-mono">100% In-Browser</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {title || 'Image Processing Studio'}
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              {description || 'Drag and drop your images below for instant local execution.'}
            </p>
          </div>

          {/* Quick status badge */}
          {images.length > 0 && (
            <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
              <div className="text-right">
                <div className="text-xs text-slate-500">Queue Total</div>
                <div className="text-sm font-bold text-slate-900">
                  {images.length} {images.length === 1 ? 'file' : 'files'}
                </div>
              </div>
              {completedImages.length > 0 && overallSavings > 0 && (
                <div className="pl-3 border-l border-slate-200 text-right">
                  <div className="text-xs text-slate-500">Total Saved</div>
                  <div className="text-sm font-extrabold text-emerald-600">
                    -{overallSavings}% ({formatBytes(totalOriginalBytes - totalProcessedBytes)})
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tool-specific controls */}
        <div className="pt-6">
          {toolType === 'jpg-to-png' && (
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-sm font-semibold text-slate-900">
                  Conversion Mode: Lossless PNG
                </span>
                <p className="text-xs text-slate-500">
                  Converts compressed JPG raster pixels into crisp, lossless 24-bit PNG with an active alpha channel.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-mono text-slate-700">
                <span>Output: .png (Lossless RGBA)</span>
              </div>
            </div>
          )}

          {toolType === 'png-to-webp' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    WebP Compression Quality: <span className="text-indigo-600 font-bold">{quality}%</span>
                  </label>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Recommended: 80–90% maintains visually lossless quality while cutting file size by 60–80%.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {[70, 85, 95].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setQuality(preset)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        quality === preset
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {preset}%
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          )}

          {toolType === 'image-compressor' && (
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                    Target File Size Limit: <span className="text-indigo-600 font-bold">{targetKb} KB</span>
                  </label>
                  <p className="text-xs text-slate-500 mt-0.5">
                    ImageSuite will iteratively calibrate canvas encoding to produce files at or under this exact size.
                  </p>
                </div>
                {/* Format choice */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">Output:</span>
                  {(['image/webp', 'image/jpeg', 'image/png'] as const).map((fmt) => (
                    <button
                      key={fmt}
                      type="button"
                      onClick={() => setCompressFormat(fmt)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors ${
                        compressFormat === fmt
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {fmt.replace('image/', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Presets and custom input */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {[50, 100, 200, 500, 1000].map((kb) => (
                    <button
                      key={kb}
                      type="button"
                      onClick={() => setTargetKb(kb)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        targetKb === kb
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {kb < 1000 ? `${kb} KB` : `${kb / 1000} MB`}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-xs text-slate-400">Custom:</span>
                  <div className="relative">
                    <input
                      type="number"
                      min="10"
                      max="10000"
                      value={targetKb}
                      onChange={(e) => setTargetKb(Math.max(5, Number(e.target.value)))}
                      className="w-24 px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 text-right pr-8 focus:outline-none focus:border-indigo-600"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-400 pointer-events-none">
                      KB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {toolType === 'image-resizer' && (
            <div className="space-y-5">
              {/* Presets Grid */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Popular Social & Web Presets
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                  {RESIZE_PRESETS.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setResizeWidth(preset.width);
                        setResizeHeight(preset.height);
                      }}
                      className="p-2.5 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 hover:border-indigo-300 text-left transition-colors group"
                    >
                      <div className="text-[11px] font-semibold text-slate-700 group-hover:text-indigo-900 truncate">
                        {preset.label}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {preset.width} × {preset.height}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Exact dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100 items-end">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Target Width (px)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="8000"
                    value={resizeWidth}
                    onChange={(e) => {
                      const val = Math.max(1, Number(e.target.value));
                      setResizeWidth(val);
                      if (lockAspectRatio && resizeHeight > 0) {
                        // Keep ratio
                      }
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Target Height (px)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="8000"
                    value={resizeHeight}
                    onChange={(e) => {
                      const val = Math.max(1, Number(e.target.value));
                      setResizeHeight(val);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLockAspectRatio(!lockAspectRatio)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium transition-colors ${
                      lockAspectRatio
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    {lockAspectRatio ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    <span>{lockAspectRatio ? 'Lock Ratio' : 'Free Ratio'}</span>
                  </button>

                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    {(['image/webp', 'image/jpeg', 'image/png'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        onClick={() => setResizeFormat(fmt)}
                        className={`px-2 py-1 rounded-lg text-xs font-medium uppercase ${
                          resizeFormat === fmt ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                        }`}
                      >
                        {fmt.replace('image/', '')}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* If images exist and settings were altered, offer re-apply */}
          {images.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Adjusted settings above? Click to re-run processing on all loaded images.
              </span>
              <button
                type="button"
                onClick={handleReapplySettings}
                disabled={isProcessing}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isProcessing ? 'animate-spin' : ''}`} />
                <span>Re-Apply Settings</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Drag and Drop Zone */}
      <Dropzone
        id={`dropzone-${toolType}`}
        onFilesSelected={handleFilesSelected}
        label={
          toolType === 'jpg-to-png'
            ? 'Drop JPG images here to convert to PNG'
            : toolType === 'png-to-webp'
            ? 'Drop PNG images here to convert to WebP'
            : toolType === 'image-compressor'
            ? `Drop images here to compress to ~${targetKb} KB`
            : toolType === 'image-resizer'
            ? `Drop images here to resize to ${resizeWidth}×${resizeHeight}px`
            : 'Drop images here to convert, compress, or resize'
        }
      />

      {/* Images Queue & Actions */}
      {images.length > 0 && (
        <div className="space-y-4">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-900">
                Queue ({completedImages.length}/{images.length} done)
              </span>
              {isProcessing && (
                <div className="flex items-center gap-2 text-xs text-indigo-600 font-medium">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Processing locally in browser...</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleClearAll}
                className="px-3.5 py-2 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear All
              </button>

              {completedImages.length > 1 && (
                <button
                  type="button"
                  onClick={handleDownloadAllZip}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-indigo-600/20"
                >
                  <Archive className="w-4 h-4" />
                  Download All ({completedImages.length} files as .ZIP)
                </button>
              )}
            </div>
          </div>

          {/* List of files */}
          <div className="space-y-3">
            {images.map((item) => {
              const isDone = item.status === 'completed';
              const isBusy = item.status === 'processing';
              const isErr = item.status === 'error';

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:border-slate-300 transition-colors"
                >
                  {/* Left: Preview thumbnail & metadata */}
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="relative w-16 h-16 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.processedUrl || item.originalPreviewUrl}
                        alt={item.originalName}
                        className="w-full h-full object-cover"
                      />
                      {isDone && (
                        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                          {item.originalName}
                        </h4>
                        {isDone && item.reductionPercentage !== undefined && item.reductionPercentage > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-extrabold text-[11px] shrink-0">
                            -{item.reductionPercentage}%
                          </span>
                        )}
                      </div>

                      {/* Dimension and Size comparison line */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>Original: {formatBytes(item.originalSize)}</span>
                        {item.originalWidth > 0 && (
                          <span className="text-slate-400">
                            ({item.originalWidth}×{item.originalHeight})
                          </span>
                        )}

                        {isDone && item.processedSize && (
                          <>
                            <ArrowRight className="w-3 h-3 text-slate-400" />
                            <span className="font-semibold text-slate-800">
                              New: {formatBytes(item.processedSize)}
                            </span>
                            {item.processedWidth && (
                              <span className="text-slate-400">
                                ({item.processedWidth}×{item.processedHeight})
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {isErr && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {item.errorMessage || 'Failed to process file'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    {isBusy && (
                      <div className="flex items-center gap-2 px-3 py-1.5 text-xs text-indigo-600 font-medium bg-indigo-50 rounded-xl">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Rendering...</span>
                      </div>
                    )}

                    {isDone && (
                      <>
                        <button
                          type="button"
                          onClick={() => setComparingItem(item)}
                          className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors flex items-center gap-1.5"
                          title="Compare Before & After"
                        >
                          <Eye className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Compare</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDownloadSingle(item)}
                          className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => handleRemoveImage(item.id)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {comparingItem && comparingItem.processedUrl && (
        <ComparisonModal
          isOpen={true}
          onClose={() => setComparingItem(null)}
          originalUrl={comparingItem.originalPreviewUrl}
          originalSize={comparingItem.originalSize}
          originalDimensions={`${comparingItem.originalWidth}×${comparingItem.originalHeight}`}
          processedUrl={comparingItem.processedUrl}
          processedSize={comparingItem.processedSize || 0}
          processedDimensions={`${comparingItem.processedWidth}×${comparingItem.processedHeight}`}
          fileName={comparingItem.originalName}
          onDownload={() => handleDownloadSingle(comparingItem)}
        />
      )}
    </div>
  );
}
