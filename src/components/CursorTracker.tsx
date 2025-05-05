import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const mouseMove = (e: MouseEvent): void => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 h-96 w-96 rounded-full pointer-events-none bg-[#cfe7ff] dark:bg-[#2881ff] opacity-20 blur-[150px] z-50"
        animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        }}
        // transition={{ type: "spring", mass: 0.1 }}
      />

      {/* Interactive content */}
      <div className="fixed top-0 left-0 z-10 h-full flex flex-col items-center justify-center gap-8 p-8">
      </div>
    </div>
  );
}