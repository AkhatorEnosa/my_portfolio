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

const Right = () => {
    const {revealAll, groupBy, setGroupBy} = useContext(AppContext);
  return (
        <section id="about" className="mt-10 lg:mt-0 lg:w-[52%] lg:py-24 lg:px-12">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="text-base"
            >
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-2xl font-bold">About</motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.2 }}
                    className="dark:text-[#f9fafb]/70 mt-5 lg:mt-0 tracking-wide"
                >I am a <b className="dark:text-[#f9fafb]">Frontend Developer</b> with a B.Sc in Computer Science, passionate about crafting <b className="dark:text-[#f9fafb]">intuitive, responsive,</b> and <b className="dark:text-[#f9fafb]">scalable</b> applications. I specialize in modern tools like <b className="dark:text-[#f9fafb]">JavaScript, TypeScript, ReactJS, Motion</b> for sleek user interfaces, <b className="dark:text-[#f9fafb]">TailwindCSS</b> for streamlined styling, and <b className="dark:text-[#f9fafb]">Redux Toolkit</b> for seamless state management when not using ReactJs's <b className="dark:text-[#f9fafb]">Context API</b>. I have strong expertise in <b className="dark:text-[#f9fafb]">API</b> consumption, integrating and managing data from various endpoints to enhance application functionality. Additionally, I have also worked with <b className="dark:text-[#f9fafb]">Supabase</b> and <b className="dark:text-[#f9fafb]">PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. 
                <br /><br />
                My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I am also open to <b className="dark:text-[#f9fafb]">remote work</b> opportunities and thrive on continuous learning to stay updated on the ever-evolving tech landscape.</motion.p>
            </motion.div>

            <div id="skills" className="py-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                className="text-2xl font-bold">Skills</motion.h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3 }}
                    className="flex flex-col gap-2">
                        <h2 className="text-lh font-bold">Languages</h2>
                        {LANGUAGES.map((x, index) => (
                            <Skills url={x.url} name={x.name} icon={x.icon} index={index}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.2 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-lg font-bold">Frameworks & Libraries</h2>
                        {FRAMEWORKS.map((x, index) => (
                            <Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.4 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-lg font-bold">Tools & Softwares</h2>
                        {TOOL_LIST.map((x, index) =>(
                            <Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
                        ))}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.6 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="text-lg font-bold">Soft Skills</h2>
                        {SOFT_SKILLS.map((x, index) => (
                            <Skills url={x.url} name={x.name} icon={x.icon} index={index} desc={x.description}/>
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
                <h1 className="text-2xl font-bold">{revealAll ? "All Projects" : "Selected Projects"}</h1>
                <div className="w-full flex flex-col gap-6 mt-5">
                    <div className="w-full flex gap-3 items-center">
                        {TABS.map((tab) => (
                            <button key={tab.id} className={`w-fit h-fit flex justify-center items-center capitalize text-xs gap-3 ${groupBy === tab.title ? "bg-[#1f2937] text-[#f9fafb] hover:text-[#f9fafb] dark:bg-[#f9fafb] dark:text-[#1f2937] dark:hover:text-[#1f2937]" : " bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb]"} hover:font-semibold py-2 px-4 rounded-full transition-all duration-300`}
                                onClick={() => setGroupBy(tab.title)}
                            >{tab.title}</button>
                        ))}
                    </div>

                    {
                        PROJECTS.map((project) => (
                            (project.group === groupBy || groupBy === "all") && <ProjectCard title={project.title} imgSrc={project.image} tech={project.tag || []} url={project.url} desc={project.description}/>
                        ))
                    }
                </div>
            </motion.div>

            <div className="w-full flex flex-col mt-10 justify-center items-center">
                <p className="text-2xl mt-10">I am currently open to remote opportunities.</p>
                <p className="text-sm mt-2 opacity-80">Feel free to reach out for collaboration or just a chat!</p>
            </div>
        </section>
  )
}

export default Right