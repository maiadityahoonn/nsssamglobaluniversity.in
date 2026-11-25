import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, Shield, Tag, Award, ArrowRight } from 'lucide-react';
import TshirtViewer from '../components/TshirtViewer';

export default function OrangeArmyPage({ onOpenJoinModal }) {
  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-14 pb-12 sm:pb-20 pt-3 sm:pt-6">
      
      {/* Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white p-4 xs:p-5 sm:p-12 md:p-8 lg:p-8 xl:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-1.5 xs:space-y-2 sm:space-y-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8.5px] xs:text-[9.5px] sm:text-xs font-black bg-white/20 text-white border border-white/30 uppercase tracking-widest whitespace-nowrap">
              <Sparkles className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> THE PRIDE OF SAM GLOBAL UNIVERSITY
            </span>
            <h1 className="text-[20px] xs:text-[23px] min-[425px]:text-[26px] sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              The NSS <span className="text-amber-200">Orange Army</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg text-orange-100 font-medium leading-relaxed">
              Wearing our heart on our sleeve. The vibrant orange polo represents selfless energy, courage, sunrise of hope, and unified dedication across Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive T-shirt Viewer */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <TshirtViewer />
      </section>

      {/* Philosophy of the Orange Color */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-5 sm:p-10 md:p-6 lg:p-7 xl:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-4 xs:mb-5 sm:mb-10 md:mb-6 lg:mb-8 xl:mb-10">
            <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-black text-orange-600 uppercase tracking-widest">
              IDENTITY & SYMBOLISM
            </span>
            <h2 className="text-[19px] xs:text-xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-nss-blue-dark mt-1">
              Why the "Orange Army"?
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1 max-w-xl mx-auto">
              The color orange carries deep spiritual, national, and motivational meaning in the Indian ethos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-3.5 sm:gap-6 md:gap-3 lg:gap-4 xl:gap-6">
            <div className="p-3.5 xs:p-4 sm:p-6 md:p-3.5 lg:p-5 xl:p-6 rounded-xl sm:rounded-2xl bg-orange-50/70 border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold sm:mb-4 md:mb-2.5 lg:mb-3 xl:mb-4 text-xs sm:text-base md:text-xs lg:text-sm xl:text-base shrink-0">
                    01
                  </div>
                  <h3 className="text-[14px] xs:text-[15px] sm:text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug sm:hidden">Spirit of Selfless Sacrifice</h3>
                </div>
                <h3 className="hidden sm:block text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug">Spirit of Selfless Sacrifice</h3>
                <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 sm:mt-2 md:mt-1 lg:mt-1.5 xl:mt-2 leading-relaxed">
                  Orange represents selfless sacrifice and letting go of ego in line with our motto: <strong className="text-slate-800">"Not Me, But You"</strong>.
                </p>
              </div>
            </div>

            <div className="p-3.5 xs:p-4 sm:p-6 md:p-3.5 lg:p-5 xl:p-6 rounded-xl sm:rounded-2xl bg-orange-50/70 border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold sm:mb-4 md:mb-2.5 lg:mb-3 xl:mb-4 text-xs sm:text-base md:text-xs lg:text-sm xl:text-base shrink-0">
                    02
                  </div>
                  <h3 className="text-[14px] xs:text-[15px] sm:text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug sm:hidden">High Visibility & Brotherhood</h3>
                </div>
                <h3 className="hidden sm:block text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug">High Visibility & Brotherhood</h3>
                <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 sm:mt-2 md:mt-1 lg:mt-1.5 xl:mt-2 leading-relaxed">
                  In crowded village fairs, disaster relief camps, and long highway marches, the bright orange jersey brings instant solidarity and quick coordination.
                </p>
              </div>
            </div>

            <div className="p-3.5 xs:p-4 sm:p-6 md:p-3.5 lg:p-5 xl:p-6 rounded-xl sm:rounded-2xl bg-orange-50/70 border border-orange-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 sm:block mb-2 sm:mb-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold sm:mb-4 md:mb-2.5 lg:mb-3 xl:mb-4 text-xs sm:text-base md:text-xs lg:text-sm xl:text-base shrink-0">
                    03
                  </div>
                  <h3 className="text-[14px] xs:text-[15px] sm:text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug sm:hidden">Youth Energy & Enthusiasm</h3>
                </div>
                <h3 className="hidden sm:block text-lg md:text-[13.5px] lg:text-base xl:text-lg font-bold text-slate-900 leading-snug">Youth Energy & Enthusiasm</h3>
                <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-[11px] lg:text-xs xl:text-sm text-slate-600 sm:mt-2 md:mt-1 lg:mt-1.5 xl:mt-2 leading-relaxed">
                  Orange inspires optimism, creativity, resilience against summer heat, and endless physical energy for community service and social impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Kit Contents */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-10 md:p-6 lg:p-7 xl:p-10 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 sm:gap-6 lg:gap-6 mb-4 sm:mb-8 md:mb-5 text-center sm:text-left">
            <div>
              <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-bold text-orange-400 uppercase tracking-widest">
                INDUCTION MERCHANDISE
              </span>
              <h3 className="text-[18px] xs:text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black mt-1 leading-snug">
                Official Volunteer Welcome Kit
              </h3>
              <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-400 mt-0.5">
                Handed to every confirmed NSS cadet upon orientation at SAM Global University.
              </p>
            </div>
            <button
              onClick={onOpenJoinModal}
              className="mx-auto sm:mx-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm transition flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get Your Kit Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4 text-center">
            <div className="bg-slate-800/80 p-3 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-xl sm:rounded-2xl border border-slate-700/80 min-w-0">
              <Shirt className="w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-orange-400 mx-auto mb-1.5 sm:mb-2" />
              <h4 className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-white leading-snug">Orange Army Polo</h4>
              <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-0.5 sm:mt-1 leading-tight">Breathable pique with dual chest crests</p>
            </div>
            <div className="bg-slate-800/80 p-3 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-xl sm:rounded-2xl border border-slate-700/80 min-w-0">
              <Award className="w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
              <h4 className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-white leading-snug">NSS Pin Badge</h4>
              <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-0.5 sm:mt-1 leading-tight">Konark Wheel emblem in enamel gold</p>
            </div>
            <div className="bg-slate-800/80 p-3 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-xl sm:rounded-2xl border border-slate-700/80 min-w-0">
              <Shield className="w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-blue-400 mx-auto mb-1.5 sm:mb-2" />
              <h4 className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-white leading-snug">Digital Volunteer ID</h4>
              <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-0.5 sm:mt-1 leading-tight">NSS SGU official verified card</p>
            </div>
            <div className="bg-slate-800/80 p-3 sm:p-5 md:p-3 lg:p-4 xl:p-5 rounded-xl sm:rounded-2xl border border-slate-700/80 min-w-0">
              <Tag className="w-5 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-emerald-400 mx-auto mb-1.5 sm:mb-2" />
              <h4 className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-white leading-snug">Service Log Diary</h4>
              <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-400 mt-0.5 sm:mt-1 leading-tight">To record 120 annual service hours</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
