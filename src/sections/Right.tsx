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
        <section id="about" className="mt-10 lg:mt-0 lg:w-[52%] lg:py-24 lg:px-12">
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

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.2 }}
                    className="dark:text-[#f9fafb]/70 mt-5 lg:mt-0 tracking-wide"
                        >I am a <b className="dark:text-[#f9fafb]">Frontend Developer</b> with a B.Sc in Computer Science, passionate about crafting <b className="dark:text-[#f9fafb]">intuitive, responsive,</b> and <b className="dark:text-[#f9fafb]">scalable</b> applications. I specialize in modern tools like <b className="dark:text-[#f9fafb]">JavaScript, TypeScript, ReactJS, Motion</b> for sleek user interfaces, <b className="dark:text-[#f9fafb]">TailwindCSS</b> for streamlined styling, and <b className="dark:text-[#f9fafb]">Redux Toolkit</b> for seamless state management when not using ReactJs's <b className="dark:text-[#f9fafb]">Context API</b>. I have experience in <b className="dark:text-[#f9fafb]">API</b> consumption, integrating and managing data from various endpoints to enhance application functionality. Additionally, I have also worked with <b className="dark:text-[#f9fafb]">Supabase</b> and <b className="dark:text-[#f9fafb]">PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. 
                        <br /><br />
                        My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I am also open to <b className="dark:text-[#f9fafb]">remote work</b> opportunities and thrive on continuous learning to stay updated on the ever-evolving tech landscape.
                </motion.p>

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