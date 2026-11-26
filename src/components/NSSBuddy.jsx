import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Send, Phone, RotateCcw, ArrowRight, Bot
} from 'lucide-react';
import { WhatsAppIcon } from './common/SocialIcons';

const COORDINATORS = [
  {
    name: 'Priyanshu Sahu',
    role: 'Student Coordinator',
    phone: '6264583599',
    tel: 'tel:+916264583599',
    wa: 'https://wa.me/916264583599',
  },
  {
    name: 'Mandeep Vanshkar',
    role: 'Student Coordinator',
    phone: '9098420508',
    tel: 'tel:+919098420508',
    wa: 'https://wa.me/919098420508',
  },
  {
    name: 'NSS Official Helpline',
    role: 'Programme Officer / Unit',
    phone: '7225814452',
    tel: 'tel:+917225814452',
    wa: 'https://wa.me/917225814452',
  },
];

const CHIPS = {
  main: { label: '🏠 Main Menu' },
  join: { label: '🙋 Join NSS' },
  join_docs: { label: '📋 Documents & Fee' },
  join_benefits: { label: '🎓 Certificate Benefits' },
  activities: { label: '📅 Latest Activities' },
  act_upcoming: { label: '📢 Upcoming Drive' },
  blood: { label: '🩸 Blood Donation' },
  blood_donate: { label: '🚨 Need / Donate Blood' },
  camp: { label: '⛺ 7-Day Special Camp' },
  camp_noc: { label: '📄 Camp NOC Form' },
  achievements: { label: '🏆 Achievements' },
  orange_army: { label: '👕 Orange Army' },
  helpline: { label: '📞 Direct Call / Help' },
};

const BOT_FLOW = {
  main: {
    text: 'Namaste! Main **NSS Buddy** hoon — **NSS SAM Global University** ka smart assistant. Niche diye gaye options me se choose karein ya apna sawal likhein:',
    chips: ['join', 'activities', 'blood', 'camp', 'achievements', 'orange_army', 'helpline'],
  },
  join: {
    text: 'NSS join karna bilkul **FREE** hai! SGU ke sabhi UG/PG students **Orange Army** join kar sakte hain. Isme 120 hours/year community service aur Govt of India ke **B & C Certificates** milte hain.',
    action: { label: 'Open Join NSS Form', type: 'modal' },
    chips: ['join_docs', 'join_benefits', 'helpline', 'main'],
  },
  join_docs: {
    text: 'Registration ke liye bas aapka **Name, Father\'s Name, Enrollment/Roll No., Course/Department, Mobile Number aur Blood Group** chahiye. Koi registration fee nahi lagti!',
    action: { label: 'Fill Registration Form', type: 'modal' },
    chips: ['join_benefits', 'act_upcoming', 'helpline', 'main'],
  },
  join_benefits: {
    text: 'NSS **B & C Certificates** Ministry of Youth Affairs & Sports, Govt of India dwara milte hain — jo higher studies, scholarships aur govt jobs me kaafi helpful hote hain. Saath hi RDC, NIC aur State Camps ka mauka bhi milta hai!',
    chips: ['camp', 'achievements', 'join', 'helpline', 'main'],
  },
  activities: {
    text: 'NSS SGU har saal **50+ drives** karta hai! Recent drives: **Digital Literacy Campaign (17 Nov 2026)**, **Pre-Diwali Celebration (4 Nov 2026)**, **Red Run Marathon**, aur **Swachhata Hi Seva 2026**.',
    action: { label: 'See All Activities', type: 'page', page: 'activities' },
    chips: ['act_upcoming', 'join', 'helpline', 'main'],
  },
  act_upcoming: {
    text: 'Upcoming Campus Drive: **NSS Mega Orientation Program 2026** — **4 December 2026** ko **SGU Auditorium, Bhopal** me! Sabhi 1st & 2nd year students ke liye free hai.',
    action: { label: 'Register for Orientation', type: 'modal' },
    chips: ['activities', 'helpline', 'main'],
  },
  blood: {
    text: 'NSS Blood Donation Network **AIIMS Bhopal, Red Cross Society, BMHRC** aur **Jawaharlal Nehru Cancer Hospital** ke saath milkar emergency blood support aur mega camps organize karta hai.',
    action: { label: 'Open Blood Camp Page', type: 'page', page: 'blood-donation' },
    chips: ['blood_donate', 'join', 'helpline', 'main'],
  },
  blood_donate: {
    text: 'Emergency blood requirement ya blood donation ke liye aap niche diye gaye coordinators ko **direct call ya WhatsApp** kar sakte hain:',
    showCallCards: true,
    chips: ['blood', 'main'],
  },
  camp: {
    text: 'NSS **7-Day Special Camp** har saal adopted village (Bilkhiriya Kalan / Raisen) me lagta hai — jisme Shramdaan, Free Medical Camp, Digital Literacy, Nukkad Natak aur Plantation hota hai.',
    action: { label: 'Explore 7-Day Special Camp', type: 'page', page: 'special-camp' },
    chips: ['camp_noc', 'join', 'helpline', 'main'],
  },
  camp_noc: {
    text: 'Special Camp me jaane ke liye **Parent Consent & NOC Form** zaroori hota hai, jise aap Special Camp page par easily dekh aur fill kar sakte hain.',
    action: { label: 'Open Special Camp Page', type: 'page', page: 'special-camp' },
    chips: ['helpline', 'main'],
  },
  achievements: {
    text: 'SGU NSS volunteers ne **Pre-RDC 2026 (Agra)**, **National Integration Camp (NIC 2026)**, **State Leadership Camp (Chitrakoot)** aur **MP Governor & Police Commissioner Honours** hasil kiye hain!',
    action: { label: 'View All Achievements', type: 'page', page: 'achievements' },
    chips: ['join', 'helpline', 'main'],
  },
  orange_army: {
    text: '**Orange Army** SGU ke active NSS volunteers ki pehchan hai! Official NSS T-Shirt aur Volunteer Kit orientation ke baad active cadets ko diya jata hai.',
    action: { label: 'Explore Orange Army', type: 'page', page: 'orange-army' },
    chips: ['join', 'helpline', 'main'],
  },
  helpline: {
    text: 'Kisi bhi sawal, registration help ya emergency ke liye aap **direct Call ya WhatsApp** kar sakte hain:',
    showCallCards: true,
    action: { label: 'Meet Full NSS Team', type: 'page', page: 'team' },
    chips: ['join', 'activities', 'main'],
  },
};

function matchIntent(input) {
  const q = input.toLowerCase();
  if (/(join|register|form|admission|enroll|shamil|kaise|fee)/.test(q)) return 'join';
  if (/(doc|document|roll|eligibility|eligible)/.test(q)) return 'join_docs';
  if (/(certificate|benefit|fayda|b cert|c cert)/.test(q)) return 'join_benefits';
  if (/(blood|donor|donate|khoon|rakt|emergency)/.test(q)) return 'blood_donate';
  if (/(camp|noc|7 day|seven day|village|bilkhiriya)/.test(q)) return 'camp';
  if (/(orient|upcoming|december|4 dec)/.test(q)) return 'act_upcoming';
  if (/(activit|event|drive|program|rally|diwali|marathon)/.test(q)) return 'activities';
  if (/(achiev|award|rdc|nic|governor|medal|honour|prize)/.test(q)) return 'achievements';
  if (/(tshirt|t-shirt|shirt|orange|army|kit)/.test(q)) return 'orange_army';
  if (/(call|phone|number|contact|help|whatsapp|sir|mam|coordinator|team|helpline)/.test(q)) return 'helpline';
  return null;
}

function renderFormattedText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-bold text-slate-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

export default function NSSBuddy({ setActivePage, onOpenJoinModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome-1',
      sender: 'bot',
      ...BOT_FLOW.main,
    },
  ]);

  const scrollRef = useRef(null);
  const prevOpenRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isOpen) {
      prevOpenRef.current = isOpen;
      return;
    }

    // When chat is clicked open, always start from the top
    if (!prevOpenRef.current) {
      prevOpenRef.current = true;
      requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
      });
      return;
    }

    // During an active chat session, scroll to show new messages
    el.scrollTop = el.scrollHeight;
  }, [messages, isTyping, isOpen]);

  const pushBotNode = (nodeKey, customText) => {
    const node = BOT_FLOW[nodeKey] || BOT_FLOW.main;
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: customText || node.text,
          action: node.action,
          showCallCards: node.showCallCards,
          chips: node.chips,
        },
      ]);
    }, 240);
  };

  const handleChipClick = (chipKey) => {
    const chipLabel = CHIPS[chipKey]?.label || chipKey;
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, sender: 'user', text: chipLabel },
    ]);
    pushBotNode(chipKey);
  };

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    setInputValue('');
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, sender: 'user', text: trimmed },
    ]);

    const matched = matchIntent(trimmed);
    if (matched) {
      pushBotNode(matched);
    } else {
      pushBotNode(
        'helpline',
        'Is sawal ke liye aap niche diye gaye options choose kar sakte hain ya hamare NSS Student Coordinators ko **direct call / WhatsApp** kar sakte hain:'
      );
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        ...BOT_FLOW.main,
      },
    ]);
    setIsTyping(false);
  };

  const handleAction = (action) => {
    if (!action) return;
    if (action.type === 'modal' && onOpenJoinModal) {
      setIsOpen(false);
      onOpenJoinModal();
    } else if (action.type === 'page' && setActivePage && action.page) {
      setIsOpen(false);
      setActivePage(action.page);
    }
  };

  return (
    <>
      {/* Floating Launcher (Animated Circular Logo Only, expands name on hover) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
            transition={{
              opacity: { duration: 0.25 },
              scale: { duration: 0.25 },
              y: { duration: 2.6, repeat: Infinity, ease: 'easeInOut' },
            }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open NSS Buddy"
            className="group fixed bottom-20 xs:bottom-21 sm:bottom-24 lg:bottom-6 right-2.5 xs:right-3 sm:right-5 lg:right-6 z-40 inline-flex items-center p-1 rounded-full bg-[#0c1f44] hover:bg-[#132b5e] text-white border border-orange-400/80 transition-all duration-300 cursor-pointer active:scale-95"
          >
            {/* Subtle pulsing outer ring */}
            <span className="absolute -inset-1 rounded-full border border-orange-400/40 animate-ping pointer-events-none" />

            {/* Expandable Name on Hover */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-[130px] group-hover:opacity-100 group-hover:pl-2.5 group-hover:pr-2 transition-all duration-300 text-left leading-tight">
              <span className="block text-[11px] sm:text-xs font-extrabold tracking-tight text-white">
                NSS Buddy
              </span>
              <span className="block text-[9px] text-orange-300 font-semibold">
                Ask / Quick Help
              </span>
            </span>

            {/* Animated Circular Agent Icon */}
            <span className="relative w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border-2 border-orange-300 flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5 xs:w-5.5 xs:h-5.5 sm:w-6 sm:h-6 text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c1f44]" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 xs:bottom-21 sm:bottom-24 lg:bottom-6 right-2.5 xs:right-3 sm:right-5 lg:right-6 z-50 w-[calc(100vw-20px)] xs:w-[calc(100vw-24px)] max-w-[380px] sm:w-[390px] lg:w-[405px] h-[72vh] max-h-[540px] min-h-[360px] bg-white rounded-2xl sm:rounded-3xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0c1f44] text-white px-3.5 py-3 flex items-center justify-between gap-2 shrink-0 border-b border-white/10">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border border-orange-300 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c1f44]" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs sm:text-sm font-black tracking-tight truncate">
                    NSS Buddy
                  </h2>
                  <p className="text-[10px] text-orange-300 font-semibold truncate">
                    NSS SAM Global University
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Restart chat"
                  aria-label="Restart chat"
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-3 xs:p-3.5 space-y-3 bg-slate-50"
            >
              {messages.map((msg, idx) => {
                const isLatestBot = msg.sender === 'bot' && idx === messages.length - 1 && !isTyping;
                if (msg.sender === 'user') {
                  return (
                    <div key={msg.id} className="flex justify-end">
                      <div className="max-w-[82%] bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11.5px] xs:text-xs font-semibold px-3 py-2 rounded-2xl rounded-br-sm">
                        {msg.text}
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={msg.id} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border border-orange-300 flex items-center justify-center shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="max-w-[86%] space-y-2">
                        <div className="bg-white border border-slate-200 text-slate-700 text-[11.5px] xs:text-xs leading-relaxed px-3 py-2.5 rounded-2xl rounded-tl-sm">
                          {renderFormattedText(msg.text)}
                        </div>

                        {/* Direct Call & WhatsApp Cards */}
                        {msg.showCallCards && (
                          <div className="space-y-1.5">
                            {COORDINATORS.map((c) => (
                              <div
                                key={c.phone}
                                className="bg-white border border-slate-200 rounded-xl p-2 flex items-center justify-between gap-2"
                              >
                                <div className="min-w-0">
                                  <div className="text-[11px] font-bold text-slate-900 truncate">
                                    {c.name}
                                  </div>
                                  <div className="text-[9.5px] text-slate-500 truncate">
                                    {c.role} • {c.phone}
                                  </div>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <a
                                    href={c.tel}
                                    className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold transition whitespace-nowrap"
                                  >
                                    <Phone className="w-3 h-3" />
                                    <span>Call</span>
                                  </a>
                                  <a
                                    href={c.wa}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`WhatsApp ${c.name}`}
                                    className="inline-flex items-center justify-center p-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition"
                                  >
                                    <WhatsAppIcon className="w-3.5 h-3.5" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Button */}
                        {msg.action && (
                          <button
                            type="button"
                            onClick={() => handleAction(msg.action)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0c1f44] hover:bg-[#132b5e] text-white text-[11px] font-bold transition cursor-pointer"
                          >
                            <span>{msg.action.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Contextual Follow-up Chips (only under latest bot reply) */}
                    {isLatestBot && msg.chips && msg.chips.length > 0 && (
                      <div className="pl-8 flex flex-wrap gap-1.5">
                        {msg.chips.map((chipKey) => (
                          <button
                            key={chipKey}
                            type="button"
                            onClick={() => handleChipClick(chipKey)}
                            className="px-2.5 py-1.5 rounded-full bg-white hover:bg-orange-50 border border-orange-300 text-slate-800 hover:text-orange-700 text-[10.5px] xs:text-[11px] font-bold transition cursor-pointer active:scale-95"
                          >
                            {CHIPS[chipKey]?.label || chipKey}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 border border-orange-300 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="bg-white border border-slate-200 px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce [animation-delay:120ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce [animation-delay:240ms]" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Input Bar */}
            <form
              onSubmit={handleSend}
              className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Sawal likhein ya chip choose karein..."
                className="flex-1 min-w-0 bg-slate-100 focus:bg-white border border-slate-200 focus:border-orange-500 rounded-xl px-3 py-2 text-[11.5px] xs:text-xs text-slate-800 placeholder-slate-400 focus:outline-none transition"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-8 h-8 xs:w-9 xs:h-9 rounded-xl bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center shrink-0 transition cursor-pointer active:scale-95"
              >
                <Send className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
