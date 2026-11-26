import { useEffect } from 'react';
import { activitiesList } from '../data/nssData';

export default function PageLoader() {
  useEffect(() => {
    let cancelled = false;

    if (window.__nssInterval) {
      clearInterval(window.__nssInterval);
      window.__nssInterval = null;
    }

    let progress = typeof window.__nssProgress === 'number' ? window.__nssProgress : 1;
    let target = Math.max(25, progress);
    let readyToFinish = false;

    const circ = 2 * Math.PI * 56;
    const loaderEl = document.getElementById('initial-loader');
    const pctEl = document.getElementById('il-pct');
    const barEl = document.getElementById('il-bar');
    const ringEl = document.getElementById('il-ring');
    const statusEl = document.getElementById('il-status');

    const renderProgress = (val) => {
      if (pctEl) pctEl.textContent = String(val);
      if (barEl) barEl.style.width = `${val}%`;
      if (ringEl) ringEl.setAttribute('stroke-dashoffset', String(circ - (val / 100) * circ));
      if (statusEl) {
        statusEl.textContent =
          val < 36
            ? 'Initializing NSS Unit Portal...'
            : val < 72
            ? 'Loading Community Drives & Media...'
            : val < 100
            ? 'Preparing Your Experience...'
            : 'Welcome to the Orange Army';
      }
    };

    const preloadUrls = [
      '/assets/images/nss-sgu-logo.webp',
      '/assets/images/nss-hero-banner.webp',
      ...activitiesList.slice(0, 4).map((a) => a.image).filter(Boolean),
    ];

    const totalAssets = preloadUrls.length + 1;
    let completed = 0;

    const bumpTarget = () => {
      if (cancelled) return;
      completed += 1;
      const pct = Math.min(92, Math.round(20 + (completed / totalAssets) * 72));
      if (pct > target) target = pct;
    };

    const assetPromises = preloadUrls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            bumpTarget();
            resolve();
          };
          img.onerror = () => {
            bumpTarget();
            resolve();
          };
          img.src = url;
        })
    );

    const docLoadPromise = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        bumpTarget();
        resolve();
      } else {
        window.addEventListener(
          'load',
          () => {
            bumpTarget();
            resolve();
          },
          { once: true }
        );
      }
    });

    const maxTimeout = new Promise((resolve) => setTimeout(resolve, 3500));

    Promise.race([Promise.all([...assetPromises, docLoadPromise]), maxTimeout]).then(() => {
      if (cancelled) return;
      readyToFinish = true;
      target = 100;
    });

    const interval = setInterval(() => {
      if (cancelled) return;
      const cap = readyToFinish ? 100 : Math.max(target, 88);
      if (progress < cap) {
        progress += 1;
        window.__nssProgress = progress;
        renderProgress(progress);
      }
      if (progress >= 100) {
        clearInterval(interval);
        document.body.style.backgroundColor = '#f8fafc';
        setTimeout(() => {
          if (cancelled) return;
          if (loaderEl) {
            loaderEl.style.opacity = '0';
            loaderEl.style.pointerEvents = 'none';
            setTimeout(() => {
              loaderEl.remove();
            }, 460);
          }
        }, 300);
      }
    }, 32);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return null;
}
