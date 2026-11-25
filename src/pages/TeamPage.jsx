import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, ArrowRight, ExternalLink, Code, ArrowDown, Award, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { programmeOfficer, councilLeaders, seniorCouncilLeaders, developerTeam } from '../data/nssData';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon, GithubIcon } from '../components/common/SocialIcons';
import AnimatedCounter from '../components/common/AnimatedCounter';

const getCouncilObjectPosition = (name) => {
  switch (name) {
    case 'Mandeep Bansal': return 'object-[center_8%]';
    case 'Ajay Machiya': return 'object-[center_18%]';
    case 'Nisha Prabhakar': return 'object-[center_18%]';
    case 'Rajat Sahu': return 'object-[center_18%]';
    case 'Krish Soni': return 'object-[center_18%]';
    default: return 'object-[center_20%]';
  }
};

const getSeniorObjectPosition = (name) => {
  switch (name) {
    case 'Om Chourey': return 'object-[center_14%]';
    case 'Anjay Pratap Singh': return 'object-[center_12%]';
    case 'Ayush Raj': return 'object-[center_8%]';
    case 'Sumit Lodhi': return 'object-[center_12%]';
    case 'Shyam Sundar': return 'object-[center_14%]';
    default: return 'object-[center_15%]';
  }
};

export default function TeamPage({ onOpenJoinModal }) {
  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-14 pb-12 sm:pb-20 pt-3 sm:pt-6">

      {/* 01 Hero Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-nss-blue-dark via-nss-blue to-[#132c5e] text-white p-4 xs:p-5 sm:p-10 md:p-8 lg:p-8 xl:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-2 xs:space-y-2.5 sm:space-y-3.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] xs:text-[9.5px] sm:text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-400/30 uppercase tracking-widest whitespace-nowrap">
              <Users className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> LEADERSHIP & VOLUNTEER CADRE
            </span>
            <h1 className="text-[16.5px] xs:text-[19.5px] min-[425px]:text-[22px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              The People Behind the <span className="text-orange-400">Purpose</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto sm:mx-0">
              Meet our distinguished Programme Officer, student council leaders, and the developer team powering NSS SAM Global University.
            </p>
            <div className="pt-0.5 xs:pt-1 flex flex-wrap justify-center sm:justify-start items-center gap-2.5 sm:gap-3">
              <button
                onClick={() => document.getElementById('developer-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 px-3 xs:px-3.5 py-1 xs:py-1.5 rounded-full text-[11px] xs:text-xs font-bold bg-white/10 hover:bg-orange-500 hover:text-white text-slate-200 border border-white/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <Code className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-orange-400" />
                <span>Jump to Developer Team</span>
                <ArrowDown className="w-3 h-3 xs:w-3.5 xs:h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Programme Officer Card (Prof. Ruchi Upadhyay - Optimized for 768px Tablet & Desktop) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
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
      </section>

      {/* 03 Current Student Council (2025-26) - Clean 5-Col Row on 768px Tablet & Desktop */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-4 xs:mb-5 sm:mb-8 md:mb-6 lg:mb-8 xl:mb-10">
          <span className="text-[9px] xs:text-[10px] sm:text-xs font-extrabold text-orange-500 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200 inline-block whitespace-nowrap">
            STUDENT LEADERSHIP 2025–26
          </span>
          <h2 className="text-[17.5px] xs:text-[20px] min-[425px]:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-nss-blue-dark mt-1.5 sm:mt-2 leading-snug">
            Current Council Leaders (2025–26)
          </h2>
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Student officers steering day-to-day community operations and volunteer coordination.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-2.5 lg:gap-3 xl:gap-5">
          {councilLeaders.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 md:p-2 lg:p-2.5 xl:p-3.5 border border-slate-200/90 hover:border-orange-400 transition-all duration-300 flex flex-col justify-between group text-left min-w-0 last:col-span-2 last:w-[calc(50%-4px)] xs:last:w-[calc(50%-5px)] last:mx-auto sm:last:col-span-1 sm:last:w-auto sm:last:mx-0"
            >
              <div>
                {/* 100% Uncovered Portrait Frame - Completely Clear Face */}
                <div className="relative w-full aspect-[4/4] sm:aspect-[4/4.2] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 group-hover:border-orange-300 transition-colors">
                  <img loading="lazy" decoding="async"
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${getCouncilObjectPosition(member.name)}`}
                  />
                </div>

                {/* Identity & Position Details (Position Chip cleanly placed BELOW photo so face is never hidden) */}
                <div className="pt-2 px-0.5 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[8px] lg:text-[8.5px] xl:text-[9px] font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-1.5 xs:px-2 py-0.5 rounded-full border border-orange-200 inline-block truncate max-w-[78%]">
                      {member.role}
                    </span>
                    <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] md:text-[7.5px] lg:text-[8px] font-bold text-slate-400 shrink-0">
                      2025–26
                    </span>
                  </div>
                  <h3 className="text-[11.5px] xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-black text-slate-900 group-hover:text-orange-600 transition-colors leading-tight truncate" title={member.name}>
                    {member.name}
                  </h3>
                  <p className="text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[11px] xl:text-xs font-semibold text-slate-500 truncate" title={member.badge}>
                    {member.badge}
                  </p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 px-0.5 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 hidden xl:inline">
                  Connect
                </span>
                <div className="flex items-center justify-between xl:justify-end w-full xl:w-auto gap-1 sm:gap-1.5">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-pink-50 text-slate-500 hover:text-pink-600 rounded-lg border border-slate-200/60 hover:border-pink-200 transition"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                  {member.whatsapp && (
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 rounded-lg border border-slate-200/60 hover:border-emerald-200 transition"
                      title="WhatsApp"
                    >
                      <WhatsAppIcon className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-lg border border-slate-200/60 hover:border-blue-200 transition"
                      title="Email"
                    >
                      <Mail className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 Senior / Advisory Council (2024-25) - Clean 5-Col Row on 768px Tablet & Desktop */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-4 xs:mb-5 sm:mb-8 md:mb-6 lg:mb-8 xl:mb-10">
          <span className="text-[9px] xs:text-[10px] sm:text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 inline-block whitespace-nowrap">
            SENIOR COUNCIL 2024–25
          </span>
          <h2 className="text-[17.5px] xs:text-[20px] min-[425px]:text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-nss-blue-dark mt-1.5 sm:mt-2 leading-snug">
            Senior Council Leaders (2024–25)
          </h2>
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Distinguished former student leaders who established the strong foundation of NSS SAM Global University.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 xs:gap-2.5 sm:gap-3.5 md:gap-2.5 lg:gap-3 xl:gap-5">
          {seniorCouncilLeaders.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 md:p-2 lg:p-2.5 xl:p-3.5 border border-slate-200/90 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group text-left min-w-0 last:col-span-2 last:w-[calc(50%-4px)] xs:last:w-[calc(50%-5px)] last:mx-auto sm:last:col-span-1 sm:last:w-auto sm:last:mx-0"
            >
              <div>
                {/* 100% Uncovered Portrait Frame - Completely Clear Face */}
                <div className="relative w-full aspect-[4/4] sm:aspect-[4/4.2] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 group-hover:border-blue-300 transition-colors">
                  <img loading="lazy" decoding="async"
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${getSeniorObjectPosition(member.name)}`}
                  />
                </div>

                {/* Identity & Position Details (Position Chip cleanly placed BELOW photo so face is never hidden) */}
                <div className="pt-2 px-0.5 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[7px] xs:text-[8px] sm:text-[9px] md:text-[8px] lg:text-[8.5px] xl:text-[9px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 xs:px-2 py-0.5 rounded-full border border-blue-200 inline-block truncate max-w-[78%]">
                      {member.role}
                    </span>
                    <span className="text-[7px] xs:text-[7.5px] sm:text-[8px] md:text-[7.5px] lg:text-[8px] font-bold text-slate-400 shrink-0">
                      2024–25
                    </span>
                  </div>
                  <h3 className="text-[11.5px] xs:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate" title={member.name}>
                    {member.name}
                  </h3>
                  <p className="text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[11px] xl:text-xs font-semibold text-slate-500 mt-0.5 truncate" title={member.badge}>
                    {member.badge}
                  </p>
                </div>
              </div>

              {/* Social Links Row */}
              <div className="mt-2 pt-1.5 border-t border-slate-100 px-0.5 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 hidden xl:inline">
                  Connect
                </span>
                <div className="flex items-center justify-between xl:justify-end w-full xl:w-auto gap-1 sm:gap-1.5">
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-pink-50 text-slate-500 hover:text-pink-600 rounded-lg border border-slate-200/60 hover:border-pink-200 transition"
                      title="Instagram"
                    >
                      <InstagramIcon className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                  {member.whatsapp && (
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 rounded-lg border border-slate-200/60 hover:border-emerald-200 transition"
                      title="WhatsApp"
                    >
                      <WhatsAppIcon className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1 xs:p-1.5 md:p-1 lg:p-1 xl:p-1.5 bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 rounded-lg border border-slate-200/60 hover:border-blue-200 transition"
                      title="Email"
                    >
                      <Mail className="w-3 h-3 xs:w-3.5 xs:h-3.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 Developer Section (Sole Platform Architect & Engineer: Aditya Kumar Gupta) */}
      <section id="developer-section" className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 scroll-mt-28 sm:scroll-mt-36">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-nss-blue-dark text-white rounded-2xl sm:rounded-3xl py-5 sm:py-6 md:py-5 lg:py-6 xl:py-7 px-3.5 xs:px-4 sm:px-6 md:px-6 lg:px-8 xl:px-10 border border-slate-800 relative overflow-hidden">

          {/* Subtle Ambient Backlight Glows */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-5 relative z-10">
            <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-black text-orange-400 uppercase tracking-widest bg-orange-500/15 px-2.5 py-0.5 rounded-full border border-orange-400/30 inline-flex items-center gap-1.5 whitespace-nowrap">
              <Code className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-orange-400 shrink-0" /> SOLE DIGITAL ARCHITECT & DEVELOPER
            </span>
            <h2 className="text-[17px] xs:text-[20px] min-[425px]:text-[22px] sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white mt-1.5 tracking-tight leading-tight">
              Platform Architect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Developer</span>
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-300 mt-1 max-w-xl mx-auto leading-relaxed">
              Solely envisioned, designed, engineered, and deployed the official NSS SAM Global University digital web platform.
            </p>
          </div>

          {/* Spotlight Hero Card (Aditya Kumar Gupta - Sleek Compact Height) */}
          <div className="max-w-4xl mx-auto relative z-10">
            {developerTeam.map((dev, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-5 md:p-5 lg:p-5 xl:p-6 border border-slate-700/80 flex flex-col md:flex-row items-center md:items-center gap-3.5 xs:gap-4 sm:gap-6 md:gap-5 lg:gap-6 xl:gap-8"
              >
                {/* Left: Compact Portrait Frame */}
                <div className="shrink-0">
                  <div className="relative w-36 xs:w-40 sm:w-48 md:w-44 lg:w-44 xl:w-52 aspect-[3/3.6] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-orange-500/60 bg-slate-800 p-1 group">
                    <img loading="lazy" decoding="async"
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Live Tech Badge Overlay */}
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/90 backdrop-blur-md text-[9px] font-extrabold text-orange-400 border border-orange-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Sole Creator</span>
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-slate-950/85 backdrop-blur-md text-[8px] font-bold text-slate-300 border border-white/10">
                        NSS SGU Web Lead
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Architectural Profile Details & Tech Stack */}
                <div className="space-y-2 sm:space-y-2.5 text-center md:text-left flex-1 w-full">

                  {/* Badges */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 w-full sm:w-auto">
                    <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-black uppercase tracking-wider text-orange-400 bg-orange-500/20 px-2 sm:px-2.5 py-0.5 rounded-full border border-orange-500/30 whitespace-nowrap">
                      {dev.role}
                    </span>
                    <span className="text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 whitespace-nowrap">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                      <span>Full Stack Architecture</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl font-black text-white tracking-tight">
                      {dev.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] md:text-xs lg:text-[13px] font-semibold text-orange-400 mt-0.5">
                      Lead Software Engineer & Platform Designer
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] md:text-xs lg:text-[13px] text-slate-300 leading-relaxed font-normal">
                    {dev.description}
                  </p>

                  {/* Core Technical Highlights */}
                  <div className="pt-0.5">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Engineered With:
                    </p>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                      {["React 19", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript ES6+", "REST Architecture"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700/90 rounded-md text-[10px] sm:text-[11px] md:text-[10px] lg:text-[11px] font-semibold border border-slate-700 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact & Social Links (Icon-only on < sm: 320px-425px, Icon+Text on sm+) */}
                  <div className="pt-1.5 flex flex-nowrap sm:flex-wrap items-center justify-center md:justify-start gap-2 w-full sm:w-auto max-w-full overflow-hidden sm:overflow-visible">
                    {dev.github && (
                      <a
                        href={dev.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-slate-700 cursor-pointer"
                        title="GitHub @maiadityahoonn"
                      >
                        <GithubIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-orange-400 shrink-0" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                    )}
                    {dev.linkedin && (
                      <a
                        href={dev.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-blue-500/40 cursor-pointer"
                        title="LinkedIn Profile"
                      >
                        <LinkedinIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-blue-400 shrink-0" />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
                    )}
                    {dev.instagram && (
                      <a
                        href={dev.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-white rounded-lg text-xs font-bold transition flex items-center justify-center sm:justify-start gap-1.5 border border-pink-500/40 cursor-pointer"
                        title="Instagram @texwebsolution.in"
                      >
                        <InstagramIcon className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-pink-400 shrink-0" />
                        <span className="hidden sm:inline">Instagram</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Join CTA Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-6 lg:p-7 xl:p-10 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-[17px] xs:text-xl sm:text-2xl font-black leading-snug">Inspired by our leadership cadre?</h3>
            <p className="text-[11px] xs:text-xs sm:text-sm text-orange-100 mt-1">Take the first step toward leadership and join the NSS family today.</p>
          </div>
          <button
            onClick={onOpenJoinModal}
            className="px-5 sm:px-7 py-2 sm:py-3.5 bg-white text-orange-600 hover:bg-slate-100 font-black rounded-full text-xs sm:text-sm transition flex items-center justify-center gap-2 shrink-0 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <span>Register as Volunteer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
