import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, ChevronRight, Mail, Award,
  Users, Calendar, Shirt, Home, Info, Droplet, Tent,
  ShieldCheck, HeartHandshake, Leaf, Bell
} from 'lucide-react';
import { universityInfo } from '../data/nssData';

export default function Navbar({ activePage, setActivePage, onOpenJoinModal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'special-camp', label: 'Special Camp', icon: Tent },
    { id: 'blood-donation', label: 'Blood Donation', icon: Droplet },
    { id: 'orange-army', label: 'Orange Army', icon: Shirt },
    { id: 'team', label: 'Our Team', icon: Users },
  ];

  const announcements = [
    {
      icon: Sparkles,
      iconColor: 'text-amber-400',
      text: "MP's 1st AI Enabled University • SAM Global University Bhopal",
    },
    {
      icon: Award,
      iconColor: 'text-orange-400',
      text: 'NSS Motto: "Not Me, But You" • Dedicated to Selfless Nation Building',
    },
    {
      icon: Tent,
      iconColor: 'text-emerald-400',
      text: '7-Days Special Rural Immersion Camp 2026: Cadet Registrations & Orientation Active',
    },
    {
      icon: Droplet,
      iconColor: 'text-red-400',
      text: '24×7 Emergency Blood Donor Helpline: +91 72258 14452 (Free Voluntary Service)',
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-blue-400',
      text: 'Programme Officer: Prof. Ruchi Upadhyay (State Award Recipient & Unit Incharge)',
    },
    {
      icon: Users,
      iconColor: 'text-amber-300',
      text: 'SGU Orange Army Cadre: 1000+ Active Student Volunteers Driving Grassroots Impact',
    },
    {
      icon: HeartHandshake,
      iconColor: 'text-rose-400',
      text: 'Adopted Villages: 10+ Gram Panchayats Supported with Health, Literacy & Swachhata Drives',
    },
    {
      icon: Leaf,
      iconColor: 'text-green-400',
      text: 'Green Campus Drive: 5,000+ Saplings Planted under Mission LiFE & Haritha Abhiyan',
    },
    {
      icon: Mail,
      iconColor: 'text-sky-400',
      text: 'Official NSS Desk: aditya963141@gmail.com • Administrative Block Room 104',
    },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* FIXED HEADER WRAPPER (Guaranteed to stay pinned on scroll) */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
        
        {/* 1. TOP NAVY MARQUEE ANNOUNCEMENT BAR (Clean & Full-Width) */}
        <div className="bg-[#0c1f44] text-white h-8 sm:h-9 px-2 sm:px-3 lg:px-6 xl:px-12 border-b border-blue-900/60 w-full overflow-hidden select-none flex items-center">
          <div className="w-full flex items-center gap-2 sm:gap-3">
            
            {/* Left Static Badge */}
            <div className="shrink-0 z-20 flex items-center gap-1.5 bg-orange-500 text-white font-black px-2.5 py-0.5 rounded text-[9px] sm:text-[10px] tracking-wider uppercase border border-orange-400/40">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-pulse" />
              <span className="hidden sm:inline">MP'S 1ST AI ENABLED UNIVERSITY</span>
              <span className="sm:hidden">SGU NSS</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-orange-400 font-extrabold text-[10px] tracking-wider uppercase shrink-0 z-20 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
              <Bell className="w-3 h-3 text-orange-400 animate-pulse" />
              <span>UPDATES:</span>
            </div>

            {/* Marquee Center Ticker with Smooth Edge Fade */}
            <div
              className="flex-1 overflow-hidden relative"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 16px, black calc(100% - 16px), transparent)',
              }}
            >
              <div className="animate-marquee-slow flex items-center gap-8 whitespace-nowrap">
                {[...announcements, ...announcements].map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors cursor-default">
                      <IconComponent className={`w-3.5 h-3.5 ${item.iconColor} shrink-0`} />
                      <span className="text-[11px] sm:text-xs font-medium tracking-wide">{item.text}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 ml-3" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Static Contact & Motto (Desktop) */}
            <div className="hidden xl:flex items-center gap-3 shrink-0 z-20 text-slate-300 text-[11px]">
              <a
                href={`mailto:${universityInfo.email}`}
                className="flex items-center gap-1 hover:text-white transition text-slate-300"
                title="Official Email"
              >
                <Mail className="w-3 h-3 text-orange-400" />
                <span>{universityInfo.email}</span>
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-orange-300 font-semibold tracking-wide">
                Motto: "Not Me, But You"
              </span>
            </div>

          </div>
        </div>

        {/* 2. MAIN NAVBAR */}
        <header className={`transition-all duration-300 w-full ${scrolled
          ? 'bg-white/95 backdrop-blur-md py-1.5 sm:py-2.5 border-b border-slate-200'
          : 'bg-white py-2 sm:py-3 border-b border-slate-100'
          }`}>
          <div className="w-full px-2 sm:px-3 lg:px-3 xl:px-8 2xl:px-12">
            <div className="flex items-center justify-between gap-1 xs:gap-2 lg:gap-2 xl:gap-3 2xl:gap-4 w-full">

              {/* Logo Area (Left edge) */}
              <div
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 xl:gap-3 cursor-pointer group select-none shrink-0 whitespace-nowrap"
              >
                {/* NSS Official Circular Crest */}
                <div className="relative shrink-0">
                  <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 lg:w-9.5 lg:h-9.5 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 rounded-full overflow-hidden border-2 border-orange-500 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/images/nss-sgu-logo.webp"
                      alt="NSS SAM Global University Emblem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text Brand */}
                <div className="flex flex-col shrink-0">
                  <div className="flex items-center whitespace-nowrap">
                    <span className="font-extrabold text-[9.5px] xs:text-[11.5px] min-[425px]:text-[13.5px] sm:text-base lg:text-[13.5px] xl:text-base 2xl:text-xl tracking-tight text-nss-blue-dark">
                      NSS <span className="text-orange-500 font-black">SAM GLOBAL UNIVERSITY</span>
                    </span>
                  </div>
                  <div className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] lg:text-[10px] xl:text-[11px] font-medium text-slate-500 tracking-tight leading-none mt-0.5 whitespace-nowrap">
                    <span className="hidden sm:inline md:hidden">SAM Global University • </span>
                    <span className="text-orange-600 font-bold italic">Not Me, But You</span>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation Links (Consistent 1024px to 1440px+) */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink min-w-0 justify-center flex-nowrap">
                {navLinks.map((link) => {
                  const isActive = activePage === link.id;
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`relative px-2 lg:px-2 xl:px-2.5 2xl:px-3.5 py-1.5 text-xs lg:text-xs xl:text-xs 2xl:text-sm rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer select-none group shrink-0 ${
                        isActive
                          ? 'text-orange-600 font-black'
                          : 'text-slate-600 hover:text-orange-600 hover:bg-orange-50/50 font-semibold'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavGlider"
                          className="absolute inset-0 bg-orange-50/90 rounded-xl border border-orange-500"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1 xl:gap-1.5">
                        {isActive && (
                          <IconComponent className="hidden 2xl:inline-block w-3.5 h-3.5 text-orange-600 shrink-0" />
                        )}
                        <span className={isActive ? 'font-black text-orange-600 tracking-tight' : 'font-semibold text-slate-600 group-hover:text-orange-600'}>
                          {link.label}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Action CTA: Join NSS Button */}
              <div className="flex items-center shrink-0">
                <button
                  onClick={onOpenJoinModal}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-[10px] xs:text-[11px] sm:text-xs lg:text-xs xl:text-xs 2xl:text-sm px-2 xs:px-2.5 sm:px-3 lg:px-3 xl:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full transition-all flex items-center gap-0.5 xs:gap-1 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Join NSS</span>
                  <ChevronRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>
        </header>
      </div>

      {/* Spacer to guarantee page content is never hidden under the fixed header */}
      <div className="h-[84px] sm:h-[88px] md:h-[90px] lg:h-[94px] xl:h-[98px] w-full shrink-0 pointer-events-none select-none" aria-hidden="true" />
    </>
  );
}
