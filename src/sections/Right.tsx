import { motion } from "framer-motion"
import { useContext, useEffect } from "react";
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

const Right = () => {
    const {groupBy, selectedSection} = useContext(AppContext);

    //scroll to section based on selected section
    useEffect(() => {
        const section = document.getElementById(selectedSection!);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedSection]);

  return (
        <main className="mt-5 lg:mt-0 lg:w-[52%] lg:py-14 lg:px-12">
            <motion.div id="about"
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
                        className="font-semibold dark:text-[#f9fafb] text-2xl inline-block origin-bottom mr-2 hover:cursor-pointer">👋🏽</motion.p> Hey there, I am a <span className="font-semibold dark:text-[#f9fafb]">Frontend Developer</span> with a degree in Computer Science, and I love building web experiences that are <span className="font-semibold dark:text-[#f9fafb]">smooth, intuitive, and built to last</span>. My toolbox includes <span className="font-semibold dark:text-[#f9fafb]">React, TypeScript, and JavaScript</span> for bringing ideas to life, <span className="font-semibold dark:text-[#f9fafb]">Motion</span> for adding that extra polish and animations, and <span className="font-semibold dark:text-[#f9fafb]">TailwindCSS</span> to make styling fast and fun. When web apps or sites need to handle complex state, I use <span className="font-semibold dark:text-[#f9fafb]">Redux Toolkit</span> or React's <span className="font-semibold dark:text-[#f9fafb]">Context API</span>, whichever fits best.

                        <p className="mt-4">
                        I often work with <span className="font-semibold dark:text-[#f9fafb]">APIs</span> to fetch and manage data in ways that make apps feel alive and when a project needs a little backend muscle, I use <span className="font-semibold dark:text-[#f9fafb]">Supabase</span> and <span className="font-semibold dark:text-[#f9fafb]">PostgreSQL</span> to make sure everything runs smoothly behind the scenes.
                        </p>

                        <p className="mt-4">
                        At the end of the day, I care about solving real world problems with clean, thoughtful code solutions, no overengineering, just stuff that works. I am always learning, always tinkering, and open to <span className="font-semibold dark:text-[#f9fafb]">collaborating with others</span> to build websites/web apps people actually enjoy using.</p>
                </motion.div>
            </motion.div>

            <div id="skills" className="py-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                    className="w-full text-2xl font-bold tracking-widest uppercase">What I work with</motion.h1>

                <div className="grid grid-cols-2 gap-10 mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Languages</h2>
                        <ul className="flex flex-col gap-2">
                            {LANGUAGES.map((x, index) => (
                                <li key={index}><Skills url={x.url} name={x.name} icon={x.icon} index={index}/></li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.2 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Frameworks & Libraries</h2>
                        <ul className="flex flex-col gap-2">
                            {FRAMEWORKS.map((x, index) => (
                                <li key={index}><Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/></li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.4 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Tools & Softwares</h2>
                        <ul className="flex flex-col gap-2">
                            {TOOL_LIST.map((x, index) =>(
                                <li key={index}><Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/></li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.6 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Soft Skills</h2>
                        <ul className="flex flex-col gap-2">
                            {SOFT_SKILLS.map((x, index) => (
                                <li key={index}><Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/></li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>

            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.8 }}
                id="projects" className="py-10 relative"
            >
                {/* <h1 className="w-full text-2xl font-bold tracking-widest uppercase">Selected Projects</h1> */}
                <div className="cards w-full flex flex-col gap-6 mt-5">
                    <div className="tabs w-fit flex gap-2 lg:gap-3 items-center overflow-x-scroll py-3 px-3 rounded-full md:sticky top-4 bg-[#f9fafb]/80 dark:bg-[#1f2937]/80 backdrop-blur-sm z-30">
                        {TABS.map((tab, index) => (
                            <TabButton 
                                key={index}
                                title={tab.title}
                                index={tab.id}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                        {
                            PROJECTS.map((project, index) => (
                                (project.group === groupBy || groupBy === "all") && <ProjectCard key={index} title={project.title} imgSrc={project.image} tech={project.tag || []} url={project.url} desc={project.description} construction={project.construction}/>
                            ))
                        }
                    </div>
                </div>
            </motion.div>

            <div className="w-full flex flex-col lg:mt-10 pb-10 justify-center items-center text-center">
                <p className="text-2xl mt-10">Let us work on something together!</p>
                <p className="text-sm mt-2 opacity-80">Feel free to reach out for <a href="mailto:aosakhogba@gmail.com" className=" font-semibold underline animate-pulse text-[#008080] dark:text-inherit">collaboration or just a chat!</a></p>
            </div>
        </main>
  )
}

export default Right



{/* <motion.div
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
</motion.div> */}