import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { activitiesList } from '../data/nssData';

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(1);
  const targetRef = useRef(25);
  const readyToFinishRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const initialEl = document.getElementById('initial-loader');
    if (initialEl) initialEl.remove();
    document.body.style.backgroundColor = '#f8fafc';

    const preloadUrls = [
      '/assets/images/nss-sgu-logo.webp',
      '/assets/images/nss-hero-banner.webp',
      ...activitiesList.slice(0, 4).map((a) => a.image).filter(Boolean),
    ];

    const totalAssets = preloadUrls.length + 1;
    let completed = 0;

    const bumpTarget = () => {
      if (cancelled) return;
      completed += 1;
      const pct = Math.min(92, Math.round(20 + (completed / totalAssets) * 72));
      if (pct > targetRef.current) {
        targetRef.current = pct;
      }
    };

    const assetPromises = preloadUrls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            bumpTarget();
            resolve();
          };
          img.onerror = () => {
            bumpTarget();
            resolve();
          };
          img.src = url;
        })
    );

    const docLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        bumpTarget();
        resolve();
      } else {
        const onLoad = () => {
          bumpTarget();
          resolve();
        };
        window.addEventListener('load', onLoad, { once: true });
      }
    });

    const maxTimeout = new Promise((resolve) => setTimeout(resolve, 3500));

    Promise.race([Promise.all([...assetPromises, docLoadPromise]), maxTimeout]).then(() => {
      if (cancelled) return;
      readyToFinishRef.current = true;
      targetRef.current = 100;
    });

    // Deliberate, smooth 1-by-1 counting (1, 2, 3, 4, 5 ... 100)
    const interval = setInterval(() => {
      if (cancelled) return;
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const cap = readyToFinishRef.current ? 100 : Math.max(targetRef.current, 88);
        if (prev < cap) {
          return prev + 1;
        }
        return prev;
      });
    }, 32);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setIsVisible(false), 320);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const statusText =
    progress < 36
      ? 'Initializing NSS Unit Portal...'
      : progress < 72
      ? 'Loading Community Drives & Media...'
      : progress < 100
      ? 'Preparing Your Experience...'
      : 'Welcome to the Orange Army';

  // SVG circular ring math
  const ringRadius = 56;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeOut' } }}
          className="fixed inset-0 z-[100] bg-[#071530] flex items-center justify-center p-3 xs:p-4 sm:p-6 overflow-y-auto select-none"
          aria-label="Loading NSS SAM Global University"
          role="status"
        >
          {/* Ambient Background Glows & Subtle Grid */}
          <div
            className="fixed inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />
          <div className="fixed -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
          <div className="fixed -bottom-24 -right-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

          {/* Centered Responsive Card (320px -> 1440px, safe on short viewports too) */}
          <div className="relative z-10 my-auto w-full max-w-[292px] xs:max-w-[336px] min-[425px]:max-w-[380px] md:max-w-[430px] lg:max-w-[460px] 2xl:max-w-[500px] rounded-2xl sm:rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/15 p-4 xs:p-5 md:p-6 2xl:p-8 flex flex-col items-center text-center">
            {/* Top Pill */}
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-orange-500/15 border border-orange-400/30 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-orange-300 mb-3 sm:mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              National Service Scheme
            </span>

            {/* Logo + Live Progress Ring + Outer Dashed Orbit */}
            <div className="relative w-24 h-24 xs:w-26 xs:h-26 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mb-3 sm:mb-3.5">
              {/* Slow Rotating Dashed Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-white/20"
              />

              {/* Live SVG Progress Ring */}
              <svg className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] -rotate-90" viewBox="0 0 128 128">
                <defs>
                  <linearGradient id="nssLoaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b00" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
                <circle
                  cx="64"
                  cy="64"
                  r={ringRadius}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4.5"
                />
                <circle
                  cx="64"
                  cy="64"
                  r={ringRadius}
                  fill="none"
                  stroke="url(#nssLoaderGrad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-[stroke-dashoffset] duration-75 ease-linear"
                />
              </svg>

              {/* Center NSS Logo */}
              <div className="w-[70px] h-[70px] xs:w-[76px] xs:h-[76px] md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full overflow-hidden border-2 border-white/25 bg-white p-0.5">
                <img
                  src="/assets/images/nss-sgu-logo.webp"
                  alt="NSS SAM Global University"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* University Title & Motto */}
            <h1 className="text-[14px] xs:text-base min-[425px]:text-[17px] md:text-lg lg:text-xl 2xl:text-2xl font-black text-white tracking-tight leading-snug">
              NSS SAM GLOBAL UNIVERSITY
            </h1>
            <p className="text-[11px] xs:text-xs md:text-[13px] text-amber-300/90 font-semibold italic mt-0.5 mb-3 sm:mb-3.5">
              &ldquo;Not Me, But You&rdquo;
            </p>

            {/* Giant Tabular Percentage Counter */}
            <div className="flex items-baseline justify-center gap-0.5 mb-2">
              <span className="text-2xl xs:text-3xl md:text-4xl lg:text-[42px] font-black text-white tabular-nums tracking-tight leading-none">
                {progress}
              </span>
              <span className="text-sm xs:text-base md:text-lg font-extrabold text-orange-400">
                %
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full space-y-1.5">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/10 p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 rounded-full transition-[width] duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10.5px] xs:text-[11px] md:text-xs font-medium text-slate-300 min-h-[16px]">
                {statusText}
              </p>
            </div>

            {/* Bottom 3-Pillar Strip */}
            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 w-full flex items-center justify-center gap-2 xs:gap-3 text-[9px] xs:text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span>Service</span>
              <span className="w-1 h-1 rounded-full bg-orange-400" />
              <span>Leadership</span>
              <span className="w-1 h-1 rounded-full bg-orange-400" />
              <span>Unity</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
