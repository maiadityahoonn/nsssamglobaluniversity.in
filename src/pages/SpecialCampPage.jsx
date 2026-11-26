import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Tent, Clock, MapPin, CheckCircle2, Users, Award, Shield, ArrowRight, 
  Sparkles, Download, FileText, Check, AlertCircle, Heart, Music, 
  Sun, Moon, Sunrise, Sunset, BookOpen, Coffee, X, Printer, Compass,
  Shirt, Utensils, Bed, Pill, CheckSquare, ExternalLink, UserPlus
} from 'lucide-react';
import { specialCampDays, universityInfo } from '../data/nssData';
import AnimatedCounter from '../components/common/AnimatedCounter';
import MovingBorderStroke from '../components/common/MovingBorderStroke';
import { useScrollLock } from '../hooks/useScrollLock';

function SpecialCampPage({ onOpenJoinModal }) {
  const [showNocModal, setShowNocModal] = useState(false);
  const [selectedDayTab, setSelectedDayTab] = useState('Day 01');

  const metricsRef = useRef(null);
  const isMetricsInView = useInView(metricsRef, { amount: 0.2, once: false });

  // Lock background scroll completely when modal is open
  useScrollLock(Boolean(showNocModal));

  const dailySchedule = [
    {
      time: '05:30 AM',
      period: 'Morning Dawn',
      title: 'Morning Yoga, Prabhat Pheri & PT Drill',
      desc: 'Wake-up siren, morning physical training, yogasanas, Surya Namaskar, and patriotic assembly to start the day with vigor.',
      icon: Sunrise,
      badge: 'Fitness & Mind'
    },
    {
      time: '09:00 AM',
      period: 'Field Session',
      title: 'Community Project Work & Shramdaan',
      desc: 'Active on-ground labor in adopted village Agariya Chopda: drain desilting, plantation, door-to-door literacy, and sanitation surveys.',
      icon: Sun,
      badge: 'Field Shramdaan'
    },
    {
      time: '02:00 PM',
      period: 'Afternoon Academy',
      title: 'Skill Development & Guest Lectures',
      desc: 'Interactive lectures by district officers and professors on disaster management, first aid, rural sociology, and leadership ethics.',
      icon: BookOpen,
      badge: 'Knowledge & Leadership'
    },
    {
      time: '06:00 PM',
      period: 'Evening Twilight',
      title: 'Cultural Evenings, Nukkad Natak & Campfire',
      desc: 'Social awareness street plays, patriotic folk performances, talent exchange with local youth, daily diary review, and debriefing.',
      icon: Moon,
      badge: 'Heritage & Unity'
    }
  ];

  const packingChecklist = [
    {
      id: 'bedding',
      category: '1. Bedding Essentials',
      icon: Bed,
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      items: [
        'Heavy Floor Dari / Mat (Sleeping Carpet & Rug)',
        'Personal Bedsheet & Soft Pillow',
        'Warm Blanket or Comforter for winter nights'
      ]
    },
    {
      id: 'utensils',
      category: '2. Utensils for Daily Mess',
      icon: Utensils,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      items: [
        'Stainless Steel Dinner Plate',
        'Steel Curry Bowl & Spoon',
        'Steel Glass / Mug & Personal Water Bottle'
      ]
    },
    {
      id: 'clothing',
      category: '3. Specialized Clothing',
      icon: Shirt,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      items: [
        'Field Work: MY BHARAT Cap, Tracksuit & Sports Shoes',
        'Cultural Night: Traditional Wear (Kurta / Saree / Suit)',
        'Winter Wear: Sweaters, Warm Jackets & Socks'
      ]
    },
    {
      id: 'hygiene',
      category: '4. Health & Hygiene Kit',
      icon: Pill,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      items: [
        'Personal Medicines & Glucose Packets',
        'Soap, Toothbrush, Toothpaste & Sanitizer',
        'Odomos / Mosquito Cream & Sanitary Essentials'
      ]
    },
    {
      id: 'study',
      category: '5. Study & Camp Material',
      icon: FileText,
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      items: [
        'Camp Field Diary / Notebook & Writing Pens',
        'Chart Sheets & Sketch Pens for Awareness Posters',
        'LED Torch with Extra Batteries & Extension Board'
      ]
    },
    {
      id: 'music',
      category: '6. Musical Spirit',
      icon: Music,
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      items: [
        'Dholak, Manjira, Harmonium or Flute',
        'Acoustic Guitar / Percussions (if you play)',
        'Campfire folk songs & patriotic anthem enthusiasm'
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-12 pb-8 sm:pb-14 md:pb-10 lg:pb-12 xl:pb-16 pt-3 sm:pt-6">
      
      {/* 01 Hero Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-slate-900 via-nss-blue-dark to-slate-900 text-white p-4 xs:p-5 sm:p-10 md:p-8 lg:p-8 xl:p-12 relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-6xl space-y-2 xs:space-y-2.5 sm:space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[7.5px] xs:text-[8.5px] min-[425px]:text-[9.5px] sm:text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-400/30 uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
              <Tent className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> ANNUAL FLAGSHIP PROGRAM • NOT ME BUT YOU
            </span>
            <h1 className="text-[17px] xs:text-[20px] min-[425px]:text-[23px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-[46px] font-black text-white tracking-tight leading-tight">
              NSS 7 Days Special <span className="text-orange-400">Unit Camp</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-[13px] lg:text-sm xl:text-[15.5px] text-slate-300 font-normal leading-relaxed max-w-4xl mx-auto sm:mx-0">
              Annual residential immersion program organized by NSS SAM Global University at Adopted Village Agariya Chopda, Raisen. Seven days of real grassroots community service, leadership training, and transformative rural bonding.
            </p>

            <div className="flex flex-nowrap sm:flex-wrap justify-center sm:justify-start items-center gap-1.5 xs:gap-2 sm:gap-4 pt-1 sm:pt-2 w-full max-w-full overflow-hidden sm:overflow-visible">
              <button
                onClick={onOpenJoinModal}
                className="px-2.5 xs:px-3 sm:px-6 md:px-4 lg:px-5 xl:px-6 py-1.5 xs:py-2 sm:py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-[9px] xs:text-[10px] min-[425px]:text-[11px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 border border-orange-400/30 cursor-pointer min-w-0"
              >
                <span className="truncate">Join NSS to Participate</span>
                <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>
              <button
                onClick={() => setShowNocModal(true)}
                className="px-2.5 xs:px-3 sm:px-5 md:px-3.5 lg:px-4 xl:px-5 py-1.5 xs:py-2 sm:py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl text-[9px] xs:text-[10px] min-[425px]:text-[11px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 border border-white/15 cursor-pointer min-w-0"
              >
                <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-400 shrink-0" />
                <span className="truncate">Download Parent NOC</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Key Ground Information Strip */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 md:p-3.5 lg:p-4 xl:p-6 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-3 lg:gap-3 xl:gap-4">
          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 md:gap-2.5 lg:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100 mt-0.5 sm:mt-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] sm:text-[9.5px] md:text-[8.5px] lg:text-[9px] xl:text-[10px] uppercase font-bold text-slate-400">Adopted Village Location</div>
              <div className="text-xs sm:text-sm md:text-[11.5px] lg:text-xs xl:text-sm font-black text-slate-900 leading-tight mt-0.5">Gram Panchayat Agariya Chopda</div>
              <div className="text-[10px] sm:text-[10.5px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 leading-tight mt-0.5">District Raisen (M.P.) • Near SGU Campus</div>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 md:gap-2.5 lg:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100 mt-0.5 sm:mt-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] sm:text-[9.5px] md:text-[8.5px] lg:text-[9px] xl:text-[10px] uppercase font-bold text-slate-400">Cadet Intake & Batch</div>
              <div className="text-xs sm:text-sm md:text-[11.5px] lg:text-xs xl:text-sm font-black text-slate-900 leading-tight mt-0.5">100 Selected Volunteers</div>
              <div className="text-[10px] sm:text-[10.5px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 leading-tight mt-0.5">All University Wings • Equal Representation</div>
            </div>
          </div>

          <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 md:gap-2.5 lg:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5 sm:mt-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[9px] sm:text-[9.5px] md:text-[8.5px] lg:text-[9px] xl:text-[10px] uppercase font-bold text-slate-400">Official Certification Value</div>
              <div className="text-xs sm:text-sm md:text-[11.5px] lg:text-xs xl:text-sm font-black text-slate-900 leading-tight mt-0.5">120 Service Hours Certified</div>
              <div className="text-[10px] sm:text-[10.5px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 leading-tight mt-0.5">Mandatory for NSS 'B' & 'C' Grade Certificate</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Official Announcement Flyer Showcase with Left & Right Content */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-5 lg:p-7 xl:p-10 border border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-5 sm:mb-8 md:mb-5 lg:mb-8">
            <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 sm:mb-2">
              OFFICIAL ANNOUNCEMENT FLYER
            </span>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold text-[#0c1f44] tracking-tight">
              Official Camp Bulletin & Schedule
            </h2>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Authorized residential 7-day camp circular issued by the NSS Advisory Committee, SAM Global University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-3 lg:gap-4 xl:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="md:col-span-4 space-y-2.5 sm:space-y-3.5 md:space-y-2.5 lg:space-y-3 xl:space-y-3.5">
              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-orange-600 font-bold text-xs md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
                  <span>Gram Panchayat Immersion</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900">
                  Adopted Village Agariya Chopda
                </h3>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  Cadets live in the adopted rural community, conducting house-to-house demographic surveys, cleanliness shramdaan, and literacy drives.
                </p>
              </div>

              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-bold text-xs md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-wide">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
                  <span>Free Health & Ayurvedic Clinic</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900">
                  Rural Wellness Camp
                </h3>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  Organized jointly with SAM Ayurvedic Hospital, offering free diagnostic checkups, BP/Sugar screening, and medicines to village families.
                </p>
              </div>

              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-emerald-600 font-bold text-xs md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
                  <span>Digital Literacy & Governance</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900">
                  MY BHARAT & UPI Enablement
                </h3>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  Training rural youth and women self-help groups on mobile digital banking, government welfare schemes, and cyber safety.
                </p>
              </div>
            </div>

            {/* Center Column: Flyer with Compact Height & Moving Border */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 group max-w-[240px] sm:max-w-[280px] md:max-w-[200px] lg:max-w-[230px] xl:max-w-[290px] w-full">
                {/* Continuous Moving Solid Orange Border Line */}
                <MovingBorderStroke outer={false} color="#ff6b00" rx={24} strokeWidth={2.5} duration={7000} lineLength={120} />
                
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden w-full h-full flex items-center justify-center bg-slate-950">
                  <img loading="lazy" decoding="async"
                    src="/assets/real_nss/camp-flyer.webp"
                    alt="NSS 7 Days Special Unit Camp Official Flyer SAM Global University"
                    className="w-full h-auto max-h-[340px] sm:max-h-[390px] md:max-h-[300px] lg:max-h-[330px] xl:max-h-[390px] object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="md:col-span-4 space-y-2.5 sm:space-y-3.5 md:space-y-2.5 lg:space-y-3 xl:space-y-3.5">
              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-amber-600 font-bold text-xs md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
                  <span>Certified Academic Credits</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900">
                  120 Hours Service Recognition
                </h3>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  Successful camp completion is accredited on student transcripts under NEP 2020 and qualifies cadets for NSS 'B' & 'C' certificates.
                </p>
              </div>

              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-1.5 sm:gap-2 text-purple-600 font-bold text-xs md:text-[10px] lg:text-[11px] xl:text-xs uppercase tracking-wide">
                  <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 shrink-0" />
                  <span>Cultural Harmony & Campfire</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900">
                  Nukkad Natak & Folk Nights
                </h3>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  Nightly cultural assemblies, street theatre tackling drug addiction and cleanliness, folk dance, and motivational campfire talks.
                </p>
              </div>

              <div className="p-3.5 sm:p-5 md:p-2.5 lg:p-3.5 xl:p-5 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between gap-2 text-[10px] xs:text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-xs font-black text-orange-700 uppercase whitespace-nowrap">
                  <span>Cadet Documentation</span>
                  <span>100 Volunteers</span>
                </div>
                <p className="text-xs md:text-[10px] lg:text-[11px] xl:text-xs text-slate-700 leading-relaxed">
                  Submit the official parent consent form (NOC) and verify your nomination prior to camp departure.
                </p>
                <div className="pt-0.5">
                  <button
                    onClick={() => setShowNocModal(true)}
                    className="w-full py-1.5 sm:py-2 md:py-1.5 lg:py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-xs md:text-[11px] lg:text-xs transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Parent NOC</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 04 Interactive Scroll Metrics Strip */}
      <section ref={metricsRef} className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4">
          <div className="bg-white p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 rounded-2xl border border-slate-200 text-center min-w-0">
            <Clock className="w-5 h-5 text-orange-500 mx-auto mb-1 sm:mb-1.5 md:mb-1" />
            <div className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight">
              0<AnimatedCounter value="7" duration={1000} inView={isMetricsInView} suffixClassName="text-orange-500 font-black ml-0.5 sm:ml-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg" />
              <span className="text-orange-500 text-xs sm:text-sm md:text-xs lg:text-sm font-black"> Days</span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 font-medium leading-snug sm:truncate" title="24×7 Residential Immersion">24×7 Residential Immersion</p>
          </div>

          <div className="bg-white p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 rounded-2xl border border-slate-200 text-center min-w-0">
            <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-1 sm:mb-1.5 md:mb-1" />
            <div className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="10+" duration={1200} inView={isMetricsInView} suffixClassName="text-blue-600 font-black" />
            </div>
            <p className="text-[10.5px] xs:text-[11px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 font-medium leading-snug sm:truncate" title="Gram Panchayats Benefited">Gram Panchayats Benefited</p>
          </div>

          <div className="bg-white p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 rounded-2xl border border-slate-200 text-center min-w-0">
            <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1 sm:mb-1.5 md:mb-1" />
            <div className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="100" duration={1100} inView={isMetricsInView} suffixClassName="text-emerald-600 font-black" />
            </div>
            <p className="text-[10.5px] xs:text-[11px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 font-medium leading-snug sm:truncate" title="Cadets in Strict Discipline">Cadets in Strict Discipline</p>
          </div>

          <div className="bg-white p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 rounded-2xl border border-slate-200 text-center min-w-0">
            <Award className="w-5 h-5 text-amber-500 mx-auto mb-1 sm:mb-1.5 md:mb-1" />
            <div className="text-xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight">
              <AnimatedCounter value="120" duration={1300} inView={isMetricsInView} suffixClassName="text-amber-500 font-black" />
              <span className="text-amber-500 text-xs sm:text-sm md:text-xs lg:text-sm font-black"> Hrs</span>
            </div>
            <p className="text-[10.5px] xs:text-[11px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11px] text-slate-500 mt-0.5 font-medium leading-snug sm:truncate" title="Certified Academic Credits">Certified Academic Credits</p>
          </div>
        </div>
      </section>

      {/* 05 Three Core Pillars of Special Camp */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-3 lg:gap-4 xl:gap-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-8 md:p-4 lg:p-5 xl:p-8 border border-slate-200 flex flex-col justify-between group hover:border-orange-300 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center font-black text-xs sm:text-lg md:text-sm lg:text-base xl:text-lg sm:mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                  01
                </div>
                <h3 className="text-[14.5px] xs:text-base sm:text-xl md:text-[14px] lg:text-[15.5px] xl:text-xl font-bold text-slate-900 sm:mb-2 group-hover:text-orange-600 transition leading-snug">
                  Village Adoption & Grassroots Life
                </h3>
              </div>
              <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                Live within the rural community of Agariya Chopda, understand grassroots challenges, and build empathy while bridging urban-rural youth perspectives through daily interactions.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 md:mt-3 pt-2.5 sm:pt-3.5 md:pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs md:text-[11px] lg:text-xs font-bold text-orange-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>Real Rural Ground Immersion</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-8 md:p-4 lg:p-5 xl:p-8 border border-slate-200 flex flex-col justify-between group hover:border-blue-300 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-black text-xs sm:text-lg md:text-sm lg:text-base xl:text-lg sm:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                  02
                </div>
                <h3 className="text-[14.5px] xs:text-base sm:text-xl md:text-[14px] lg:text-[15.5px] xl:text-xl font-bold text-slate-900 sm:mb-2 group-hover:text-blue-600 transition leading-snug">
                  Leadership, First Aid & Disaster Drills
                </h3>
              </div>
              <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                Daily interactive workshops covering emergency first aid, CPR demonstrations, disaster rescue maneuvers, public speaking, conflict resolution, and self-governance.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 md:mt-3 pt-2.5 sm:pt-3.5 md:pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs md:text-[11px] lg:text-xs font-bold text-blue-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Hands-on Crisis Leadership</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-8 md:p-4 lg:p-5 xl:p-8 border border-slate-200 flex flex-col justify-between group hover:border-emerald-300 transition-colors">
            <div>
              <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-black text-xs sm:text-lg md:text-sm lg:text-base xl:text-lg sm:mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  03
                </div>
                <h3 className="text-[14.5px] xs:text-base sm:text-xl md:text-[14px] lg:text-[15.5px] xl:text-xl font-bold text-slate-900 sm:mb-2 group-hover:text-emerald-600 transition leading-snug">
                  Cultural Exchange & Street Plays
                </h3>
              </div>
              <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 leading-relaxed">
                Evening campfire gatherings, traditional patriotic folk music, street theatre (Nukkad Natak) on social awareness, and celebrating India's rich cultural diversity together.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 md:mt-3 pt-2.5 sm:pt-3.5 md:pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] xs:text-xs md:text-[11px] lg:text-xs font-bold text-emerald-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Cultural Harmony & Unity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 Daily Camp Schedule Routine */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-5 lg:p-7 xl:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10 md:mb-6 lg:mb-10">
            <span className="text-xs font-extrabold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5 sm:mb-2">
              DAILY ROUTINE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold text-[#0c1f44] tracking-tight">
              24-Hour Daily Camp Schedule
            </h2>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Disciplined routine practiced every single day of the 7-day residential camp by all participating cadets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-3 lg:gap-4 xl:gap-6">
            {dailySchedule.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-3.5 sm:p-5 md:p-3 lg:p-4 xl:p-5 border border-slate-200 flex items-start gap-3 sm:gap-4 md:gap-3 lg:gap-4 hover:border-orange-300 transition"
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 xs:gap-2">
                      <span className="text-[11px] xs:text-xs md:text-[11px] lg:text-xs font-black text-orange-600 tracking-wider whitespace-nowrap shrink-0">
                        {s.time}
                      </span>
                      <span className="text-[9px] xs:text-[10px] md:text-[9.5px] lg:text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {s.badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-500 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 Complete 7-Day Day-by-Day Village Itinerary */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6 md:space-y-4 lg:space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs font-extrabold text-orange-500 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
            DAY-BY-DAY ITINERARY
          </span>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-[#0c1f44] mt-2">
            Complete 7 Days Village Transformation Agenda
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Structured week-long schedule executed by SAM Global University cadets at Adopted Village Agariya Chopda.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-4 md:space-y-2.5 lg:space-y-4">
          {specialCampDays.map((item) => (
            <div
              key={item.day}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-3.5 lg:p-4 xl:p-6 border border-slate-200 transition flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-6 md:gap-3 lg:gap-4 hover:border-orange-200"
            >
              <div className="flex items-start gap-2.5 sm:gap-4 md:gap-3 min-w-0 flex-1">
                <div className="w-12 h-10 xs:w-13 xs:h-11 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white font-black flex items-center justify-center flex-shrink-0 text-[10.5px] xs:text-[11px] sm:text-sm md:text-xs lg:text-xs xl:text-sm whitespace-nowrap px-1">
                  {item.day}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm sm:text-base md:text-sm lg:text-[14.5px] xl:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-[11px] lg:text-[11.5px] xl:text-sm text-slate-600 mt-0.5 sm:mt-1 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 self-start md:self-auto">
                <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs md:text-[10.5px] lg:text-xs font-bold bg-slate-100 text-slate-700 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Milestone Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 Mandatory Packing Kit & Instructions for Participants */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6 md:space-y-4 lg:space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
            CHECKLIST FOR VOLUNTEERS
          </span>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-[#0c1f44] mt-2">
            Camp Packing Essentials & Kit Checklist
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Every selected participant must bring these personal items as per the official advisory committee guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 md:gap-3 lg:gap-3.5 xl:gap-5">
          {packingChecklist.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-3.5 lg:p-4 xl:p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4 md:mb-2.5">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-xl flex items-center justify-center shrink-0 border ${cat.color}`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900 leading-snug">
                      {cat.category}
                    </h3>
                  </div>

                  <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-700">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 09 Safety, Code of Conduct & Responsibilities */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-5 lg:p-7 xl:p-10 border border-slate-200">
          <div className="max-w-3xl mb-4 sm:mb-6 md:mb-4 lg:mb-6">
            <span className="text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-1.5 sm:mb-2">
              SAFETY ADVISORY
            </span>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold text-[#0c1f44] tracking-tight">
              Camp Safety Rules & Code of Conduct
            </h2>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Strict rules to guarantee safety, discipline, and communal harmony throughout the 7 days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 xl:gap-5">
            <div className="p-3.5 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-2xl bg-red-50/70 border border-red-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>No Valuables or Gold</span>
              </div>
              <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Strictly do not bring gold jewellery, expensive electronics, or large amounts of cash. The university is not responsible for personal loss.
              </p>
            </div>

            <div className="p-3.5 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Self-Discipline & Belongings</span>
              </div>
              <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Participants are responsible for the safety of their own belongings and maintaining cleanliness in their designated campsite rooms.
              </p>
            </div>

            <div className="p-3.5 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Village Respect & Code</span>
              </div>
              <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Cadets must adhere to the daily schedule and treat village elders with utmost respect. Zero tolerance for indiscipline or unexcused departures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Action Box CTA */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-12 md:p-7 lg:p-8 xl:p-12 text-center relative overflow-hidden border border-orange-400">
          
          <div className="max-w-2xl mx-auto space-y-2 xs:space-y-2.5 sm:space-y-3">
            <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[7px] xs:text-[8px] min-[425px]:text-[9.5px] sm:text-xs font-black bg-white/20 text-white uppercase tracking-wider sm:tracking-widest backdrop-blur-sm border border-white/30 whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> ANNUAL UNIVERSITY TRADITION • RESIDENTIAL CAMP
            </span>
            <h2 className="text-[17px] xs:text-[19px] min-[425px]:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white tracking-tight leading-snug">
              Are you ready for the transformational journey?
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-orange-100 max-w-xl mx-auto leading-relaxed">
              Every year, NSS SAM Global University organizes this transformative 7-day residential camp at Adopted Village Agariya Chopda. Join the NSS volunteer squad to participate in this life-changing community experience.
            </p>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 mt-4 sm:mt-8 md:mt-5 lg:mt-8 w-full max-w-md mx-auto">
            <button
              onClick={onOpenJoinModal}
              className="flex-1 px-2.5 xs:px-4 sm:px-8 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-3.5 md:py-2.5 lg:py-3.5 bg-white text-orange-600 hover:bg-slate-50 font-black rounded-full text-[10px] xs:text-[11px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 cursor-pointer uppercase tracking-wider whitespace-nowrap min-w-0"
            >
              <UserPlus className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-600 shrink-0" />
              <span>Join NSS</span>
              <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 shrink-0" />
            </button>

            <button
              onClick={() => setShowNocModal(true)}
              className="flex-1 px-2.5 xs:px-4 sm:px-8 md:px-5 lg:px-6 xl:px-8 py-2 sm:py-3.5 md:py-2.5 lg:py-3.5 bg-transparent hover:bg-white/10 text-white font-bold rounded-full text-[10px] xs:text-[11px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 border-2 border-white cursor-pointer uppercase tracking-wider whitespace-nowrap min-w-0"
            >
              <Download className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white shrink-0" />
              <span>Download NOC</span>
            </button>
          </div>

        </div>
      </section>

      {/* 11 NOC Modal (Official Printable Form) */}
      <AnimatePresence>
        {showNocModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNocModal(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 overflow-hidden z-10 my-4 sm:my-6 max-h-[80vh] sm:max-h-[90vh] flex flex-col min-h-0"
            >
              {/* Modal Header */}
              <div className="bg-slate-900 text-white px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold">NSS Camp Parent Consent & NOC Form</h3>
                    <p className="text-[10px] sm:text-xs text-slate-400">SAM Global University • 7 Days Special Camp</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNocModal(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Printable Certificate Content */}
              <div id="printable-noc" className="p-4 sm:p-6 lg:p-7 space-y-4 overflow-y-auto text-slate-800 text-xs sm:text-sm min-h-0">
                
                {/* Official Letterhead */}
                <div className="text-center pb-3 border-b-2 border-slate-900">
                  <h2 className="text-base sm:text-lg font-black uppercase text-slate-900 tracking-tight">
                    SAM GLOBAL UNIVERSITY, BHOPAL
                  </h2>
                  <p className="text-[10px] sm:text-xs text-slate-600">
                    National Service Scheme (NSS SAM Global University) • Kolua, Raisen Road, Bhopal (M.P.)
                  </p>
                  <div className="inline-block bg-slate-100 font-extrabold text-[11px] sm:text-xs uppercase px-3 py-1 rounded-md mt-2 border border-slate-300">
                    PARENT / GUARDIAN NO OBJECTION CERTIFICATE (NOC)
                  </div>
                </div>

                <div className="space-y-2.5 leading-relaxed text-slate-700">
                  <p>
                    I, __________________________________________ (Parent/Guardian Name), father/mother/guardian of 
                    student __________________________________________ studying in Course/Year ____________________, 
                    Enrollment No. ________________________ at SAM Global University, hereby state that:
                  </p>
                  
                  <ol className="list-decimal ml-5 space-y-1 text-slate-600">
                    <li>I have granted full permission to my ward to attend and participate in the <strong>NSS 7 Days Special Camp</strong> at Adopted Village Agariya Chopda, Raisen (M.P.).</li>
                    <li>I understand that the camp is residential in nature and will be conducted in adopted rural village communities.</li>
                    <li>My ward is physically fit to take part in outdoor community physical training, shramdaan, and social surveys.</li>
                    <li>My ward agrees to abide by all disciplinary guidelines, code of conduct, and safety instructions given by the NSS Programme Officers.</li>
                  </ol>
                </div>

                {/* Signature Fields */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8 mt-4 border-t border-slate-200">
                  <div>
                    <div className="border-b border-slate-400 w-36 sm:w-44 mb-1"></div>
                    <p className="text-[11px] font-bold text-slate-800">Signature of Volunteer</p>
                    <p className="text-[10px] text-slate-500">Date: ______________</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <div className="border-b border-slate-400 w-36 sm:w-44 mb-1"></div>
                    <p className="text-[11px] font-bold text-slate-800">Signature of Parent / Guardian</p>
                    <p className="text-[10px] text-slate-500">Contact No: __________________</p>
                  </div>
                </div>

              </div>

              {/* Modal Footer Actions */}
              <div className="bg-slate-50 px-5 sm:px-6 py-3.5 sm:py-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 hidden sm:inline">Print this form, sign, and submit to NSS Office.</span>
                <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setShowNocModal(false)}
                    className="px-4 py-2 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-100 transition cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-5 py-2 bg-orange-600 text-white font-bold rounded-xl text-xs hover:bg-orange-700 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Form</span>
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

export default SpecialCampPage;
