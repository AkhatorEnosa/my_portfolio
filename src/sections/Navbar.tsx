import { motion } from "framer-motion";
import Icon from "../assets/icon.webp";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextValue";
    
type ShapeKey = "octagon" | "circle" | "pentagon";

const shapes: Record<ShapeKey, string> = {
  octagon: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  circle: "circle(50% at 50% 50%)",
  pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
};
 
const Navbar = () => {
    const { theme, themeHandler } = useContext(AppContext);
    const [currShape, setCurrShape] = useState<ShapeKey>("circle");
    const [isHovering, setIsHovering] = useState<boolean>(false);
  
    // Array of shape keys to cycle through
    const shapeKeys = Object.keys(shapes) as ShapeKey[];
    
    useEffect(() => {
      if (!isHovering) return;

      const interval = setInterval(() => {
        setCurrShape((prevShape) => {
          const currentIndex = shapeKeys.indexOf(prevShape);
          const nextIndex = (currentIndex + 1) % shapeKeys.length;
          return shapeKeys[nextIndex];
        });
      }, 500);

      return () => clearInterval(interval);
    }, [isHovering, shapeKeys]);

    // Handle hover start and end
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

  return (
    <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="fixed left-0 top-0 w-full flex justify-between py-4 px-2 md:px-10 lg:bg-none z-40">
          {/* user image */}
          <motion.div
            className="size-10 lg:w-14 lg:h-14 z-40"
          >
            <motion.div
              className="w-full h-full cursor-pointer"
              initial={{ clipPath: shapes[currShape] }}
              // Framer Motion animation for smooth clip-path transition
              animate={{ clipPath: shapes[currShape] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              onTouchStart={handleHoverStart}
              onTouchEnd={handleHoverEnd}
            >
              <img
                src={Icon}
                alt="my Image"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.5}}
            className="group w-fit flex lg:hidden dark:bg-[#e9edf1]/80 bg-[#2a3b52]/80 text-[#f9fafb] dark:text-[#2a3b52] py-2 px-4 rounded-full backdrop-blur-sm shadow-lg lg:shadow-none lg:backdrop-blur-none cursor-pointer overflow-hidden z-50 duration-300 transition-all" 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
            onClick={() => themeHandler()}>
                <p className={`w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Light Mode<i className={`text-2xl bi bi-brightness-high-fill text-orange-300 group-hover:rotate-[360] ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-300 transition-all`}></i></p>
                <p className={`absolute w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Dark Mode<i className={`text-xl bi bi-moon-fill text-yellow-200 group-hover:rotate-[360] ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-300 transition-all`}></i></p>
            </motion.button>
    </motion.nav>
  )
}

export default Navbar