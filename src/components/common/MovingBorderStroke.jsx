import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';

export default function MovingBorderStroke({ 
  color = "#dc2626", 
  rx = 24, 
  strokeWidth = 2.5, 
  duration = 8000, 
  lineLength = 140,
  outer = false,
  offset = 3,
}) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const strokeOffset = useMotionValue(0);
  const [dashArray, setDashArray] = useState(`${lineLength} 4000`);
  const [box, setBox] = useState({ width: 0, height: 0, radius: rx, border: 1 });

  useEffect(() => {
    const parent = svgRef.current?.parentElement;
    if (!parent) return;

    const measure = () => {
      const style = window.getComputedStyle(parent);
      const border = parseFloat(style.borderTopWidth) || 0;
      const rawRadius = parseFloat(style.borderTopLeftRadius);
      const width = parent.offsetWidth;
      const height = parent.offsetHeight;
      const radius = Number.isFinite(rawRadius) ? rawRadius : rx;

      setBox((prev) =>
        prev.width === width &&
        prev.height === height &&
        prev.radius === radius &&
        prev.border === border
          ? prev
          : { width, height, radius, border }
      );
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(parent);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [rx]);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length && length > 0) {
      const lineLen = Math.min(lineLength, Math.max(30, length * 0.1));
      const gap = length - lineLen;
      const pxPerMillisecond = length / duration;
      const currentPos = (time * pxPerMillisecond) % length;
      strokeOffset.set(-currentPos);
      const expectedDash = `${lineLen} ${gap}`;
      if (dashArray !== expectedDash) {
        setDashArray(expectedDash);
      }
    }
  });

  if (outer) {
    return (
      <svg
        ref={svgRef}
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          top: `-${offset}px`,
          left: `-${offset}px`,
          width: `calc(100% + ${offset * 2}px)`,
          height: `calc(100% + ${offset * 2}px)`,
        }}
        className="pointer-events-none overflow-visible z-20"
      >
        <motion.rect
          ref={pathRef}
          x={strokeWidth / 2}
          y={strokeWidth / 2}
          width={`calc(100% - ${strokeWidth}px)`}
          height={`calc(100% - ${strokeWidth}px)`}
          rx={box.radius + offset}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: strokeOffset,
          }}
        />
      </svg>
    );
  }

  const w = box.width;
  const h = box.height;
  const halfBorder = box.border / 2;
  const rectW = Math.max(0, w - box.border);
  const rectH = Math.max(0, h - box.border);
  const effectiveRx = Math.max(
    0,
    Math.min(box.radius - halfBorder, rectW / 2, rectH / 2)
  );

  return (
    <svg
      ref={svgRef}
      viewBox={w > 0 && h > 0 ? `0 0 ${w} ${h}` : undefined}
      style={
        w > 0 && h > 0
          ? {
              position: 'absolute',
              top: `-${box.border}px`,
              left: `-${box.border}px`,
              width: `${w}px`,
              height: `${h}px`,
            }
          : undefined
      }
      className="pointer-events-none overflow-visible z-20"
    >
      {w > 0 && h > 0 && (
        <motion.rect
          ref={pathRef}
          x={halfBorder}
          y={halfBorder}
          width={rectW}
          height={rectH}
          rx={effectiveRx}
          ry={effectiveRx}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: strokeOffset,
          }}
        />
      )}
    </svg>
  );
}
