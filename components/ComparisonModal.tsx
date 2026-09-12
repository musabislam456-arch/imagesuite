'use client';

import React, { useState } from 'react';
import { X, ArrowLeftRight, CheckCircle2, Download } from 'lucide-react';
import { formatBytes } from '@/lib/image-processing';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalUrl: string;
  originalSize: number;
  originalDimensions: string;
  processedUrl: string;
  processedSize: number;
  processedDimensions: string;
  fileName: string;
  onDownload: () => void;
}

export default function ComparisonModal({
  isOpen,
  onClose,
  originalUrl,
  originalSize,
  originalDimensions,
  processedUrl,
  processedSize,
  processedDimensions,
  fileName,
  onDownload,
}: ComparisonModalProps) {
  const [sliderPos, setSliderPos] = useState(50);

  if (!isOpen) return null;

  const reduction =
    originalSize > 0
      ? Math.round(((originalSize - processedSize) / originalSize) * 100)
      : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                Visual Quality Comparison
              </h3>
              <p className="text-xs text-slate-500 truncate max-w-xs sm:max-w-md">
                {fileName}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-3 gap-2 px-6 py-3 bg-indigo-900 text-white text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Original</span>
            <span className="font-bold">{formatBytes(originalSize)}</span>{' '}
            <span className="text-slate-400">({originalDimensions})</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Processed</span>
            <span className="font-bold text-emerald-400">{formatBytes(processedSize)}</span>{' '}
            <span className="text-slate-400">({processedDimensions})</span>
          </div>
          <div className="text-right">
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Savings</span>
            <span className="font-extrabold text-emerald-400 text-sm">
              {reduction > 0 ? `-${reduction}%` : '0%'}
            </span>
          </div>
        </div>

        {/* Interactive Comparison Canvas / Split View */}
        <div className="relative flex-1 min-h-[320px] max-h-[500px] bg-slate-950 flex items-center justify-center overflow-hidden select-none">
          {/* Original image (Background) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={originalUrl}
            alt="Original"
            className="max-h-[460px] max-w-full object-contain pointer-events-none"
          />

          {/* Processed image (Foreground with clip-path) */}
          <div
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
            style={{
              clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={processedUrl}
              alt="Processed"
              className="max-h-[460px] max-w-full object-contain pointer-events-none"
            />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-md pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center text-xs font-bold">
              ⇄
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-medium pointer-events-none">
            Original (Before)
          </div>
          <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-indigo-600/80 backdrop-blur-md text-white text-[11px] font-medium pointer-events-none">
            ImageSuite Result (After)
          </div>

          {/* Invisible interactive range input overlaid */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            aria-label="Comparison slider"
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <span className="text-xs text-slate-500">
            Drag slider left or right to compare pixel clarity & compression fidelity
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-200 text-sm font-medium transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={onDownload}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors flex items-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
