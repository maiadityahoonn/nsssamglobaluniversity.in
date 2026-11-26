import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Droplet, Phone, 
  CheckCircle2, ArrowRight, Building2,
  ExternalLink, Maximize2, X, MessageSquare,
  ShieldCheck, Clock, Award, HelpCircle,
  Activity, Sparkles, AlertCircle, Check,
  MapPin, Calendar, Users
} from 'lucide-react';
import { universityInfo, partnerCollaborations } from '../data/nssData';
import AnimatedCounter from '../components/common/AnimatedCounter';
import { useScrollLock } from '../hooks/useScrollLock';
import { WhatsAppIcon } from '../components/common/SocialIcons';

// Medically verified Blood Compatibility Database
const bloodCompatibilityData = {
  'O-': {
    give: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    receive: ['O-'],
    role: 'Universal Red Cell Donor',
    badge: 'Universal Donor',
    note: 'O- can be given to patients of any blood group. In critical hospital emergencies and trauma before blood typing is done, O- saves lives instantly.'
  },
  'O+': {
    give: ['O+', 'A+', 'B+', 'AB+'],
    receive: ['O+', 'O-'],
    role: 'Most Needed Positive Donor',
    badge: 'High Emergency Demand',
    note: 'O+ is one of the most widely transfused blood groups in hospital trauma units and is compatible with any Rh-positive recipient.'
  },
  'A-': {
    give: ['A-', 'A+', 'AB-', 'AB+'],
    receive: ['A-', 'O-'],
    role: 'Rare Negative Group',
    badge: 'Rare Rh-Type',
    note: 'A- blood is crucial for emergency surgery patients with A- or AB- groups and requires dedicated voluntary donors.'
  },
  'A+': {
    give: ['A+', 'AB+'],
    receive: ['A+', 'A-', 'O+', 'O-'],
    role: 'Common & High Volume',
    badge: 'Major Surgical Demand',
    note: 'Widely needed for scheduled operations, cardiovascular surgeries, and ongoing cancer care across Bhopal hospitals.'
  },
  'B-': {
    give: ['B-', 'B+', 'AB-', 'AB+'],
    receive: ['B-', 'O-'],
    role: 'Very Rare Group',
    badge: 'Critical Emergency Need',
    note: 'Only about 1.5% of donors carry B-. Essential for pediatric wards, thalassemia management, and specialized transfusions.'
  },
  'B+': {
    give: ['B+', 'AB+'],
    receive: ['B+', 'B-', 'O+', 'O-'],
    role: 'Most Prevalent in Central India',
    badge: 'Highest Local Demand',
    note: 'B+ is the most common blood type in Madhya Pradesh. Consequently, local hospitals consume the highest units of B+ daily.'
  },
  'AB-': {
    give: ['AB-', 'AB+'],
    receive: ['AB-', 'A-', 'B-', 'O-'],
    role: 'Extremely Rare in India',
    badge: 'Ultra Rare (~1%)',
    note: 'AB- is one of the rarest blood groups in India. In addition to red blood cells, AB- donors provide valuable plasma.'
  },
  'AB+': {
    give: ['AB+'],
    receive: ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
    role: 'Universal Red Cell Recipient',
    badge: 'Universal Recipient',
    note: 'AB+ individuals can safely receive red blood cells from any blood type in emergency hospital procedures.'
  }
};

export default function BloodDonationPage({ onOpenJoinModal }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeBloodGroup, setActiveBloodGroup] = useState('O+');

  // Lock background scroll when image modal is open
  useScrollLock(Boolean(selectedImage));

  const bloodDriveImages = [
    { 
      src: "/assets/real_nss/blood donation activity.webp", 
      title: "NSS Volunteer Squad & Medical Team",
      subtitle: "University volunteers, faculty coordinators, and hospital medical staff assembled in the camp hall",
      tag: "Mega Camp Assembly",
      date: "Annual Camp 2024",
      cadets: "100+ Volunteers",
      location: "SGU Main Auditorium, Bhopal",
      description: "A collective assembly of dedicated NSS student volunteers, university coordinators, and accredited medical officers from partner hospital networks who organize and manage the voluntary blood donation drives across SAM Global University.",
      highlights: [
        "100+ active student cadets managing donor reception and queues",
        "Clinical supervision by certified doctors from partner blood banks",
        "Awarding certificates of honor to frontline student organizers"
      ]
    },
    { 
      src: "/assets/real_nss/blood-donation 111.webp", 
      title: "Voluntary Student Donors in Action",
      subtitle: "SGU students actively donating life-saving blood units on clinical recliners under SAM-DAAN",
      tag: "Live Donation",
      date: "Camp Field Drive",
      cadets: "Cadet Donors",
      location: "SAM Ayurvedic Hospital & Health Center",
      description: "University cadets stepping forward voluntarily to donate blood units under the university's SAM-DAAN initiative. Each donor lies comfortably on clinical recliners while experienced phlebotomists ensure a smooth, painless donation experience.",
      highlights: [
        "Safe extraction of 350ml–450ml per donor under sterile conditions",
        "Continuous blood pressure, pulse, and donor comfort monitoring",
        "Direct contribution to saving critically ill patients in Bhopal hospitals"
      ]
    },
    { 
      src: "/assets/real_nss/blood-donation 222.webp", 
      title: "Clinical Blood Collection & Medical Care",
      subtitle: "Certified hospital doctors and nurses collecting blood units with continuous vitals monitoring",
      tag: "Medical Protocol",
      date: "Clinical Extraction",
      cadets: "Doctors & Donors",
      location: "Authorized Blood Transfusion Center",
      description: "Qualified hospital doctors and paramedical staff overseeing each phase of clinical blood extraction. Pre-sterilized, single-use vacuum collection kits guarantee zero infection risk and complete donor safety throughout.",
      highlights: [
        "100% single-use disposable needles and blood collection bags",
        "Active sponge-squeeze rhythm monitoring for steady blood flow",
        "Immediate post-extraction bandage and donor recovery care"
      ]
    },
    { 
      src: "/assets/real_nss/blood-donation 333.webp", 
      title: "Registration, Health Screening & Refreshments",
      subtitle: "Camp operational steps: donor registration, medical checks, certificate issuance & nutrition care",
      tag: "Workflow & Care",
      date: "Camp Lifecycle",
      cadets: "Medical Desk",
      location: "NSS Registration & Health Desks",
      description: "A comprehensive photographic overview capturing every phase of the blood donation camp: initial donor registration, pre-donation hemoglobin and BP screening by doctors, relaxing post-donation rest, and high-energy refreshment distribution.",
      highlights: [
        "Pre-donation hemoglobin verification (>12.5 g/dL) and medical interview",
        "Rest desk with fresh fruit juices, biscuits, and hydration packs",
        "Issuance of authorized Government & Red Cross Blood Donor Certificates"
      ]
    },
  ];

  const donationSteps = [
    {
      step: "01",
      title: "Donor Registration & Screening",
      desc: "Volunteers check your age (18–65), weight (45kg+), blood pressure, and run a quick prick test to verify hemoglobin (>12.5 g/dL).",
      icon: Activity,
      color: "bg-red-50 text-red-600 border-red-200"
    },
    {
      step: "02",
      title: "Clinical Blood Collection",
      desc: "Trained hospital medical staff extract 350ml–450ml using a 100% sterile, single-use disposable kit. The extraction takes just 8–10 minutes.",
      icon: Droplet,
      color: "bg-rose-50 text-rose-600 border-rose-200"
    },
    {
      step: "03",
      title: "Rest & Nutrition Refreshment",
      desc: "Donors rest on recliners for 10–15 minutes while enjoying fresh fruit juice, water, and nutritious snacks to instantly restore hydration.",
      icon: Clock,
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      step: "04",
      title: "Official Certificate & Recognition",
      desc: "Each cadet receives an authorized Blood Donor Certificate issued by the Red Cross / State Blood Council along with NSS service credits.",
      icon: Award,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  const donorFaqFacts = [
    {
      title: "Amount & Safe Limit",
      fact: "A healthy adult has ~5 liters of blood. A standard donation takes only 350ml to 450ml (less than 8%). Your body fully restores plasma fluid volume within 24 to 48 hours.",
      highlight: "Safe 350ml–450ml Unit"
    },
    {
      title: "Does It Hurt or Take Time?",
      fact: "Actual blood extraction takes only 8 to 10 minutes. The only sensation is a brief prick as the needle is inserted. You can easily read, chat, or relax throughout.",
      highlight: "Only 8–10 Minutes"
    },
    {
      title: "Health Benefits of Donating",
      fact: "Regular blood donation helps balance iron stores, supports cardiovascular health, stimulates bone marrow to produce fresh blood cells, and includes a free vitals check.",
      highlight: "Natural Cell Renewal"
    },
    {
      title: "100% Sterile & Zero Infection",
      fact: "Every collection bag, needle, and tube is brand new, pre-sterilized, and sealed. It is opened directly before you and safely disposed of immediately after.",
      highlight: "Single-Use Disposable Kits"
    }
  ];

  const activeCompat = bloodCompatibilityData[activeBloodGroup];

  return (
    <div className="space-y-6 sm:space-y-10 md:space-y-8 lg:space-y-10 xl:space-y-12 pb-12 sm:pb-20 pt-3 sm:pt-6">
      
      {/* 01 Hero Banner */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-rose-950 via-red-900 to-slate-950 text-white p-4 xs:p-5 sm:p-10 md:p-8 lg:p-8 xl:p-12 relative overflow-hidden border border-red-900/60">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-6xl space-y-2 xs:space-y-2.5 sm:space-y-3.5 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 xs:gap-1.5 px-2 xs:px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[7px] xs:text-[8px] min-[425px]:text-[9px] sm:text-xs font-bold bg-white/20 text-white border border-white/30 uppercase tracking-wider sm:tracking-widest whitespace-nowrap">
              <Heart className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 fill-white shrink-0" /> 24X7 EMERGENCY BLOOD HELPLINE • NOT ME BUT YOU
            </span>
            <h1 className="text-[19px] xs:text-[22px] min-[425px]:text-[25px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              Donate Blood, <span className="text-red-300">Save Lives</span>
            </h1>
            <p className="text-[11px] xs:text-[11.5px] min-[425px]:text-xs sm:text-sm md:text-xs lg:text-sm xl:text-[16px] text-rose-100 font-normal leading-relaxed max-w-3xl mx-auto sm:mx-0">
              Welcome to the Blood Donation portal of NSS SAM Global University. Every drop can spark a second chance at life. We coordinate voluntary blood and plasma donations for patients admitted across Bhopal hospitals.
            </p>

            <div className="pt-1 xs:pt-1.5 sm:pt-2 flex flex-nowrap sm:flex-wrap justify-center sm:justify-start items-center gap-1.5 xs:gap-2 sm:gap-3 w-full max-w-full overflow-hidden sm:overflow-visible">
              <button
                onClick={onOpenJoinModal}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 xs:px-3 sm:px-5 md:px-4 lg:px-5 py-1.5 xs:py-2 sm:py-3 rounded-full text-[9px] xs:text-[10px] sm:text-sm border border-red-400/40 transition flex items-center justify-center gap-1 xs:gap-1.5 cursor-pointer uppercase tracking-wider min-w-0"
              >
                <Droplet className="w-3 h-3 sm:w-4 sm:h-4 fill-white shrink-0" />
                <span className="truncate">Pledge to Donate Blood</span>
              </button>

              <a
                href={universityInfo.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 xs:px-3 sm:px-5 md:px-4 lg:px-5 py-1.5 xs:py-2 sm:py-3 rounded-full text-[9px] xs:text-[10px] sm:text-sm border border-emerald-400/40 transition flex items-center justify-center gap-1 xs:gap-1.5 text-center uppercase tracking-wider cursor-pointer min-w-0"
              >
                <WhatsAppIcon className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Emergency Blood WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${universityInfo.phone}`}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-2.5 xs:px-3 sm:px-5 md:px-4 lg:px-5 py-1.5 xs:py-2 sm:py-3 rounded-full text-[9px] xs:text-[10px] sm:text-sm border border-white/20 transition flex items-center justify-center gap-1 xs:gap-1.5 text-center cursor-pointer min-w-0"
              >
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-300 shrink-0" />
                <span className="truncate">Call Helpline ({universityInfo.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Impact So Far Metrics Strip (No Text Truncation / No Overflow) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4">
          <div className="bg-white p-3 sm:p-5 md:p-3 lg:p-3.5 xl:p-6 rounded-xl sm:rounded-2xl border border-slate-200 text-center min-w-0">
            <p className="text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-red-600">
              <AnimatedCounter value="100+" suffixClassName="text-red-600 font-black" />
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 mt-1 leading-snug">Collected Annually</p>
            <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-tight">Safe & Certified Units</p>
          </div>

          <div className="bg-white p-3 sm:p-5 md:p-3 lg:p-3.5 xl:p-6 rounded-xl sm:rounded-2xl border border-slate-200 text-center min-w-0">
            <p className="text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-slate-900">
              <AnimatedCounter value="50+" suffixClassName="text-red-500 font-black" />
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 mt-1 leading-snug">Emergency Requests</p>
            <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-tight">Critical Patient Fulfillments</p>
          </div>

          <div className="bg-white p-3 sm:p-5 md:p-3 lg:p-3.5 xl:p-6 rounded-xl sm:rounded-2xl border border-slate-200 text-center min-w-0">
            <p className="text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-emerald-600">
              <AnimatedCounter value="1000+" suffixClassName="text-emerald-600 font-black" />
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 mt-1 leading-snug">Volunteer Cadets</p>
            <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-tight">Students & Faculty Donors</p>
          </div>

          <div className="bg-white p-3 sm:p-5 md:p-3 lg:p-3.5 xl:p-6 rounded-xl sm:rounded-2xl border border-slate-200 text-center min-w-0">
            <p className="text-xl sm:text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-black text-orange-500">
              <AnimatedCounter value="20 Mins" suffixClassName="text-orange-500 text-sm sm:text-base font-black ml-1" />
            </p>
            <p className="text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm font-bold text-slate-800 mt-1 leading-snug">Avg Response Time</p>
            <p className="text-[10px] sm:text-[11px] md:text-[9.5px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-tight">Bhopal Hospital Network</p>
          </div>
        </div>
      </section>

      {/* 03 How You Can Contribute (Dual Contribution Hub) */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-1.5">
            COMMUNITY LIFELINE
          </span>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            How You Can Contribute Today
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Whether you want to donate life-saving blood or request immediate donor support for a loved one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-3.5 lg:gap-5 xl:gap-6">
          
          {/* Card A: Donate Blood */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-5 lg:p-6 xl:p-8 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-colors">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-xl sm:rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 sm:mb-4">
                  <Droplet className="w-4.5 h-4.5 sm:w-6 sm:h-6 fill-red-600" />
                </div>
                <h3 className="text-[15px] xs:text-base sm:text-xl md:text-base lg:text-lg xl:text-xl font-bold text-slate-900 sm:hidden">
                  Donate Blood or Plasma
                </h3>
              </div>
              <div>
                <h3 className="hidden sm:block text-xl md:text-base lg:text-lg xl:text-xl font-bold text-slate-900">
                  Donate Blood or Plasma
                </h3>
                <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-600 sm:mt-1.5 leading-relaxed">
                  Join the noble mission to save lives by registering as a voluntary donor with NSS SAM Global University.
                </p>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Quick health and hemoglobin checks ensure 100% safe donation practices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>One single donation can save up to three critically ill patients.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Receive government-accredited donor certificates and academic service recognition.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-4 lg:pt-6 mt-4 sm:mt-6 md:mt-4 lg:mt-6 border-t border-slate-100">
              <button
                onClick={onOpenJoinModal}
                className="w-full py-2.5 sm:py-3 md:py-2.5 lg:py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Register as a Volunteer Donor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card B: Request Blood */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-5 lg:p-6 xl:p-8 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:block">
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shrink-0 sm:mb-4">
                  <Activity className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-[15px] xs:text-base sm:text-xl md:text-base lg:text-lg xl:text-xl font-bold text-slate-900 sm:hidden">
                  Request Emergency Blood
                </h3>
              </div>
              <div>
                <h3 className="hidden sm:block text-xl md:text-base lg:text-lg xl:text-xl font-bold text-slate-900">
                  Request Emergency Blood
                </h3>
                <p className="text-[11.5px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-600 sm:mt-1.5 leading-relaxed">
                  If you or a patient in Bhopal has an urgent blood or platelet requirement, connect with our volunteer squad immediately.
                </p>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>24×7 real-time coordination with cadet donors across Bhopal hospital networks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Immediate alerts pushed to NSS WhatsApp emergency group with verified donors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>Zero charges: Completely free humanitarian student volunteer support.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 sm:pt-6 md:pt-4 lg:pt-6 mt-4 sm:mt-6 md:mt-4 lg:mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2 sm:gap-2.5">
              <a
                href={universityInfo.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 sm:py-3 md:py-2.5 lg:py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Request on WhatsApp</span>
              </a>
              <a
                href={`tel:${universityInfo.phone}`}
                className="py-2.5 sm:py-3 md:py-2.5 lg:py-3 px-3.5 sm:px-4 md:px-3 lg:px-4 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 04 Interactive Blood Compatibility Matrix */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-10 md:p-5 lg:p-7 xl:p-10 border border-slate-200 space-y-4 sm:space-y-6 md:space-y-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-1.5">
              INTERACTIVE COMPATIBILITY GUIDE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
              Who Can You Save? Blood Compatibility Matrix
            </h2>
            <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Select your blood group to see who you can donate to and who you can receive blood from in clinical emergencies.
            </p>
          </div>

          {/* Blood Group Selectors */}
          <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 md:gap-2 lg:gap-3 w-full max-w-[300px] xs:max-w-[340px] sm:max-w-none mx-auto">
            {Object.keys(bloodCompatibilityData).map((group) => (
              <button
                key={group}
                onClick={() => setActiveBloodGroup(group)}
                className={`w-full h-10 xs:h-11 sm:w-14 sm:h-14 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl sm:rounded-2xl font-black text-xs sm:text-base md:text-xs lg:text-sm xl:text-base transition-all flex items-center justify-center cursor-pointer shrink-0 ${
                  activeBloodGroup === group
                    ? 'bg-red-600 text-white scale-105 border-2 border-red-700'
                    : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Compatibility Display Panel */}
          <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-8 md:p-4.5 lg:p-5 xl:p-8 border border-slate-200 space-y-3.5 sm:space-y-5 md:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-slate-200 pb-3 sm:pb-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-10 h-10 sm:w-12 sm:h-12 md:w-10 md:h-10 rounded-xl bg-red-600 text-white font-black text-base sm:text-xl md:text-lg flex items-center justify-center shrink-0">
                  {activeBloodGroup}
                </span>
                <div>
                  <h3 className="text-sm sm:text-lg md:text-base font-bold text-slate-900">
                    Blood Group: {activeBloodGroup}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {activeCompat.role}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-red-100 text-red-700 border border-red-200 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-red-600 shrink-0" /> {activeCompat.badge}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5 md:gap-3 lg:gap-4">
              
              {/* Can Donate To */}
              <div className="bg-white p-3.5 sm:p-5 md:p-3.5 lg:p-4 rounded-xl border border-slate-200 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-[10.5px] sm:text-xs md:text-[11px] font-black uppercase text-emerald-700 tracking-wider">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>You Can Donate Red Blood Cells To:</span>
                </div>
                <div className="flex flex-nowrap sm:flex-wrap gap-1 xs:gap-1.5 sm:gap-2 pt-1 overflow-x-auto sm:overflow-visible max-w-full">
                  {activeCompat.give.map((grp) => (
                    <span 
                      key={grp}
                      className="px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold text-[10px] sm:text-xs whitespace-nowrap shrink-0"
                    >
                      {grp}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 pt-0.5">
                  Compatible with <strong className="text-slate-700">{activeCompat.give.length}</strong> recipient group(s).
                </p>
              </div>

              {/* Can Receive From */}
              <div className="bg-white p-3.5 sm:p-5 md:p-3.5 lg:p-4 rounded-xl border border-slate-200 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-2 text-[10.5px] sm:text-xs md:text-[11px] font-black uppercase text-blue-700 tracking-wider">
                  <Droplet className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>You Can Safely Receive Blood From:</span>
                </div>
                <div className="flex flex-nowrap sm:flex-wrap gap-1 xs:gap-1.5 sm:gap-2 pt-1 overflow-x-auto sm:overflow-visible max-w-full">
                  {activeCompat.receive.map((grp) => (
                    <span 
                      key={grp}
                      className="px-1.5 xs:px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-extrabold text-[10px] sm:text-xs whitespace-nowrap shrink-0"
                    >
                      {grp}
                    </span>
                  ))}
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-500 pt-0.5">
                  Compatible with <strong className="text-slate-700">{activeCompat.receive.length}</strong> donor group(s).
                </p>
              </div>

            </div>

            {/* Medical Fact Note */}
            <div className="p-3 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-2.5 sm:gap-3 text-xs md:text-[11.5px] lg:text-xs text-amber-900 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{activeCompat.note}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Real Blood Donation Photo Gallery */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-8 md:p-5 lg:p-6 xl:p-8 border border-slate-200">
          <div className="mb-4 sm:mb-6 text-center sm:text-left">
            <span className="text-[10px] sm:text-xs font-bold text-red-600 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-1">
              FIELD PHOTOGRAPHS
            </span>
            <h2 className="text-[19px] xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug">
              Glimpses from Recent Blood Donation Mega Drives
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Authentic on-ground photographs from SAM Global University voluntary blood donation camps. Click any card to preview.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 md:gap-3 lg:gap-3 xl:gap-6">
            {bloodDriveImages.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedImage(item)}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col justify-between hover:border-red-400 transition-all duration-300 cursor-pointer"
              >
                {/* Edge-to-Edge Image Frame with 0px Left/Right Space */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                  <img loading="lazy" decoding="async"
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                  />
                  <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-2 xs:px-2.5 py-0.5 rounded-full bg-red-600/95 backdrop-blur-sm text-white text-[8px] xs:text-[9px] font-bold uppercase tracking-wider">
                      <Droplet className="w-2.5 h-2.5 fill-white" /> Live Drive
                    </span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[11px] font-bold px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 className="w-3 h-3 text-red-600" />
                      <span>Preview Photo</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-3.5 sm:p-4 md:p-3 lg:p-3 xl:p-4 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm md:text-xs lg:text-[12.5px] xl:text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] md:text-[10px] lg:text-[10px] xl:text-[11px] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="pt-2 sm:pt-2.5 mt-2 sm:mt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold text-[10.5px] md:text-[10px] xl:text-[11px] whitespace-nowrap">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> Verified Drive
                    </span>
                    <span className="text-orange-600 font-bold group-hover:translate-x-0.5 transition-transform text-[11px] whitespace-nowrap">
                      View ›
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 4-Step Safe Donation Journey */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-10 md:p-5 lg:p-7 xl:p-10 border border-slate-200 space-y-4 sm:space-y-6 md:space-y-5">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-red-600 uppercase tracking-widest bg-red-50 px-2.5 py-1 rounded-md border border-red-200 inline-block mb-1.5">
              SAFE CLINICAL PROTOCOL
            </span>
            <h2 className="text-[18px] xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              4-Step Safe Blood Donation Journey
            </h2>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
              Every voluntary donation at SAM Global University is strictly supervised by certified hospital medical officers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-6 md:gap-3 lg:gap-3.5 xl:gap-6">
            {donationSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div 
                  key={st.step} 
                  className="p-3.5 xs:p-4 sm:p-5 md:p-3.5 lg:p-3.5 xl:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-colors"
                >
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-slate-400 tracking-widest">
                        STEP {st.step}
                      </span>
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center ${st.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base md:text-xs lg:text-xs xl:text-base font-bold text-slate-900 leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-200 text-[10.5px] sm:text-[11px] md:text-[10px] lg:text-[10.5px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" /> 100% Medical Safety
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 Key Information for Donors & Myths Buster */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6 md:space-y-5">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[10px] sm:text-xs font-extrabold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block mb-1.5">
            MEDICAL FACTS & GUIDELINES
          </span>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            Key Information for Donors & Medical Truths
          </h2>
          <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-slate-500 mt-1">
            Addressing common student doubts so you can donate with total confidence and pride.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-3 lg:gap-3.5 xl:gap-5">
          {donorFaqFacts.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-3.5 lg:p-4 xl:p-6 border border-slate-200 flex flex-col justify-between hover:border-red-300 transition-colors"
            >
              <div>
                <span className="text-[10px] font-black uppercase text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full inline-block mb-2 sm:mb-2.5">
                  {faq.highlight}
                </span>
                <h3 className="text-sm sm:text-base md:text-xs lg:text-sm xl:text-base font-bold text-slate-900 mb-1.5 sm:mb-2 leading-snug">
                  {faq.title}
                </h3>
                <p className="text-xs md:text-[10.5px] lg:text-[11px] xl:text-xs text-slate-600 leading-relaxed">
                  {faq.fact}
                </p>
              </div>
              <div className="pt-2 sm:pt-3 mt-3 sm:mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] md:text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Verified Medical Fact</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 08 Hospital Collaborations Strip */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 xs:p-4 sm:p-8 md:p-5 lg:p-6 xl:p-8 border border-slate-200 text-center">
          <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
            NETWORK OF HOSPITALS & BLOOD BANKS
          </span>
          <h3 className="text-[17px] xs:text-lg sm:text-xl font-bold text-slate-800 mb-1.5 sm:mb-2">
            Trusted Partners in Saving Lives
          </h3>
          <p className="text-[11px] xs:text-xs md:text-[11.5px] lg:text-xs text-slate-500 max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed">
            We collaborate with leading organizations like Indian Red Cross Society, AIIMS, BMHRC, and regional hospitals to maintain a robust donor network. Click any card to visit their portal.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4 items-stretch justify-center">
            {partnerCollaborations.filter(p => p.type.includes('Healthcare') || p.type.includes('Hospital') || p.type.includes('Blood')).map((p, i) => (
              <a 
                key={i} 
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${p.name} official website`}
                className="group p-2.5 xs:p-3 sm:p-4 md:p-2.5 lg:p-3 xl:p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-red-400 transition-all duration-300 flex flex-col items-center justify-center min-h-[115px] h-full cursor-pointer"
              >
                <div className="h-9 sm:h-12 md:h-9 lg:h-10 xl:h-12 flex items-center justify-center">
                  <img loading="lazy" decoding="async" 
                    src={p.logo} 
                    alt={p.name} 
                    className="max-h-9 sm:max-h-12 md:max-h-9 lg:max-h-10 xl:max-h-12 max-w-[100px] sm:max-w-[120px] md:max-w-[95px] lg:max-w-[110px] object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <div className="flex items-center justify-center gap-1 mt-2 sm:mt-2.5 px-1">
                  <span className="text-[10px] sm:text-xs md:text-[10px] lg:text-[11px] font-bold text-slate-800 group-hover:text-red-600 transition-colors text-center line-clamp-2 leading-snug">
                    {p.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-red-500 transition-colors shrink-0 mb-auto mt-0.5" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-[8.5px] lg:text-[9.5px] text-slate-400 font-medium mt-1">
                  {p.type}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 09 24x7 Emergency WhatsApp & Call Coordination Strip */}
      <section className="max-w-[1650px] mx-auto px-2.5 xs:px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 border border-red-200 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-6 lg:p-7 xl:p-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <span className="text-[9px] xs:text-[10px] sm:text-xs font-black text-red-600 uppercase tracking-widest bg-red-100/70 px-2.5 py-1 rounded-md border border-red-200 inline-block whitespace-nowrap">
              INSTANT VOLUNTEER COORDINATION
            </span>
            <h3 className="text-[18px] xs:text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-black text-slate-900 tracking-tight leading-snug">
              Need emergency blood assistance in Bhopal?
            </h3>
            <p className="text-[11px] xs:text-xs sm:text-sm md:text-xs lg:text-xs xl:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Our NSS coordinators operate an instant response desk connecting patients admitted in AIIMS Bhopal, BMHRC, Hamidia, and Jawaharlal Nehru Cancer Hospital with active student donors.
            </p>
          </div>
          
          <div className="flex flex-nowrap sm:flex-row md:flex-col lg:flex-row items-center gap-1.5 xs:gap-2 sm:gap-2.5 w-full md:w-auto shrink-0 justify-center max-w-full overflow-hidden sm:overflow-visible">
            <a
              href={universityInfo.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-2.5 xs:px-3 sm:px-6 md:px-4 lg:px-5 py-2 sm:py-3.5 md:py-2.5 lg:py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-[9px] xs:text-[10px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 cursor-pointer uppercase tracking-wider text-center min-w-0"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Connect on WhatsApp</span>
            </a>

            <a
              href={`tel:${universityInfo.phone}`}
              className="flex-1 sm:flex-initial px-2.5 xs:px-3 sm:px-6 md:px-4 lg:px-5 py-2 sm:py-3.5 md:py-2.5 lg:py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-[9px] xs:text-[10px] sm:text-sm md:text-xs lg:text-sm transition flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 cursor-pointer uppercase tracking-wider text-center min-w-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Call Helpline ({universityInfo.phone})</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10 Compact High-Resolution Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl lg:max-w-4xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-y-auto md:overflow-hidden z-10 max-h-[80vh] sm:max-h-[90vh] flex flex-col md:flex-row items-stretch shadow-none min-h-0"
            >
              {/* Mobile Top-Right Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="md:hidden absolute top-2.5 right-2.5 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-white text-slate-800 border border-slate-200 flex items-center justify-center transition cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Full Poster Image Edge-to-Edge with object-contain */}
              <div className="w-full md:w-[300px] lg:w-[360px] shrink-0 bg-slate-950 overflow-hidden flex items-center justify-center p-2 xs:p-2.5 sm:p-4 min-h-[160px] xs:min-h-[180px] sm:min-h-[300px] md:min-h-full">
                <img loading="lazy" decoding="async"
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[190px] xs:max-h-[220px] sm:max-h-[380px] md:max-h-[480px] object-contain block select-none rounded-xl"
                />
              </div>

              {/* Right Column: Clean, Short & Focused Content */}
              <div className="flex-1 p-3.5 xs:p-4 pb-5 xs:pb-6 sm:p-6 lg:p-6 flex flex-col justify-between md:overflow-y-auto min-h-0 md:max-h-[90vh]">
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Top Bar with Tag & Circular Close Button */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[9.5px] xs:text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-widest text-red-600 bg-red-50 px-2 xs:px-2.5 py-0.5 sm:py-1 rounded-md border border-red-200 whitespace-nowrap">
                        {selectedImage.tag}
                      </span>
                      <span className="text-[10.5px] xs:text-[11px] font-bold text-slate-500 flex items-center gap-1 whitespace-nowrap">
                        <Calendar className="w-3 h-3 text-red-500 shrink-0" />
                        <span>{selectedImage.date}</span>
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedImage(null)}
                      className="hidden md:flex w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 items-center justify-center transition shrink-0 cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Title & Location */}
                  <div>
                    <h3 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] xs:text-xs text-slate-500 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>

                  {/* Short & Authentic Description */}
                  <p className="text-[11.5px] xs:text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  {/* Verification Pill */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-rose-50/70 border border-rose-100 flex items-center justify-between gap-2 text-[10.5px] xs:text-xs overflow-hidden">
                    <span className="text-slate-500 font-medium whitespace-nowrap shrink-0">Drive Status:</span>
                    <span className="font-bold text-red-700 flex items-center gap-1 min-w-0">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600 shrink-0" />
                      <span className="truncate">Supervised Hospital Drive</span>
                    </span>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-3.5 sm:pt-4 pb-3 sm:pb-0 mt-3.5 sm:mt-4 border-t border-slate-100 flex flex-nowrap items-center justify-between gap-2">
                  <a
                    href={universityInfo.whatsappGroup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] xs:text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 px-2.5 xs:px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition border border-emerald-200 cursor-pointer whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>WhatsApp Desk</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="px-3.5 xs:px-4 py-1.5 sm:py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] xs:text-xs font-bold transition ml-auto cursor-pointer whitespace-nowrap"
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
