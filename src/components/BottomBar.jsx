import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useAnimationFrame } from 'framer-motion';
import {
  Home, Info, Award, Calendar, Tent, Droplet,
  Shirt, Users, MoreHorizontal, X, ChevronRight, Sparkles
} from 'lucide-react';
import { useScrollLock } from '../hooks/useScrollLock';

function TopCurveMovingBorder({ color = '#ff6b00', strokeWidth = 2.5, duration = 3400, lineLength = 110 }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const strokeOffset = useMotionValue(lineLength);
  const [box, setBox] = useState({ width: 0, radius: 16, border: 1 });
  const [dashArray, setDashArray] = useState(`${lineLength} 2000`);

  useEffect(() => {
    const parent = svgRef.current?.parentElement;
    if (!parent) return;

    const measure = () => {
      const style = window.getComputedStyle(parent);
      const border = parseFloat(style.borderTopWidth) || 0;
      const rawRadius = parseFloat(style.borderTopLeftRadius);
      const width = parent.offsetWidth;
      const radius = Number.isFinite(rawRadius) ? rawRadius : 16;
      setBox((prev) =>
        prev.width === width && prev.radius === radius && prev.border === border
          ? prev
          : { width, radius, border }
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(parent);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length && length > 0) {
      const lineLen = Math.min(lineLength, Math.max(45, length * 0.24));
      const totalCycle = length + lineLen;
      const progress = (time % duration) / duration;
      strokeOffset.set(lineLen - progress * totalCycle);
      const expectedDash = `${lineLen} ${totalCycle}`;
      if (dashArray !== expectedDash) {
        setDashArray(expectedDash);
      }
    }
  });

  const w = box.width;
  const r = Math.min(box.radius, w / 2);
  const halfB = box.border / 2;
  const rx = Math.max(0, r - halfB);
  const svgH = Math.ceil(r + strokeWidth + 2);
  const d =
    w > 0 && r > 0
      ? `M ${halfB} ${r} A ${rx} ${rx} 0 0 1 ${r} ${halfB} L ${w - r} ${halfB} A ${rx} ${rx} 0 0 1 ${w - halfB} ${r}`
      : '';

  return (
    <svg
      ref={svgRef}
      viewBox={w > 0 ? `0 0 ${w} ${svgH}` : undefined}
      style={
        w > 0
          ? {
              position: 'absolute',
              top: `-${box.border}px`,
              left: `-${box.border}px`,
              width: `${w}px`,
              height: `${svgH}px`,
            }
          : undefined
      }
      className="pointer-events-none overflow-visible z-20"
    >
      {d && (
        <motion.path
          ref={pathRef}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: strokeOffset,
          }}
        />
      )}
    </svg>
  );
}

export default function BottomBar({ activePage, setActivePage, onOpenJoinModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bp, setBp] = useState(() => {
    if (typeof window === 'undefined') return 'mobile';
    if (window.innerWidth >= 768) return 'md';
    if (window.innerWidth >= 640) return 'sm';
    return 'mobile';
  });

  useEffect(() => {
    const updateBp = () => {
      if (window.innerWidth >= 768) setBp('md');
      else if (window.innerWidth >= 640) setBp('sm');
      else setBp('mobile');
    };
    window.addEventListener('resize', updateBp);
    return () => window.removeEventListener('resize', updateBp);
  }, []);

  // Lock background scroll completely when the More Menu drawer is open
  useScrollLock(isMenuOpen);

  // Responsive navigation buttons:
  // - Mobile (< 640px): 4 primary tabs + More (5 items)
  // - Small tablet (640px - 767px): 6 tabs + More (7 items)
  // - Tablet 768px (768px - 1023px): All 8 core section tabs + More (9 items)
  const navButtons = [
    { id: 'home', label: 'Home', icon: Home, visibility: 'flex' },
    { id: 'about', label: 'About', icon: Info, visibility: 'flex' },
    { id: 'activities', label: 'Activities', icon: Calendar, visibility: 'hidden sm:flex' },
    { id: 'achievements', label: 'Achievements', icon: Award, visibility: 'flex' },
    { id: 'special-camp', label: 'Camp', fullLabel: 'Special Camp', icon: Tent, visibility: 'hidden md:flex' },
    { id: 'blood-donation', label: 'Blood', fullLabel: 'Blood Camp', icon: Droplet, visibility: 'hidden md:flex' },
    { id: 'orange-army', label: 'Army', fullLabel: 'Orange Army', icon: Shirt, visibility: 'hidden sm:flex' },
    { id: 'team', label: 'Team', icon: Users, visibility: 'flex' },
  ];

  // All 8 navigation sections displayed inside the More bottom sheet (100% English)
  const allSections = [
    { id: 'home', label: 'Home', subLabel: 'Overview & Highlights', icon: Home },
    { id: 'about', label: 'About', subLabel: 'Vision, Motto & History', icon: Info },
    { id: 'achievements', label: 'Achievements', subLabel: 'Awards & Honours', icon: Award },
    { id: 'team', label: 'Our Team', subLabel: 'Officers & Coordinators', icon: Users },
    { id: 'activities', label: 'Activities', subLabel: 'Events & Initiatives', icon: Calendar },
    { id: 'special-camp', label: 'Special Camp', subLabel: '7-Day Immersion Camp', icon: Tent },
    { id: 'blood-donation', label: 'Blood Camp', subLabel: 'Life Saving Donor Network', icon: Droplet },
    { id: 'orange-army', label: 'Orange Army', subLabel: 'Volunteer Cadre', icon: Shirt },
  ];

  const handleNavClick = (pageId) => {
    if (setActivePage) {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Strictly mutually-exclusive active state per breakpoint so More & hidden tabs never collide
  const visibleIds =
    bp === 'md'
      ? ['home', 'about', 'activities', 'achievements', 'special-camp', 'blood-donation', 'orange-army', 'team']
      : bp === 'sm'
      ? ['home', 'about', 'activities', 'achievements', 'orange-army', 'team']
      : ['home', 'about', 'achievements', 'team'];

  const isMoreActive = bp !== 'md' && !visibleIds.includes(activePage);
  const isMoreHighlighted = bp !== 'md' && (isMenuOpen || isMoreActive);

  return (
    <>
      {/* Fixed Responsive Bottom Bar (Curved top silhouette + top-curve-only moving border) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md rounded-t-2xl sm:rounded-t-3xl border-t border-x border-orange-200/80 py-1.5 sm:py-2 px-1 sm:px-2 select-none w-full">
        <TopCurveMovingBorder color="#ff6b00" strokeWidth={2.5} duration={3400} lineLength={110} />

        <div className="relative z-10 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 items-center w-full gap-0.5 sm:gap-1">
          
          {/* Navigation Buttons (8 Core Sections equally distributed on md 768px) */}
          {navButtons.map((item) => {
            const IconComponent = item.icon;
            const isTabVisible = visibleIds.includes(item.id);
            const isActive = !isMoreHighlighted && isTabVisible && activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative w-full flex-col items-center justify-center py-1.5 sm:py-2 px-0.5 rounded-2xl transition-colors cursor-pointer ${item.visibility} ${
                  isActive
                    ? 'text-orange-600 font-bold'
                    : 'text-slate-600 hover:text-orange-600 font-medium'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="bottomBarActiveCurve"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50 via-orange-50/90 to-amber-50/70 border border-orange-400/90 pointer-events-none"
                  >
                    <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-b-full bg-gradient-to-r from-orange-500 to-amber-500" />
                  </motion.span>
                )}
                <IconComponent
                  className={`relative z-10 w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 ${
                    isActive ? 'text-orange-600 stroke-[2.5]' : 'text-slate-500'
                  }`}
                />
                <span className="relative z-10 text-[8px] xs:text-[8.5px] sm:text-[10px] md:text-[10.5px] mt-0.5 tracking-tight whitespace-nowrap max-w-full leading-tight">
                  <span className={item.fullLabel ? 'hidden md:inline' : ''}>{item.fullLabel || item.label}</span>
                  {item.fullLabel && <span className="md:hidden">{item.label}</span>}
                </span>
              </button>
            );
          })}

          {/* More Menu Drawer Trigger (Visible only on mobile < md, completely hidden on md 768px+) */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`relative w-full flex md:hidden flex-col items-center justify-center py-1.5 sm:py-2 px-0.5 rounded-2xl transition-colors cursor-pointer ${
              isMoreHighlighted
                ? 'text-orange-600 font-bold'
                : 'text-slate-600 hover:text-orange-600 font-medium'
            }`}
            aria-label="Open More Menu"
          >
            {isMoreHighlighted && (
              <motion.span
                layoutId="bottomBarActiveCurve"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-50 via-orange-50/90 to-amber-50/70 border border-orange-400/90 pointer-events-none"
              >
                <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-b-full bg-gradient-to-r from-orange-500 to-amber-500" />
              </motion.span>
            )}
            <div className="relative z-10">
              <MoreHorizontal
                className={`w-4.5 h-4.5 sm:w-5 sm:h-5 shrink-0 ${
                  isMoreHighlighted ? 'text-orange-600 stroke-[2.5]' : 'text-slate-600'
                }`}
              />
            </div>
            <span className="relative z-10 text-[8px] xs:text-[8.5px] sm:text-[10px] mt-0.5 tracking-tight leading-tight">
              More
            </span>
          </button>

        </div>
      </div>

      {/* Slide-Up Bottom Sheet Modal for All Navigation Items */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Bottom Sheet Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              className="relative z-10 bg-white rounded-t-3xl border-t border-slate-200 max-h-[85vh] overflow-y-auto no-scrollbar flex flex-col"
            >
              {/* Sheet Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 pt-3 pb-3 border-b border-slate-100 flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-orange-300 bg-white flex items-center justify-center shrink-0">
                    <img
                      src="/assets/images/nss-sgu-logo.webp"
                      alt="NSS SGU Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Explore NSS SGU Bhopal</h3>
                    <p className="text-[11px] text-orange-600 font-semibold">All 8 Core Sections & Portals</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer transition"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of All 8 Navigation Options (100% English) */}
              <div className="p-3 xs:p-4 grid grid-cols-2 gap-2 xs:gap-2.5">
                {allSections.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-2 xs:gap-2.5 p-2 xs:p-2.5 rounded-xl xs:rounded-2xl border text-left transition-all cursor-pointer min-w-0 ${
                        isActive
                          ? 'bg-orange-50/90 border-orange-400 text-orange-900'
                          : 'bg-white border-slate-200 hover:border-orange-300 hover:bg-slate-50 text-slate-800'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 xs:w-8 xs:h-8 rounded-lg xs:rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-orange-500 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 xs:w-4.5 xs:h-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`text-[11px] xs:text-xs font-bold leading-tight ${isActive ? 'text-orange-600' : 'text-slate-900'}`}>
                          {item.label}
                        </p>
                        <p className="text-[9px] xs:text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
                          {item.subLabel}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Join NSS Action inside Sheet */}
              <div className="p-3 xs:p-4 pt-1 pb-5 xs:pb-6 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    if (onOpenJoinModal) onOpenJoinModal();
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2.5 xs:py-3 px-3 xs:px-4 rounded-xl text-[11px] xs:text-xs flex items-center justify-center gap-1.5 xs:gap-2 cursor-pointer transition active:scale-98 whitespace-nowrap"
                >
                  <Sparkles className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-amber-200 shrink-0" />
                  <span>Join Orange Army (Volunteer Enrolment)</span>
                  <ChevronRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
