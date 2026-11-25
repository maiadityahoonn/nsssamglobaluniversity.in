import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Heart, Sparkles, Award, Users,
  Compass, CheckCircle2, Target, Flag, ArrowRight,
  MapPin, Quote, Building2, ChevronRight,
  Volume2, VolumeX, Play, Tent,
  BookOpen, Newspaper, Smile, Share2, ExternalLink, Clock
} from 'lucide-react';
import { partnerCollaborations, programmeOfficer, universityInfo } from '../data/nssData';
import { LinkedinIcon, WhatsAppIcon, InstagramIcon } from '../components/common/SocialIcons';
import MovingBorderStroke from '../components/common/MovingBorderStroke';
import AnimatedCounter from '../components/common/AnimatedCounter';

export default function AboutPage({ setActivePage, onOpenJoinModal }) {
  const [isVideoMuted, setIsVideoMuted] = useState(true);
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

  return (
    <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16 pb-16 sm:pb-20 pt-3 xs:pt-4 sm:pt-6">

      {/* 01 HEADER BANNER */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-nss-blue-dark via-nss-blue to-[#132c5e] text-white p-4 xs:p-5 sm:p-8 md:p-8 lg:p-7 xl:p-12">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-2 xs:space-y-2.5 sm:space-y-3.5 md:space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] xs:text-[9.5px] sm:text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase tracking-widest whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> Know Our Roots & Purpose
            </span>
            <h1 className="text-[16px] xs:text-[19px] min-[425px]:text-[22px] sm:text-3xl md:text-[34px] lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-white tracking-tight leading-tight">
              About NSS <span className="text-orange-400">SAM Global University</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto sm:mx-0">
              Inculcating selfless community orientation, democratic leadership, and nation-building values among undergraduate and postgraduate students in Bhopal, Madhya Pradesh.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-1 xs:pt-1.5 sm:pt-2 flex flex-wrap justify-center sm:justify-start items-center gap-1 xs:gap-1.5 sm:gap-2.5 md:gap-3 text-xs font-semibold text-slate-200 w-full">
              <span className="px-1.5 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full bg-white/10 border border-white/15 flex items-center gap-1 xs:gap-1.5 text-[8px] xs:text-[9.5px] min-[425px]:text-[10.5px] sm:text-xs whitespace-nowrap">
                <CheckCircle2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                <span>Govt. of India Recognized</span>
              </span>
              <span className="px-1.5 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full bg-white/10 border border-white/15 flex items-center gap-1 xs:gap-1.5 text-[8px] xs:text-[9.5px] min-[425px]:text-[10.5px] sm:text-xs whitespace-nowrap">
                <CheckCircle2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                <span>1,000+ Active Cadets</span>
              </span>
              <span className="px-1.5 xs:px-2.5 sm:px-3 py-0.5 xs:py-1 rounded-full bg-white/10 border border-white/15 flex items-center gap-1 xs:gap-1.5 text-[8px] xs:text-[9.5px] min-[425px]:text-[10.5px] sm:text-xs whitespace-nowrap">
                <CheckCircle2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                <span>10+ Adopted Gram Panchayats</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 INSTITUTIONAL COLLABORATIONS (Continuous Infinite Logo Marquee — Synchronized with Home Page) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-6 md:p-6 lg:p-6 xl:p-10 border border-slate-200 text-center relative overflow-hidden">

          {/* Clean Header */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8">
            <span className="text-[10px] xs:text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 xs:mb-2">
              INSTITUTIONAL TIE-UPS
            </span>
            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-[32px] font-extrabold text-[#0c1f44] tracking-tight sm:whitespace-nowrap">
              Our Healthcare & Community <span className="text-orange-600">Collaborations</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              Partnering with premier healthcare institutes and government youth organizations.
            </p>
          </div>

          {/* Marquee Strip with Left & Right Gradient Fade Masks */}
          <div className="relative w-full overflow-hidden py-1 sm:py-2">
            {/* Left Fade Mask */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
            {/* Right Fade Mask */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Infinite Marquee Track (Pauses on Hover for Easy Click) */}
            <div className="animate-marquee flex items-center gap-3.5 xs:gap-5 sm:gap-6 lg:gap-4 xl:gap-6">
              {[...partnerCollaborations, ...partnerCollaborations].map((p, idx) => (
                <a
                  key={idx}
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  title={`${p.name} — Click to visit official portal`}
                  className="px-3 xs:px-5 py-2 xs:py-3.5 bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 hover:border-orange-400 transition-all flex items-center justify-center shrink-0 min-w-[125px] xs:min-w-[150px] sm:min-w-[170px] md:min-w-[185px] lg:min-w-[155px] xl:min-w-[180px] h-16 xs:h-20 sm:h-20 md:h-22 lg:h-20 xl:h-22 group cursor-pointer"
                >
                  <img loading="lazy" decoding="async"
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 xs:max-h-10 sm:max-h-10 md:max-h-11 max-w-[100px] xs:max-w-[120px] sm:max-w-[130px] md:max-w-[140px] object-contain group-hover:scale-108 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 03 UNIVERSITY & UNIT VISION */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6">
          <div className="bg-white p-4 xs:p-5 sm:p-5 md:p-5 lg:p-4 xl:p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-orange-300 transition-colors">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-2.5 md:space-y-3">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold">
                <Target className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-base md:text-[15px] lg:text-sm xl:text-lg font-bold text-slate-900">Our Core Vision</h3>
              <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                To build youth character, leadership, democratic outlook, and compassion through selfless service to underprivileged communities across rural Madhya Pradesh.
              </p>
            </div>
            <div className="pt-2.5 xs:pt-3 mt-2.5 xs:mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs text-orange-600 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" /> Grassroots Empowerment
            </div>
          </div>

          <div className="bg-white p-4 xs:p-5 sm:p-5 md:p-5 lg:p-4 xl:p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-2.5 md:space-y-3">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Flag className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-base md:text-[15px] lg:text-sm xl:text-lg font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                Connect university classrooms to rural realities. Ensure every volunteer completes 120 annual service hours across healthcare, literacy, environmental care, and disaster support.
              </p>
            </div>
            <div className="pt-2.5 xs:pt-3 mt-2.5 xs:mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs text-blue-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" /> 120 Hours / Year Commitment
            </div>
          </div>

          <div className="bg-white p-4 xs:p-5 sm:p-5 md:p-5 lg:p-4 xl:p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-emerald-300 transition-colors">
            <div className="space-y-2 xs:space-y-2.5 sm:space-y-2.5 md:space-y-3">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Sparkles className="w-4.5 h-4.5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-sm xs:text-base sm:text-base md:text-[15px] lg:text-sm xl:text-lg font-bold text-slate-900">AI Enabled Social Impact</h3>
              <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                As Madhya Pradesh's 1st AI Enabled University, SAM Global University integrates technology into village education, health databases, blood donor mapping, and climate conservation.
              </p>
            </div>
            <div className="pt-2.5 xs:pt-3 mt-2.5 xs:mt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs text-emerald-700 font-bold">
              <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 shrink-0" /> Tech For Social Good
            </div>
          </div>
        </div>
      </section>

      {/* 04 OUR REAL REACH & COMMUNITY IMPACT (Compact Sizing + Continuous Moving Orange Border Line) */}
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

      {/* 05 THE NSS EMBLEM & KONARK WHEEL EXPLAINED */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-6 md:p-6 lg:p-6 xl:p-8 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-center">

            {/* Left Col: The Official Logo */}
            <div className="md:col-span-4 lg:col-span-5 flex flex-col items-center text-center">
              <div className="w-28 h-28 xs:w-36 xs:h-36 sm:w-40 sm:h-40 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 rounded-full p-1.5 xs:p-2 bg-gradient-to-br from-orange-400 via-amber-400 to-blue-700 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white p-1.5 xs:p-2 sm:p-3 flex items-center justify-center">
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/nss-logo.webp"
                    alt="NSS Official Emblem"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-sm xs:text-base sm:text-base md:text-base font-extrabold text-slate-900 mt-2 xs:mt-3">The NSS Badge & Konark Wheel</h3>
              <p className="text-[10px] xs:text-xs text-orange-600 font-bold uppercase tracking-wider">
                Motto: "Not Me, But You" (मैं नहीं आप)
              </p>
            </div>

            {/* Right Col: Significance */}
            <div className="md:col-span-8 lg:col-span-7 space-y-2.5 xs:space-y-3 sm:space-y-3.5 md:space-y-3.5 text-left">
              <h2 className="text-[17px] xs:text-[19.5px] min-[425px]:text-[22px] sm:text-2xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-nss-blue-dark">
                The Heritage of the <span className="text-orange-500">NSS Symbol</span>
              </h2>
              <p className="text-xs sm:text-xs md:text-xs lg:text-sm text-slate-600 leading-relaxed">
                The National Service Scheme symbol is inspired by the gigantic chariot wheel of the world-famous <span className="font-semibold text-slate-800">Konark Sun Temple</span> in Odisha, India. The wheel signifies movement, continuous cycle of life, creation and preservation, and points to the nation’s uninterrupted march toward progress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 sm:gap-3.5 pt-1">
                <div className="bg-slate-50 p-3 xs:p-3.5 sm:p-3.5 md:p-3.5 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-nss-blue uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex-shrink-0"></span> 8 Bars (Spokes)
                  </h4>
                  <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Represent the 24 hours of the day, reminding the volunteer to be ready for nation service day and night.
                  </p>
                </div>

                <div className="bg-slate-50 p-3 xs:p-3.5 sm:p-3.5 md:p-3.5 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 flex-shrink-0"></span> Red & Navy Blue Color
                  </h4>
                  <p className="text-[10.5px] xs:text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    Red stands for high energy, youthful vigor, and lively spirit; Navy blue depicts the vast cosmos of which NSS is a small contributing unit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 PROGRAMME OFFICER LEADERSHIP SPOTLIGHT */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-7 md:p-6 lg:p-8 xl:p-10 border border-slate-200 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 md:gap-6 lg:gap-6 xl:gap-8 items-center">

            {/* Left: Program Officer Portrait */}
            <div className="md:col-span-4 lg:col-span-4 xl:col-span-3.5 flex flex-col items-center text-center">
              <div className="relative w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-orange-200 bg-slate-100 shadow-none group">
                <img loading="lazy" decoding="async"
                  src={programmeOfficer.image}
                  alt={programmeOfficer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 left-1.5 right-1.5 sm:left-2 sm:right-2 text-center text-[8px] xs:text-[9px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-bold text-white bg-slate-950/85 backdrop-blur-md px-1.5 sm:px-2 py-0.5 xs:py-1 rounded-lg border border-white/15 whitespace-nowrap truncate">
                  State NSS Awardee 2025
                </span>
              </div>
              <h3 className="text-base sm:text-base md:text-base lg:text-lg xl:text-xl font-black text-slate-900 mt-2.5 xs:mt-3">{programmeOfficer.name}</h3>
              <p className="text-[11px] sm:text-xs lg:text-xs xl:text-sm font-bold text-orange-600 uppercase tracking-wider">{programmeOfficer.role}</p>
              <p className="text-[10px] sm:text-[11px] lg:text-[11.5px] xl:text-xs text-slate-500">{programmeOfficer.designation}</p>

              {/* Social Connect Badges */}
              <div className="flex items-center gap-2 mt-2.5 xs:mt-3">
                <a
                  href={programmeOfficer.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  title="Connect via WhatsApp"
                  className="w-8 h-8 lg:w-8.5 lg:h-8.5 xl:w-9 xl:h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={programmeOfficer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="View LinkedIn Profile"
                  className="w-8 h-8 lg:w-8.5 lg:h-8.5 xl:w-9 xl:h-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={programmeOfficer.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="View Instagram Profile"
                  className="w-8 h-8 lg:w-8.5 lg:h-8.5 xl:w-9 xl:h-9 rounded-xl bg-pink-50 text-pink-600 border border-pink-200 flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Visionary Leadership Message */}
            <div className="md:col-span-8 lg:col-span-8 xl:col-span-8.5 space-y-2.5 xs:space-y-3 sm:space-y-3 md:space-y-3 lg:space-y-3.5 xl:space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 xs:px-3 py-0.5 xs:py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-[10px] xs:text-[11px] font-extrabold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" /> PROGRAMME OFFICER'S MESSAGE
              </div>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-[23px] xl:text-[28px] 2xl:text-3xl font-black text-[#0c1f44] tracking-tight leading-snug">
                "Service is Not Just an Activity ; <br className="hidden sm:inline" />
                <span className="text-orange-600">It is a Way of Life"</span>
              </h2>
              <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm text-slate-600 leading-relaxed font-normal">
                At SAM Global University, the NSS wing bridges student energy with grassroots social realities. We nurture conscious citizens who don’t just observe societal problems but step forward with solutions — whether it is 24x7 emergency blood mobilization, environmental conservation, or empowering rural school children.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 xs:gap-3 lg:gap-3.5 xl:gap-4 pt-1 lg:pt-1.5">
                <div className="p-2.5 xs:p-3 lg:p-3.5 xl:p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 lg:gap-3 hover:border-orange-200 transition">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">Character & Empathy</h4>
                    <p className="text-[10.5px] xs:text-[11px] lg:text-[11px] xl:text-xs text-slate-500 leading-snug">Cultivating mutual respect and understanding rural life firsthand.</p>
                  </div>
                </div>
                <div className="p-2.5 xs:p-3 lg:p-3.5 xl:p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 lg:gap-3 hover:border-orange-200 transition">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">State & National Camps</h4>
                    <p className="text-[10.5px] xs:text-[11px] lg:text-[11px] xl:text-xs text-slate-500 leading-snug">Mentoring student leaders to represent MP at national stages.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 07 WHY JOIN NSS SAM GLOBAL UNIVERSITY & INTERACTIVE STUDENT REEL */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-6 md:p-6 lg:p-6 xl:p-8 border border-slate-200 relative overflow-hidden">
          <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-12 gap-4 xs:gap-5 sm:gap-6 md:gap-5 lg:gap-6 xl:gap-8 items-center">

            {/* Left Column: Compact Interactive Campus Video Reel Player (Below Heading+Para on < sm, Left on md+) */}
            <div className="order-2 sm:order-none md:col-span-4 lg:col-span-4 xl:col-span-3.5 flex items-center justify-center w-full">
              <div className="w-full max-w-[200px] xs:max-w-[210px] sm:max-w-[220px] md:max-w-[210px] lg:max-w-[215px] xl:max-w-[230px] aspect-[9/16] max-h-[350px] sm:max-h-[370px] md:max-h-[380px] lg:max-h-[390px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 relative flex items-center justify-center shadow-none group mx-auto">
                {/* Full-Length Video filling container cleanly */}
                <video
                  autoPlay
                  loop
                  muted={isVideoMuted}
                  playsInline
                  className="w-full h-full object-cover block bg-slate-950"
                >
                  <source src="/assets/real_nss/about-video.mp4" type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>

                {/* Sound Toggle Button */}
                <button
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  title={isVideoMuted ? "Unmute Video Sound" : "Mute Video Sound"}
                  className="absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-orange-500 text-white flex items-center justify-center border border-white/20 transition-all backdrop-blur-md cursor-pointer active:scale-95"
                >
                  {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
                </button>

                {/* Top Floating Badge */}
                <div className="absolute top-2.5 left-2.5 z-20 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-900/80 text-orange-400 border border-white/15 backdrop-blur-md">
                  <Play className="w-2.5 h-2.5 fill-orange-400" /> SGU Reel
                </div>

                {/* Bottom Floating Card (Minimal & Compact) */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 p-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between gap-1.5 text-left">
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">Start Your Journey</p>
                    <p className="text-[9px] text-slate-300">NSS SAM Global Univ.</p>
                  </div>
                  <button
                    onClick={onOpenJoinModal}
                    className="bg-nss-orange hover:bg-nss-orange-hover text-white font-bold px-3 py-1 rounded-full text-[10px] inline-flex items-center gap-1 transition shrink-0 active:scale-95"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Why Join NSS SAM Global University (Merged Compact Benefits) */}
            <div className="contents sm:flex sm:flex-col sm:justify-center md:col-span-8 lg:col-span-8 xl:col-span-8.5 text-left space-y-2">
              <div className="order-1 sm:order-none w-full">
                {/* Header with NSS Logo & Requested Title */}
                <div className="flex items-center gap-2.5 xs:gap-3 mb-2 pb-2 border-b border-slate-100">
                  <div className="w-8 h-8 xs:w-9 xs:h-9 lg:w-10 lg:h-10 rounded-xl bg-orange-50 border border-orange-200 p-1.5 flex items-center justify-center shrink-0">
                    <img loading="lazy" decoding="async"
                      src="/assets/real_nss/nss-logo.webp"
                      alt="NSS Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] xs:text-[9.5px] lg:text-[10px] font-black uppercase text-orange-600 tracking-wider">
                      STUDENT BENEFITS & CAMPUS LIFE
                    </span>
                    <h3 className="text-sm xs:text-[15px] min-[425px]:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-black text-[#0c1f44] leading-tight">
                      Why Join NSS SAM Global University?
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] xs:text-xs lg:text-xs xl:text-sm text-slate-500 leading-relaxed font-normal mb-1 sm:mb-2.5">
                  Join our vibrant student fraternity across Engineering, Nursing, Pharmacy, Agriculture, and Management. Gain national opportunities and government certifications.
                </p>
              </div>

              {/* Merged 6 High-Value Student Benefits Grid (Compact & Snug) */}
              <div className="order-3 sm:order-none w-full grid grid-cols-1 sm:grid-cols-2 gap-1.5 xs:gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-2.5">

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">Govt. 'B' & 'C' Certification</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Official Ministry certificates providing weightage in government recruitments and academic credits.
                    </p>
                  </div>
                </div>

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">RD Parade Selection (New Delhi)</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Opportunity to march at the prestigious Republic Day Parade (RDC) at Kartavya Path representing MP.
                    </p>
                  </div>
                </div>

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">10+ Active Activity Wings</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Participate in tree plantation, mega blood donation drives, village literacy, and street theatre (Nukkad Natak).
                    </p>
                  </div>
                </div>

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">Leadership & Event Management</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Lead large-scale community drives, inter-college events, and coordinate volunteer logistics.
                    </p>
                  </div>
                </div>

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Tent className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">7-Days Rural Camp Immersion</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Experience rural life at adopted village Agariya Chopda, build lifelong friendships, and solve ground issues.
                    </p>
                  </div>
                </div>

                <div className="p-2 xs:p-2.5 lg:p-2.5 xl:p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 lg:gap-2.5 hover:border-orange-200 transition">
                  <div className="w-7 h-7 lg:w-7.5 lg:h-7.5 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs lg:text-xs xl:text-sm font-bold text-slate-900">Empathy & Social Pride</h4>
                    <p className="text-[10.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Experience the warmth of rural India, mentor school children, and live our golden motto: "Not Me, But You".
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom CTA Button */}
              <div className="order-4 sm:order-none w-full pt-2 mt-2 border-t border-slate-100">
                <button
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto bg-[#0c1f44] hover:bg-orange-600 text-white font-bold px-4 xs:px-5 py-2 xs:py-2.5 rounded-xl text-xs transition-all inline-flex items-center justify-center gap-2 active:scale-98 whitespace-nowrap cursor-pointer"
                >
                  <span>🌟 Unlock Your Potential — Join NSS SGU</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 08 ANNUAL FLAGSHIP PROGRAM — NSS 7 DAYS SPECIAL UNIT CAMP (Synchronized with Home Page) */}
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
                <h2 className="text-[15px] xs:text-[17px] sm:text-3xl md:text-[28px] lg:text-2xl xl:text-[30px] 2xl:text-[35px] font-black text-white tracking-tight leading-tight whitespace-nowrap sm:whitespace-normal truncate sm:overflow-visible">
                  NSS 7 Days Special <span className="text-orange-400">Unit Camp</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Live within the adopted community, understand grassroots challenges, and contribute to sustainable rural development through active community immersion, leadership workshops, and cultural exchange.
                </p>
              </div>

              {/* Mobile Only (< sm: 320px, 375px, 425px): Camp Flyer Photo right below Heading & Para */}
              <div className="sm:hidden flex justify-center py-1">
                <div
                  onClick={() => { if (setActivePage) { setActivePage('special-camp'); } window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
                  onClick={() => { if (setActivePage) { setActivePage('special-camp'); } window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
                onClick={() => { if (setActivePage) { setActivePage('special-camp'); } window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
                      onClick={() => { if (setActivePage) { setActivePage('special-camp'); } window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

              {/* Right Column: Camp Flyer Image (Stretched to fill full height, zero bottom dead space) */}
              <div className="col-span-5 flex justify-end items-stretch self-stretch w-full">
                <div
                  onClick={() => { if (setActivePage) { setActivePage('special-camp'); } window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="relative rounded-2xl sm:rounded-3xl bg-slate-950 cursor-pointer group w-full h-full min-h-[260px] flex flex-col justify-center items-center border border-slate-800/80"
                  title="Click to view full 7-Day Special Camp details"
                >
                  <MovingBorderStroke outer={false} color="#ff6b00" rx={24} strokeWidth={2.5} duration={7000} lineLength={120} />

                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full h-full flex items-center justify-center p-2 bg-slate-950">
                    <img loading="lazy" decoding="async"
                      src="/assets/real_nss/camp-flyer.webp"
                      alt="NSS 7 Days Special Camp Official Flyer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 block"
                    />
                    <div className="absolute inset-0 bg-slate-950/15 group-hover:bg-transparent transition-colors rounded-2xl sm:rounded-3xl pointer-events-none"></div>
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

      {/* 09 OFFICIAL NSS VOLUNTEER PLEDGE */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-br from-slate-900 via-nss-blue-dark to-slate-900 text-white p-3.5 xs:p-5 sm:p-7 md:p-7 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl border border-slate-700 relative overflow-hidden">
          <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center space-y-2.5 xs:space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6">
            <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs lg:text-xs xl:text-sm font-black text-orange-400 uppercase tracking-widest bg-orange-500/20 px-2.5 xs:px-3 py-1 rounded-full border border-orange-400/30 inline-block whitespace-nowrap">
              NATIONAL SERVICE SCHEME PLEDGE
            </span>
            <h2 className="text-[18px] xs:text-[21px] min-[425px]:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-white">
              The NSS Volunteer Pledge
            </h2>
            <div className="p-3 xs:p-4 sm:p-6 lg:p-7 xl:p-9 bg-white/5 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-white/10 font-serif italic text-[11px] xs:text-[12.5px] min-[425px]:text-sm sm:text-base lg:text-lg xl:text-xl text-slate-200 leading-relaxed lg:leading-relaxed xl:leading-loose">
              "We, the volunteers of the National Service Scheme, solemnly pledge that we will uphold the dignity of human life, work relentlessly for national integration, serve the community without any bias of caste, creed or religion, and live by our golden motto: NOT ME, BUT YOU."
            </div>
            <p className="text-[9.5px] xs:text-[10.5px] sm:text-xs lg:text-sm text-slate-400">
              Recited solemnly at every morning assembly during our 7-Days Special Unit Rural Camp.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
