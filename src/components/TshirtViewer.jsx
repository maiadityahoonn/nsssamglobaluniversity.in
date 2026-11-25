import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RotateCw, CheckCircle2, Sparkles, Shield, Tag, Eye, Play, Pause,
  RotateCcw, Compass, Hand, MoveHorizontal, Award, Check
} from 'lucide-react';

export default function TshirtViewer() {
  const [rotationY, setRotationY] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);
  const [activePin, setActivePin] = useState(null); // 'sgu' | 'nss' | 'collar' | 'back'
  const [tiltX, setTiltX] = useState(0);

  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const animFrameRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-rotation 360° animation loop
  useEffect(() => {
    if (!isAutoRotating) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      return;
    }

    const animate = () => {
      setRotationY((prev) => (prev + 0.6) % 360);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isAutoRotating]);

  // Pointer drag to rotate 3D
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startRotationRef.current = rotationY;
  };

  const handlePointerMove = (e) => {
    // 3D vertical tilt relative to container center
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const centerY = rect.top + rect.height / 2;
      const offsetY = (clientY - centerY) / (rect.height / 2);
      setTiltX(Math.max(-8, Math.min(8, -offsetY * 8)));
    }

    if (!isDragging) return;

    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = currentX - startXRef.current;
    setRotationY(startRotationRef.current + deltaX * 0.65);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    setTiltX(0);
  };

  // Determine current facing side
  const normalizedAngle = ((rotationY % 360) + 360) % 360;
  const isFrontFacing = normalizedAngle <= 90 || normalizedAngle >= 270;
  const currentDegree = Math.round(normalizedAngle);

  // Smooth angle presets
  const rotateTo = (deg, pin = null) => {
    setIsAutoRotating(false);
    setRotationY(deg);
    if (pin) setActivePin(pin);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-nss-blue-dark text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-7 md:p-6 lg:p-7 xl:p-8 border border-slate-700/60 relative overflow-hidden select-none">

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 space-y-4 sm:space-y-5">

        {/* Top Row: Left Content & Right 3D Rotating Stage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-5 lg:gap-6 xl:gap-8 items-stretch">

          {/* Left Column: Heading, Paragraph, Key Details Focus & Action Controls */}
          <div className="md:col-span-6 lg:col-span-5 space-y-2.5 sm:space-y-3 text-left flex flex-col justify-between">
            <div className="space-y-2">
              {/* Badge */}
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold border border-orange-500/30 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>INTERACTIVE 3D ROTATING SHOWCASE</span>
                </span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  The NSS <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Orange Army</span> Uniform
                </h2>
                <p className="mt-1 text-slate-300 text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm leading-relaxed">
                  Every volunteer of SAM Global University wears the iconic orange polo with pride. Designed for grassroots community service, campus rallies, and 7-day residential village camps.
                </p>
              </div>
            </div>

            {/* Quick Feature Pins Navigator (Sleek 4-Column Single Line Layout) */}
            <div className="space-y-1">
              <p className="text-[9.5px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Explore Key Details (Click to Focus):
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 w-full">
                <button
                  onClick={() => rotateTo(0, 'sgu')}
                  className={`px-1 sm:px-1.5 py-1.5 rounded-lg text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-bold transition flex items-center justify-center gap-1 border cursor-pointer whitespace-nowrap ${activePin === 'sgu' && isFrontFacing
                    ? 'bg-blue-600 text-white border-blue-400'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                >
                  <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 shrink-0" />
                  <span className="truncate">SGU Crest</span>
                </button>

                <button
                  onClick={() => rotateTo(0, 'nss')}
                  className={`px-1 sm:px-1.5 py-1.5 rounded-lg text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-bold transition flex items-center justify-center gap-1 border cursor-pointer whitespace-nowrap ${activePin === 'nss' && isFrontFacing
                    ? 'bg-orange-600 text-white border-orange-400'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                >
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400 shrink-0" />
                  <span className="truncate">NSS Wheel</span>
                </button>

                <button
                  onClick={() => rotateTo(0, 'collar')}
                  className={`px-1 sm:px-1.5 py-1.5 rounded-lg text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-bold transition flex items-center justify-center gap-1 border cursor-pointer whitespace-nowrap ${activePin === 'collar' && isFrontFacing
                    ? 'bg-amber-600 text-white border-amber-400'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                >
                  <span className="truncate">👔 Collar</span>
                </button>

                <button
                  onClick={() => rotateTo(180, 'back')}
                  className={`px-1 sm:px-1.5 py-1.5 rounded-lg text-[9px] xs:text-[9.5px] sm:text-[10.5px] font-bold transition flex items-center justify-center gap-1 border cursor-pointer whitespace-nowrap ${activePin === 'back' && !isFrontFacing
                    ? 'bg-orange-600 text-white border-orange-400'
                    : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    }`}
                >
                  <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400 shrink-0" />
                  <span className="truncate">Back Print</span>
                </button>
              </div>
            </div>

            {/* Specification Cards (Shown on Desktop lg+ & Mobile <md, Hidden on 768px tablet md:max-lg) */}
            <div className="space-y-2 md:max-lg:hidden pt-0.5">
              <div className="bg-slate-800/80 p-2.5 sm:p-3 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Dual Crest Precision Embroidery</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Left chest Konark Wheel; right chest SAM Global University Torch Shield.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-2.5 sm:p-3 rounded-xl border border-slate-700/80 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Heavy-Duty Breathable Pique Fabric</h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">
                    Durable, sweat-wicking knit collar ideal for rural Shramdaan & village camps.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D Action Controls & Helper Text (Hidden on < sm mobile, shown sm+ inside Left Column) */}
            <div className="hidden sm:block space-y-2.5 sm:space-y-3 pt-0.5">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`flex items-center justify-center gap-1 xs:gap-1.5 font-bold px-1.5 xs:px-2.5 py-2 rounded-xl text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10.5px] xl:text-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap overflow-hidden ${isAutoRotating
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                    }`}
                >
                  {isAutoRotating ? <Pause className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" /> : <Play className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" />}
                  <span className="truncate">{isAutoRotating ? 'Pause' : '360° Spin'}</span>
                </button>

                <button
                  onClick={() => rotateTo(isFrontFacing ? 180 : 0)}
                  className="flex items-center justify-center gap-1 xs:gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-1.5 xs:px-2.5 py-2 rounded-xl border border-slate-700 text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10.5px] xl:text-xs transition cursor-pointer whitespace-nowrap overflow-hidden"
                >
                  <RotateCw className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate">Flip ({isFrontFacing ? 'Back' : 'Front'})</span>
                </button>

                <button
                  onClick={() => setShowHotspots(!showHotspots)}
                  className="flex items-center justify-center gap-1 xs:gap-1.5 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white px-1.5 xs:px-2.5 py-2 rounded-xl border border-slate-700 text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-[10px] lg:text-[10.5px] xl:text-xs transition cursor-pointer whitespace-nowrap overflow-hidden"
                >
                  <Eye className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" />
                  <span className="truncate">{showHotspots ? 'Hide Labels' : 'Show Labels'}</span>
                </button>
              </div>

              <p className="text-[10px] sm:text-[10.5px] text-slate-400 leading-snug">
                Click & drag with mouse or touch swipe to spin. Labels sit outside with arrows pointing directly to logos.
              </p>
            </div>
          </div>

          {/* Right Column: 3D Rotating Stage Container */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-stretch items-stretch w-full">

            {/* 3D Perspective Stage Container */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className={`relative w-full h-full min-h-[290px] sm:min-h-[320px] md:min-h-full bg-gradient-to-b from-slate-800/40 via-slate-900/50 to-slate-950/80 rounded-2xl p-2.5 sm:p-3 border border-slate-700/80 flex items-center justify-center overflow-visible touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
              style={{ perspective: 1200 }}
            >

              {/* Live Angle HUD Badge */}
              <div className="absolute top-2.5 left-2.5 z-30 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white text-[9.5px] sm:text-[10.5px] font-bold border border-slate-700/80">
                  <Compass className={`w-3 h-3 text-orange-400 ${isAutoRotating ? 'animate-spin' : ''}`} />
                  <span>{isFrontFacing ? 'Front View' : 'Back View'} ({currentDegree}°)</span>
                </span>
              </div>

              {/* Drag Gesture Prompt */}
              <div className="absolute top-2.5 right-2.5 z-30 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md text-slate-300 text-[9.5px] sm:text-[10px] font-medium border border-white/10">
                  <MoveHorizontal className="w-3 h-3 text-orange-400 animate-pulse" />
                  <span className="hidden xs:inline">Drag to rotate</span>
                </span>
              </div>

              {/* 3D ROTATING T-SHIRT CARD (Double-Sided with preserve-3d, Sized to fill stage nicely) */}
              <div
                className="relative h-[82%] max-h-[260px] sm:max-h-[290px] md:max-h-[300px] aspect-[803/1023] flex items-center justify-center transition-transform duration-75 overflow-visible"
                style={{
                  transform: `rotateY(${rotationY}deg) rotateX(${tiltX}deg)`,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >

                {/* ============================================================== */}
                {/* ===== FRONT FACE (0 deg) WITH OUTSIDE LABELS & ARROWS ===== */}
                {/* ============================================================== */}
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-visible"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg) translateZ(2px)',
                  }}
                >
                  {/* 100% Uncovered & Clean Front T-shirt */}
                  <img loading="lazy" decoding="async"
                    src="/assets/images/nss-tshirt-front-trans.webp"
                    alt="Official NSS SAM Global University T-Shirt Front"
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                  />

                  {/* Hotspots & Arrows (Hidden on < sm mobile 320px-425px, shown sm+ outside T-shirt) */}
                  {showHotspots && isFrontFacing && (
                    <div className="hidden sm:block absolute inset-0 pointer-events-none">
                      {/* SVG Leader Lines with Arrowheads */}
                      <svg
                        viewBox="0 0 803 1023"
                        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20"
                      >
                        <defs>
                          <marker id="arrow-blue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#3b82f6" />
                          </marker>
                          <marker id="arrow-orange" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#f97316" />
                          </marker>
                          <marker id="arrow-amber" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#f59e0b" />
                          </marker>
                        </defs>

                        {/* Line 1: SGU Shield */}
                        <path
                          d="M -50 250 L 150 250 L 280 298"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          markerEnd="url(#arrow-blue)"
                        />
                        <circle cx="285" cy="301" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="285" cy="301" r="12" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />

                        {/* Line 2: NSS Wheel */}
                        <path
                          d="M 850 250 L 660 250 L 557 307"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          markerEnd="url(#arrow-orange)"
                        />
                        <circle cx="552" cy="310" r="5" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="552" cy="310" r="12" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6" />

                        {/* Line 3: Polo Collar */}
                        <path
                          d="M 401 -30 L 401 138"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          markerEnd="url(#arrow-amber)"
                        />
                        <circle cx="401" cy="145" r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                      </svg>

                      {/* LABEL 1 (OUTSIDE LEFT): SGU Shield Crest */}
                      <div
                        className="absolute top-[22%] right-full mr-1.5 sm:mr-2 z-20 pointer-events-auto"
                        style={{ transform: 'translateY(-50%)' }}
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); setActivePin('sgu'); }}
                          className="bg-slate-950/95 backdrop-blur-md px-1.5 xs:px-2 py-1 rounded-xl border border-blue-500/70 text-right hover:border-blue-400 hover:scale-105 transition-all cursor-pointer block max-w-[95px] xs:max-w-[110px] sm:max-w-[125px]"
                        >
                          <div className="flex items-center justify-end gap-1">
                            <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-black text-white leading-tight">SGU Shield</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                          </div>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] text-blue-300 font-semibold block mt-0.5 leading-tight">
                            Torch of Wisdom
                          </span>
                        </button>
                      </div>

                      {/* LABEL 2 (OUTSIDE RIGHT): NSS Wheel Emblem */}
                      <div
                        className="absolute top-[22%] left-full ml-1.5 sm:ml-2 z-20 pointer-events-auto"
                        style={{ transform: 'translateY(-50%)' }}
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); setActivePin('nss'); }}
                          className="bg-slate-950/95 backdrop-blur-md px-1.5 xs:px-2 py-1 rounded-xl border border-orange-500/70 text-left hover:border-orange-400 hover:scale-105 transition-all cursor-pointer block max-w-[95px] xs:max-w-[110px] sm:max-w-[125px]"
                        >
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                            <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-black text-white leading-tight">NSS Wheel</span>
                          </div>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] text-orange-300 font-semibold block mt-0.5 leading-tight">
                            Konark Temple
                          </span>
                        </button>
                      </div>

                      {/* LABEL 3 (OUTSIDE TOP): Polo Collar */}
                      <div
                        className="absolute bottom-full mb-1 sm:mb-2 left-1/2 -translate-x-1/2 z-20 pointer-events-auto"
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); setActivePin('collar'); }}
                          className="bg-slate-950/95 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-lg border border-amber-400/70 text-center hover:border-amber-300 hover:scale-105 transition-all cursor-pointer whitespace-nowrap block"
                        >
                          <span className="text-[9px] sm:text-[10px] font-black text-white block">Polo Knit Collar</span>
                          <span className="text-[7px] sm:text-[8px] text-amber-300 font-semibold block">
                            2-Button Placket • Ribbed
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* ============================================================= */}
                {/* ===== BACK FACE (180 deg) WITH OUTSIDE LABEL & ARROW ===== */}
                {/* ============================================================= */}
                <div
                  className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-visible"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg) translateZ(2px)',
                  }}
                >
                  {/* 100% Uncovered & Clean Back T-shirt */}
                  <img loading="lazy" decoding="async"
                    src="/assets/images/nss-tshirt-back-trans.webp"
                    alt="Official NSS SAM Global University T-Shirt Back"
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                  />

                  {/* Back Callout with Arrow (Hidden on < sm mobile 320px-425px) */}
                  {showHotspots && !isFrontFacing && (
                    <div className="hidden sm:block absolute inset-0 pointer-events-none">
                      <svg
                        viewBox="0 0 803 1023"
                        className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20"
                      >
                        <path
                          d="M 850 260 L 630 260 L 420 296"
                          fill="none"
                          stroke="#f97316"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          markerEnd="url(#arrow-orange)"
                        />
                        <circle cx="410" cy="300" r="5" fill="#f97316" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="410" cy="300" r="12" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6" />
                      </svg>

                      {/* LABEL OUTSIDE RIGHT */}
                      <div
                        className="absolute top-[24%] left-full ml-1.5 sm:ml-2 z-20 pointer-events-auto"
                        style={{ transform: 'translateY(-50%)' }}
                      >
                        <button
                          onClick={(e) => { e.stopPropagation(); setActivePin('back'); }}
                          className="bg-slate-950/95 backdrop-blur-md px-1.5 xs:px-2 py-1 rounded-xl border border-orange-500/70 text-left hover:border-orange-400 hover:scale-105 transition-all cursor-pointer block max-w-[105px] sm:max-w-[125px]"
                        >
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                            <span className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-black text-white leading-tight">Back Print</span>
                          </div>
                          <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] text-orange-300 font-semibold block mt-0.5 leading-tight">
                            Bold Lettering
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom 360° Drag Helper Hint */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
                <span className="text-[9.5px] sm:text-[10px] text-slate-400 bg-slate-950/85 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-slate-700/60 flex items-center gap-1 whitespace-nowrap">
                  <Hand className="w-3 h-3 text-orange-400" />
                  <span>Drag horizontally to rotate 360°</span>
                </span>
              </div>

            </div>

          </div>

          {/* Mobile Only (< sm: 320px, 375px, 425px): Action Buttons & Helper Text BELOW 3D Image (No Labels Button) */}
          <div className="sm:hidden space-y-2.5 pt-1 w-full">
            <div className="grid grid-cols-2 gap-2 w-full">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`flex items-center justify-center gap-1.5 font-bold px-3 py-2.5 rounded-xl text-[11px] xs:text-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap overflow-hidden ${isAutoRotating
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                  : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                  }`}
              >
                {isAutoRotating ? <Pause className="w-3.5 h-3.5 shrink-0" /> : <Play className="w-3.5 h-3.5 shrink-0" />}
                <span className="truncate">{isAutoRotating ? 'Pause' : '360° Spin'}</span>
              </button>

              <button
                onClick={() => rotateTo(isFrontFacing ? 180 : 0)}
                className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2.5 rounded-xl border border-slate-700 text-[11px] xs:text-xs font-bold transition cursor-pointer whitespace-nowrap overflow-hidden"
              >
                <RotateCw className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">Flip ({isFrontFacing ? 'Back' : 'Front'})</span>
              </button>
            </div>

            <p className="text-[10px] xs:text-[10.5px] text-slate-400 leading-snug text-center">
              Touch & swipe horizontally on the uniform to rotate 360°.
            </p>
          </div>

        </div>

        {/* Bottom Row: 3 Specification Cards Spanning Full Width (ONLY on 768px tablet md:max-lg) */}
        <div className="hidden md:max-lg:grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5 w-full pt-2">
          <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-orange-500/50 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-1.5 sm:mb-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Dual Crest Precision Embroidery</h4>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-slate-400 mt-1 leading-snug">
                Left chest Konark Wheel; right chest SAM Global University Torch Shield.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold mb-1.5 sm:mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">Heavy-Duty Breathable Pique Fabric</h4>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-slate-400 mt-1 leading-snug">
                Durable, sweat-wicking knit collar ideal for rural Shramdaan & village camps.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/80 p-3 sm:p-3.5 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/50 transition-all">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-1.5 sm:mb-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white">All-Terrain Field Durability</h4>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-slate-400 mt-1 leading-snug">
                Reinforced double-stitching & UV-resistant pure NSS orange dye built for 7-day camps.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
