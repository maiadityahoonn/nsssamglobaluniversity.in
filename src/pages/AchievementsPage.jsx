import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, X, Award, Building, Calendar, 
  Trophy, Medal, Star, ShieldCheck, CheckCircle2,
  Sparkles, ExternalLink, ChevronDown
} from 'lucide-react';
import { achievementsList } from '../data/nssData';
import { useScrollLock } from '../hooks/useScrollLock';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { InstagramIcon } from '../components/common/SocialIcons';

// Prominent Hall of Fame Cadets & Leaders
const hallOfFameCadets = [
  {
    name: "Prof. Ruchi Upadhyay",
    honor: "State NSS Award",
    level: "State Govt Honor",
    year: "2025",
    venue: "Higher Education Dept., Govt. of MP",
    image: "/assets/real_nss/state nss award activities.webp",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    desc: "Honored with the prestigious State Award by the Government of Madhya Pradesh for outstanding leadership and university community service."
  },
  {
    name: "Nilesh Thakur",
    honor: "Republic Day Parade (RDC)",
    level: "Highest NSS Honor",
    year: "2017",
    venue: "Kartavya Path / Rajpath, New Delhi",
    image: "/assets/real_nss/rdc camp 2017.webp",
    badgeColor: "bg-red-50 text-red-700 border-red-200",
    desc: "Represented SAM Global University marching in the national Republic Day Parade before the Hon'ble President and Prime Minister of India."
  },
  {
    name: "Chitranjan Singh",
    honor: "National Integration Camp (NIC)",
    level: "National Camp Delegate",
    year: "2022",
    venue: "Ministry of Youth Affairs, Govt. of India",
    image: "/assets/real_nss/nic 2022.webp",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    desc: "Represented SAM Global University at the prestigious National Integration Camp (NIC), fostering national unity, cultural exchange, and leadership among youth."
  },
  {
    name: "Ramdinesh Kumar",
    honor: "National Adventure Camp (NAC)",
    level: "High Altitude Adventure",
    year: "2022",
    venue: "Atal Bihari Vajpayee Mountaineering Inst.",
    image: "/assets/real_nss/national adventure camp 2022.webp",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    desc: "Completed rigorous high-altitude wilderness endurance and disaster preparedness training representing SGU at national adventure tier."
  }
];

export default function AchievementsPage({ onOpenJoinModal }) {
  const [selectedFilter, setSelectedFilter] = useState('All Honors');
  const [activeModalAch, setActiveModalAch] = useState(null);

  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { amount: 0.2, once: false });

  // Lock background scroll completely when modal is open
  useScrollLock(Boolean(activeModalAch));

  const filterOptions = [
    'All Honors',
    'National & International',
    'State Government',
    'Conclaves & Culture'
  ];

  const getCategoryGroup = (ach) => {
    const cat = (ach.category || '').toLowerCase();
    const badge = (ach.badge || '').toLowerCase();
    const title = (ach.title || '').toLowerCase();
    
    if (
      cat.includes('ministry') || 
      cat.includes('international') || 
      cat.includes('adventure') || 
      badge.includes('national') || 
      badge.includes('global') ||
      badge.includes('highest') ||
      badge.includes('pre-rd') ||
      title.includes('rdc') ||
      title.includes('nic') ||
      title.includes('nac')
    ) {
      return 'National & International';
    }
    if (
      cat.includes('madhya pradesh') || 
      cat.includes('state') || 
      badge.includes('state') ||
      badge.includes('leadership')
    ) {
      return 'State Government';
    }
    return 'Conclaves & Culture';
  };

  const filteredAchievements = selectedFilter === 'All Honors'
    ? achievementsList
    : achievementsList.filter(ach => getCategoryGroup(ach) === selectedFilter);

  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-12 pb-12 sm:pb-20 pt-3 sm:pt-6">
      
      {/* 01 Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-nss-blue-dark via-nss-blue to-[#132857] text-white p-4 xs:p-5 sm:p-10 md:p-8 lg:p-8 xl:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-1.5 xs:space-y-2 sm:space-y-3 text-center sm:text-left">
            <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/20 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-orange-400/30 inline-block whitespace-nowrap">
              HALL OF FAME & RECOGNITIONS
            </span>
            <h1 className="text-[18px] xs:text-[21px] min-[425px]:text-[24px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              Honouring Our <span className="text-orange-400">Achievements</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base text-slate-300 leading-relaxed">
              State, national, and international accolades earned through selfless, committed community service by the volunteers of SAM Global University.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Credibility Metrics Strip */}
      <section ref={statsRef} className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4">
          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 min-w-0 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-nss-blue tracking-tight">
                0<AnimatedCounter value="1" duration={1000} inView={isStatsInView} />
              </span>
              <Trophy className="w-4 h-4 xs:w-5 xs:h-5 text-amber-500 shrink-0" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 leading-snug sm:truncate" title="RDC Rajpath Cadet">RDC Rajpath Cadet</div>
              <div className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug sm:truncate" title="Republic Day Parade, New Delhi">Republic Day Parade, New Delhi</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 min-w-0 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-orange-600 tracking-tight">
                0<AnimatedCounter value="1" duration={1100} inView={isStatsInView} />
              </span>
              <Medal className="w-4 h-4 xs:w-5 xs:h-5 text-orange-500 shrink-0" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 leading-snug sm:truncate" title="MP State NSS Award">MP State NSS Award</div>
              <div className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug sm:truncate" title="Higher Education Dept., Govt. of MP">Higher Education Dept., Govt. of MP</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 min-w-0 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-emerald-600 tracking-tight">
                0<AnimatedCounter value="4+" duration={1200} inView={isStatsInView} suffixClassName="text-emerald-500 font-black" />
              </span>
              <Award className="w-4 h-4 xs:w-5 xs:h-5 text-emerald-500 shrink-0" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 leading-snug sm:truncate" title="National Integration (NIC)">National Integration (NIC)</div>
              <div className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug sm:truncate" title="Ministry of Youth Affairs, Govt. of India">Ministry of Youth Affairs, Govt. of India</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 min-w-0 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-blue-600 tracking-tight">
                0<AnimatedCounter value="3" duration={1150} inView={isStatsInView} />
              </span>
              <Star className="w-4 h-4 xs:w-5 xs:h-5 text-blue-500 shrink-0" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 leading-snug sm:truncate" title="State Leadership Camps">State Leadership Camps</div>
              <div className="text-[9.5px] xs:text-[10.5px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-snug sm:truncate" title="7-Days Residential State Training">7-Days Residential State Training</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Hall of Fame Cadet Spotlight */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200 inline-block mb-1.5">
              ELITE VOLUNTEERS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
              Hall of Fame <span className="text-nss-blue">Cadet Spotlight</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Honoring remarkable students and officers who represented SAM Global University on state, national, and international stages.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 xl:gap-6">
          {hallOfFameCadets.map((cadet, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between group hover:border-orange-300 transition-colors"
            >
              <div>
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img loading="lazy" decoding="async"
                    src={cadet.image}
                    alt={cadet.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-[10px] xs:text-[11px] lg:text-[9.5px] xl:text-[11px] font-bold text-slate-800 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-slate-200">
                    {cadet.level}
                  </span>
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 font-bold text-[10px] xs:text-xs lg:text-[9.5px] xl:text-xs text-nss-blue bg-blue-50/95 backdrop-blur-sm px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-blue-200">
                    {cadet.year}
                  </span>
                </div>

                <div className="p-3.5 xs:p-4 sm:p-5 lg:p-3 xl:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] lg:text-[8.5px] xl:text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1 truncate whitespace-nowrap" title={cadet.honor}>
                      {cadet.honor}
                    </span>
                    <h3 className="text-sm lg:text-[12.5px] xl:text-base font-bold text-slate-900 group-hover:text-orange-600 transition truncate whitespace-nowrap" title={cadet.name}>
                      {cadet.name}
                    </h3>
                    <div className="text-[11px] lg:text-[9.5px] xl:text-[11px] text-slate-400 flex items-center gap-1 mt-1 mb-2">
                      <Building className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate whitespace-nowrap">{cadet.venue}</span>
                    </div>
                    <p className="text-xs lg:text-[10.5px] xl:text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {cadet.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 xs:p-4 sm:p-5 lg:p-3 xl:p-5 pt-0">
                <div className="pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between gap-1">
                  <span className="text-emerald-600 font-bold flex items-center gap-1 whitespace-nowrap shrink-0 text-[9.5px] xs:text-[10px] lg:text-[8px] xl:text-[10.5px]">
                    <CheckCircle2 className="w-3 h-3 lg:w-2.5 lg:h-2.5 xl:w-3.5 xl:h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">University Pride</span>
                  </span>
                  <span className="text-slate-400 whitespace-nowrap shrink-0 text-[8.5px] xs:text-[9.5px] lg:text-[7.5px] xl:text-[10px]">Official Record</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 Filter Tabs & Awards Grid */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-8 xl:px-12 space-y-4 sm:space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4">
          <div className="max-w-xl">
            <h2 className="text-[19px] xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              All Official Recognitions & Milestones
            </h2>
            <p className="text-[11.5px] xs:text-xs text-slate-500 mt-1">
              Click any recognition card to view comprehensive details, certificates, and verified achievements.
            </p>
          </div>

          {/* Mobile Filter Dropdown (< sm) */}
          <div className="relative sm:hidden w-full">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              aria-label="Filter recognitions by category"
              className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-9 text-xs font-bold text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
            >
              {filterOptions.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          {/* Desktop/Tablet Filter Pills (sm+) */}
          <div className="hidden sm:flex sm:flex-wrap items-center gap-2 shrink-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 lg:px-2.5 xl:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  selectedFilter === filter
                    ? 'bg-orange-500 text-white scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 xl:gap-6">
          {filteredAchievements.map((ach) => (
            <div
              key={ach.id}
              onClick={() => setActiveModalAch(ach)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-colors flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative sm:aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img loading="lazy" decoding="async"
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-auto sm:h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-500 block"
                  />
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-[10px] xs:text-[11px] lg:text-[9.5px] xl:text-[11px] font-bold text-slate-800 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-slate-200">
                    {ach.badge}
                  </span>
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex items-center gap-1.5">
                    {ach.instagram && (
                      <span className="bg-white/95 backdrop-blur-sm p-1 rounded-full border border-pink-200 text-pink-600 inline-flex items-center justify-center" title="Instagram Post Available">
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </span>
                    )}
                    <span className="font-bold text-[10px] xs:text-xs lg:text-[9.5px] xl:text-xs text-nss-blue bg-blue-50/95 backdrop-blur-sm px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-blue-200">
                      {ach.year}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 xs:p-4 sm:p-5 lg:p-3 xl:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] lg:text-[8.5px] xl:text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1 truncate whitespace-nowrap" title={ach.category}>
                      {ach.category}
                    </span>
                    <h3 className="text-sm lg:text-[12.5px] xl:text-base font-bold text-slate-900 group-hover:text-orange-600 transition truncate whitespace-nowrap" title={ach.title}>
                      {ach.title}
                    </h3>
                    <p className="text-xs lg:text-[10.5px] xl:text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3.5 xs:p-4 sm:p-5 lg:p-3 xl:p-5 pt-0">
                <div className="pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 gap-1">
                  <span className="truncate whitespace-nowrap max-w-[180px] xs:max-w-[220px] sm:max-w-[130px] lg:max-w-[105px] xl:max-w-[160px] text-[11px] lg:text-[9.5px] xl:text-xs" title={ach.issuedBy}>{ach.issuedBy}</span>
                  <span className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center text-xs shrink-0 ml-1 whitespace-nowrap">
                    Details ›
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 NSS Certificate Value & Career Benefits */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-3.5 xs:p-4 sm:p-10 lg:p-7 xl:p-10 space-y-4 sm:space-y-6">
          <div className="max-w-3xl space-y-1.5 sm:space-y-2">
            <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 xs:px-2.5 py-1 rounded-md border border-orange-200 inline-block whitespace-nowrap">
              STUDENT CAREER & ACADEMIC VALUE
            </span>
            <h2 className="text-[18px] xs:text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Why NSS Certifications Matter For Your Future
            </h2>
            <p className="text-[11.5px] xs:text-xs sm:text-sm text-slate-500 leading-relaxed">
              Serving as an active NSS volunteer at SAM Global University opens direct career privileges, government recruitment weightage, and nationwide recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-5 lg:gap-3.5 xl:gap-5">
            <div className="p-3 xs:p-3.5 sm:p-5 lg:p-3.5 xl:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 sm:mb-2">
                  01
                </div>
                <h3 className="text-[13px] xs:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">Govt. Job Preference</h3>
              </div>
              <p className="text-[11px] xs:text-xs lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                NSS 'B' and 'C' Certificate holders receive weightage and bonus marks in state police, defense, and public service commission examinations.
              </p>
            </div>

            <div className="p-3 xs:p-3.5 sm:p-5 lg:p-3.5 xl:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-100 text-nss-blue flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 sm:mb-2">
                  02
                </div>
                <h3 className="text-[13px] xs:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">National RDC Parade</h3>
              </div>
              <p className="text-[11px] xs:text-xs lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Golden opportunity to march at Kartavya Path (Rajpath) on Republic Day and interact directly with the Hon'ble President and Prime Minister of India.
              </p>
            </div>

            <div className="p-3 xs:p-3.5 sm:p-5 lg:p-3.5 xl:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 sm:mb-2">
                  03
                </div>
                <h3 className="text-[13px] xs:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">NEP 2020 Academic Credits</h3>
              </div>
              <p className="text-[11px] xs:text-xs lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Under the National Education Policy, structured NSS community volunteer work is awarded formal academic grade credits in your degree transcript.
              </p>
            </div>

            <div className="p-3 xs:p-3.5 sm:p-5 lg:p-3.5 xl:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 sm:mb-2">
                  04
                </div>
                <h3 className="text-[13px] xs:text-sm lg:text-xs xl:text-sm font-bold text-slate-900">Executive Leadership</h3>
              </div>
              <p className="text-[11px] xs:text-xs lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                Real ground experience in disaster management, health camps, village surveys, and public communication that sets your resume apart in campus placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Detail Modal */}
      <AnimatePresence>
        {activeModalAch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
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
              className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-y-auto md:overflow-hidden z-10 max-h-[92vh] sm:max-h-[90vh] flex flex-col md:flex-row shadow-none min-h-0"
            >
              {/* Mobile Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalAch(null)}
                className="md:hidden absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Poster/Certificate Image with object-contain */}
              <div className="w-full md:w-5/12 lg:w-5/12 relative bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 min-h-[220px] xs:min-h-[260px] sm:min-h-[300px] md:min-h-full p-2.5 xs:p-3 sm:p-4">
                <img loading="lazy" decoding="async"
                  src={activeModalAch.image}
                  alt={activeModalAch.title}
                  className="w-full h-full max-h-[320px] sm:max-h-[380px] md:max-h-[500px] object-contain rounded-xl"
                />
              </div>

              {/* Right Column: All Content & Actions */}
              <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between md:overflow-y-auto p-3.5 xs:p-4 pb-5 xs:pb-6 sm:p-6 lg:p-7 bg-white md:max-h-[90vh] min-h-0">
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
                        <span className="text-[9px] xs:text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-orange-600 bg-orange-50 px-2 xs:px-2.5 py-0.5 sm:py-1 rounded-md border border-orange-200 inline-block">
                          {activeModalAch.category}
                        </span>
                        <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100 px-2 xs:px-2.5 py-0.5 sm:py-1 rounded-md border border-slate-200 inline-block whitespace-nowrap">
                          {activeModalAch.badge}
                        </span>
                        <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-extrabold text-nss-blue bg-blue-50 px-2 xs:px-2.5 py-0.5 sm:py-1 rounded-md border border-blue-200 inline-block whitespace-nowrap">
                          Year: {activeModalAch.year}
                        </span>
                      </div>
                      <h3 className="text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                        {activeModalAch.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-[11px] xs:text-xs text-slate-500 mt-1 sm:mt-1.5">
                        <Building className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>Issued By: <strong className="text-slate-700">{activeModalAch.issuedBy}</strong></span>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModalAch(null)}
                      className="hidden md:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 items-center justify-center transition shrink-0 cursor-pointer"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Award & Milestone Details</h4>
                    <p className="text-[11.5px] xs:text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeModalAch.description}
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between gap-2 text-[10.5px] xs:text-xs overflow-hidden">
                    <span className="text-slate-500 font-medium whitespace-nowrap shrink-0">Recognition Status:</span>
                    <span className="font-bold text-nss-blue flex items-center gap-1 min-w-0">
                      <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500 shrink-0" />
                      <span className="truncate">Verified State/National Record</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-5 pb-3 sm:pb-0 mt-3.5 sm:mt-5 border-t border-slate-100 flex flex-nowrap items-center justify-between gap-2">
                  {activeModalAch.instagram ? (
                    <a
                      href={activeModalAch.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10.5px] xs:text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100/80 px-2.5 xs:px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition border border-pink-200 whitespace-nowrap min-w-0"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 shrink-0" />
                      <span className="truncate">View Announcement on Instagram</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ) : <div />}
                  <button
                    onClick={() => setActiveModalAch(null)}
                    className="px-3.5 xs:px-4 sm:px-5 py-1.5 sm:py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] xs:text-xs font-bold transition ml-auto cursor-pointer whitespace-nowrap shrink-0"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 06 Stats Callout & Join CTA */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 lg:p-8 xl:p-10 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-6 border border-orange-400/40">
          <div className="space-y-1 sm:space-y-2 text-center sm:text-left">
            <h3 className="text-[17px] xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black leading-snug">
              Ready to create your own legacy of service?
            </h3>
            <p className="text-[11px] xs:text-xs sm:text-sm text-orange-100 leading-relaxed">
              Join the NSS wing at SAM Global University and represent your university at state and national camps.
            </p>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="px-5 sm:px-7 lg:px-6 xl:px-7 py-2 sm:py-3 bg-white text-orange-600 hover:bg-slate-100 font-black rounded-full text-xs sm:text-sm transition flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer whitespace-nowrap"
          >
            <span>Join Orange Army</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
