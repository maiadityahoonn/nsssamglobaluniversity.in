import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import JoinModal from './components/JoinModal';

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
    </div>
  );
}
