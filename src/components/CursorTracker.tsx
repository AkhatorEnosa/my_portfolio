import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      
      setPosition({
        x: clientX - 180, // Adjust for element size
        y: clientY - 180
      });
    };

    // Add both mouse and touch listeners
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove as EventListener);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove as EventListener);
    };
  }, []);

  // Don't render cursor for touch devices
  if (isTouchDevice) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 h-96 w-96 rounded-full pointer-events-none bg-[#fff828] dark:bg-[#2881ff] blur-[150px] opacity-5 dark:opacity-60 z-50"
        animate={{
          x: position.x,
          y: position.y
        }}
        transition={{ 
          type: "spring", 
          damping: 20,
          stiffness: 100,
          mass: 0.1
        }}
      />
    </div>
  );
}