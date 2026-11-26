import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight, Play, Heart, Users, Calendar, Award, Sparkles,
  CheckCircle2, Droplet, Tent, ChevronRight, ShieldCheck, MapPin,
  Leaf, HeartPulse, Quote, Film, Video, Handshake, Building2, Globe, Activity, Clock,
  Mail, Phone, X, ExternalLink, Building, Smile, Newspaper
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from '../components/common/SocialIcons';
import { activitiesList, achievementsList, teamMembers, partnerCollaborations, universityInfo, programmeOfficer } from '../data/nssData';
import TshirtViewer from '../components/TshirtViewer';
import MovingBorderStroke from '../components/common/MovingBorderStroke';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { useScrollLock } from '../hooks/useScrollLock';

export default function HomePage({ setActivePage, onOpenJoinModal, onOpenVideoModal }) {
  const [activeModalActivity, setActiveModalActivity] = useState(null);
  const [activeModalAch, setActiveModalAch] = useState(null);
  const reachRef = useRef(null);
  const isReachInView = useInView(reachRef, { amount: 0.2, once: false });

  const reachStats = [
    {
      id: 'volunteers',
      value: '1000+',
      label: 'Volunteers',
      description: 'Active Cadets',
      icon: Users,
      badgeBg: 'bg-orange-50 text-orange-600 border-orange-200/80',
      barColor: 'bg-gradient-to-r from-orange-500 to-amber-500',
      suffixColor: 'text-orange-500 font-black',
    },
    {
      id: 'children',
      value: '400+',
      label: 'Happy Children',
      description: 'Educated in Villages',
      icon: Smile,
      badgeBg: 'bg-pink-50 text-pink-600 border-pink-200/80',
      barColor: 'bg-gradient-to-r from-pink-500 to-rose-500',
      suffixColor: 'text-pink-500 font-black',
    },
    {
      id: 'news',
      value: '20+',
      label: 'News Highlights',
      description: 'Press Coverage',
      icon: Newspaper,
      badgeBg: 'bg-blue-50 text-blue-600 border-blue-200/80',
      barColor: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      suffixColor: 'text-blue-600 font-black',
    },
    {
      id: 'blood',
      value: '100+',
      label: 'Blood Units',
      description: 'Donated Annually',
      icon: Heart,
      badgeBg: 'bg-rose-50 text-rose-600 border-rose-200/80',
      barColor: 'bg-gradient-to-r from-rose-600 to-red-500',
      suffixColor: 'text-rose-600 font-black',
    },
    {
      id: 'instagram',
      value: '1000+',
      label: 'Instagram',
      description: 'Youth Community',
      icon: InstagramIcon,
      badgeBg: 'bg-purple-50 text-purple-600 border-purple-200/80',
      barColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      suffixColor: 'text-purple-500 font-black',
    },
    {
      id: 'panchayats',
      value: '10+',
      label: 'Gram Panchayats',
      description: 'Adopted & Served',
      icon: MapPin,
      badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-200/80',
      barColor: 'bg-gradient-to-r from-emerald-600 to-teal-500',
      suffixColor: 'text-emerald-600 font-black',
    },
  ];

  // Lock background scroll completely when any modal is open
  useScrollLock(Boolean(activeModalActivity || activeModalAch));

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 xl:space-y-20 pb-16 bg-[#f8fafc] overflow-hidden w-full">

      {/* 02 HERO SECTION (Main Banner) */}
      <section className="relative pt-2 xs:pt-2.5 sm:pt-3 md:pt-3.5 lg:pt-6 xl:pt-8 w-full overflow-hidden">
        <div className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-6 xl:gap-12 items-center">

            {/* Left Content Column (Rendered below image on mobile/tablet < 1024px, left on lg+) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 lg:col-span-5 space-y-2.5 xs:space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-3 xl:space-y-4 text-left"
            >
              {/* Category Pill Tag */}
              <div className="inline-flex flex-wrap items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 py-1 xs:px-3 sm:px-3.5 sm:py-1.5 rounded-full bg-blue-50/90 border border-blue-200/90 text-nss-blue-light text-[8.5px] xs:text-[10px] sm:text-xs lg:text-[10px] xl:text-xs font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-ping shrink-0"></span>
                <span>NSS SAM GLOBAL UNIVERSITY</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
                <span className="text-orange-600 font-extrabold">NOT ME, BUT YOU</span>
              </div>

              {/* Main Headline - Balanced at 1024px (23px) up to 45px for 2-line elegance */}
              <h1 className="text-[19px] xs:text-[21px] min-[425px]:text-[24px] sm:text-3xl md:text-[34px] lg:text-[23px] xl:text-[34px] 2xl:text-[44px] font-black text-nss-blue-dark tracking-tight leading-[1.22] sm:leading-[1.24] md:leading-[1.24] lg:leading-[1.24] xl:leading-[1.24]">
                Empowering Youth Through Service, <br className="hidden sm:inline" />
                <span className="text-nss-orange">Leadership & Community Action</span>
              </h1>

              {/* Subtitle */}
              <p className="text-[11.5px] xs:text-[13px] sm:text-base md:text-[15px] lg:text-xs xl:text-sm 2xl:text-base text-slate-600 font-normal leading-relaxed max-w-xl md:max-w-2xl">
                Building a better society through service, leadership and community action. Empowering students of SAM Global University to bring meaningful change across Madhya Pradesh.
              </p>

              {/* Action Buttons - 100% One Line Across 320px, 375px, 425px to 1024px+ */}
              <div className="flex flex-row items-center gap-1.5 xs:gap-2.5 sm:gap-3.5 md:gap-4 lg:gap-2 xl:gap-3 pt-0.5 sm:pt-1 w-full">
                <button
                  onClick={onOpenJoinModal}
                  className="bg-nss-orange hover:bg-nss-orange-hover text-white font-bold px-2.5 xs:px-3.5 sm:px-6 md:px-7 lg:px-4 xl:px-6 py-2 xs:py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-full transition-all flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 text-[10px] xs:text-[11.5px] sm:text-base lg:text-xs xl:text-sm 2xl:text-base active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <span>Join NSS Family</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>

                <button
                  onClick={onOpenVideoModal}
                  className="bg-white hover:bg-slate-50 text-nss-blue-dark border-2 border-slate-300 hover:border-nss-orange font-bold px-2.5 xs:px-3.5 sm:px-6 md:px-7 lg:px-3.5 xl:px-5 py-2 xs:py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-full transition-all flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 text-[10px] xs:text-[11.5px] sm:text-base lg:text-xs xl:text-sm 2xl:text-base active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-6 sm:h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] shrink-0">
                    <Play className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 fill-orange-600 ml-0.5" />
                  </div>
                  <span>Watch Documentary</span>
                </button>
              </div>

              {/* Social Proof Counter */}
              <div className="pt-2.5 sm:pt-3 flex items-center gap-2 xs:gap-3 sm:gap-4 lg:gap-2.5 xl:gap-4 border-t border-slate-200">
                <div className="flex -space-x-2">
                  <img className="inline-block h-7 w-7 xs:h-9 xs:w-9 sm:h-10 sm:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full ring-2 ring-white object-cover" src="/assets/real_nss/Ajay Machiya.webp" alt="Cadet Ajay" />
                  <img className="inline-block h-7 w-7 xs:h-9 xs:w-9 sm:h-10 sm:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full ring-2 ring-white object-cover" src="/assets/real_nss/Nisha Prabhakar.webp" alt="Cadet Nisha" />
                  <img className="inline-block h-7 w-7 xs:h-9 xs:w-9 sm:h-10 sm:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full ring-2 ring-white object-cover" src="/assets/real_nss/Rajat sahu.webp" alt="Cadet Rajat" />
                  <div className="h-7 w-7 xs:h-9 xs:w-9 sm:h-10 sm:w-10 lg:h-8 lg:w-8 xl:h-10 xl:w-10 rounded-full bg-orange-500 text-white ring-2 ring-white flex items-center justify-center text-[10px] xs:text-xs font-bold">
                    <AnimatedCounter value="1000+" />
                  </div>
                </div>
                <div>
                  <p className="text-[11px] xs:text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-slate-800"><AnimatedCounter value="1000+" /> Active Student Cadets</p>
                  <p className="text-[9.5px] xs:text-[11px] sm:text-xs lg:text-[10px] xl:text-xs text-slate-500">Serving <AnimatedCounter value="10+" /> Adopted Gram Panchayats across Bhopal & Raisen</p>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Column (Rendered at top on mobile/tablet < 1024px, right on lg+) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 lg:col-span-7 relative w-full"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 bg-white group w-full">
                <img
                  src="/assets/images/nss-hero-banner.webp"
                  alt="SAM Global University NSS Volunteers Planting Trees"
                  className="w-full h-auto aspect-[16/9] block object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 03 STATS STRIP (Exact Same As About Page Reach & Community Impact Section) */}
      <section ref={reachRef} className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 w-full">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-6 md:p-5 lg:p-4 xl:p-8 2xl:p-10 border border-slate-200 text-center">

          {/* Continuous Moving Solid Orange Border Line */}
          <MovingBorderStroke color="#ff6b00" rx={24} strokeWidth={2.5} duration={7500} lineLength={130} />

          <div className="max-w-2xl mx-auto mb-3.5 sm:mb-5 md:mb-5 lg:mb-5 xl:mb-8 relative z-10">
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5">
              COMMUNITY IMPACT
            </span>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-[#0c1f44] tracking-tight">
              Our Reach & Student Numbers
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real ground impact created by SAM Global University NSS volunteers across Bhopal & Raisen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-2 xs:gap-2.5 sm:gap-3 md:gap-2 lg:gap-2 xl:gap-3.5 2xl:gap-5 relative z-10">
            {reachStats.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isReachInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 10 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group relative bg-slate-50/70 hover:bg-white rounded-xl sm:rounded-2xl p-2 xs:p-2.5 sm:p-3.5 md:p-2.5 lg:p-2 xl:p-4 2xl:p-5 border border-slate-200/80 hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[145px] xs:min-h-[155px] sm:min-h-[165px] md:min-h-[150px] lg:min-h-[155px] xl:min-h-[195px]"
                >
                  {/* Icon Badge */}
                  <div className={`w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-10 xl:h-10 rounded-xl flex items-center justify-center border mb-1 xs:mb-1.5 sm:mb-2 md:mb-1.5 lg:mb-1 xl:mb-2.5 transition-transform duration-300 group-hover:scale-110 ${stat.badgeBg}`}>
                    <Icon className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-3.5 lg:h-3.5 xl:w-5 xl:h-5" />
                  </div>

                  {/* Animated Counter with Color Suffix */}
                  <div className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-3xl 2xl:text-[36px] font-black text-slate-900 tracking-tight leading-none group-hover:text-nss-blue-dark transition-colors">
                    <AnimatedCounter
                      value={stat.value}
                      duration={1200 + idx * 80}
                      suffixClassName={stat.suffixColor}
                      inView={isReachInView}
                    />
                  </div>

                  {/* Animated Accent Bar */}
                  <div className="w-8 xs:w-10 sm:w-12 md:w-8 lg:w-7 xl:w-11 h-1 bg-slate-200/80 rounded-full mt-1.5 md:mt-1 xl:mt-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isReachInView ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                      className={`h-full ${stat.barColor}`}
                    />
                  </div>

                  {/* Labels */}
                  <div className="mt-1.5 md:mt-1 xl:mt-2 space-y-0.5 w-full">
                    <div className="text-[11px] xs:text-xs sm:text-xs md:text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm font-extrabold text-slate-800 tracking-tight leading-snug truncate whitespace-nowrap block" title={stat.label}>
                      {stat.label}
                    </div>
                    <div className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] md:text-[9.5px] lg:text-[8.5px] xl:text-[10px] 2xl:text-[11px] text-slate-500 font-medium leading-tight block truncate whitespace-nowrap sm:whitespace-normal">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 04 ABOUT NSS & VIDEO PREVIEW (Elevated Unique & Attractive Section) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-6 md:p-7 lg:p-7 xl:p-12 border border-slate-200 overflow-hidden">
          {/* Subtle Background Watermark: NSS Konark Sun Wheel Motif (Low Opacity Heritage Watermark) */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 sm:w-96 sm:h-96 opacity-[0.035] pointer-events-none select-none text-[#0c1f44]">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <circle cx="50" cy="50" r="46" strokeWidth="2" />
              <circle cx="50" cy="50" r="38" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="14" strokeWidth="2" />
              <circle cx="50" cy="50" r="6" fill="currentColor" />
              {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
                <line
                  key={deg}
                  x1="50"
                  y1="50"
                  x2={50 + 46 * Math.cos((deg * Math.PI) / 180)}
                  y2={50 + 46 * Math.sin((deg * Math.PI) / 180)}
                  strokeWidth="1.2"
                />
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-6 xl:gap-12 items-center relative z-10">

            {/* Left Column: Mission, Motto & Core Pillars */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 md:space-y-4 lg:space-y-3 xl:space-y-5 text-left">
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-2 xs:px-3 sm:px-3.5 py-1 xs:py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-[8px] xs:text-[9.5px] sm:text-xs font-black tracking-wider uppercase whitespace-nowrap max-w-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 animate-pulse shrink-0"></span>
                <span>NSS MOTTO & EMBLEM</span>
                <span className="w-1 h-1 rounded-full bg-orange-300 shrink-0"></span>
                <span className="text-slate-600 font-semibold">SAM GLOBAL UNIVERSITY</span>
              </div>

              {/* Main Heading & Hindi Calligraphy Motto */}
              <div className="space-y-2 xs:space-y-2.5">
                <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-[34px] lg:text-3xl xl:text-[40px] 2xl:text-[42px] font-black text-[#0c1f44] tracking-tight leading-[1.18]">
                  Not Me, <span className="text-orange-600">But You</span>
                </h2>

                <div className="inline-flex items-center gap-1.5 xs:gap-2.5 px-2.5 xs:px-3.5 py-1.5 xs:py-2 rounded-xl bg-gradient-to-r from-orange-50 via-amber-50/60 to-transparent border-l-4 border-l-orange-500 border-y border-r border-orange-200/80 max-w-full">
                  <Quote className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-orange-500 shrink-0 rotate-180" />
                  <span className="text-orange-700 font-bold text-xs xs:text-sm sm:text-base md:text-base lg:text-sm xl:text-base tracking-wide">
                    मैं नहीं आप — स्वयं से पहले आप
                  </span>
                </div>
              </div>

              {/* Descriptive Overview */}
              <p className="text-xs sm:text-sm md:text-[13.5px] lg:text-xs xl:text-sm text-slate-600 leading-relaxed font-normal">
                The National Service Scheme (NSS) at <strong className="text-slate-800 font-bold">SAM Global University</strong> is an active youth development wing under the <span className="text-[#0c1f44] font-semibold">Ministry of Youth Affairs and Sports, Government of India</span>. Guided by Programme Officer <strong className="text-slate-800 font-bold">Prof. Ruchi Upadhyay</strong>, our cadets lead environmental preservation, 24x7 emergency blood aid, and rural literacy across Madhya Pradesh.
              </p>

              {/* Mobile Only (< sm: 320px, 375px, 425px): Video Documentary Card right below Heading & Para */}
              <div className="sm:hidden relative pt-6 pb-1">
                {/* Floating Stamp: Not Me But You (Positioned cleanly above frame, zero overlap with 4K badge) */}
                <div className="absolute top-0 right-1 font-script text-sm xs:text-base font-black text-[#0c1f44] rotate-[-3deg] pointer-events-none select-none z-20 flex items-center">
                  <span className="bg-amber-100/95 text-[#0c1f44] px-2 py-0.5 rounded-lg border border-amber-300/80">
                    Not Me But You
                  </span>
                </div>

                <div className="p-2 bg-gradient-to-b from-slate-100 to-slate-200/60 rounded-2xl border border-slate-200 w-full">
                  <div
                    onClick={onOpenVideoModal}
                    className="relative w-full rounded-xl overflow-hidden cursor-pointer group aspect-[4/3] bg-slate-900 border border-slate-300"
                  >
                    <img loading="lazy" decoding="async"
                      src="/assets/real_nss/heroimg3.webp"
                      alt="NSS Documentary Video Preview"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-950"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 flex flex-col justify-between p-2 xs:p-3">
                      <div className="flex items-center justify-between gap-1 pt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/90 text-white text-[8.5px] xs:text-[9.5px] font-bold tracking-wider uppercase border border-red-400 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                          <span>LOOKBACK FILM</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[8.5px] xs:text-[9.5px] font-medium border border-white/20 flex items-center gap-1 whitespace-nowrap">
                          <Film className="w-2.5 h-2.5 text-orange-400" /> 4K Ultra HD
                        </span>
                      </div>

                      <div className="self-center flex flex-col items-center gap-1">
                        <div className="relative flex items-center justify-center">
                          <div className="absolute w-12 h-12 xs:w-14 xs:h-14 rounded-full bg-orange-500/30 animate-ping pointer-events-none" />
                          <div className="w-11 h-11 xs:w-12 xs:h-12 rounded-full bg-white text-orange-600 flex items-center justify-center border-4 border-orange-500/20">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                        <span className="text-[9.5px] xs:text-[10.5px] font-bold text-white bg-black/50 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                          Click to Watch Video
                        </span>
                      </div>

                      <div className="bg-white/95 backdrop-blur-md px-2 xs:px-2.5 py-1.5 xs:py-2 rounded-lg text-xs font-semibold text-slate-800 flex justify-between items-center gap-1.5 border border-slate-200">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                            <Sparkles className="w-3 h-3" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[9px] xs:text-[9.5px] min-[425px]:text-[10.5px] font-bold text-slate-900 truncate">Official Lookback Documentary</p>
                            <p className="text-[8px] xs:text-[8.5px] min-[425px]:text-[9.5px] text-slate-500 truncate">SAM Global University • MP4 Video</p>
                          </div>
                        </div>
                        <span className="text-[8.5px] xs:text-[9px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-1.5 py-1 rounded-md shrink-0 flex items-center gap-1 whitespace-nowrap">
                          <Play className="w-2.5 h-2.5 fill-orange-600" /> Play Film
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Under-Video Feature Strip - Zero truncation across 320px, 375px, 425px */}
                  <div className="flex flex-nowrap items-center justify-center gap-1 xs:gap-1.5 mt-2 text-center w-full max-w-full overflow-hidden">
                    <div className="py-1 px-1.5 xs:px-1.5 min-[425px]:px-2.5 rounded-lg bg-white border border-slate-200 text-[8px] xs:text-[8.5px] min-[425px]:text-[9.5px] font-bold text-slate-700 flex items-center justify-center gap-1 min-w-0">
                      <Video className="w-2.5 h-2.5 min-[425px]:w-3 min-[425px]:h-3 text-orange-600 shrink-0" />
                      <span className="truncate">Camp Footage</span>
                    </div>
                    <div className="py-1 px-1.5 xs:px-1.5 min-[425px]:px-2.5 rounded-lg bg-white border border-slate-200 text-[8px] xs:text-[8.5px] min-[425px]:text-[9.5px] font-bold text-slate-700 flex items-center justify-center gap-1 min-w-0">
                      <Award className="w-2.5 h-2.5 min-[425px]:w-3 min-[425px]:h-3 text-orange-600 shrink-0" />
                      <span className="truncate">Speeches</span>
                    </div>
                    <div className="py-1 px-1.5 xs:px-1.5 min-[425px]:px-2.5 rounded-lg bg-white border border-slate-200 text-[8px] xs:text-[8.5px] min-[425px]:text-[9.5px] font-bold text-slate-700 flex items-center justify-center gap-1 min-w-0">
                      <Users className="w-2.5 h-2.5 min-[425px]:w-3 min-[425px]:h-3 text-orange-600 shrink-0" />
                      <span className="truncate">1000+ Cadets</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Core Impact Pillar Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3 lg:gap-2 xl:gap-3 pt-1">
                {/* Pillar 1 */}
                <div className="p-3 xs:p-3.5 sm:p-3 md:p-3.5 lg:p-2.5 xl:p-3.5 bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-1.5 xs:mb-2 group-hover:scale-110 transition-transform">
                      <Leaf className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    </div>
                    <h4 className="text-xs sm:text-[11.5px] md:text-xs lg:text-[11px] xl:text-xs font-bold text-slate-900 truncate">Eco Drives</h4>
                    <p className="text-[10px] xs:text-[11px] sm:text-[10.5px] md:text-[11px] lg:text-[9.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">Clean campus drives, massive plantations & eco action.</p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-3 xs:p-3.5 sm:p-3 md:p-3.5 lg:p-2.5 xl:p-3.5 bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-rose-300 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-rose-100/80 text-rose-600 flex items-center justify-center mb-1.5 xs:mb-2 group-hover:scale-110 transition-transform">
                      <HeartPulse className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    </div>
                    <h4 className="text-xs sm:text-[11.5px] md:text-xs lg:text-[11px] xl:text-xs font-bold text-slate-900 truncate">24×7 Blood Aid</h4>
                    <p className="text-[10px] xs:text-[11px] sm:text-[10.5px] md:text-[11px] lg:text-[9.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">100+ blood units collected with emergency aid response.</p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-3 xs:p-3.5 sm:p-3 md:p-3.5 lg:p-2.5 xl:p-3.5 bg-slate-50/80 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-lg bg-blue-100/80 text-[#0c1f44] flex items-center justify-center mb-1.5 xs:mb-2 group-hover:scale-110 transition-transform">
                      <Tent className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                    </div>
                    <h4 className="text-xs sm:text-[11.5px] md:text-xs lg:text-[11px] xl:text-xs font-bold text-slate-900 truncate">Village Adoption</h4>
                    <p className="text-[10px] xs:text-[11px] sm:text-[10.5px] md:text-[11px] lg:text-[9.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug line-clamp-2 sm:line-clamp-none">7-Day village camps empowering adopted communities.</p>
                  </div>
                </div>
              </div>

              {/* Action Button & Verification Pill */}
              <div className="pt-2 flex flex-nowrap sm:flex-wrap items-center gap-1.5 xs:gap-1.5 sm:gap-3.5 w-full max-w-full overflow-hidden sm:overflow-visible">
                <button
                  onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 bg-[#0c1f44] hover:bg-orange-600 text-white px-2.5 xs:px-3 min-[425px]:px-3.5 sm:px-6 lg:px-4 xl:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-2.5 lg:py-2 xl:py-2.5 rounded-full text-[9.5px] xs:text-[10px] min-[425px]:text-[11px] sm:text-sm lg:text-xs xl:text-sm font-bold transition-all duration-300 active:scale-95 whitespace-nowrap cursor-pointer group shrink-0 min-w-0"
                >
                  <span className="truncate">Our Story & Vision</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <div className="inline-flex items-center gap-1 xs:gap-1 px-2 xs:px-2 min-[425px]:px-2.5 sm:px-3 py-1.5 xs:py-2 rounded-full bg-slate-100/80 border border-slate-200 text-[8.5px] xs:text-[9px] min-[425px]:text-[10px] sm:text-[11px] font-semibold text-slate-600 min-w-0">
                  <ShieldCheck className="w-3 h-3 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Govt. of India Recognized Unit</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Video Documentary Card (Hidden on < sm mobile, shown sm+ unchanged) */}
            <div className="hidden sm:block lg:col-span-6 relative">
              {/* Floating Stamp: Not Me But You */}
              <div className="absolute -top-4 right-0 xs:-top-5 xs:right-1 sm:-top-7 sm:right-2 md:-top-7 md:right-3 font-script text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl font-black text-[#0c1f44] rotate-[-5deg] pointer-events-none select-none z-20 flex items-center gap-1">
                <span className="bg-amber-100/95 text-[#0c1f44] px-2 xs:px-3.5 py-0.5 xs:py-1 rounded-xl border border-amber-300/80">
                  Not Me But You
                </span>
              </div>

              {/* Video Frame Container */}
              <div className="p-2 sm:p-2.5 bg-gradient-to-b from-slate-100 to-slate-200/60 rounded-2xl sm:rounded-3xl border border-slate-200">
                <div
                  onClick={onOpenVideoModal}
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group min-h-[215px] xs:min-h-[235px] sm:min-h-0 aspect-[4/3] sm:aspect-video lg:aspect-[16/10.5] xl:aspect-[16/10] bg-slate-900 border border-slate-300"
                >
                  {/* Background Thumbnail Image */}
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/heroimg3.webp"
                    alt="NSS Documentary Video Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-slate-950"
                  />

                  {/* Dark overlay with soft gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 group-hover:via-black/15 transition-colors flex flex-col justify-between p-2 xs:p-3 sm:p-4">

                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-1">
                      <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full bg-red-600/90 text-white text-[8.5px] xs:text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-red-400 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        <span>LOOKBACK FILM</span>
                      </span>
                      <span className="px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[8.5px] xs:text-[10px] sm:text-[11px] font-medium border border-white/20 flex items-center gap-1 whitespace-nowrap">
                        <Film className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-orange-400" /> 4K Ultra HD
                      </span>
                    </div>

                    {/* Center Magnetic Play Button */}
                    <div className="self-center flex flex-col items-center gap-1 xs:gap-1.5 sm:gap-2">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full bg-orange-500/30 animate-ping pointer-events-none" />
                        <div className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 lg:w-14 lg:h-14 xl:w-18 xl:h-18 rounded-full bg-white text-orange-600 flex items-center justify-center border-4 border-orange-500/20 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <Play className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 fill-current ml-0.5 xs:ml-1" />
                        </div>
                      </div>
                      <span className="text-[9.5px] xs:text-[11px] sm:text-xs font-bold text-white bg-black/50 px-2.5 xs:px-3 py-0.5 rounded-full backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        Click to Watch Video
                      </span>
                    </div>

                    {/* Bottom Documentary Overlay Bar */}
                    <div className="bg-white/95 backdrop-blur-md px-2 xs:px-3 sm:px-3.5 py-1.5 xs:py-2 sm:py-2.5 rounded-lg xs:rounded-xl text-xs font-semibold text-slate-800 flex justify-between items-center gap-1.5 border border-slate-200">
                      <div className="flex items-center gap-1.5 xs:gap-2 min-w-0">
                        <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                          <Sparkles className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-slate-900 truncate">Official Lookback Documentary</p>
                          <p className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] text-slate-500 truncate">SAM Global University • MP4 Video</p>
                        </div>
                      </div>
                      <span className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-1.5 xs:px-2.5 py-1 rounded-md xs:rounded-lg shrink-0 flex items-center gap-1 whitespace-nowrap">
                        <Play className="w-2.5 h-2.5 xs:w-3 xs:h-3 fill-orange-600" /> Play Film
                      </span>
                    </div>

                  </div>
                </div>

                {/* Under-Video Feature Strip */}
                <div className="flex flex-wrap sm:grid sm:grid-cols-3 items-center justify-center gap-1.5 xs:gap-2 mt-2 px-0.5 xs:px-1 text-center">
                  <div className="py-1.5 px-2.5 sm:px-2 rounded-xl bg-white border border-slate-200 text-[9.5px] xs:text-[10.5px] md:text-xs font-bold text-slate-700 flex items-center justify-center gap-1 xs:gap-1.5 whitespace-nowrap">
                    <Video className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-600 shrink-0" />
                    <span>Camp Footage</span>
                  </div>
                  <div className="py-1.5 px-2.5 sm:px-2 rounded-xl bg-white border border-slate-200 text-[9.5px] xs:text-[10.5px] md:text-xs font-bold text-slate-700 flex items-center justify-center gap-1 xs:gap-1.5 whitespace-nowrap">
                    <Award className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-600 shrink-0" />
                    <span>Speeches</span>
                  </div>
                  <div className="py-1.5 px-2.5 sm:px-2 rounded-xl bg-white border border-slate-200 text-[9.5px] xs:text-[10.5px] md:text-xs font-bold text-slate-700 flex items-center justify-center gap-1 xs:gap-1.5 whitespace-nowrap">
                    <Users className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-600 shrink-0" />
                    <span>1000+ Cadets</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 05 PARTNER COLLABORATIONS (Continuous Infinite Logo Marquee) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-6 sm:p-7 md:p-8 lg:p-7 xl:p-10 border border-slate-200 text-center relative overflow-hidden">

          {/* Simple Clean Header */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-6 lg:mb-6 xl:mb-8">
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 xs:mb-2">
              INSTITUTIONAL TIE-UPS
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-[32px] font-extrabold text-[#0c1f44] tracking-tight">
              Our Healthcare & Community <span className="text-orange-600">Collaborations</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-[13.5px] lg:text-xs xl:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              Partnering with premier healthcare institutes and government youth organizations.
            </p>
          </div>

          {/* Marquee Strip with Left & Right Gradient Fade Masks */}
          <div className="relative w-full overflow-hidden py-1 sm:py-2">
            {/* Left Fade Mask */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 xs:w-16 sm:w-24 md:w-28 bg-gradient-to-r from-white to-transparent z-10" />
            {/* Right Fade Mask */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 xs:w-16 sm:w-24 md:w-28 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Infinite Marquee Track (Pauses on Hover for Easy Click) */}
            <div className="animate-marquee flex items-center gap-3.5 xs:gap-5 sm:gap-6 lg:gap-4 xl:gap-6">
              {[...partnerCollaborations, ...partnerCollaborations].map((p, idx) => (
                <a
                  key={idx}
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  title={`${p.name} — Click to visit official portal`}
                  className="px-4 xs:px-6 py-2.5 xs:py-4 bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-orange-400 transition-all flex items-center justify-center shrink-0 min-w-[130px] xs:min-w-[160px] sm:min-w-[180px] md:min-w-[185px] lg:min-w-[160px] xl:min-w-[190px] h-20 xs:h-24 md:h-22 lg:h-20 xl:h-24 group cursor-pointer"
                >
                  <img loading="lazy" decoding="async"
                    src={p.logo}
                    alt={p.name}
                    className="max-h-10 xs:max-h-12 md:max-h-11 max-w-[110px] xs:max-w-[130px] sm:max-w-[145px] md:max-w-[145px] lg:max-w-[130px] xl:max-w-[150px] object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 06 OUR ACTIVITIES SECTION */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-7 md:mb-7 lg:mb-6 xl:mb-8 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block">
              COMMUNITY IMPACT DRIVES
            </span>
            <h2 className="text-[21px] xs:text-[24px] min-[425px]:text-[27px] sm:text-3xl md:text-[34px] lg:text-3xl xl:text-4xl font-extrabold text-[#0c1f44] tracking-tight mt-1.5 sm:mt-2">
              Creating Impact <span className="text-orange-600">Together</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-[13.5px] lg:text-xs xl:text-sm text-slate-500 mt-1 max-w-xl">
              From awareness drives to on-ground village service, our volunteers work across Madhya Pradesh for a better tomorrow.
            </p>
          </div>
          <button
            onClick={() => { setActivePage('activities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hidden sm:inline-flex self-start sm:self-auto items-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>See All Activities</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 xs:gap-4 sm:gap-5 md:gap-5 lg:gap-3.5 xl:gap-6">
          {activitiesList.slice(0, 4).map((activity) => (
            <div
              key={activity.id}
              onClick={() => setActiveModalActivity(activity)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-colors group cursor-pointer flex flex-col justify-between"
            >
              <div className="relative sm:aspect-[4/3.2] md:aspect-[4/3.2] lg:aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                <img loading="lazy" decoding="async"
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-auto sm:h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-500 block"
                />
                <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-[10px] xs:text-[11px] font-bold text-slate-800 px-2.5 py-1 rounded-full border border-slate-200">
                  {activity.category}
                </span>
              </div>
              <div className="p-3 xs:p-3.5 sm:p-4 md:p-4.5 lg:p-3 xl:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm xs:text-base md:text-base lg:text-[13px] xl:text-base font-bold text-slate-900 group-hover:text-orange-600 transition truncate whitespace-nowrap" title={activity.title}>
                    {activity.title}
                  </h3>
                  <p className="text-xs md:text-xs lg:text-[11px] xl:text-xs text-slate-500 mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
                <div className="mt-3 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-[11px] xs:text-xs md:text-xs lg:text-[10.5px] xl:text-xs truncate">
                    <Calendar className="w-3.5 h-3.5 text-orange-500 shrink-0" /> {activity.date}
                  </span>
                  <span className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center text-xs shrink-0 ml-1">
                    Learn ›
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center sm:hidden">
          <button
            onClick={() => { setActivePage('activities'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-5 py-2.5 rounded-full transition whitespace-nowrap cursor-pointer"
          >
            <span>See All Activities</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 07 ACHIEVEMENTS SECTION */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-7 md:mb-7 lg:mb-6 xl:mb-8 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 xs:mb-2">
              HALL OF FAME
            </span>
            <h2 className="text-[21px] xs:text-[24px] min-[425px]:text-[27px] sm:text-3xl md:text-[34px] lg:text-3xl xl:text-4xl font-extrabold text-[#0c1f44] tracking-tight mt-1.5 sm:mt-2">
              Recognizing Our <span className="text-orange-600">Journey</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-[13.5px] lg:text-xs xl:text-sm text-slate-500 mt-1 max-w-xl">
              State-level accolades, national leadership camps, and prestigious honors won by SAM Global University cadets.
            </p>
          </div>
          <button
            onClick={() => { setActivePage('achievements'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hidden sm:inline-flex self-start sm:self-auto items-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>View All Awards</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hall of Fame 4 Fixed Cards: Prof. Ruchi Upadhyay, Nilesh Thakur, Chitranjan Singh, Ramdinesh Kumar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 xs:gap-4 sm:gap-5 md:gap-5 lg:gap-3.5 xl:gap-6">
          {['ach-1', 'ach-10', 'ach-8', 'ach-9']
            .map(id => achievementsList.find(ach => ach.id === id))
            .filter(Boolean)
            .map((ach) => (
              <div
                key={ach.id}
                onClick={() => setActiveModalAch(ach)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-colors flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative sm:aspect-[4/3.2] md:aspect-[4/3.2] lg:aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img loading="lazy" decoding="async"
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-auto sm:h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-500 block"
                    />
                    <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-[10px] xs:text-[11px] font-bold text-slate-800 px-2.5 py-1 rounded-full border border-slate-200">
                      {ach.badge}
                    </span>
                    <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 font-bold text-[10px] xs:text-xs text-nss-blue bg-blue-50/95 backdrop-blur-sm px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-blue-200">
                      {ach.year}
                    </span>
                  </div>

                  <div className="p-3 xs:p-3.5 sm:p-4 md:p-4.5 lg:p-3 xl:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] xs:text-[9.5px] md:text-[10px] lg:text-[8px] xl:text-[9.5px] uppercase font-bold tracking-wider text-slate-400 block mb-1 truncate whitespace-nowrap" title={ach.category}>
                        {ach.category}
                      </span>
                      <h3 className="text-sm md:text-base lg:text-[12px] xl:text-sm 2xl:text-base font-bold text-slate-900 group-hover:text-orange-600 transition truncate whitespace-nowrap" title={ach.title}>
                        {ach.title}
                      </h3>
                      <p className="text-xs md:text-xs lg:text-[10.5px] xl:text-xs text-slate-500 mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 xs:p-3.5 sm:p-4 md:p-4.5 lg:p-3 xl:p-5 pt-0">
                  <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 gap-1">
                    <span className="truncate whitespace-nowrap text-[11px] xs:text-xs md:text-xs lg:text-[9.5px] xl:text-xs max-w-[180px] xs:max-w-[200px] sm:max-w-[210px] md:max-w-[220px] lg:max-w-[105px] xl:max-w-[160px]" title={ach.issuedBy}>{ach.issuedBy}</span>
                    <span className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center text-xs shrink-0 ml-1 whitespace-nowrap">
                      Details ›
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-4 flex justify-center sm:hidden">
          <button
            onClick={() => { setActivePage('achievements'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-5 py-2.5 rounded-full transition whitespace-nowrap cursor-pointer"
          >
            <span>View All Awards</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 08 BLOOD DONATION SECTION (Elevated Unique & Attractive Design with Moving Red Border Line) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="relative bg-gradient-to-br from-rose-50/80 via-white to-orange-50/50 rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-6 lg:p-5 xl:p-7 border border-red-200/90">

          {/* Continuous Moving Solid Red Border Line Tracker (Matches Stats Strip Style) */}
          <MovingBorderStroke color="#dc2626" rx={24} strokeWidth={2.5} duration={8500} lineLength={140} />

          {/* Default Layout: Desktop (lg+) & Mobile (<md) */}
          <div className="md:max-lg:hidden grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-5 lg:gap-5 xl:gap-8 items-center relative z-10">

            {/* Left Column: Compact Square Image Frame (Hidden on < sm mobile, shown sm+ unchanged) */}
            <div className="hidden sm:flex order-2 md:order-1 md:col-span-5 lg:col-span-4 justify-center">
              <div className="relative w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[300px] lg:max-w-[280px] xl:max-w-[320px] aspect-square rounded-2xl overflow-hidden border-2 border-red-200 bg-white group">
                <img loading="lazy" decoding="async"
                  src="/assets/real_nss/blood donation activity.webp"
                  alt="Blood Donation Mega Camp SAM Global University"
                  className="w-full h-full object-cover transition-transform duration-500"
                />

                {/* Top Live Status Chip */}
                <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    24×7 Active Helpline
                  </span>
                </div>

                {/* Bottom Floating Info Chip */}
                <div className="absolute bottom-2 left-2 right-2 xs:bottom-2.5 xs:left-2.5 xs:right-2.5 z-10 pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-md px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-xl border border-red-200/90 flex items-center justify-between gap-1 shadow-none">
                    <span className="flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-xs lg:text-[8.5px] xl:text-xs font-black text-red-600 whitespace-nowrap">
                      <Droplet className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-red-600 shrink-0" />
                      <span><AnimatedCounter value="100+" /> Units Donated</span>
                    </span>
                    <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] xl:text-[8.5px] font-extrabold text-slate-700 uppercase tracking-wider bg-red-50 border border-red-200 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
                      Annual Drives
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Mission & Interactive Features */}
            <div className="order-1 md:order-2 md:col-span-7 lg:col-span-8 space-y-2.5 sm:space-y-3.5 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 rounded-full bg-red-100/80 border border-red-300 text-red-700 text-[9.5px] xs:text-[10px] sm:text-[11px] font-black tracking-wider uppercase">
                <Heart className="w-3 h-3 fill-red-600 text-red-600 animate-pulse" />
                <span>24X7 EMERGENCY BLOOD REGISTRY</span>
              </div>

              {/* Heading */}
              <div className="space-y-0.5">
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-2xl xl:text-[30px] 2xl:text-[32px] font-black text-slate-900 tracking-tight leading-tight">
                  Donate Blood, <span className="text-red-600">Save Lives</span>
                </h2>
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-600 leading-relaxed font-normal pt-0.5">
                  Every second matters. NSS SAM Global University maintains a round-the-clock emergency donor network bridging enthusiastic student donors with premier hospitals across Madhya Pradesh.
                </p>
              </div>

              {/* Mobile Only (< sm: 320px, 375px, 425px): Blood Donation Photo right below Heading & Para */}
              <div className="sm:hidden flex justify-center py-1">
                <div className="relative w-full max-w-[230px] xs:max-w-[260px] aspect-square rounded-2xl overflow-hidden border-2 border-red-200 bg-white group">
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/blood donation activity.webp"
                    alt="Blood Donation Mega Camp SAM Global University"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600 text-white text-[8.5px] xs:text-[9.5px] font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      24×7 Active Helpline
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-2 py-1 rounded-xl border border-red-200/90 flex items-center justify-between gap-1 shadow-none">
                      <span className="flex items-center gap-1 text-[9px] xs:text-[10px] font-black text-red-600 whitespace-nowrap">
                        <Droplet className="w-3 h-3 fill-red-600 shrink-0" />
                        <span><AnimatedCounter value="100+" /> Units Donated</span>
                      </span>
                      <span className="text-[7px] xs:text-[7.5px] font-extrabold text-slate-700 uppercase tracking-wider bg-red-50 border border-red-200 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
                        Annual Drives
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Quick Pillar Cards (Inside Right Column on Desktop & Mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-2.5 lg:gap-2 xl:gap-2.5 pt-0.5">
                <div className="p-2.5 sm:p-3 lg:p-2 xl:p-2.5 bg-white rounded-xl border border-red-100/90 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Hospital Alliances</h4>
                  <p className="text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">AIIMS Bhopal, BMHRC & Red Cross Blood Bank.</p>
                </div>

                <div className="p-2.5 sm:p-3 lg:p-2 xl:p-2.5 bg-white rounded-xl border border-red-100/90 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Rapid Response</h4>
                  <p className="text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">Instant matching for emergency & rare blood groups.</p>
                </div>

                <div className="p-2.5 sm:p-3 lg:p-2 xl:p-2.5 bg-white rounded-xl border border-red-100/90 flex flex-col justify-between">
                  <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">Certified Drives</h4>
                  <p className="text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">100% safe, medical-grade hygienic donation camps.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row items-center gap-1.5 xs:gap-3 md:gap-3 lg:gap-2 xl:gap-3 pt-1 w-full">
                <button
                  onClick={() => { setActivePage('blood-donation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex-1 xs:flex-initial bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 xs:px-5 sm:px-6 md:px-6 lg:px-4 xl:px-6 py-2 xs:py-2.5 sm:py-2.5 md:py-2.5 lg:py-2 xl:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm lg:text-xs xl:text-sm transition-all duration-300 flex items-center justify-center gap-1 xs:gap-1.5 group active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  <span>Search Donors</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
                <button
                  onClick={onOpenJoinModal}
                  className="flex-1 xs:flex-initial bg-white border-2 border-red-300 text-red-700 hover:bg-red-50 font-bold px-2.5 xs:px-4 sm:px-5 md:px-5 lg:px-3.5 xl:px-5 py-2 xs:py-2.5 sm:py-2.5 md:py-2.5 lg:py-2 xl:py-2.5 rounded-full text-[11px] xs:text-xs sm:text-sm lg:text-xs xl:text-sm transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  Pledge Donor
                </button>
              </div>
            </div>

          </div>

          {/* 768px Tablet Viewport Only (md:max-lg) */}
          <div className="hidden md:max-lg:block relative z-10 space-y-4">
            {/* Top Row: Left Image Frame & Right Content with Buttons */}
            <div className="grid grid-cols-12 gap-5 items-start">
              {/* Left Column: Image aligned to top */}
              <div className="col-span-5 flex justify-start items-start">
                <div className="relative w-full max-w-[270px] aspect-square rounded-2xl overflow-hidden border-2 border-red-200 bg-white group">
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/blood donation activity.webp"
                    alt="Blood Donation Mega Camp SAM Global University"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                      24×7 Active Helpline
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 pointer-events-none">
                    <div className="bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-red-200/90 flex items-center justify-between gap-1 shadow-none">
                      <span className="flex items-center gap-1 text-[10px] font-black text-red-600 whitespace-nowrap">
                        <Droplet className="w-3.5 h-3.5 fill-red-600 shrink-0" />
                        <span><AnimatedCounter value="100+" /> Units Donated</span>
                      </span>
                      <span className="text-[7.5px] font-extrabold text-slate-700 uppercase tracking-wider bg-red-50 border border-red-200 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
                        Annual Drives
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Mission Header, Paragraph & Action Buttons */}
              <div className="col-span-7 space-y-3 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-100/80 border border-red-300 text-red-700 text-[10px] font-black tracking-wider uppercase">
                  <Heart className="w-3 h-3 fill-red-600 text-red-600 animate-pulse" />
                  <span>24X7 EMERGENCY BLOOD REGISTRY</span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Donate Blood, <span className="text-red-600">Save Lives</span>
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal pt-0.5">
                    Every second matters. NSS SAM Global University maintains a round-the-clock emergency donor network bridging enthusiastic student donors with premier hospitals across Madhya Pradesh.
                  </p>
                </div>

                {/* Action Buttons (Placed above cards on 768px) */}
                <div className="flex flex-row items-center gap-3 pt-1 w-full">
                  <button
                    onClick={() => { setActivePage('blood-donation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-xs transition-all duration-300 flex items-center justify-center gap-1.5 group active:scale-95 whitespace-nowrap cursor-pointer"
                  >
                    <span>Search Donors</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                  <button
                    onClick={onOpenJoinModal}
                    className="flex-1 bg-white border-2 border-red-300 text-red-700 hover:bg-red-50 font-bold px-4 py-2.5 rounded-full text-xs transition-all active:scale-95 whitespace-nowrap cursor-pointer"
                  >
                    Pledge Donor
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row: 3 Quick Pillar Cards Spanning Full Width (Only on 768px) */}
            <div className="grid grid-cols-3 gap-3 w-full pt-1">
              <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-red-100/90 flex flex-col justify-between hover:border-red-300 transition-all">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Hospital Alliances</h4>
                  <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">AIIMS Bhopal, BMHRC & Red Cross Blood Bank.</p>
                </div>
              </div>

              <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-red-100/90 flex flex-col justify-between hover:border-red-300 transition-all">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Rapid Response</h4>
                  <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">Instant matching for emergency & rare blood groups.</p>
                </div>
              </div>

              <div className="p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-red-100/90 flex flex-col justify-between hover:border-red-300 transition-all">
                <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Certified Drives</h4>
                  <p className="text-[10.5px] text-slate-500 mt-0.5 leading-snug">100% safe, medical-grade hygienic donation camps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 ANNUAL FLAGSHIP PROGRAM (NSS 7 Days Special Unit Camp 2026) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 md:p-8 lg:p-7 xl:p-12 relative overflow-hidden border border-slate-800">

          {/* Default Layout: Desktop (lg+) & Mobile (<md) */}
          <div className="md:max-lg:hidden grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-5 lg:gap-6 xl:gap-8 items-center relative z-10">
            <div className="md:col-span-7 lg:col-span-8 space-y-3.5 sm:space-y-4 md:space-y-3 lg:space-y-3 xl:space-y-5 text-left">
              <span className="text-[7px] xs:text-[8.5px] sm:text-xs font-extrabold text-orange-400 uppercase tracking-wider sm:tracking-widest inline-flex items-center gap-1 xs:gap-1.5 bg-orange-500/20 px-2 xs:px-2.5 py-1 rounded-md border border-orange-500/30 whitespace-nowrap max-w-full">
                <Tent className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">NOT ME BUT YOU • SERVICE • LEADERSHIP • GROWTH</span>
              </span>

              <div className="space-y-1.5">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-[28px] lg:text-2xl xl:text-[30px] 2xl:text-[35px] font-black text-white tracking-tight leading-tight">
                  NSS 7 Days Special <span className="text-orange-400">Unit Camp</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Live within the adopted community, understand grassroots challenges, and contribute to sustainable rural development through active community immersion, leadership workshops, and cultural exchange.
                </p>
              </div>

              {/* Mobile Only (< sm: 320px, 375px, 425px): Camp Flyer Photo right below Heading & Para */}
              <div className="sm:hidden flex justify-center py-1">
                <div
                  onClick={() => { setActivePage('special-camp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="relative rounded-2xl bg-slate-950 cursor-pointer group max-w-[230px] xs:max-w-[260px] w-full"
                  title="Click to view full 7-Day Special Camp details"
                >
                  <MovingBorderStroke outer={false} color="#ff6b00" rx={16} strokeWidth={2.5} duration={7000} lineLength={120} />
                  <div className="rounded-2xl overflow-hidden w-full h-full">
                    <img loading="lazy" decoding="async"
                      src="/assets/real_nss/camp-flyer.webp"
                      alt="NSS 7 Days Special Camp Official Flyer"
                      className="w-full h-auto object-contain block"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 rounded-2xl"></div>
                  </div>
                </div>
              </div>

              {/* 3 Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 xs:gap-3 md:gap-2 lg:gap-2.5 xl:gap-3 pt-1">
                <div className="bg-slate-800/80 p-3 xs:p-3.5 md:p-2.5 lg:p-2.5 xl:p-3.5 rounded-2xl border border-slate-700">
                  <div className="text-orange-400 font-black text-sm xs:text-base sm:text-lg md:text-sm lg:text-sm xl:text-base mb-1">01</div>
                  <h4 className="text-xs font-bold text-white">Village Adoption</h4>
                  <p className="text-[10px] xs:text-[11px] md:text-[10px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-1 leading-snug">
                    Live within the community, understand challenges, and drive sustainable development.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-3 xs:p-3.5 md:p-2.5 lg:p-2.5 xl:p-3.5 rounded-2xl border border-slate-700">
                  <div className="text-blue-400 font-black text-sm xs:text-base sm:text-lg md:text-sm lg:text-sm xl:text-base mb-1">02</div>
                  <h4 className="text-xs font-bold text-white">Skill Workshops</h4>
                  <p className="text-[10px] xs:text-[11px] md:text-[10px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-1 leading-snug">
                    Training in leadership, public speaking, disaster management, and social advocacy.
                  </p>
                </div>

                <div className="bg-slate-800/80 p-3 xs:p-3.5 md:p-2.5 lg:p-2.5 xl:p-3.5 rounded-2xl border border-slate-700">
                  <div className="text-emerald-400 font-black text-sm xs:text-base sm:text-lg md:text-sm lg:text-sm xl:text-base mb-1">03</div>
                  <h4 className="text-xs font-bold text-white">Cultural Exchange</h4>
                  <p className="text-[10px] xs:text-[11px] md:text-[10px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-1 leading-snug">
                    Express the rich heritage of India through music, dance, and drama in evening sessions.
                  </p>
                </div>
              </div>

              {/* Schedule Highlights Pill */}
              <div className="p-2.5 xs:p-3 md:p-2 lg:p-2 xl:p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/80 flex items-center gap-2 text-[10px] xs:text-[11px] md:text-[10.5px] lg:text-[10px] xl:text-[11px] text-slate-300">
                <Clock className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-orange-400 shrink-0" />
                <span className="leading-snug">
                  <strong className="text-orange-300">Daily Highlights:</strong>{' '}
                  <span className="hidden xl:inline">05:30 AM Yoga & PT • 09:00 AM Community Work • 02:00 PM Skill Sessions • 06:00 PM Cultural Evenings</span>
                  <span className="xl:hidden">05:30 AM Yoga • 09:00 AM Community Work • 02:00 PM Skills • 06:00 PM Cultural Evenings</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-1.5 flex flex-row items-center gap-1.5 xs:gap-3 md:gap-2.5 lg:gap-2 xl:gap-3 w-full">
                <button
                  onClick={() => { setActivePage('special-camp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="flex-1 xs:flex-initial bg-orange-500 hover:bg-orange-600 text-white font-bold px-3 xs:px-5 sm:px-6 md:px-4 lg:px-4 xl:px-6 py-2 xs:py-2.5 sm:py-2.5 md:py-2 lg:py-2 xl:py-2.5 rounded-full text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm transition flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  <span>7-Day Schedule</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </button>
                <button
                  onClick={onOpenJoinModal}
                  className="flex-1 xs:flex-initial bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold px-3 xs:px-5 sm:px-6 md:px-4 lg:px-4 xl:px-6 py-2 xs:py-2.5 sm:py-2.5 md:py-2 lg:py-2 xl:py-2.5 rounded-full text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm transition active:scale-95 whitespace-nowrap cursor-pointer"
                >
                  Register Now
                </button>
              </div>
            </div>

            <div className="hidden sm:flex md:col-span-5 lg:col-span-4 justify-center lg:justify-end">
              <div
                onClick={() => { setActivePage('special-camp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="relative rounded-2xl sm:rounded-3xl bg-slate-950 cursor-pointer group max-w-[260px] xs:max-w-xs sm:max-w-sm md:max-w-[260px] lg:max-w-[250px] xl:max-w-sm w-full"
                title="Click to view full 7-Day Special Camp details"
              >
                <MovingBorderStroke outer={false} color="#ff6b00" rx={24} strokeWidth={2.5} duration={7000} lineLength={120} />
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full h-full">
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/camp-flyer.webp"
                    alt="NSS 7 Days Special Camp Official Flyer"
                    className="w-full h-auto object-contain group-hover:scale-102 transition-transform duration-500 block"
                  />
                  <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors rounded-2xl sm:rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 768px Tablet Viewport Only (md:max-lg) */}
          <div className="hidden md:max-lg:block relative z-10 space-y-4">
            {/* Top Row: Left Content & Right Image Frame */}
            <div className="grid grid-cols-12 gap-5 items-stretch">

              {/* Left Column: Heading, Paragraph, Action Buttons (Above Cards) & Schedule Highlights */}
              <div className="col-span-7 space-y-3 text-left flex flex-col justify-between">
                <div>
                  {/* Badge: Strictly 1 Single Line */}
                  <div className="mb-2">
                    <span className="text-[9.5px] font-extrabold text-orange-400 uppercase tracking-wider flex items-center gap-1.5 bg-orange-500/20 px-2.5 py-1 rounded-md border border-orange-500/30 inline-flex whitespace-nowrap shrink-0">
                      <Tent className="w-3.5 h-3.5 shrink-0" />
                      <span>NOT ME BUT YOU • SERVICE • LEADERSHIP • GROWTH</span>
                    </span>
                  </div>

                  {/* Heading & Paragraph */}
                  <div className="space-y-1">
                    <h2 className="text-2xl font-black text-white tracking-tight leading-tight">
                      NSS 7 Days Special <span className="text-orange-400">Unit Camp</span>
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xl pt-0.5">
                      Live within the adopted community, understand grassroots challenges, and contribute to sustainable rural development through active community immersion, leadership workshops, and cultural exchange.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-0.5">
                  {/* Action Buttons (Placed above cards on 768px) */}
                  <div className="flex flex-row items-center gap-3 w-full">
                    <button
                      onClick={() => { setActivePage('special-camp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2.5 rounded-full text-xs transition flex items-center justify-center gap-1.5 active:scale-95 whitespace-nowrap cursor-pointer"
                    >
                      <span>7-Day Schedule</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                    </button>
                    <button
                      onClick={onOpenJoinModal}
                      className="flex-1 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 font-bold px-4 py-2.5 rounded-full text-xs transition active:scale-95 whitespace-nowrap cursor-pointer"
                    >
                      Register Now
                    </button>
                  </div>

                  {/* Schedule Highlights Pill */}
                  <div className="p-2 bg-slate-800/60 rounded-xl border border-slate-700/80 flex items-center gap-2 text-[10.5px] text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="leading-snug">
                      <strong className="text-orange-300">Daily Highlights:</strong>{' '}
                      <span>05:30 AM Yoga • 09:00 AM Community Work • 02:00 PM Skills • 06:00 PM Cultural Evenings</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Camp Flyer Image (Stretched to fill full height, zero bottom dead space on 768px) */}
              <div className="col-span-5 flex justify-end items-stretch self-stretch w-full">
                <div
                  onClick={() => { setActivePage('special-camp'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="relative rounded-2xl bg-slate-950 cursor-pointer group w-full h-full min-h-[250px] flex flex-col justify-center items-center border border-slate-800/80"
                  title="Click to view full 7-Day Special Camp details"
                >
                  <MovingBorderStroke outer={false} color="#ff6b00" rx={24} strokeWidth={2.5} duration={7000} lineLength={120} />
                  <div className="rounded-2xl overflow-hidden w-full h-full flex items-center justify-center p-2.5 bg-slate-950">
                    <img loading="lazy" decoding="async"
                      src="/assets/real_nss/camp-flyer.webp"
                      alt="NSS 7 Days Special Camp Official Flyer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 block"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Row: 3 Core Features Spanning Full Width (Only on 768px) */}
            <div className="grid grid-cols-3 gap-3 w-full pt-1">
              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-orange-500/50 transition-all">
                <div className="text-orange-400 font-black text-sm mb-1">01</div>
                <div>
                  <h4 className="text-xs font-bold text-white">Village Adoption</h4>
                  <p className="text-[10.5px] text-slate-400 mt-1 leading-snug">
                    Live within the community, understand challenges, and drive sustainable development.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/50 transition-all">
                <div className="text-blue-400 font-black text-sm mb-1">02</div>
                <div>
                  <h4 className="text-xs font-bold text-white">Skill Workshops</h4>
                  <p className="text-[10.5px] text-slate-400 mt-1 leading-snug">
                    Training in leadership, public speaking, disaster management, and social advocacy.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-2xl border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 transition-all">
                <div className="text-emerald-400 font-black text-sm mb-1">03</div>
                <div>
                  <h4 className="text-xs font-bold text-white">Cultural Exchange</h4>
                  <p className="text-[10.5px] text-slate-400 mt-1 leading-snug">
                    Express the rich heritage of India through music, dance, and drama in evening sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 INTERACTIVE T-SHIRT SHOWCASE */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <TshirtViewer />
      </section>

      {/* 11 LEADERSHIP & PROGRAMME OFFICER SHOWCASE */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-7 md:mb-7 lg:mb-6 xl:mb-8 gap-3 sm:gap-4">
          <div>
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 xs:mb-2">
              NSS LEADERSHIP & MENTORSHIP
            </span>
            <h2 className="text-[20px] xs:text-[22px] min-[425px]:text-[25px] sm:text-3xl md:text-[34px] lg:text-3xl xl:text-4xl font-extrabold text-[#0c1f44] tracking-tight mt-1.5 sm:mt-2">
              The Leadership Behind the <span className="text-orange-600">Movement</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-[13.5px] lg:text-xs xl:text-sm text-slate-500 mt-1 max-w-xl">
              Under the visionary guidance of Prof. Ruchi Upadhyay, NSS SAM Global University empowers students to lead grassroots community service and social transformation across Madhya Pradesh.
            </p>
          </div>
          <button
            onClick={() => { setActivePage('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hidden sm:inline-flex self-start sm:self-auto items-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>See Full Team & Developers</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Feature Profile Card for Prof. Ruchi Upadhyay (Optimized for 768px Tablet & Desktop matching TeamPage) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-6 md:p-6 lg:p-4 xl:p-7 border border-slate-200 relative overflow-hidden group">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-5 sm:gap-6 md:gap-5 lg:gap-4 xl:gap-7">

            {/* Top Row on md: (768px) / Left on lg: - Side-by-side Photo & Leadership Info */}
            <div className="w-full flex-1 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-4 sm:gap-6 md:gap-5 lg:gap-4 xl:gap-7">
              {/* Left: Compact Portrait Frame */}
              <div className="shrink-0 flex justify-center w-full md:w-auto">
                <div className="relative w-36 xs:w-44 sm:w-52 md:w-48 lg:w-44 xl:w-52 2xl:w-56 aspect-[3/3.8] rounded-2xl overflow-hidden border-2 border-orange-200/80 bg-slate-50 p-1.5">
                  <img loading="lazy" decoding="async"
                    src={programmeOfficer.image}
                    alt={programmeOfficer.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-1.5 xs:bottom-2 sm:bottom-2.5 left-1.5 xs:left-2 sm:left-2.5 right-1.5 xs:right-2 sm:right-2.5 z-10 pointer-events-none">
                    <div className="bg-slate-950/90 backdrop-blur-md px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-lg border border-white/20 text-center flex items-center justify-center gap-1">
                      <Award className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-orange-400 shrink-0" />
                      <span className="text-[8px] xs:text-[8.5px] sm:text-[9.5px] md:text-[8.5px] lg:text-[8px] xl:text-[9.5px] font-extrabold text-white tracking-wider uppercase whitespace-nowrap truncate">
                        State Award Recipient
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: Leadership Details, Bio & Metrics */}
              <div className="flex-1 space-y-2 sm:space-y-2.5 text-center md:text-left w-full flex flex-col items-center md:items-start">
                <div className="flex flex-nowrap sm:flex-wrap items-center justify-center md:justify-start gap-1 xs:gap-1 min-[425px]:gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2 w-full sm:w-auto max-w-full overflow-hidden sm:overflow-visible">
                  <span className="text-[7px] xs:text-[8px] min-[425px]:text-[9.5px] sm:text-xs md:text-[10.5px] lg:text-[10px] xl:text-xs font-black text-orange-600 uppercase tracking-normal sm:tracking-widest bg-orange-50 px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full border border-orange-200 truncate min-w-0">
                    {programmeOfficer.role}
                  </span>
                  <span className="text-[7px] xs:text-[8px] min-[425px]:text-[9.5px] sm:text-xs md:text-[10.5px] lg:text-[10px] xl:text-xs font-bold text-blue-700 bg-blue-50 px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full border border-blue-200 truncate min-w-0">
                    Faculty Mentor & Guide
                  </span>
                  <span className="text-[7px] xs:text-[8px] min-[425px]:text-[9.5px] sm:text-xs md:text-[10.5px] lg:text-[10px] xl:text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200 truncate min-w-0">
                    Unit Incharge
                  </span>
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-black text-[#0c1f44] tracking-tight">
                    {programmeOfficer.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-orange-600 mt-0.5">
                    {programmeOfficer.designation}
                  </p>
                </div>

                <p className="text-xs sm:text-[13px] md:text-xs lg:text-[11px] xl:text-xs 2xl:text-[13px] text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left">
                  {programmeOfficer.description}
                </p>

                {/* Credential Metrics */}
                <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-2 lg:gap-1.5 xl:gap-2.5 pt-1 max-w-md w-full mx-auto md:mx-0">
                  <div className="bg-slate-50 p-1.5 xs:p-2 sm:p-2.5 md:p-2 lg:p-1.5 xl:p-2 rounded-xl border border-slate-200/80 text-center">
                    <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-base 2xl:text-lg font-black text-slate-900"><AnimatedCounter value="1000+" /></p>
                    <p className="text-[9px] xs:text-[10px] sm:text-[10.5px] md:text-[10px] lg:text-[8.5px] xl:text-[9.5px] text-slate-500 font-semibold leading-tight">Cadets Mentored</p>
                  </div>
                  <div className="bg-slate-50 p-1.5 xs:p-2 sm:p-2.5 md:p-2 lg:p-1.5 xl:p-2 rounded-xl border border-slate-200/80 text-center">
                    <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-base 2xl:text-lg font-black text-slate-900"><AnimatedCounter value="50+" /></p>
                    <p className="text-[9px] xs:text-[10px] sm:text-[10.5px] md:text-[10px] lg:text-[8.5px] xl:text-[9.5px] text-slate-500 font-semibold leading-tight">Impact Drives</p>
                  </div>
                  <div className="bg-slate-50 p-1.5 xs:p-2 sm:p-2.5 md:p-2 lg:p-1.5 xl:p-2 rounded-xl border border-slate-200/80 text-center">
                    <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-sm xl:text-base 2xl:text-lg font-black text-slate-900"><AnimatedCounter value="10+" /></p>
                    <p className="text-[9px] xs:text-[10px] sm:text-[10.5px] md:text-[10px] lg:text-[8.5px] xl:text-[9.5px] text-slate-500 font-semibold leading-tight">Adopted Villages</p>
                  </div>
                </div>

                {/* Social & Direct Contact Links (Icon-only on < sm: 320px-425px, Icon+Text on sm+) */}
                <div className="pt-1.5 flex flex-nowrap sm:flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2 lg:gap-1.5 xl:gap-2 w-full max-w-full overflow-hidden sm:overflow-visible">
                  {programmeOfficer.linkedin && (
                    <a
                      href={programmeOfficer.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 md:px-2.5 lg:px-2 xl:px-2.5 sm:py-1.5 md:py-1 lg:py-1 xl:py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs md:text-[11px] lg:text-[10px] xl:text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-blue-200"
                      title="Connect on LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                  )}
                  {programmeOfficer.instagram && (
                    <a
                      href={programmeOfficer.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 md:px-2.5 lg:px-2 xl:px-2.5 sm:py-1.5 md:py-1 lg:py-1 xl:py-1.5 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-lg text-xs md:text-[11px] lg:text-[10px] xl:text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-pink-200"
                      title="Follow on Instagram"
                    >
                      <InstagramIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="hidden sm:inline">Instagram</span>
                    </a>
                  )}
                  {programmeOfficer.whatsapp && (
                    <a
                      href={programmeOfficer.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 md:px-2.5 lg:px-2 xl:px-2.5 sm:py-1.5 md:py-1 lg:py-1 xl:py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg text-xs md:text-[11px] lg:text-[10px] xl:text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-emerald-200"
                      title="Chat on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  )}
                  {programmeOfficer.email && (
                    <a
                      href={`mailto:${programmeOfficer.email}`}
                      className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 md:px-2.5 lg:px-2 xl:px-2.5 sm:py-1.5 md:py-1 lg:py-1 xl:py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs md:text-[11px] lg:text-[10px] xl:text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-slate-200"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Mentor's Vision & Core Directives (On md: 768px spans full width with clean 2-column grid, on lg: 3rd column) */}
            <div className="w-full lg:w-[270px] xl:w-72 2xl:w-80 shrink-0 bg-slate-50/90 rounded-2xl p-3.5 xs:p-4 sm:p-5 md:p-4 lg:p-3 xl:p-4 border border-slate-200/90 flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col justify-between gap-3 md:gap-4 lg:gap-2.5">

              {/* Quote / Philosophy */}
              <div className="relative pl-2.5 lg:pl-2.5 xl:pl-3 border-l-2 border-orange-500">
                <Quote className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-orange-400 mb-1" />
                <p className="text-[11px] xs:text-xs md:text-[11px] lg:text-[10px] xl:text-xs text-slate-700 italic font-medium leading-relaxed">
                  “Not Me, But You — The true essence of NSS is to cultivate empathy and humility. When our students step forward to serve society, real nation-building begins.”
                </p>
                <p className="text-[9.5px] xs:text-[10px] text-orange-600 font-extrabold mt-1.5 tracking-wider uppercase">
                  — Officer's Guiding Philosophy
                </p>
              </div>

              {/* Core Leadership Initiatives & Office Badge */}
              <div className="space-y-2 md:border-l md:border-slate-200/80 md:pl-4 lg:border-l-0 lg:pl-0 lg:border-t lg:pt-2">
                <p className="text-[9.5px] xs:text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Key Focus Initiatives
                </p>
                <div className="space-y-1.5 text-[11px] xs:text-xs md:text-[11px] lg:text-[10px] xl:text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5 xs:gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                    <span>Rural Education & Adopted Villages</span>
                  </div>
                  <div className="flex items-center gap-1.5 xs:gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0"></span>
                    <span>24×7 Student Blood Donation Network</span>
                  </div>
                  <div className="flex items-center gap-1.5 xs:gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                    <span>7-Day Annual Residential Camp Leadership</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-2 xs:p-2.5 md:p-2 lg:p-2 xl:p-2.5 border border-slate-200 flex items-center justify-between text-[10px] xs:text-[11px] lg:text-[9.5px] xl:text-[10.5px] mt-2">
                  <div className="flex items-center gap-1.5 text-slate-600 min-w-0 flex-1 mr-1">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold truncate text-[9.5px] md:text-[9px] lg:text-[9px] xl:text-[10px]">NSS Cell, SGU Bhopal</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 shrink-0 text-[8.5px] md:text-[8px] lg:text-[8px] xl:text-[9.5px] whitespace-nowrap">
                    <span>Active Guidance</span>
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="mt-4 flex justify-center sm:hidden">
          <button
            onClick={() => { setActivePage('team'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-nss-blue hover:text-orange-600 bg-white border border-slate-200 px-5 py-2.5 rounded-full transition cursor-pointer whitespace-nowrap"
          >
            <span>See Full Team & Developers</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 12 FINAL CTA */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-nss-blue-dark via-blue-900 to-nss-blue text-white p-4 xs:p-6 sm:p-10 md:p-12 lg:p-8 xl:p-14 2xl:p-16 border border-blue-700">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 xs:gap-5 sm:gap-8 lg:gap-6 xl:gap-8 text-center lg:text-left">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 max-w-3xl">
              <span className="text-[9.5px] xs:text-[10.5px] sm:text-xs font-extrabold text-orange-400 uppercase tracking-widest bg-orange-500/20 px-2.5 xs:px-3 py-1 rounded-full border border-orange-400/30 inline-block">
                BECOME A VOLUNTEER
              </span>
              <h2 className="text-[17px] xs:text-[19px] min-[425px]:text-[22px] sm:text-4xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
                Be the Change You Want to See
              </h2>
              <p className="text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-xs xl:text-sm 2xl:text-base text-slate-200 max-w-2xl leading-relaxed">
                Join the NSS Orange Army at SAM Global University and contribute to a better, greener, and more compassionate tomorrow.
              </p>
            </div>

            <div className="flex-shrink-0 w-full xs:w-auto">
              <button
                onClick={onOpenJoinModal}
                className="w-full xs:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black px-6 xs:px-7 sm:px-8 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-3.5 rounded-full text-xs xs:text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base transition-all flex items-center justify-center gap-2 group active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Join NSS Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {activeModalActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalActivity(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-y-auto md:overflow-hidden z-10 max-h-[82vh] sm:max-h-[90vh] flex flex-col md:flex-row shadow-none min-h-0"
            >
              {/* Mobile Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalActivity(null)}
                className="md:hidden absolute top-2 right-2 z-20 w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>

              {/* Left Column: Full Poster Image Fully Visible with object-contain */}
              <div className="w-full md:w-5/12 lg:w-5/12 relative bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 min-h-[135px] xs:min-h-[155px] sm:min-h-[300px] md:min-h-full p-2 sm:p-4">
                <img loading="lazy" decoding="async"
                  src={activeModalActivity.image}
                  alt={activeModalActivity.title}
                  className="w-full h-full max-h-[155px] xs:max-h-[180px] min-[425px]:max-h-[200px] sm:max-h-[380px] md:max-h-[500px] object-contain rounded-lg sm:rounded-xl"
                />
              </div>

              {/* Right Column: All Content & Actions */}
              <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between md:overflow-y-auto p-3 xs:p-3.5 pb-4 sm:p-6 lg:p-7 bg-white md:max-h-[90vh] min-h-0">
                <div className="space-y-2 xs:space-y-2.5 sm:space-y-4">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="min-w-0">
                      <span className="text-[9px] xs:text-[9.5px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-orange-600 bg-orange-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-orange-200 inline-block mb-1 sm:mb-1.5">
                        {activeModalActivity.category}
                      </span>
                      <h3 className="text-[15px] xs:text-base min-[425px]:text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                        {activeModalActivity.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 sm:gap-3 text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 mt-1 sm:mt-2">
                        {activeModalActivity.location && (
                          <div className="flex items-center gap-1 text-slate-500 min-w-0">
                            <MapPin className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-500 shrink-0" />
                            <span className="break-words">{activeModalActivity.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-slate-500 shrink-0">
                          <Calendar className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-400 shrink-0" />
                          <span>{activeModalActivity.date}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModalActivity(null)}
                      className="hidden md:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 items-center justify-center transition shrink-0"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Activity Overview</h4>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeModalActivity.description}
                    </p>
                  </div>

                  {activeModalActivity.highlights && activeModalActivity.highlights.length > 0 && (
                    <div className="space-y-1 xs:space-y-1.5">
                      <h4 className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                        {activeModalActivity.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 xs:gap-2 text-[11px] xs:text-xs text-slate-700 bg-slate-50 p-1.5 xs:p-2 sm:p-2.5 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-emerald-500 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 sm:pt-6 pb-1 sm:pb-0 mt-3 sm:mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 xs:gap-3">
                  {activeModalActivity.instagram ? (
                    <a
                      href={activeModalActivity.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 xs:gap-2 text-[10.5px] xs:text-xs font-bold text-white bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:opacity-95 px-2.5 xs:px-3.5 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 rounded-xl transition whitespace-nowrap"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" />
                      <span className="sm:hidden">Official Post</span>
                      <span className="hidden sm:inline">View Official Instagram Post</span>
                      <ExternalLink className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" />
                    </a>
                  ) : <div />}

                  <button
                    onClick={() => setActiveModalActivity(null)}
                    className="px-3.5 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] xs:text-xs font-bold transition ml-auto cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {activeModalAch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 xs:p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalAch(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-y-auto md:overflow-hidden z-10 max-h-[82vh] sm:max-h-[90vh] flex flex-col md:flex-row shadow-none min-h-0"
            >
              {/* Mobile Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalAch(null)}
                className="md:hidden absolute top-2 right-2 z-20 w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>

              {/* Left Column: Full Poster Image Fully Visible with object-contain */}
              <div className="w-full md:w-5/12 lg:w-5/12 relative bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 min-h-[135px] xs:min-h-[155px] sm:min-h-[300px] md:min-h-full p-2 sm:p-4">
                <img loading="lazy" decoding="async"
                  src={activeModalAch.image}
                  alt={activeModalAch.title}
                  className="w-full h-full max-h-[155px] xs:max-h-[180px] min-[425px]:max-h-[200px] sm:max-h-[380px] md:max-h-[500px] object-contain rounded-lg sm:rounded-xl"
                />
              </div>

              {/* Right Column: All Content & Actions */}
              <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between md:overflow-y-auto p-3 xs:p-3.5 pb-4 sm:p-6 lg:p-7 bg-white md:max-h-[90vh] min-h-0">
                <div className="space-y-2 xs:space-y-2.5 sm:space-y-4">
                  <div className="flex items-start justify-between gap-2 sm:gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1 xs:gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                        <span className="text-[9px] xs:text-[9.5px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-orange-600 bg-orange-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-orange-200 inline-block">
                          {activeModalAch.category}
                        </span>
                        <span className="text-[9px] xs:text-[9.5px] sm:text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-slate-200 inline-block">
                          {activeModalAch.badge}
                        </span>
                        <span className="text-[9px] xs:text-[9.5px] sm:text-xs font-extrabold text-nss-blue bg-blue-50 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border border-blue-200 inline-block">
                          Year: {activeModalAch.year}
                        </span>
                      </div>
                      <h3 className="text-[15px] xs:text-base min-[425px]:text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                        {activeModalAch.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10.5px] xs:text-[11px] sm:text-xs text-slate-500 mt-1 sm:mt-1.5">
                        <Building className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-500 shrink-0" />
                        <span>Issued By: <strong className="text-slate-700">{activeModalAch.issuedBy}</strong></span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModalAch(null)}
                      className="hidden md:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 items-center justify-center transition shrink-0"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Award & Milestone Details</h4>
                    <p className="text-[11px] xs:text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeModalAch.description}
                    </p>
                  </div>

                  <div className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-2 text-[10px] xs:text-[11px] sm:text-xs overflow-hidden">
                    <span className="text-slate-500 font-medium whitespace-nowrap shrink-0">Recognition Status:</span>
                    <span className="font-bold text-nss-blue flex items-center gap-1 min-w-0">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
                      <span className="truncate">Verified State/National Record</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-6 pb-1 sm:pb-0 mt-3 sm:mt-6 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => setActiveModalAch(null)}
                    className="px-3.5 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] xs:text-xs font-bold transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
