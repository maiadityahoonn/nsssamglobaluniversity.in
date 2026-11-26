import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import JoinModal from './components/JoinModal';
import PageLoader from './components/PageLoader';
import NSSBuddy from './components/NSSBuddy';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActivitiesPage from './pages/ActivitiesPage';
import AchievementsPage from './pages/AchievementsPage';
import SpecialCampPage from './pages/SpecialCampPage';
import BloodDonationPage from './pages/BloodDonationPage';
import OrangeArmyPage from './pages/OrangeArmyPage';
import TeamPage from './pages/TeamPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Sync with window.location.pathname for clean URLs & browser back/forward
  useEffect(() => {
    const validPages = ['home', 'about', 'activities', 'achievements', 'special-camp', 'blood-donation', 'orange-army', 'team'];

    const syncFromLocation = () => {
      // Redirect legacy hash URLs (e.g. /#/about or /#/home) to clean paths
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        const rawHash = window.location.hash.replace('#/', '').replace('#', '');
        const [hashPage, hashSection] = rawHash.split('#');
        if (hashPage === 'join') {
          setIsJoinModalOpen(true);
          window.history.replaceState(null, '', '/');
          return;
        }
        if (hashPage && validPages.includes(hashPage)) {
          const cleanPath = hashPage === 'home' ? '/' : `/${hashPage}`;
          window.history.replaceState(null, '', hashSection ? `${cleanPath}#${hashSection}` : cleanPath);
        } else {
          window.history.replaceState(null, '', '/');
        }
      }

      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      const section = window.location.hash ? window.location.hash.replace('#', '') : '';

      if (path === 'join') {
        setIsJoinModalOpen(true);
        window.history.replaceState(null, '', '/');
        return;
      }

      const resolvedPage = !path || path === 'home' ? 'home' : validPages.includes(path) ? path : 'home';
      setActivePage(resolvedPage);

      if (section) {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    };

    syncFromLocation();
    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  // Update per-page SEO title, meta description, canonical & OG tags for nsssamglobaluniversity.in
  useEffect(() => {
    const seoMap = {
      home: {
        title: 'NSS SAM Global University, Bhopal | National Service Scheme (Not Me, But You)',
        desc: 'Official portal of National Service Scheme (NSS) at SAM Global University, Bhopal. Explore community drives, 7-day special camps, blood donation camps, and join the Orange Army.',
        path: '/',
      },
      about: {
        title: 'About NSS SGU | Vision, Motto & History — NSS SAM Global University',
        desc: 'Learn about the mission, motto (Not Me, But You), adopted villages, and youth leadership impact of NSS SAM Global University, Bhopal.',
        path: '/about',
      },
      activities: {
        title: 'Community Activities & Drives | NSS SAM Global University, Bhopal',
        desc: 'Explore 48+ NSS SAM Global University community drives including Swachhta Abhiyan, Digital Literacy, Blood Donation, Plantation, and Youth Awareness campaigns.',
        path: '/activities',
      },
      achievements: {
        title: 'Awards & Achievements (RDC, NIC) | NSS SAM Global University',
        desc: 'Discover national and state honours won by NSS SAM Global University volunteers including Pre-RDC, NIC, State Leadership Camps, and Governor awards.',
        path: '/achievements',
      },
      'special-camp': {
        title: '7-Day Special Camp | Rural Immersion — NSS SAM Global University',
        desc: 'Complete 7-day schedule, rural development pillars, and Parent Consent & NOC Form for the NSS Special Camp at adopted village Bilkhiriya Kalan, Bhopal.',
        path: '/special-camp',
      },
      'blood-donation': {
        title: 'Blood Donation & Donor Network | NSS SAM Global University, Bhopal',
        desc: 'Join the lifesaving NSS SGU Blood Donation network in collaboration with AIIMS Bhopal, Red Cross Society, BMHRC, and cancer hospitals.',
        path: '/blood-donation',
      },
      'orange-army': {
        title: 'The Orange Army & Official Kit | NSS SAM Global University',
        desc: 'Explore the Orange Army spirit, official NSS SAM Global University T-Shirt, and volunteer welcome kit.',
        path: '/orange-army',
      },
      team: {
        title: 'Leadership & Student Council Team | NSS SAM Global University',
        desc: 'Meet the NSS Programme Officer, Student Council Leaders, and Coordinators of NSS SAM Global University, Bhopal.',
        path: '/team',
      },
    };

    const meta = seoMap[activePage] || seoMap.home;
    const canonicalUrl = `https://nsssamglobaluniversity.in${meta.path}`;
    document.title = meta.title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', meta.desc);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.desc);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);

    if (!window.location.hash) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [activePage]);

  const navigateToPage = (pageId, targetId) => {
    setActivePage(pageId);
    const cleanPath = pageId === 'home' ? '/' : `/${pageId}`;
    const nextUrl = targetId ? `${cleanPath}#${targetId}` : cleanPath;
    if (window.location.pathname + window.location.hash !== nextUrl) {
      window.history.pushState(null, '', nextUrl);
    }
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage setActivePage={navigateToPage} onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'activities':
        return <ActivitiesPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'achievements':
        return <AchievementsPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'special-camp':
        return <SpecialCampPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'blood-donation':
        return <BloodDonationPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'orange-army':
        return <OrangeArmyPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'team':
        return <TeamPage onOpenJoinModal={() => setIsJoinModalOpen(true)} />;
      case 'home':
      default:
        return (
          <HomePage 
            setActivePage={navigateToPage} 
            onOpenJoinModal={() => setIsJoinModalOpen(true)}
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-clip min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <PageLoader />
      {/* Top Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={navigateToPage} 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
      />

      {/* Main Page View */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {renderCurrentPage()}
      </main>

      {/* Global Modals */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />

      {/* Footer */}
      <Footer 
        setActivePage={navigateToPage} 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
      />

      {/* Mobile Sticky Bottom Bar with Join NSS Action */}
      <BottomBar 
        activePage={activePage} 
        setActivePage={navigateToPage} 
        onOpenJoinModal={() => setIsJoinModalOpen(true)} 
      />

      {/* NSS Buddy Chip-Based Chatbot */}
      <NSSBuddy
        setActivePage={navigateToPage}
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />
    </div>
  );
}
