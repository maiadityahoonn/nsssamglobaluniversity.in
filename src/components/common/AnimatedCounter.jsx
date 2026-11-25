import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  duration = 1400, 
  className = "", 
  suffixClassName = "",
  inView: externalInView
}) {
  const ref = useRef(null);
  // amount: 'some' with once: false triggers on both scroll down and scroll up reliably
  const internalInView = useInView(ref, { amount: 'some', once: false });
  const isInView = externalInView !== undefined ? externalInView : internalInView;

  // Handle numbers with commas like "3,700+" or plain "500+" or "100%"
  const cleanStr = String(value || "");
  const numMatches = cleanStr.match(/[\d,]+/);
  const rawNumStr = numMatches ? numMatches[0].replace(/,/g, '') : "0";
  const target = parseInt(rawNumStr, 10) || 0;
  const hasComma = numMatches ? numMatches[0].includes(',') : false;

  // Extract prefix and suffix
  const prefix = cleanStr.slice(0, cleanStr.indexOf(numMatches ? numMatches[0] : ""));
  const suffix = cleanStr.slice((cleanStr.indexOf(numMatches ? numMatches[0] : "") || 0) + (numMatches ? numMatches[0].length : 0));

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTimestamp = null;
    let frameId;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic ease out
      const ease = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(ease * target);
      setCount(currentVal);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [isInView, target, duration]);

  const formattedCount = hasComma ? count.toLocaleString('en-IN') : count;

  return (
    <span ref={ref} className={`tabular-nums inline-block ${className}`}>
      {prefix}
      {formattedCount}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
