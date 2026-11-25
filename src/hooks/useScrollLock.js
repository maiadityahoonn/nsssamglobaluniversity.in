import { useEffect } from 'react';

/**
 * Custom hook to completely prevent background page scrolling
 * when a modal or overlay is open, while preserving smooth scrolling
 * inside the modal's scrollable content container.
 */
export function useScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    // Save exact scroll position before locking
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

    // Save previous styles
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const originalBodyOverscroll = document.body.style.overscrollBehavior;

    // Prevent html & body scrolling
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    // Prevent wheel event from scrolling background if not inside scrollable element
    const handleWheel = (e) => {
      let target = e.target;
      let canScroll = false;

      while (target && target !== document.body && target !== document.documentElement) {
        if (target.scrollHeight > target.clientHeight) {
          const overflowY = window.getComputedStyle(target).overflowY;
          if (overflowY === 'auto' || overflowY === 'scroll') {
            // Check if user is scrolling up at top or down at bottom
            const isAtTop = target.scrollTop === 0 && e.deltaY < 0;
            const isAtBottom = target.scrollTop + target.clientHeight >= target.scrollHeight - 1 && e.deltaY > 0;
            
            if (!isAtTop && !isAtBottom) {
              canScroll = true;
            }
            break;
          }
        }
        target = target.parentElement;
      }

      if (!canScroll) {
        e.preventDefault();
      }
    };

    // Prevent touch gestures from scrolling background on mobile
    const handleTouchMove = (e) => {
      let target = e.target;
      let canScroll = false;

      while (target && target !== document.body && target !== document.documentElement) {
        if (target.scrollHeight > target.clientHeight) {
          const overflowY = window.getComputedStyle(target).overflowY;
          if (overflowY === 'auto' || overflowY === 'scroll') {
            canScroll = true;
            break;
          }
        }
        target = target.parentElement;
      }

      if (!canScroll) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.overscrollBehavior = originalBodyOverscroll;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.documentElement.style.overscrollBehavior = originalHtmlOverscroll;

      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);

      // Restore exact scroll position without jumping to top
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}
