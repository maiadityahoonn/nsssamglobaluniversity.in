import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Sparkles, CheckCircle2, User, Mail, Phone, BookOpen, Heart, 
  Award, ArrowRight, ArrowLeft, ShieldCheck, MapPin, Check, 
  ExternalLink, Calendar, Users, FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useScrollLock } from '../hooks/useScrollLock';
import { WhatsAppIcon } from './common/SocialIcons';

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/IEnjaclT36N8ERv2FEvVYN?s=cl&p=a&mlu=4&ilr=4&iam=0";

const SKILL_ACTIVITIES = [
  "Photography / फोटोग्राफी",
  "Video / Reel Editing",
  "Anchoring / मंच संचालन",
  "Dancing / नृत्य",
  "Drawing / चित्रकला",
  "Acting / अभिनय",
  "Poster / Flyer Design",
  "Singing / गायन"
];

const NSS_ACTIVITY_INTERESTS = [
  "Blood Donation / रक्तदान",
  "Plantation Drive / वृक्षारोपण",
  "Community Service / सामुदायिक सेवा",
  "Road Safety Campaign / सड़क सुरक्षा अभियान",
  "Cleanliness Drive / स्वच्छता अभियान",
  "Awareness Program / जागरूकता कार्यक्रम",
  "Plastic-Free Campus / प्लास्टिक मुक्त परिसर"
];

const INITIAL_FORM = {
  // Part 1: Personal Information
  fullName: '',
  phone: '',
  email: '',
  bloodGroup: 'O+',
  dob: '',
  category: 'General / सामान्य',
  gender: 'Male / पुरुष',
  fatherName: '',

  // Part 2: Academic & Address Details
  institution: 'SAM Global University, Bhopal',
  department: '',
  className: '',
  address: '',
  district: 'Bhopal',
  state: 'Madhya Pradesh',
  aadhaar: '',

  // Part 3: NSS Information
  whyJoin: '',
  hasCertificate: 'No / नहीं',
  skills: [],
  skillsOther: '',
  nssInterests: [],
  nssInterestsOther: '',

  // Part 4: Declaration
  declarationAccepted: false,
};

export default function JoinModal({ isOpen, onClose }) {
  // Lock background scroll completely when open
  useScrollLock(Boolean(isOpen));

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [stepError, setStepError] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [currentStep, submitted, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setStepError('');
  };

  const handleCheckboxListChange = (listName, item) => {
    setFormData(prev => {
      const currentList = prev[listName] || [];
      const updated = currentList.includes(item)
        ? currentList.filter(i => i !== item)
        : [...currentList, item];
      return { ...prev, [listName]: updated };
    });
    setStepError('');
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName.trim()) return 'कृपया स्वयंसेवक का नाम (Full Name) भरें।';
      if (!formData.phone.trim() || formData.phone.trim().length < 10) return 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें।';
      if (!formData.email.trim() || !formData.email.includes('@')) return 'कृपया वैध ईमेल एड्रेस दर्ज करें।';
      if (!formData.dob) return 'कृपया जन्मतिथि (DOB) दर्ज करें।';
      if (!formData.fatherName.trim()) return 'कृपया पिता का नाम (Father\'s Name) भरें।';
    } else if (currentStep === 2) {
      if (!formData.institution.trim()) return 'कृपया संस्था का नाम भरें।';
      if (!formData.department.trim()) return 'कृपया विभाग का नाम (Department) भरें।';
      if (!formData.className.trim()) return 'कृपया कक्षा / वर्ष (Class/Year) भरें।';
      if (!formData.address.trim()) return 'कृपया पूरा पता दर्ज करें।';
      if (!formData.district.trim()) return 'कृपया ज़िला भरें।';
      if (!formData.state.trim()) return 'कृपया राज्य भरें।';
      if (!formData.aadhaar.trim() || formData.aadhaar.replace(/\s+/g, '').length < 12) {
        return 'कृपया 12 अंकों का वैध आधार नंबर दर्ज करें।';
      }
    } else if (currentStep === 3) {
      if (!formData.whyJoin.trim()) return 'कृपया बताएं कि आप NSS में क्यों जुड़ना चाहते हैं।';
      if (formData.skills.length === 0 && !formData.skillsOther.trim()) {
        return 'कृपया अपनी कम से कम एक गतिविधि/हुनर (Skill/Activity) चुनें।';
      }
      if (formData.nssInterests.length === 0 && !formData.nssInterestsOther.trim()) {
        return 'कृपया अपनी रुचि की कम से कम एक NSS गतिविधि चुनें।';
      }
    } else if (currentStep === 4) {
      if (!formData.declarationAccepted) {
        return 'कृपया नियम, शर्तें एवं घोषणा की सहमति (Declaration Acceptance) पर टिक करें।';
      }
    }
    return '';
  };

  const handleNext = () => {
    const error = validateCurrentStep();
    if (error) {
      setStepError(error);
      return;
    }
    setStepError('');
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStepError('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateCurrentStep();
    if (error) {
      setStepError(error);
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData(INITIAL_FORM);
    setStepError('');
    onClose();
  };

  const stepsMeta = [
    { num: 1, title: "व्यक्तिगत", sub: "Personal" },
    { num: 2, title: "शैक्षणिक व पता", sub: "Academic" },
    { num: 3, title: "NSS रुचि", sub: "Interests" },
    { num: 4, title: "शर्तें व घोषणा", sub: "Declaration" }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden z-10 my-auto max-h-[82vh] sm:max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#0c1f44] text-white p-3.5 xs:p-4 sm:p-5 relative flex-shrink-0 border-b border-white/10">
            <button
              onClick={handleReset}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 xs:gap-3 pr-7 sm:pr-8">
              <div className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0 bg-white">
                <img 
                  src="/assets/images/nss-sgu-logo.webp" 
                  alt="NSS Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block text-[7px] xs:text-[8.5px] sm:text-[10px] bg-orange-500 text-white font-bold px-1.5 xs:px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap">
                  SAM Global University • NSS Unit
                </span>
                <h3 className="text-[10.5px] xs:text-[13.5px] min-[425px]:text-[15px] sm:text-lg font-black text-white leading-snug mt-0.5 whitespace-nowrap sm:truncate">
                  NSS Volunteer Registration Form
                </h3>
                <p className="text-[7.5px] xs:text-[9px] min-[425px]:text-[10px] sm:text-xs text-orange-200/90 leading-snug whitespace-nowrap sm:truncate">
                  राष्ट्रीय सेवा योजना (NSS) स्वयंसेवक पंजीकरण • 2026–27
                </p>
              </div>
            </div>

            {/* Part Progress Steps (Only when not submitted) */}
            {!submitted && (
              <div className="mt-3 pt-2.5 sm:mt-3.5 sm:pt-3 border-t border-white/10 grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2">
                {stepsMeta.map((s) => {
                  const isActive = currentStep === s.num;
                  const isCompleted = currentStep > s.num;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => {
                        if (isCompleted || s.num < currentStep) {
                          setCurrentStep(s.num);
                          setStepError('');
                        }
                      }}
                      className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-1.5 px-0.5 xs:px-1.5 sm:px-2 py-1.5 rounded-lg text-center sm:text-left transition-all text-[7px] xs:text-[8.5px] min-[425px]:text-[9.5px] sm:text-xs font-semibold min-w-0 ${
                        isActive
                          ? 'bg-orange-500 text-white font-bold'
                          : isCompleted
                          ? 'bg-white/15 text-emerald-300 cursor-pointer hover:bg-white/20'
                          : 'bg-white/5 text-slate-400 opacity-60'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black shrink-0 ${
                        isActive ? 'bg-white text-orange-600' : isCompleted ? 'bg-emerald-400 text-slate-900' : 'bg-white/20 text-white'
                      }`}>
                        {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : s.num}
                      </div>
                      <span className="max-w-full leading-tight sm:truncate">{s.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick Notice Banner */}
          {!submitted && (
            <div className="bg-amber-50/90 border-b border-amber-200/80 px-3.5 xs:px-4 py-2 flex flex-wrap items-center justify-between gap-1.5 xs:gap-2 text-[10px] xs:text-[11px] text-amber-900 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                <span>कृपया सभी जानकारी सही-सही भरें। / Please provide accurate information.</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600">
                <span>Helpline:</span>
                <a href="tel:6264583599" className="text-orange-600 hover:underline">6264583599</a>
                <span>•</span>
                <a href="tel:9098420508" className="text-orange-600 hover:underline">9098420508</a>
              </div>
            </div>
          )}

          {/* Body Content */}
          <div ref={bodyRef} className="p-4 sm:p-6 overflow-y-auto flex-1">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Error Banner if any validation fails */}
                {stepError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                    <span>{stepError}</span>
                  </motion.div>
                )}

                {/* ================= STEP 1: Personal Information ================= */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3.5"
                  >
                    <div className="border-b border-slate-200 pb-2">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">1</span>
                        <span>Personal Information / व्यक्तिगत जानकारी</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">विद्यार्थी का प्राथमिक व्यक्तिगत विवरण</p>
                    </div>

                    {/* Full Name & Father's Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Name of the Volunteer / स्वयंसेवक का नाम *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          placeholder="e.g. Priyanshu Sahu"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Father's Name / पिता का नाम *
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          required
                          placeholder="Father's full name"
                          value={formData.fatherName}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>
                    </div>

                    {/* Mobile & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Mobile No. / मोबाइल नंबर *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          maxLength={10}
                          placeholder="10-digit mobile number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Email Address / ईमेल *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="student@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>
                    </div>

                    {/* Blood Group & DOB */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Blood Group / ब्लड ग्रुप *
                        </label>
                        <select
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white font-medium"
                        >
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          DOB (dd/mm/yyyy) / जन्मतिथि *
                        </label>
                        <input
                          type="date"
                          name="dob"
                          required
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>
                    </div>

                    {/* Category & Gender */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Category / श्रेणी *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white font-medium"
                        >
                          <option value="General / सामान्य">General / सामान्य</option>
                          <option value="OBC">OBC</option>
                          <option value="SC">SC</option>
                          <option value="ST">ST</option>
                          <option value="Other / अन्य">Other / अन्य</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Gender / लिंग *
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white font-medium"
                        >
                          <option value="Male / पुरुष">Male / पुरुष</option>
                          <option value="Female / महिला">Female / महिला</option>
                          <option value="Other / अन्य">Other / अन्य</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ================= STEP 2: Academic & Address Details ================= */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-3.5"
                  >
                    <div className="border-b border-slate-200 pb-2">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">2</span>
                        <span>Academic & Institutional Details / शैक्षणिक जानकारी</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">विश्वविद्यालय, विभाग, कक्षा एवं निवास का पता</p>
                    </div>

                    {/* Institution */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        Name of the Institution / संस्था का नाम *
                      </label>
                      <input
                        type="text"
                        name="institution"
                        required
                        placeholder="SAM Global University, Bhopal"
                        value={formData.institution}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                      />
                    </div>

                    {/* Department & Class */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Name of the Department / विभाग का नाम *
                        </label>
                        <input
                          type="text"
                          name="department"
                          required
                          placeholder="e.g. Computer Science, Nursing, B.Pharma, Agriculture"
                          value={formData.department}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                          Class / कक्षा *
                        </label>
                        <input
                          type="text"
                          name="className"
                          required
                          placeholder="e.g. 1st Year (2nd Sem) / BCA / B.Tech"
                          value={formData.className}
                          onChange={handleChange}
                          className="w-full text-xs sm:text-sm px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white"
                        />
                      </div>
                    </div>

                    {/* Address Section */}
                    <div className="pt-2 border-t border-slate-200">
                      <h5 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-orange-600" />
                        <span>3. Address Details / पता संबंधी जानकारी</span>
                      </h5>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                            Address / पूरा पता *
                          </label>
                          <textarea
                            name="address"
                            required
                            rows={2}
                            placeholder="Street, Colony, Village/Town, Pincode"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white resize-none"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                              District / ज़िला *
                            </label>
                            <input
                              type="text"
                              name="district"
                              required
                              placeholder="e.g. Bhopal"
                              value={formData.district}
                              onChange={handleChange}
                              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                              State / राज्य *
                            </label>
                            <input
                              type="text"
                              name="state"
                              required
                              placeholder="e.g. Madhya Pradesh"
                              value={formData.state}
                              onChange={handleChange}
                              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                              Aadhaar Number / आधार *
                            </label>
                            <input
                              type="text"
                              name="aadhaar"
                              required
                              maxLength={14}
                              placeholder="12-digit Aadhaar"
                              value={formData.aadhaar}
                              onChange={handleChange}
                              className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white font-mono"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ================= STEP 3: NSS Information & Activities ================= */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="border-b border-slate-200 pb-2">
                      <h4 className="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">3</span>
                        <span>NSS Information / एनएसएस संबंधी जानकारी</span>
                      </h4>
                      <p className="text-[11px] text-slate-500">उद्देश्य, पूर्व अनुभव, प्रतिभा व रुचि की गतिविधियां</p>
                    </div>

                    {/* Why join NSS */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1">
                        Why do you want to join NSS? / आप एनएसएस में क्यों जुड़ना चाहते हैं? *
                      </label>
                      <textarea
                        name="whyJoin"
                        required
                        rows={2}
                        placeholder="समाज सेवा, व्यक्तित्व विकास, राष्ट्र निर्माण एवं अनुशासन..."
                        value={formData.whyJoin}
                        onChange={handleChange}
                        className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition bg-white resize-none"
                      />
                    </div>

                    {/* Do you have NSS certificate */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1.5">
                        Do you have any NSS certificate? / क्या आपके पास कोई एनएसएस प्रमाणपत्र है? *
                      </label>
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                        {['No / नहीं', 'Yes / हाँ'].map((val) => (
                          <label key={val} className="flex items-center gap-2 cursor-pointer bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-lg hover:border-orange-400 transition">
                            <input
                              type="radio"
                              name="hasCertificate"
                              value={val}
                              checked={formData.hasCertificate === val}
                              onChange={handleChange}
                              className="text-orange-600 focus:ring-orange-500"
                            />
                            <span>{val}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Activities / Skills (Talents) */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1.5">
                        Activities / गतिविधियाँ (आपकी प्रतिभा / हुनर) *
                      </label>
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs">
                        {SKILL_ACTIVITIES.map((act) => {
                          const isChecked = formData.skills.includes(act);
                          return (
                            <label
                              key={act}
                              onClick={() => handleCheckboxListChange('skills', act)}
                              className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer select-none transition ${
                                isChecked
                                  ? 'bg-orange-50 border-orange-400 text-orange-950 font-bold'
                                  : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="leading-tight">{act}</span>
                            </label>
                          );
                        })}
                      </div>
                      <input
                        type="text"
                        name="skillsOther"
                        placeholder="Other / अन्य कौशल..."
                        value={formData.skillsOther}
                        onChange={handleChange}
                        className="mt-2 w-full text-xs px-3 py-1.5 rounded-xl border border-slate-200 bg-white placeholder-slate-400 outline-none focus:border-orange-400"
                      />
                    </div>

                    {/* NSS Activities Interested in */}
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-800 mb-1.5">
                        Select the NSS activities you are interested in / अपनी रुचि की गतिविधियाँ चुनें *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs">
                        {NSS_ACTIVITY_INTERESTS.map((act) => {
                          const isChecked = formData.nssInterests.includes(act);
                          return (
                            <label
                              key={act}
                              onClick={() => handleCheckboxListChange('nssInterests', act)}
                              className={`flex items-center gap-2 p-2 rounded-xl border cursor-pointer select-none transition ${
                                isChecked
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                                  : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:border-slate-300'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="leading-tight">{act}</span>
                            </label>
                          );
                        })}
                      </div>
                      <input
                        type="text"
                        name="nssInterestsOther"
                        placeholder="Other / अन्य रुचि..."
                        value={formData.nssInterestsOther}
                        onChange={handleChange}
                        className="mt-2 w-full text-xs px-3 py-1.5 rounded-xl border border-slate-200 bg-white placeholder-slate-400 outline-none focus:border-orange-400"
                      />
                    </div>
                  </motion.div>
                )}

                {/* ================= STEP 4: WhatsApp Group, Terms & Declaration ================= */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    {/* WhatsApp Group Box */}
                    <div className="p-3 xs:p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-950">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <WhatsAppIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="text-xs sm:text-sm font-bold text-emerald-950 leading-snug">
                              6. Join NSS WhatsApp Group / एनएसएस व्हाट्सऐप समूह
                            </h5>
                            <p className="text-[11px] text-emerald-800 leading-snug mt-0.5">
                              Join the group to connect with the NSS officer and receive updates. / एनएसएस अधिकारी से जुड़ने और अपडेट पाने के लिए समूह से जुड़ें।
                            </p>
                          </div>
                        </div>
                        <a
                          href={WHATSAPP_GROUP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 transition"
                        >
                          <span>Join Group</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Terms & Conditions Box */}
                    <div className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-[10px] sm:text-[11px] text-slate-700">
                      <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-orange-600" />
                        <span>7. Terms & Conditions / नियम एवं शर्तें</span>
                      </h5>
                      <ol className="list-decimal pl-4 space-y-1.5 text-slate-600 leading-relaxed">
                        <li>All information must be true and accurate. / सभी जानकारी सत्य एवं सही होनी चाहिए।</li>
                        <li>Volunteers must follow NSS rules, university guidelines and authorised officers’ instructions. / स्वयंसेवक NSS के नियमों, विश्वविद्यालय के दिशानिर्देशों और अधिकृत अधिकारियों के निर्देशों का पालन करेंगे।</li>
                        <li>Volunteers should participate responsibly in approved NSS activities. / स्वयंसेवक स्वीकृत NSS गतिविधियों में जिम्मेदारी से भाग लें।</li>
                        <li>Submitting this form does not guarantee selection or an NSS certificate. / फॉर्म जमा करने से चयन या NSS प्रमाणपत्र की गारंटी नहीं मिलती।</li>
                        <li>Information will be used for registration, communication, activity coordination and related university administration. / जानकारी का उपयोग पंजीकरण, संपर्क, गतिविधि समन्वय एवं विश्वविद्यालय प्रशासन के लिए होगा।</li>
                        <li>Contact for help: Priyanshu Sahu - 6264583599; Mandeep Vanshkar - 90984 20508.</li>
                      </ol>
                    </div>

                    {/* Declaration Acceptance */}
                    <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-2.5">
                      <h5 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-orange-600" />
                        <span>8. Declaration / घोषणा</span>
                      </h5>
                      <p className="text-[10px] sm:text-[11px] text-slate-600 italic leading-relaxed">
                        "I hereby agree to obey all the rules and regulations of National Service Scheme (NSS) and agree to work within the framework of NSS. I state that all the information furnished above by me is true and correct. I am aware of NSS work responsibilities and agree to carry out necessary actions."
                      </p>
                      <p className="text-[10px] sm:text-[11px] text-slate-600 leading-relaxed">
                        मैं राष्ट्रीय सेवा योजना (NSS) के सभी नियमों का पालन करने और NSS इकाई में काम करने के लिए सहमत हूँ। मैं घोषणा करता/करती हूँ कि मेरे द्वारा दी गई सभी जानकारी सत्य और सही है।
                      </p>

                      <div className="pt-2 border-t border-orange-200/60">
                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            name="declarationAccepted"
                            checked={formData.declarationAccepted}
                            onChange={handleChange}
                            className="w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500 mt-0.5 shrink-0"
                          />
                          <span className="text-xs font-bold text-slate-900 leading-snug">
                            Declaration Acceptance: I agree to the declaration and terms above. / मैं ऊपर दी गई घोषणा एवं नियमों से सहमत हूँ। *
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Coordinator Help Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[10.5px] xs:text-[11px] text-slate-500 pt-1 px-1">
                      <span>9. अधिक जानकारी / सहायता के लिए संपर्क:</span>
                      <div className="font-bold text-slate-700 text-[9.5px] xs:text-[11px] flex flex-wrap items-center gap-x-1.5 xs:gap-x-2 gap-y-0.5">
                        <span className="whitespace-nowrap">Priyanshu: 6264583599</span>
                        <span>•</span>
                        <span className="whitespace-nowrap">Mandeep: 90984 20508</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons (Back / Next / Submit) - 100% One Line Across 320px to 1024px+ */}
                <div className="pt-3 pb-2 sm:pb-0 border-t border-slate-200 flex items-center justify-between gap-1.5 xs:gap-3 w-full">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-2.5 xs:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 text-[10.5px] xs:text-xs sm:text-sm flex items-center gap-1 xs:gap-1.5 transition active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <ArrowLeft className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 shrink-0" />
                      <span>Previous / पीछे</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-3.5 xs:px-6 py-2 sm:py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-[10.5px] xs:text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition active:scale-95 cursor-pointer whitespace-nowrap shrink-0 ml-auto"
                    >
                      <span>Next / अगला</span>
                      <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-3 xs:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-[10.5px] xs:text-xs sm:text-sm flex items-center gap-1 xs:gap-1.5 sm:gap-2 transition active:scale-95 cursor-pointer whitespace-nowrap shrink-0 ml-auto"
                    >
                      <Check className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />
                      <span>Submit Application</span>
                    </button>
                  )}
                </div>

              </form>
            ) : (
              /* Success Screen with Official Digital Volunteer Badge */
              <div className="text-center py-2 sm:py-3 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10" />
                </div>

                <div>
                  <span className="inline-block text-[8.5px] xs:text-[9.5px] sm:text-xs font-bold text-orange-600 uppercase tracking-wider sm:tracking-widest bg-orange-100 px-2.5 xs:px-3 py-1 rounded-full whitespace-nowrap">
                    Registration Successfully Recorded!
                  </span>
                  <h3 className="text-[17px] xs:text-[19px] sm:text-2xl font-black text-slate-900 mt-2 leading-snug">
                    Welcome to the NSS Orange Army!
                  </h3>
                  <p className="text-[11px] xs:text-xs text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                    बधाई हो, <strong className="text-slate-900">{formData.fullName}</strong>! आपका पंजीकरण SAM Global University NSS इकाई में सफलतापूर्वक दर्ज हो गया है।
                  </p>
                </div>

                {/* Digital Volunteer Pass Card */}
                <div className="bg-[#0c1f44] text-white p-3.5 xs:p-4 rounded-2xl border-2 border-orange-500 text-left max-w-md mx-auto relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 mb-3">
                    <div className="flex items-center gap-2 xs:gap-2.5 min-w-0">
                      <img src="/assets/images/nss-sgu-logo.webp" alt="Logo" className="w-8 h-8 rounded-full object-cover border border-orange-400 bg-white shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[8px] xs:text-[9px] font-bold text-orange-400 uppercase tracking-wider truncate">SAM Global University</p>
                        <p className="text-[11px] xs:text-xs font-black truncate">Official NSS Volunteer Pass</p>
                      </div>
                    </div>
                    <span className="text-[9px] xs:text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded font-bold whitespace-nowrap shrink-0">Batch 2026–27</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Volunteer Name</span>
                      <span className="font-bold text-white truncate block">{formData.fullName || "Volunteer"}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Contact Mobile</span>
                      <span className="font-bold text-white truncate block">{formData.phone || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Department</span>
                      <span className="font-bold text-white truncate block">{formData.department || "General"}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-semibold">Blood Group</span>
                      <span className="font-bold text-orange-400">{formData.bloodGroup}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex justify-between items-center gap-2 text-[9px] xs:text-[10px] text-slate-300">
                    <span className="whitespace-nowrap">Motto: "Not Me, But You"</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1 whitespace-nowrap">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>Verified Registration</span>
                    </span>
                  </div>
                </div>

                {/* Direct Action: Join WhatsApp Group Now */}
                <div className="p-3 xs:p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 max-w-md mx-auto text-left">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-emerald-950 leading-snug">Join Official WhatsApp Group</p>
                        <p className="text-[10px] text-emerald-800 leading-snug">इकाई के आवश्यक अपडेट और निर्देश पाने हेतु जुड़ें</p>
                      </div>
                    </div>
                    <a
                      href={WHATSAPP_GROUP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto px-3.5 py-2 sm:py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 flex items-center justify-center gap-1 transition"
                    >
                      <span>Join Now</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Student Coordinators Contact Details */}
                <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-xl p-3 text-left text-xs">
                  <p className="font-bold mb-1.5 text-[10px] xs:text-[11px] uppercase tracking-wider text-slate-500">
                    NSS Student Coordinators Helpline:
                  </p>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 text-slate-700">
                    <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                      <div className="min-w-0">
                        <p className="font-bold text-[10.5px] sm:text-[11px] whitespace-nowrap">Priyanshu Sahu</p>
                        <a href="tel:6264583599" className="text-orange-600 font-semibold text-[10px]">6264583599</a>
                      </div>
                      <a href="https://wa.me/916264583599" target="_blank" rel="noreferrer" className="text-emerald-600 shrink-0">
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded-lg border border-slate-200">
                      <div className="min-w-0">
                        <p className="font-bold text-[10.5px] sm:text-[11px] whitespace-nowrap">Mandeep Vanshkar</p>
                        <a href="tel:9098420508" className="text-orange-600 font-semibold text-[10px]">90984 20508</a>
                      </div>
                      <a href="https://wa.me/919098420508" target="_blank" rel="noreferrer" className="text-emerald-600 shrink-0">
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2 max-w-md mx-auto">
                  <button
                    onClick={handleReset}
                    className="w-full bg-[#0c1f44] hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition cursor-pointer"
                  >
                    Done & Return to Website
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}