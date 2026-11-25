import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { universityInfo } from '../data/nssData';
import { useScrollLock } from '../hooks/useScrollLock';

export default function VideoModal({ isOpen, onClose }) {
  // Lock background scroll completely when open
  useScrollLock(Boolean(isOpen));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.3 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl overflow-hidden z-10 text-white max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-3 xs:px-4 sm:px-6 py-2.5 xs:py-3 sm:py-4 bg-slate-800/90 border-b border-slate-700 flex-shrink-0">
            <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 pr-2 min-w-0">
              <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0">
                <Play className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-orange-400 ml-0.5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs xs:text-sm sm:text-base font-bold text-white truncate">NSS SAM Global University Lookback Video</h3>
                <p className="text-[9px] xs:text-[10px] sm:text-xs text-slate-400 truncate">Official Youth Documentary • Bhopal, Madhya Pradesh</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 xs:p-1.5 sm:p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition flex-shrink-0 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Real Video Player */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden flex-1 min-h-[180px] xs:min-h-[220px] sm:min-h-[420px]">
            <video
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain bg-black"
            >
              <source src="/assets/real_nss/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Footer note & YouTube Link */}
          <div className="p-2.5 xs:p-3 sm:p-4 bg-slate-800/95 border-t border-slate-700 flex flex-col xs:flex-row items-center justify-between gap-2 text-[10px] xs:text-[11px] sm:text-xs text-slate-300 flex-shrink-0">
            <div className="flex items-center gap-1.5 xs:gap-2 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-orange-400 shrink-0" />
              <span>Official YouTube: <strong className="text-white">@SGUNSS</strong></span>
            </div>
            <div className="flex items-center gap-2 xs:gap-3">
              <a
                href={universityInfo.youtubeChannel}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold text-orange-400 hover:text-orange-300 transition"
              >
                <span>Visit YouTube Channel</span>
                <ExternalLink className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-3 xs:px-4 py-1 xs:py-1.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition text-[11px] xs:text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}