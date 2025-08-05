import { motion } from "framer-motion";
import Icon from "../assets/icon.webp";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
 
const Navbar = () => {
    const { theme, themeHandler } = useContext(AppContext);
  
    const shapes = {
      octagon: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      circle: "circle(50% at 50% 50%)",
      pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    };

  return (
    <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="fixed left-0 top-0 w-full flex justify-between py-2 px-2 md:px-10 lg:bg-none z-40">
          {/* user image */}
          <motion.div
            className="size-10 lg:w-14 lg:h-14 z-40"
          >
            <motion.div
              className="w-full h-full cursor-pointer"
              initial={{ clipPath: shapes.circle }}
              whileHover={{
                clipPath: [
                  shapes.pentagon,
                  shapes.octagon,
                  shapes.circle
                ],
                transition: {
                  clipPath: {
                    duration: 0.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }
              }}
              transition={{
                clipPath: { duration: 1, ease: "easeInOut" }
              }}
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
            className="group w-fit flex lg:hidden bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb] py-2 px-4 rounded-full backdrop-blur-sm shadow-lg lg:shadow-none lg:backdrop-blur-none cursor-pointer overflow-hidden z-50 duration-300 transition-all" 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
            onClick={() => themeHandler()}>
                <p className={`w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Light Mode<i className={`text-2xl bi bi-brightness-high-fill text-orange-300 group-hover:rotate-[360] ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-300 transition-all`}></i></p>
                <p className={`absolute w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Dark Mode<i className={`text-xl bi bi-moon-fill text-yellow-200 group-hover:rotate-[360] ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-300 transition-all`}></i></p>
            </motion.button>
    </motion.nav>
  )
}

export default Navbar