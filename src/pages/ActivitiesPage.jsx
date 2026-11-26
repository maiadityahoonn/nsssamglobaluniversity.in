import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Calendar, MapPin, Users, CheckCircle2, 
  ArrowRight, X, ExternalLink, Search, Flame, 
  Sparkles, Bell, ArrowUpRight, ChevronDown, SlidersHorizontal
} from 'lucide-react';
import { activitiesList, parseActivityDate } from '../data/nssData';
import { InstagramIcon } from '../components/common/SocialIcons';
import { useScrollLock } from '../hooks/useScrollLock';
import AnimatedCounter from '../components/common/AnimatedCounter';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function ActivitiesPage({ onOpenJoinModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalActivity, setActiveModalActivity] = useState(null);
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { amount: 0.2, once: false });

  // Lock background scroll completely when modal is open
  useScrollLock(Boolean(activeModalActivity));

  const categories = [
    'All', 'Orientation', 'Celebration', 'Education', 
    'Social Welfare', 'Winter Relief', 'Healthcare', 
    'Environment', 'Awareness', 'Sanitation', 'Flagship Camp'
  ];

  const availableYears = useMemo(() => {
    const years = new Set(activitiesList.map((item) => String(parseActivityDate(item.date).year)));
    return ['All', ...Array.from(years).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredActivities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return activitiesList
      .map((item) => ({ item, parsed: parseActivityDate(item.date) }))
      .filter(({ item, parsed }) => {
        const matchesCategory = selectedCategory === 'All' ||
          item.category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesYear = selectedYear === 'All' || String(parsed.year) === selectedYear;
        const matchesMonth = selectedMonth === 'All' || String(parsed.month) === selectedMonth;
        const matchesSearch = !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          (item.date && item.date.toLowerCase().includes(query)) ||
          (item.location && item.location.toLowerCase().includes(query));

        return matchesCategory && matchesYear && matchesMonth && matchesSearch;
      })
      .sort((a, b) =>
        sortOrder === 'newest'
          ? b.parsed.timestamp - a.parsed.timestamp
          : a.parsed.timestamp - b.parsed.timestamp
      )
      .map(({ item }) => item);
  }, [selectedCategory, selectedYear, selectedMonth, sortOrder, searchQuery]);

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedYear !== 'All' || selectedMonth !== 'All' || sortOrder !== 'newest';

  const resetAllFilters = () => {
    setSelectedCategory('All');
    setSelectedYear('All');
    setSelectedMonth('All');
    setSortOrder('newest');
    setSearchQuery('');
  };

  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-12 pb-12 sm:pb-20 pt-3 sm:pt-6">
      
      {/* 01 Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-nss-blue-dark via-nss-blue to-[#112652] text-white p-4 xs:p-5 sm:p-10 md:p-8 lg:p-7 xl:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-1.5 xs:space-y-2 sm:space-y-3 text-center sm:text-left">
            <span className="text-[8.5px] xs:text-[9.5px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest bg-orange-500/20 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-orange-400/30 inline-block whitespace-nowrap">
              COMMUNITY DRIVES & SOCIAL INITIATIVES
            </span>
            <h1 className="text-[19px] xs:text-[22px] min-[425px]:text-[25px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              Our Community <span className="text-orange-400">Activities</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-sm lg:text-base text-slate-300 leading-relaxed">
              50+ on-ground drives conducted annually by the student volunteers of SAM Global University, Bhopal.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Quick Impact Metrics Strip */}
      <section ref={statsRef} className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4">
          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-1.5 xs:gap-2 sm:gap-3 md:gap-2.5 lg:gap-2.5 xl:gap-3.5 min-w-0">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 shrink-0">
              <Flame className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-4.5 md:h-4.5" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:flex-1">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter
                  value="50+"
                  duration={1200}
                  suffixClassName="text-orange-500 font-black"
                  inView={isStatsInView}
                />
              </div>
              <div className="text-[10.5px] xs:text-[11px] sm:text-xs md:text-[10.5px] lg:text-[10.5px] xl:text-xs text-slate-500 font-medium leading-snug whitespace-normal mt-0.5 sm:mt-0" title="Annual Community Drives">Annual Community Drives</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-1.5 xs:gap-2 sm:gap-3 md:gap-2.5 lg:gap-2.5 xl:gap-3.5 min-w-0">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Users className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-4.5 md:h-4.5" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:flex-1">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter
                  value="1,000+"
                  duration={1300}
                  suffixClassName="text-blue-500 font-black"
                  inView={isStatsInView}
                />
              </div>
              <div className="text-[10.5px] xs:text-[11px] sm:text-xs md:text-[10.5px] lg:text-[10.5px] xl:text-xs text-slate-500 font-medium leading-snug whitespace-normal mt-0.5 sm:mt-0" title="Active Student Volunteers">Active Student Volunteers</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-1.5 xs:gap-2 sm:gap-3 md:gap-2.5 lg:gap-2.5 xl:gap-3.5 min-w-0">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <MapPin className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-4.5 md:h-4.5" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:flex-1">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter
                  value="10+"
                  duration={1100}
                  suffixClassName="text-emerald-500 font-black"
                  inView={isStatsInView}
                />
              </div>
              <div className="text-[10.5px] xs:text-[11px] sm:text-xs md:text-[10.5px] lg:text-[10.5px] xl:text-xs text-slate-500 font-medium leading-snug whitespace-normal mt-0.5 sm:mt-0" title="Adopted Gram Panchayats">Adopted Gram Panchayats</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 xs:p-3.5 sm:p-5 md:p-3 lg:p-3.5 xl:p-5 border border-slate-200 flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-1.5 xs:gap-2 sm:gap-3 md:gap-2.5 lg:gap-2.5 xl:gap-3.5 min-w-0">
            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0">
              <Sparkles className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 md:w-4.5 md:h-4.5" />
            </div>
            <div className="min-w-0 w-full sm:w-auto sm:flex-1">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-xl xl:text-2xl font-black text-slate-900 tracking-tight">
                <AnimatedCounter
                  value="100%"
                  duration={1400}
                  suffixClassName="text-amber-500 font-black"
                  inView={isStatsInView}
                />
              </div>
              <div className="text-[10.5px] xs:text-[11px] sm:text-xs md:text-[10.5px] lg:text-[10.5px] xl:text-xs text-slate-500 font-medium leading-snug whitespace-normal mt-0.5 sm:mt-0" title="Student-Led Social Action">Student-Led Social Action</div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Upcoming Drive Alert Box (Orientation 4 December 2026) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0c1f44] via-[#122858] to-[#0c1f44] border border-blue-900/60 p-4 xs:p-5 sm:p-8 md:p-6 lg:p-6 xl:p-8 text-white relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 md:gap-4 xl:gap-6">
            <div className="space-y-2 sm:space-y-3 max-w-3xl w-full min-w-0">
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2 xs:px-3 py-0.5 xs:py-1 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-400 text-[8px] xs:text-[9px] min-[425px]:text-[10px] sm:text-xs font-bold tracking-wide max-w-full whitespace-nowrap">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-orange-400 animate-pulse shrink-0" />
                UPCOMING CAMPUS DRIVE • OFFICIAL ANNOUNCEMENT
              </div>
              <h2 className="text-[17px] xs:text-[19px] min-[425px]:text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-black text-white tracking-tight leading-tight">
                NSS Mega Orientation Program 2026
              </h2>
              <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-300 leading-relaxed">
                Welcome induction ceremony and interactive roadmap session for all newly enrolled students across Engineering, Pharmacy, Nursing, Agriculture, Management, and Sciences. Learn how to participate in blood drives, state leadership camps, and earn recognized Government NSS certifications.
              </p>
              <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-3 text-xs text-slate-200 pt-1 w-full">
                <span className="flex items-center gap-1 bg-white/10 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-lg border border-white/10 font-semibold text-[9.5px] xs:text-[10.5px] sm:text-xs whitespace-nowrap">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                  <span>4 December 2026</span>
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-lg border border-white/10 font-semibold text-[9.5px] xs:text-[10.5px] sm:text-xs whitespace-nowrap">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                  <span>SGU Auditorium, Bhopal</span>
                </span>
                <span className="flex items-center gap-1 bg-white/10 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-lg border border-white/10 font-semibold text-[9.5px] xs:text-[10.5px] sm:text-xs whitespace-nowrap">
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                  <span>Open to All 1st & 2nd Year Students</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={onOpenJoinModal}
                className="px-5 sm:px-6 md:px-4.5 lg:px-5 xl:px-6 py-2.5 sm:py-3 md:py-2.5 lg:py-2.5 xl:py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-2 border border-orange-400/30 cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>Register for Orientation</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <span className="text-[11px] text-slate-400 text-center md:text-left">
                Free participation for all SGU cadets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Search & Filter Controls */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 space-y-3.5 sm:space-y-4">
        {/* Search Bar + Filter Options */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-3 bg-white p-2.5 xs:p-3 sm:p-4 rounded-2xl border border-slate-200">
          <div className="relative flex-1 min-w-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 xs:left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search activities by name, keyword, or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 xs:pl-10 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-[11.5px] xs:text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Inline Filter Controls (Year, Month, Sort) */}
          <div className="grid grid-cols-2 min-[400px]:grid-cols-3 sm:flex sm:flex-wrap items-center gap-1.5 xs:gap-2 shrink-0">
            <div className="relative min-w-0">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                aria-label="Filter by year"
                className="w-full sm:w-auto appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-2.5 xs:pl-3 pr-7 py-2 text-[11px] xs:text-xs font-bold text-slate-700 focus:outline-none focus:border-orange-500 transition cursor-pointer"
              >
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr === 'All' ? 'All Years' : yr}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>

            <div className="relative min-w-0">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                aria-label="Filter by month"
                className="w-full sm:w-auto appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-2.5 xs:pl-3 pr-7 py-2 text-[11px] xs:text-xs font-bold text-slate-700 focus:outline-none focus:border-orange-500 transition cursor-pointer"
              >
                <option value="All">All Months</option>
                {MONTH_LABELS.map((label, idx) => (
                  <option key={label} value={String(idx)}>
                    {label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>

            <div className="relative min-w-0 col-span-2 min-[400px]:col-span-1">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                aria-label="Sort activities"
                className="w-full sm:w-auto appearance-none bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl pl-2.5 xs:pl-3 pr-7 py-2 text-[11px] xs:text-xs font-bold text-slate-700 focus:outline-none focus:border-orange-500 transition cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetAllFilters}
              className="self-end lg:self-auto text-[11px] xs:text-xs font-bold text-orange-600 hover:underline px-1 cursor-pointer shrink-0"
            >
              Reset
            </button>
          )}
        </div>

        {/* Mobile Category Filter Dropdown (< sm) */}
        <div className="relative sm:hidden w-full">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter activities by category"
            className="w-full appearance-none bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 pr-9 text-xs font-bold text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-500 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Desktop/Tablet Category Filter Pills (sm+) */}
        <div className="hidden sm:flex sm:flex-wrap items-center gap-2 lg:gap-1.5 xl:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 lg:px-2.5 xl:px-4 py-2 lg:py-1.5 rounded-full text-xs lg:text-[10.5px] xl:text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-orange-500 text-white scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 05 Activities Grid */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        {filteredActivities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 xs:gap-4 sm:gap-6 lg:gap-3 xl:gap-6">
            {filteredActivities.map((act) => (
              <motion.div
                layout
                key={act.id}
                onClick={() => setActiveModalActivity(act)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-orange-300 transition-colors group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative sm:aspect-square w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img loading="lazy" decoding="async"
                    src={act.image}
                    alt={act.title}
                    className="w-full h-auto sm:h-full object-contain sm:object-cover group-hover:scale-105 transition-transform duration-500 block"
                  />
                  <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-sm text-[9.5px] xs:text-[10px] sm:text-[11px] font-bold text-slate-800 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-slate-200 truncate max-w-[85%] whitespace-nowrap">
                    {act.category}
                  </span>
                  <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-slate-900/80 backdrop-blur-sm text-[9px] xs:text-[9.5px] sm:text-[10px] font-bold text-white px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full border border-white/10">
                    {act.date}
                  </span>
                </div>

                <div className="p-3 xs:p-3.5 sm:p-5 lg:p-3 xl:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm xs:text-base lg:text-[12.5px] xl:text-base font-bold text-slate-900 group-hover:text-orange-600 transition truncate whitespace-nowrap" title={act.title}>
                      {act.title}
                    </h3>
                    <p className="text-xs lg:text-[10.5px] xl:text-xs text-slate-500 mt-1.5 sm:mt-2 line-clamp-2 leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 gap-1">
                    <span className="flex items-center gap-1 text-[10.5px] xs:text-[11px] sm:text-xs lg:text-[10px] xl:text-xs truncate whitespace-nowrap min-w-0">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" /> {act.location}
                    </span>
                    <span className="text-orange-600 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center text-xs shrink-0 ml-1 whitespace-nowrap">
                      Learn ›
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No activities found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find any activities matching your current search or filters. Try another keyword or reset all filters.
            </p>
            <button
              onClick={resetAllFilters}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Show All Activities
            </button>
          </div>
        )}
      </section>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {activeModalActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
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
              className="relative w-full max-w-4xl lg:max-w-5xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-y-auto md:overflow-hidden z-10 max-h-[80vh] sm:max-h-[90vh] flex flex-col md:flex-row shadow-none min-h-0"
            >
              {/* Mobile Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalActivity(null)}
                className="md:hidden absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Poster Image Fully Visible with object-contain */}
              <div className="w-full md:w-5/12 lg:w-5/12 relative bg-slate-950 flex items-center justify-center overflow-hidden shrink-0 min-h-[160px] xs:min-h-[180px] sm:min-h-[300px] md:min-h-full p-2 xs:p-2.5 sm:p-4">
                <img loading="lazy" decoding="async"
                  src={activeModalActivity.image}
                  alt={activeModalActivity.title}
                  className="w-full h-full max-h-[190px] xs:max-h-[220px] sm:max-h-[380px] md:max-h-[500px] object-contain rounded-xl"
                />
              </div>

              {/* Right Column: All Content & Actions */}
              <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-between md:overflow-y-auto p-3.5 xs:p-4 pb-5 xs:pb-6 sm:p-6 lg:p-7 bg-white md:max-h-[90vh] min-h-0">
                <div className="space-y-2.5 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-orange-600 bg-orange-50 px-2 xs:px-2.5 py-0.5 sm:py-1 rounded-md border border-orange-200 inline-block mb-1 sm:mb-1.5">
                        {activeModalActivity.category}
                      </span>
                      <h3 className="text-base xs:text-lg sm:text-2xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                        {activeModalActivity.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] xs:text-xs text-slate-600 mt-1.5 sm:mt-2">
                        {activeModalActivity.location && (
                          <div className="flex items-center gap-1.5 text-slate-500">
                            <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                            <span>{activeModalActivity.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{activeModalActivity.date}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setActiveModalActivity(null)}
                      className="hidden md:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 items-center justify-center transition shrink-0 cursor-pointer"
                      aria-label="Close dialog"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Activity Overview</h4>
                    <p className="text-[11.5px] xs:text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeModalActivity.description}
                    </p>
                  </div>

                  {activeModalActivity.highlights && activeModalActivity.highlights.length > 0 && (
                    <div className="space-y-1.5 sm:space-y-2">
                      <h4 className="text-[10.5px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">Key Highlights</h4>
                      <div className="space-y-1 sm:space-y-1.5">
                        {activeModalActivity.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11.5px] xs:text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3.5 sm:pt-5 pb-3 sm:pb-0 mt-3.5 sm:mt-5 border-t border-slate-100 flex flex-nowrap items-center justify-between gap-2">
                  {activeModalActivity.instagram ? (
                    <a
                      href={activeModalActivity.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10.5px] xs:text-xs font-bold text-pink-600 hover:text-pink-700 bg-pink-50 hover:bg-pink-100/80 px-2.5 xs:px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition border border-pink-200 whitespace-nowrap min-w-0"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pink-600 shrink-0" />
                      <span className="truncate">View Reel / Post on Instagram</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                  ) : <div />}
                  <button
                    onClick={() => setActiveModalActivity(null)}
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

      {/* 06 Bottom Join CTA */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-nss-blue-dark via-nss-blue to-[#132857] text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-10 lg:p-7 xl:p-10 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-6 border border-blue-900/40">
          <div className="space-y-1 sm:space-y-2 text-center sm:text-left">
            <h3 className="text-[17px] xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-black leading-snug">
              Want to take part in our upcoming campus drives?
            </h3>
            <p className="text-[11px] xs:text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-300 leading-relaxed">
              Join the NSS volunteer squad at SAM Global University and make an impactful difference.
            </p>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="px-5 sm:px-7 lg:px-6 xl:px-7 py-2 sm:py-3 lg:py-2.5 xl:py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-xs sm:text-sm transition flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Join Orange Army</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </section>

    </div>
  );
}
