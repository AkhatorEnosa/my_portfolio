import NavLink from "../components/NavLink"
import SocialLink from "../components/SocialLink"
// import cv from '../assets/osakhogba.pdf';
import { motion } from "framer-motion"
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { NAVLINKS } from "../constants/navlinks";
import { SOCIALLINKS } from "../constants/sociallinks";
import Icon from "../assets/gallery/icon1.webp";
import { Tooltip } from "@mui/material";

type ShapeKey = "octagon" | "circle" | "pentagon";

const shapes: Record<ShapeKey, string> = {
  octagon: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  circle: "circle(50% at 50% 50%)",
  pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
};

const Left = () => {
  const { setSelectedSection, theme, themeHandler } = useContext(AppContext);
      

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
    <section id="home" className="relative h-screen w-screen justify-center items-center lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between py-12 md:py-16 lg:py-24 lg:px-12">
    {/* user image */}
      <motion.div
        className="group fixed top-5 left-10 size-10 lg:w-14 lg:h-14 z-40"
        onClick={() => {
            setSelectedSection("home");
            localStorage.setItem('section', "home")
          }
        }
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        onTouchStart={handleHoverStart}
        onTouchEnd={handleHoverEnd}
      >
        {/* expanded icon image */}
        <a href="#gallery" className="fixed left-20 lg:left-40 top-14 w-0 group-hover:w-56 shadow-2xl rounded-lg overflow-hidden opacity-0 lg:group-hover:opacity-100 ease-in-out transition-all duration-150 z-50">
          <img src={Icon} alt="my image"/>
        </a>

        <motion.div
          className="w-full h-full cursor-pointer"
          initial={{ clipPath: shapes[currShape] }}
          // Framer Motion animation for smooth clip-path transition
          animate={{ clipPath: shapes[currShape] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <a href="#home">
            <img
              src={Icon}
              alt="my Image"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </motion.div>
      </motion.div>

      <div className="w-full h-full lg:h-fit flex flex-col justify-center items-center lg:justify-between lg:items-center gap-6 lg:gap-0">
        <header className="relative px-6 md:px-36 lg:px-0 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          {/* user data  */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-8xl lg:text-6xl font-bold mt-10 md:mt-0 leading-14"
          >
              Osakhogba Akhator
          </motion.h1>
          <div className="flex flex-col mt-2 gap-1 dark:text-[#f9fafb]/80">
            {/* description  */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg xs:text-2xl uppercase">Frontend Developer</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full text-sm xs:text-base sm:mt-5 px-4 md:px-0 dark:text-[#f9fafb]/60">Creating web experiences and turning designs into reality.</motion.p>
          </div>
        </header>

        <motion.nav
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="w-full mt-10 lg:mt-0 fixed flex left-0 bottom-4 justify-center items-center lg:relative lg:right-0 lg:left-0 lg:bottom-0 z-40">
          {/* nav links */}
          <div className="w-fit lg:w-full flex lg:flex-col justify-center items-center lg:items-start bg-[#f9fafb]/80 dark:bg-[#2a3b52]/80 lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:shadow-none rounded-full backdrop-blur-sm shadow-lg py-2 px-2 lg:py-0 lg:px-0 mt-10 gap-2 sm:gap-8 md:gap-16 lg:gap-2 z-40">
            {
              NAVLINKS.map((navlink, index) => (
                <NavLink key={index+navlink} url={`#${navlink}`} title={navlink}/>
              ))
            }
          </div>
        </motion.nav>

        {/* social links for small screens  */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="w-full flex lg:hidden mt-12 lg:mt-10 justify-center lg:justify-between items-center gap-4 text-3xl lg:text-2xl"
        >
          {/* social links */} 
          <div className="flex gap-6 ">
            {
              SOCIALLINKS.map((sociallink) => (
                <SocialLink key={sociallink.id} url={sociallink.url} title={sociallink.title} icon={sociallink.icon}/>
              ))
            }
          </div>
          
          {/* Theme toggle button for mobile */}
            <Tooltip title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} placement="bottom" arrow>
              <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5}}
                  className="group fixed top-4 right-10 lg:relative lg:top-0 lg:right-0 bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 p-5 size-6 flex justify-center items-center rounded-full backdrop-blur-sm shadow-lg z-50 duration-300 transition-all" 
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
                  onClick={() => themeHandler()}>
                    <p className={`w-fit text-[10px] sm:text-xs md:text-sm flex justify-center items-center lg:gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}><i className={`text-2xl bi bi-brightness-high-fill text-orange-400 group-hover:rotate-[360] ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-300 transition-all`}></i></p>
                    <p className={`absolute w-fit text-[10px] sm:text-xs md:text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}><i className={`text-xl bi bi-moon-fill text-yellow-200 group-hover:rotate-[360] ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-300 transition-all`}></i></p>
              </motion.button>
            </Tooltip>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="absolute w-full top-[82%] lg:hidden"
        >
          <a href="#about" aria-label="scroll-down" className="text-[10px] flex flex-col justify-center items-center gap-0 text-center text-inherit ">
            <i className="bi bi-mouse text-xl animate-bounce"></i>
            <p>Scroll Down</p>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="hidden w-full lg:flex mt-12 lg:mt-10 justify-center lg:justify-between items-center gap-4 text-3xl lg:text-2xl"
      >
        {/* social links */} 
        <div className="flex gap-6 ">
          {
            SOCIALLINKS.map((sociallink) => (
              <SocialLink key={sociallink.id} url={sociallink.url} title={sociallink.title} icon={sociallink.icon}/>
            ))
          }
        </div>
        
        {/* Theme toggle button for mobile */}
          <Tooltip title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} placement="bottom" arrow>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.5}}
                className="group fixed top-5 right-10 lg:relative lg:top-0 lg:right-0 w-fit flex bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb] text-inherit py-2 px-4 justify-center items-center rounded-full backdrop-blur-sm shadow-lg lg:shadow-none lg:backdrop-blur-none cursor-pointer overflow-clip z-50 duration-300 transition-all" 
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
                onClick={() => themeHandler()}>
                  <p className={`w-fit text-xs md:text-sm flex justify-center items-center lg:gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}><span className="hidden lg:flex">Light Mode</span><i className={`text-2xl bi bi-brightness-high-fill text-orange-400 group-hover:rotate-[360] ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-300 transition-all`}></i></p>
                  <p className={`absolute w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}><span className="hidden lg:flex">Dark Mode</span><i className={`text-xl bi bi-moon-fill text-yellow-200 group-hover:rotate-[360] ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-300 transition-all`}></i></p>
            </motion.button>
          </Tooltip>
      </motion.div>
    </section>
  )
}

export default Left