import NavLink from "../components/NavLink"
import SocialLink from "../components/SocialLink"
import cv from '../assets/osakhogba.pdf';
import { motion } from "framer-motion"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Left = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppContextProvider");
  }

  const { theme, themeHandler } = context;
  return (
    <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:px-12">
      <div>
        <div className="w-full flex flex-col">
          {/* user data  */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold leading-14"
          >
              Osakhogba Akhator
          </motion.h1>
          <div className="flex flex-col mt-2 gap-2">
            {/* description  */}
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl">Frontend Developer</motion.p>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            className="text-lg mt-2 opacity-80">Code + design → flawless interfaces. Turning ideas into interactive reality.</motion.p>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
             className="relative w-fit flex flex-col mt-10 gap-2">
                <a href={cv} target="_blank" className="relative z-10">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="resume-button w-fit p-3 rounded-lg bg-[#1F2937] text-[#f9fafb] dark:bg-[#f9fafb] dark:text-[#1F2937] hover:scale-105 hover:bg-[#008080] dark:hover:bg-[#008080] dark:hover:text-[#f9fafb] transition-all duration-300">Click to download CV</motion.button>
                </a>
                <i className="absolute cursor bi bi-cursor-fill top-5 right-10 text-[#f9fafb] dark:text-[#1F2937] z-30"></i>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        className="w-full flex flex-col mt-10">
          {/* nav links */}
          <div className="relative flex flex-col mt-10 gap-2 z-40">
            <NavLink url="#about" title="About"/>
            <NavLink url="#skills" title="Skills"/>
            <NavLink url="#projects" title="Projects"/>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      className="w-full flex mt-10 justify-between items-center text-2xl">
        {/* social links */} 
        <div className="flex gap-6">
          <SocialLink url="https://www.github.com/Akhatorenosa" title="Github" icon="bi-github"/>
          <SocialLink url="https://www.linkedin.com/in/osakhogba-akhator-024762139/" title="LinkedIn" icon="bi-linkedin"/>
          <SocialLink url="https://x.com/5hin3_x" title="X(formerly Twitter)" icon="bi-twitter-x"/>
          <SocialLink url="https://soozeer.netlify.app/#/aefea77c-748a-4850-bc28-5bc45f74a7ce" title="Soozeer" icon="bi-globe"/>
        </div>

        <div className="relative w-fit flex bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] hover:font-semibold py-2 px-4 rounded-full cursor-pointer overflow-hidden" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => themeHandler()}>
          <p className={`w-fit text-sm flex justify-center items-center gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-150 transition-all`}>Light Mode<i className={`text-2xl bi bi-brightness-high-fill ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-150 transition-all`}></i></p>
          <p className={`absolute w-fit text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-150 transition-all`}>Dark Mode<i className={`text-xl bi bi-moon-fill ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-150 transition-all`}></i></p>
        </div>
      </motion.div>
    </section>
  )
}

export default Left