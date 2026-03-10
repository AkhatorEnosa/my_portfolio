import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';

export default function CursorTracker() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // The mask creates the "flashlight" perimeter
  const mask = useMotionTemplate`radial-gradient(300px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {/* 1. The Glow Blob - Unified with the grid color */}
      {/* <motion.div
        className="absolute h-96 w-96 rounded-full bg-cyan-500/20 dark:bg-sky-500/30 blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
          left: -192, 
          top: -192,
        }}
      /> */}

      {/* 2. The Masked Grid - Uses currentColor to stay consistent */}
      <motion.div 
        className="absolute inset-0 z-20 text-cyan-600/30 dark:text-sky-400/50" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px), 
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `, 
          backgroundSize: '50px 50px',
          WebkitMaskImage: mask,
          maskImage: mask
        }} 
      />
    </div>
  );
}