import { motion } from "framer-motion"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LANGUAGES } from "../constants/languages";
import { FRAMEWORKS } from "../constants/frameworks";
import Skills from "../components/Skills";
import { TOOL_LIST } from "../constants/tools";
import { SOFT_SKILLS } from "../constants/softskills";
import { TABS } from "../constants/tabs";
import { PROJECTS } from "../constants/projects";
import ProjectCard from "../components/ProjectCard";
import TabButton from "../components/TabButton";
import cv from '../assets/osakhogba.pdf';

const Right = () => {
    const {groupBy} = useContext(AppContext);
  return (
        <section id="about" className="mt-10 lg:mt-0 lg:w-[52%] lg:py-14 lg:px-12">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="text-base py-10 lg:py-0"
            >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="w-full text-2xl font-bold tracking-widest uppercase lg:hidden">About</motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.2 }}
                    className="dark:text-[#f9fafb]/70 mt-5 lg:mt-0 tracking-wide"
                        >
                        
                        <motion.p 
                                animate={{
                                    rotate: [0, 15, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut"
                                }}
                                className="font-semibold dark:text-[#f9fafb] text-2xl inline-block origin-bottom mr-2 hover:cursor-pointer">👋</motion.p> Hey there, I'm a <span className="font-semibold dark:text-[#f9fafb]">frontend developer</span> with a degree in Computer Science, and I love building digital experiences that are <span className="font-semibold dark:text-[#f9fafb]">smooth, intuitive, and built to last</span>. My toolbox includes <span className="font-semibold dark:text-[#f9fafb]">React, TypeScript, and JavaScript</span> for bringing ideas to life, <span className="font-semibold dark:text-[#f9fafb]">Motion</span> for adding that extra polish, and <span className="font-semibold dark:text-[#f9fafb]">TailwindCSS</span> to make styling fast and fun. When apps need to handle complex state, I reach for <span className="font-semibold dark:text-[#f9fafb]">Redux Toolkit</span> or React's <span className="font-semibold dark:text-[#f9fafb]">Context API</span>, whichever fits best.

                        <p className="mt-4">
                        I've worked with <span className="font-semibold dark:text-[#f9fafb]">APIs</span> to fetch, manage, and display data in ways that make apps feel alive. And when a project needs a little backend muscle, I've used <span className="font-semibold dark:text-[#f9fafb]">Supabase</span> and <span className="font-semibold dark:text-[#f9fafb]">PostgreSQL</span> to make sure everything runs smoothly behind the scenes.
                        </p>

                        <p className="mt-4">
                        At the end of the day, I care about solving real problems with clean, thoughtful code, no overengineering, just stuff that works. I'm always learning, always tinkering, and open to <span className="font-semibold dark:text-[#f9fafb]">remote opportunities</span> where I can build things people actually enjoy using.</p>

                        <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="relative w-fit flex flex-col mt-5 gap-2">
                            <a href={cv} target="_blank" className="relative z-10">
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="resume-button w-fit p-3 rounded-lg bg-[#1F2937] text-[#f9fafb] dark:bg-[#f9fafb] dark:text-[#1F2937] hover:scale-105 hover:bg-[#008080] dark:hover:bg-[#008080] dark:hover:text-[#f9fafb] text-sm lg:text-base transition-all duration-300">Download CV</motion.button>
                            </a>
                            <i className="absolute cursor bi bi-cursor-fill top-5 right-10 text-[#f9fafb] dark:text-[#1F2937] z-30"></i>
                        </motion.div>
                </motion.div>
            </motion.div>

            <div id="skills" className="py-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                    className="w-full text-2xl font-bold tracking-widest uppercase">What I work with</motion.h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3 }}
                    className="flex flex-col gap-2">
                        <h2 className="leading-5 md:text-lg font-bold">Languages</h2>
                        {LANGUAGES.map((x, index) => (
                            <Skills key={index} url={x.url} name={x.name} icon={x.icon} index={index}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.2 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Frameworks & Libraries</h2>
                        {FRAMEWORKS.map((x, index) => (
                            <Skills key={index} url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.4 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Tools & Softwares</h2>
                        {TOOL_LIST.map((x, index) =>(
                            <Skills key={index} url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.6 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Soft Skills</h2>
                        {SOFT_SKILLS.map((x, index) => (
                            <Skills key={index} url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
                        ))}
                    </motion.div>
                </div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.8 }}
                id="projects" className="py-10"
            >
                <h1 className="w-full text-2xl font-bold tracking-widest uppercase">Selected Projects</h1>
                <div className="cards w-full flex flex-col gap-6 mt-5">
                    <div className="tabs w-full flex gap-2 lg:gap-3 items-center overflow-x-scroll">
                        {TABS.map((tab) => (
                            <TabButton 
                                key={tab.id}
                                title={tab.title}
                            />
                        ))}
                    </div>
                        
                    {
                        PROJECTS.map((project) => (
                            (project.group === groupBy || groupBy === "all") && <ProjectCard key={project.id} title={project.title} imgSrc={project.image} tech={project.tag || []} url={project.url} desc={project.description} construction={project.construction}/>
                        ))
                    }
                </div>
            </motion.div>

            <div className="w-full flex flex-col lg:mt-10 pb-10 justify-center items-center">
                <p className="text-2xl mt-10">I am currently open to remote opportunities.</p>
                <p className="text-sm mt-2 opacity-80">Feel free to reach out for collaboration or just a chat!</p>
            </div>
        </section>
  )
}

export default Right