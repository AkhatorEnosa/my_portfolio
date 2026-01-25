import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorTracker() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Use MotionValues instead of State to prevent re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Wrap them in a Spring for that smooth "lagging" follow effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      // Adjusting by -192 (half of h-96/w-96) to center the blob
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      <motion.div
        className="h-96 w-96 rounded-full bg-[#fff828] dark:bg-[#2881ff] blur-[120px] opacity-5 dark:opacity-40"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />
    </div>
  );
}