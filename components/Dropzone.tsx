'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { UploadCloud, Image as ImageIcon, Plus, Sparkles } from 'lucide-react';

interface DropzoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string;
  multiple?: boolean;
  maxFiles?: number;
  label?: string;
  sublabel?: string;
  id?: string;
}

export default function Dropzone({
  onFilesSelected,
  acceptedTypes = 'image/jpeg,image/png,image/webp,image/bmp,image/svg+xml',
  multiple = true,
  maxFiles = 25,
  label = 'Drop your images here, or browse files',
  sublabel = 'Supports JPG, PNG, WebP & more. Up to 50MB per file. 100% processed in browser.',
  id = 'file-dropzone',
}: DropzoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isClipboardHover, setIsClipboardHover] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const processFiles = useCallback(
    (filesList: FileList | File[]) => {
      const validFiles: File[] = [];
      const array = Array.from(filesList);

      for (const file of array) {
        if (file.type.startsWith('image/')) {
          validFiles.push(file);
        }
        if (validFiles.length >= maxFiles) break;
      }

      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    },
    [maxFiles, onFilesSelected]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processFiles(e.dataTransfer.files);
      }
    },
    [processFiles]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
      // Reset input value so same files can be re-selected if removed
      e.target.value = '';
    }
  };

  // Clipboard paste support: listen to paste on window
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files.length > 0) {
        const files = Array.from(e.clipboardData.files).filter((f) =>
          f.type.startsWith('image/')
        );
        if (files.length > 0) {
          processFiles(files);
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [processFiles]);

  return (
    <div
      id={id}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative rounded-3xl border-2 border-dashed transition-all duration-200 cursor-pointer overflow-hidden p-8 sm:p-12 text-center flex flex-col items-center justify-center group ${
        isDragOver
          ? 'border-indigo-600 bg-indigo-50/70 scale-[1.008] shadow-lg shadow-indigo-500/10'
          : 'border-slate-300 bg-white hover:border-indigo-400 hover:bg-slate-50/60 shadow-sm'
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes}
        multiple={multiple}
        onChange={handleInputChange}
        className="hidden"
        id={`${id}-input`}
      />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-radial from-indigo-500/5 to-transparent pointer-events-none" />

      {/* Upload icon container */}
      <div className={`relative mb-4 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-200 ${
        isDragOver ? 'scale-110 bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600 group-hover:scale-105'
      }`}>
        <UploadCloud className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center">
          <Plus className="w-3 h-3" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight mb-2">
        {label}
      </h3>

      <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
        {sublabel}
      </p>

      {/* Buttons and tips */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-colors shadow-sm shadow-indigo-600/25 flex items-center gap-2"
        >
          <ImageIcon className="w-4 h-4" />
          Choose Images
        </button>

        <span className="text-xs font-mono text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
          Or press Ctrl + V to paste
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>Hardware accelerated local rendering • Never uploaded to any server</span>
      </div>
    </div>
  );
}
