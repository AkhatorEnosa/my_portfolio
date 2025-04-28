import NavLink from "../components/NavLink"
import SocialLink from "../components/SocialLink"
import cv from '../assets/osakhogba.pdf';
import { motion } from "framer-motion"

const Left = () => {
  return (
    <section className="col-span-3 w-full h-full flex flex-col justify-between pr-30">
      <div>
        <div className="w-full flex flex-col">
          {/* user data  */}
          <h1 className="text-6xl font-bold leading-14">Osakhogba Akhator</h1>
          <div className="flex flex-col mt-2 gap-2">
            {/* description  */}
            <p className="text-2xl">Frontend Developer</p>
            <p className="text-lg mt-2 opacity-80">Code + design → flawless interfaces. Turning ideas into interactive reality.</p>

            <div className="relative w-fit flex flex-col mt-10 gap-2">
                <a href={cv} target="_blank" className="relative z-10">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit p-3 rounded-lg bg-[#1F2937] text-[#FFF9F0] dark:bg-[#FFF9F0] dark:text-[#1F2937]">Click to download CV</motion.button>
                </a>
                <i className="absolute cursor bi bi-cursor-fill top-5 right-10 text-[#FFF9F0] dark:text-[#1F2937] -rotate-90 z-30"></i>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mt-10">
          {/* nav links */}
          <div className="flex flex-col mt-10 gap-2">
            <NavLink url="#about" title="About"/>
            <NavLink url="#skills" title="Skills"/>
            <NavLink url="#projects" title="Projects"/>
          </div>
        </div>
      </div>

      <div className="w-full flex mt-10 gap-6 text-2xl">
        {/* social links */}
        <SocialLink url="https://www.github.com/Akhatorenosa" title="Github" icon="bi-github"/>
        <SocialLink url="https://www.linkedin.com/in/osakhogba-akhator-024762139/" title="LinkedIn" icon="bi-linkedin"/>
        <SocialLink url="https://x.com/5hin3_x" title="X(formerly Twitter)" icon="bi-twitter-x"/>
        <SocialLink url="https://soozeer.netlify.app/#/aefea77c-748a-4850-bc28-5bc45f74a7ce" title="Soozeer" icon="bi-globe"/>
      </div>
    </section>
  )
}

export default Left