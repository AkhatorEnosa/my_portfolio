import NavLink from "../components/NavLink"
import SocialLink from "../components/SocialLink"
import cv from '../assets/osakhogba.pdf';
import { motion } from "framer-motion"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { NAVLINKS } from "../constants/navlinks";
import { SOCIALLINKS } from "../constants/sociallinks";

const Left = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppContextProvider");
  }

  const { theme, themeHandler } = context;
  return (
    <section className="relative lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:px-12">
      <div>
        <div className="w-full flex flex-col">
          {/* user data  */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-14"
          >
              Osakhogba Akhator
          </motion.h1>
          <div className="flex flex-col mt-2 gap-2">
            {/* description  */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg lg:text-2xl">Frontend Developer</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            className="w-[60%] lg:w-full text-sm lg:text-lg mt-2 dark:text-[#f9fafb]/70">Code + design → flawless interfaces. Turning ideas into interactive reality.</motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
             className="relative w-fit flex flex-col mt-10 gap-2">
                <a href={cv} target="_blank" className="relative z-10">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="resume-button w-fit p-3 rounded-lg bg-[#1F2937] text-[#f9fafb] dark:bg-[#f9fafb] dark:text-[#1F2937] hover:scale-105 hover:bg-[#008080] dark:hover:bg-[#008080] dark:hover:text-[#f9fafb] text-sm lg:text-base transition-all duration-300">Click to download CV</motion.button>
                </a>
                <i className="absolute cursor bi bi-cursor-fill top-5 right-10 text-[#f9fafb] dark:text-[#1F2937] z-30"></i>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        className="w-full flex flex-col mt-10">
          {/* nav links */}
          <div className="fixed right-10 left-10 md:right-20 md:left-20 bottom-5 lg:relative lg:right-0 lg:left-0 lg:bottom-0 flex lg:flex-col justify-center items-center lg:items-start  bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:shadow-none rounded-full backdrop-blur-sm shadow-lg py-5 px-5 lg:py-0 lg:px-0 mt-10 gap-5 md:gap-16 lg:gap-2 z-40">
            {
              NAVLINKS.map((navlink, index) => (
                <NavLink key={index+navlink} url={`#${navlink}`} title={navlink}/>
              ))
            }
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      className="w-full flex lg:mt-10 justify-between items-center text-xl lg:text-2xl">
        {/* social links */} 
        <div className="flex gap-6 ">
          {
            SOCIALLINKS.map((sociallink) => (
              <SocialLink key={sociallink.id} url={sociallink.url} title={sociallink.title} icon={sociallink.icon}/>
            ))
          }
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5}}
          className="fixed right-2 top-8 lg:relative lg:right-0 lg:top-0 w-fit flex bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] hover:font-semibold py-2 px-4 rounded-full backdrop-blur-sm shadow-lg lg:shadow-none lg:backdrop-blur-none cursor-pointer overflow-hidden z-40 duration-150 transition-all" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => themeHandler()}>
          <p className={`w-fit text-sm flex justify-center items-center gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-150 transition-all`}>Light Mode<i className={`text-2xl bi bi-brightness-high-fill text-orange-300 ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-150 transition-all`}></i></p>
          <p className={`absolute w-fit text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-150 transition-all`}>Dark Mode<i className={`text-xl bi bi-moon-fill text-yellow-200 ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-150 transition-all`}></i></p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Left