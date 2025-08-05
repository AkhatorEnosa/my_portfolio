import NavLink from "../components/NavLink"
import SocialLink from "../components/SocialLink"
// import cv from '../assets/osakhogba.pdf';
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
        <header className="relative w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          {/* user data  */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-8xl lg:text-6xl font-bold mt-10 md:mt-0 leading-14"
          >
              Osakhogba Akhator
          </motion.h1>
          <div className="flex flex-col mt-2 gap-2">
            {/* description  */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg sm:text-2xl">Frontend Developer</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            className="w-full text-sm sm:text-lg mt-2 dark:text-[#f9fafb]/70">Creating web experiences and turning designs into reality.</motion.p>
          </div>
        </header>

        <motion.nav
          layout
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        className="w-full mt-10 lg:mt-0 fixed flex left-0 bottom-4 justify-center items-center lg:relative lg:right-0 lg:left-0 lg:bottom-0 z-40">
          {/* nav links */}
          <div className="w-fit md:w-[50%] lg:w-full flex lg:flex-col justify-center items-center lg:items-start bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] lg:bg-transparent lg:dark:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:shadow-none rounded-full backdrop-blur-sm shadow-lg py-5 px-5 lg:py-0 lg:px-0 mt-10 gap-8 md:gap-16 lg:gap-2 z-40">
            {
              NAVLINKS.map((navlink, index) => (
                <NavLink key={index+navlink} url={`#${navlink}`} title={navlink}/>
              ))
            }
          </div>
        </motion.nav>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="w-full flex mt-12 lg:mt-10 justify-center lg:justify-between items-center gap-4 text-3xl lg:text-2xl"
      >
        {/* social links */} 
        <div className="flex gap-6 ">
          {
            SOCIALLINKS.map((sociallink) => (
              <SocialLink key={sociallink.id} url={sociallink.url} title={sociallink.title} icon={sociallink.icon}/>
            ))
          }
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5}}
          className="group relative hidden lg:flex w-fit bg-[#e9edf1]/80 dark:bg-[#2a3b52]/80 dark:text-[#f9fafb] py-2 px-4 rounded-full backdrop-blur-sm shadow-lg lg:shadow-none lg:backdrop-blur-none cursor-pointer overflow-hidden z-50 duration-300 transition-all" 
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} 
          onClick={() => themeHandler()}>
            <p className={`w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme === 'dark' ? "-translate-x-30 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Light Mode<i className={`text-2xl bi bi-brightness-high-fill text-orange-300 group-hover:rotate-[360] ${theme !== 'dark' ? "rotate-180" : "rotate-0"} duration-300 transition-all`}></i></p>
            <p className={`absolute w-fit text-xs md:text-sm flex justify-center items-center gap-2 ${theme !== 'dark' ? "-translate-x-20 opacity-0" : "translate-x-0 opacity-100"} duration-300 transition-all`}>Dark Mode<i className={`text-xl bi bi-moon-fill text-yellow-200 group-hover:rotate-[360] ${theme === 'dark' ? "rotate-[360deg]" : "rotate-0"} duration-300 transition-all`}></i></p>
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Left