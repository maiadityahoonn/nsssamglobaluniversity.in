import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, MapPin, Phone, Mail, Globe, Sparkles, ExternalLink,
  ShieldCheck, Award, ArrowRight
} from 'lucide-react';
import { InstagramIcon, LinkedinIcon, WhatsAppIcon } from './common/SocialIcons';
import { universityInfo } from '../data/nssData';
import MovingBorderStroke from './common/MovingBorderStroke';

export default function Footer({ setActivePage, onOpenJoinModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navTo = (page, sectionId) => {
    if (setActivePage) {
      setActivePage(page, sectionId);
    }
    if (!sectionId) {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#0b162c] text-white border-t border-slate-800 relative overflow-hidden w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content Container - Responsive from 320px to 1440px+ */}
      <div className="w-full max-w-[1650px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-12 pt-6 sm:pt-8 lg:pt-10 pb-20 xs:pb-20 sm:pb-24 lg:pb-8 relative z-10">
        
        {/* Responsive Grid System:
            - Mobile (< 768px): 1 col brand, 2 cols links side-by-side, full-width contact
            - Tablet (768px - 1023px): Full-width brand header with 2-col split, followed by 3 clean columns (Quick Links, Explore NSS, Campus Contact)
            - Desktop (1024px+): 12-col grid (4 brand + 3 quick + 2 explore + 3 contact on lg, 4 + 2 + 2 + 4 on xl)
        */}
        <div className="grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-3 gap-y-5 xs:gap-6 sm:gap-8 md:gap-6 lg:gap-5 xl:gap-8">
          
          {/* Column 1: Brand & Identity (Full width on < md with balanced 2-col layout on md, 4 cols on lg/xl) */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4 space-y-3 sm:space-y-4 md:border-b md:border-slate-800/80 md:pb-6 lg:border-b-0 lg:pb-0">
            <div className="flex flex-col md:flex-row md:items-start lg:flex-col justify-between gap-4">
              <div className="flex items-start gap-2.5 sm:gap-3 md:max-w-xs lg:max-w-none">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-500 shrink-0 mt-0.5">
                  <img loading="lazy" decoding="async" 
                    src="/assets/images/nss-sgu-logo.webp" 
                    alt="NSS SGU Official Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm xs:text-base sm:text-lg lg:text-sm xl:text-lg font-extrabold text-white tracking-tight leading-tight">
                    NSS SAM GLOBAL UNIVERSITY
                  </h3>
                  <p className="text-[10px] xs:text-[11px] sm:text-xs lg:text-[10.5px] xl:text-xs text-orange-400 font-semibold tracking-wide leading-snug mt-0.5">
                    {universityInfo.tagline}
                  </p>
                  <p className="text-[9.5px] xs:text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] text-slate-400 leading-snug mt-0.5">
                    National Service Scheme • Bhopal, Madhya Pradesh
                  </p>
                </div>
              </div>

              <div className="flex-1 md:max-w-md lg:max-w-none space-y-2">
                <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-slate-300 leading-relaxed">
                  Committed to the spirit of <span className="text-orange-400 font-bold">"Not Me, But You"</span>. The NSS Unit at SAM Global University empowers students with leadership, selfless service, empathy, and grassroots nation building across rural communities of Madhya Pradesh.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 xs:gap-2 pt-1">
                  <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2.5 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-[11px] font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 whitespace-nowrap">
                    <Sparkles className="w-3 h-3" /> Orange Army
                  </span>
                  <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2.5 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-[11px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3" /> Govt. Approved Unit
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (1 col on 320px-425px side-by-side, 4 cols on md, 3 on lg, 2 on xl) */}
          <div className="space-y-2.5 sm:space-y-3 col-span-1 md:col-span-4 lg:col-span-3 xl:col-span-2 min-w-0">
            <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-1.5 sm:pb-2">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] xs:text-xs sm:text-sm lg:text-[11.5px] xl:text-xs 2xl:text-sm text-slate-300">
              <li>
                <button onClick={() => navTo('home')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navTo('about')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> About NSS & Vision
                </button>
              </li>
              <li>
                <button onClick={() => navTo('activities')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Social Activities & Drives
                </button>
              </li>
              <li>
                <button onClick={() => navTo('achievements')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Recognitions & Awards
                </button>
              </li>
              <li>
                <button onClick={() => navTo('special-camp')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> 7 Days Special Camp
                </button>
              </li>
              <li>
                <button onClick={() => navTo('blood-donation')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Blood Donor Directory
                </button>
              </li>
              <li>
                <button onClick={onOpenJoinModal} className="hover:text-orange-300 transition text-left flex items-center gap-1.5 text-orange-400 font-semibold cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Join NSS / Register
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore NSS (1 col on 320px-425px side-by-side, 3 cols on md, 2 on lg/xl) */}
          <div className="space-y-2.5 sm:space-y-3 col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 min-w-0">
            <h4 className="text-[11px] xs:text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-1.5 sm:pb-2">
              Explore NSS
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-[10.5px] xs:text-xs sm:text-sm lg:text-[11.5px] xl:text-xs 2xl:text-sm text-slate-300">
              <li>
                <button onClick={() => navTo('orange-army')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> The Orange Army
                </button>
              </li>
              <li>
                <button onClick={() => navTo('team')} className="hover:text-orange-400 transition text-left flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
                  <span className="text-orange-500 text-xs shrink-0">›</span> Leadership & Council
                </button>
              </li>
              <li>
                <a 
                  href={universityInfo.whatsappGroup} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-1.5 text-emerald-400 cursor-pointer whitespace-nowrap"
                >
                  <span className="text-emerald-500 text-xs shrink-0">›</span> WhatsApp Community <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
                </a>
              </li>
              <li>
                <a 
                  href={universityInfo.myBharatUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-orange-400 transition flex items-center gap-1.5 text-slate-300 cursor-pointer whitespace-nowrap"
                >
                  <span className="text-orange-500 text-xs shrink-0">›</span> My Bharat Portal <ExternalLink className="w-3 h-3 ml-0.5 shrink-0" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Contact (Full width on < md, 5 cols on md, 3 on lg, 4 on xl) */}
          <div className="space-y-2.5 sm:space-y-3 col-span-2 md:col-span-5 lg:col-span-3 xl:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-slate-700/80 pb-2">
              Campus Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm lg:text-[11.5px] xl:text-xs 2xl:text-sm text-slate-300">
              
              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-xs lg:text-[11px] xl:text-xs text-slate-300">
                  Kolua, Gram Adampur Chhawani, Raisen Road, Bhopal, MP - 462021
                </span>
              </div>
              
              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a 
                  href={`tel:${universityInfo.phone}`}
                  className="text-xs lg:text-[11.5px] xl:text-xs font-semibold text-slate-200 hover:text-orange-400 transition-colors whitespace-nowrap break-keep"
                >
                  {universityInfo.phone}
                </a>
              </div>
              
              {/* Email (Guaranteed 100% Never to split onto two lines) */}
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a 
                  href={`mailto:${universityInfo.email}`}
                  className="text-xs lg:text-[11px] xl:text-xs font-medium text-slate-200 hover:text-orange-400 transition-colors whitespace-nowrap break-keep shrink-0 truncate"
                  title="Official Email"
                >
                  {universityInfo.email}
                </a>
              </div>

              {/* Social Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/school/sam-global-university/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn" 
                  title="LinkedIn"
                  className="w-8 h-8 rounded-xl bg-[#eff6ff] text-[#0066cc] border border-[#bfdbfe] hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a 
                  href={universityInfo.instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram" 
                  title="Instagram"
                  className="w-8 h-8 rounded-xl bg-[#fdf2f8] text-[#db2777] border border-[#fbcfe8] hover:bg-[#db2777] hover:text-white hover:border-[#db2777] transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a 
                  href={universityInfo.whatsappGroup} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="WhatsApp Group" 
                  title="WhatsApp"
                  className="w-8 h-8 rounded-xl bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0] hover:bg-[#059669] hover:text-white hover:border-[#059669] transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a 
                  href={universityInfo.youtubeChannel} 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="YouTube Channel" 
                  title="YouTube"
                  className="w-8 h-8 rounded-xl bg-[#fef2f2] text-[#dc2626] border border-[#fecaca] hover:bg-[#dc2626] hover:text-white hover:border-[#dc2626] transition-all duration-200 flex items-center justify-center cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

              {/* Developer Team Button with Blinking Cursor & Border Highlight */}
              <div className="pt-2 mt-1 border-t border-slate-800/80 flex items-center">
                <button
                  onClick={() => navTo('team', 'developer-section')}
                  className="relative w-fit inline-flex items-center justify-center group rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:via-amber-600 hover:to-orange-700 py-1.5 px-3.5 text-white transition-all duration-200 cursor-pointer select-none active:scale-[0.98] border border-orange-400/40"
                  title="Developer Team"
                >
                  {/* Internal Moving Border Stroke */}
                  <MovingBorderStroke 
                    outer={false}
                    color="#ffffff" 
                    rx={12} 
                    strokeWidth={2.5} 
                    duration={4000} 
                    lineLength={40} 
                  />

                  {/* Text & Blinking Vertical Line */}
                  <div className="relative z-10 flex items-center justify-center whitespace-nowrap">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      Developer Team
                    </span>
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      className="inline-block w-[2px] h-3.5 bg-white ml-1.5 rounded-full"
                    />
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Motto */}
        <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-slate-400 gap-1.5 sm:gap-3 text-center sm:text-left">
          <div>
            <span>© {new Date().getFullYear()} NSS SAM Global University Bhopal. All Rights Reserved.</span>
          </div>
          <div>
            <span className="text-orange-400 font-semibold tracking-wide">Motto: "NOT ME, BUT YOU"</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
