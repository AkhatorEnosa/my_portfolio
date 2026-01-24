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
import { GALLERY } from "../constants/gallery";
import Modal from "../components/Modal";

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
        <main className="mt-5 lg:mt-0 lg:w-[52%] lg:py-14">
            <motion.div id="about"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="text-base py-10 lg:py-0 px-6 md:px-36 lg:px-12"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="w-full text-2xl font-bold tracking-widest uppercase lg:hidden">
                    About
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, filter: 'blur(4px)'}}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    viewport={{ amount: 0.2 }}
                    className="dark:text-[#f9fafb]/70 mt-5 lg:mt-0 text-xs sm:text-sm tracking-wide"
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
                        className="text-xl inline-block origin-bottom mr-2 hover:cursor-pointer">
                            👋🏽
                    </motion.p>

                        Hey there! My journey in tech began with a fascination for building things with code. As a kid, I was captivated by how websites worked and wanted to create my own, which sparked my passion for web development. That curiosity led me to pursue a <span className="font-semibold dark:text-[#f9fafb]">degree in Computer Science</span> , where I honed my skills and learned the foundations of programming, setting the stage for my career.

                        <p className="mt-4">
                            Currently, I am a <span className="font-semibold dark:text-[#f9fafb]">Frontend Developer</span> crafting smooth, intuitive, and reliable web experiences. My go to stack includes <span className="font-semibold dark:text-[#f9fafb]">React, NextJs, TypeScript, and JavaScript</span> to bring ideas to life, <span className="font-semibold dark:text-[#f9fafb]">Motion</span> for polished animations, and <span className="font-semibold dark:text-[#f9fafb]">TailwindCSS</span> for fast, fun styling. I manage complex state with <span className="font-semibold dark:text-[#f9fafb]">Redux Toolkit or Context API</span>, depending on the project needs. I also work with <span className="font-semibold dark:text-[#f9fafb]">APIs</span> to make apps feel dynamic and leverage <span className="font-semibold dark:text-[#f9fafb]">NodeJS, Express, NeonDB, Supabase and PostgreSQL</span> for backend support when necessary to ensure everything runs seamlessly.
                        </p>



                        <p className="mt-4">
                         Looking ahead, I am driven to solve real world problems with clean, thoughtful code that makes a lasting impact. My goal is to build web solutions that not only delight users but also contribute to meaningful, world changing solutions. I am always learning, tinkering, and eager to collaborate on projects that push boundaries and create value.
                        </p>
                </motion.div>
            </motion.div>

            <div id="skills" className="py-10 px-6 md:px-36 lg:px-12">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                    className="w-full text-2xl font-bold tracking-widest uppercase">What I work with</motion.h1>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-10 mt-5">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3 }}
                        className="flex flex-col gap-2"
                    >
                        <h2 className="leading-5 md:text-lg font-bold">Languages & Runtime</h2>
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
                id="projects" className="py-10 relative px-6 md:px-36 lg:px-12"
            >
                <h1 className="w-full text-2xl font-bold tracking-widest uppercase">Projects</h1>
                <div className="cards w-full flex flex-col gap-6 mt-5">
                    <div className="tabs md:w-fit flex gap-2 lg:gap-3 items-center overflow-x-scroll py-3 px-3 rounded-full md:sticky top-4 bg-[#f9fafb]/80 dark:bg-[#2a3b52]/80 backdrop-blur-sm z-30">
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
            

          {/* Gallery section  */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.2 }}
                id="gallery"
                className="px-6 md:px-36 lg:px-12"
            > 
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                    className=" w-full text-2xl font-bold tracking-widest uppercase">Gallery</motion.h1>
                    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-fit mt-5">
                    {
                        GALLERY.map((item, index) => (
                            <Modal imgSrc={item.img} alt={item.img+"alt"} index={index}/>
                        ))
                    }
                </div>
            </motion.div>

            <div className="w-full flex flex-col mt-10 pb-24 px-6 md:px-36 lg:px-12 justify-center items-center text-center text-[#000000] dark:text-[#f9fafb] lg:bg-inherit lg:dark:bg-inherit">
                <p className="text-2xl font-semibold mt-10">Let us work on something together!</p>
                <p className="text-sm mt-2 opacity-80">Feel free to reach out for <a href="mailto:aosakhogba@gmail.com" className=" font-semibold underline animate-pulse text-[#008080] dark:text-yellow-200 ">collaboration or just a chat!</a></p>
            </div>
        </main>
  )
}

export default Right