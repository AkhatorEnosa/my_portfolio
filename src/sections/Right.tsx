import ProjectCard from "../components/ProjectCard"
import soozeer from "../assets/soozeer.png";
// import Shaup from '../assets/shaup.png'
import Unscramble from '../assets/unscramble.png'
import myNoet from '../assets/mynoet.png'
import moovees from '../assets/moovees.png'
import doTaska from '../assets/dotaska.png'
import Lokateur from '../assets/lokateur.png'
import splitter from '../assets/splitter.png'
import Genotype from '../assets/gmc.png'
import Techkare from '../assets/techkare.png'
// import Foodie2 from '../assets/foodie.png'
// import Foodie from '../assets/foodie.gif'
import Kickrs from '../assets/kickrs.png'
import { motion } from "framer-motion"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { LANGUAGES } from "../constants/languages";
import { FRAMEWORKS } from "../constants/frameworks";
import Skills from "../components/Skills";
import { TOOL_LIST } from "../constants/tools";
import { SOFT_SKILLS } from "../constants/softskills";

const Right = () => {
    const {revealAll, setRevealAll} = useContext(AppContext);
  return (
        <section id="about" className="lg:w-[52%] lg:py-24 lg:px-12">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
            >
                <p>I am a <b>Frontend Developer</b> with a B.Sc in Computer Science, passionate about crafting <b>intuitive, responsive,</b> and <b>scalable</b> applications. I specialize in modern tools like <b>JavaScript, TypeScript, ReactJS, Motion</b> for sleek user interfaces, <b>TailwindCSS</b> for streamlined styling, and <b>Redux Toolkit</b> for seamless state management when not using ReactJs's <b>Context API</b>. I have strong expertise in <b>API</b> consumption, integrating and managing data from various endpoints to enhance application functionality. Additionally, I have also worked with <b>Supabase</b> and <b>PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. 
                <br /><br />
                My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I am also open to <b>remote work</b> opportunities and thrive on continuous learning to stay updated on the ever-evolving tech landscape.</p>
            </motion.div>

            <div id="skills" className="py-10">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.8 }}
                className="text-2xl font-bold">Skills</motion.h1>
                <div className="grid grid-cols-2 gap-4 mt-5">
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
                    <ProjectCard 
                        title="Soozeer"
                        desc="A dynamic and interactive social media platform built with React, Redux Toolkit, React Query, and Supabase. Featuring seamless state management, real-time updates, and secure user authentication, this platform delivers a modern and scalable social experience. Connect, share, and engage like never before! 🚀"
                        tech={["ReactJS", "Tanstack Query", "Redux Toolkit", "TailwindCSS", "Supabase"]}
                        url="https://soozeer.netlify.app/"
                        imgSrc={soozeer}
                    />
                    <ProjectCard 
                        title="myNoet"
                        desc="myNoet is an application meticulously crafted to mirror the spirit of Google Keep, thoughtfully designed to provide users with a swift and seamless platform for capturing their ideas and thoughts with exceptional ease and efficiency, unencumbered by unnecessary complexities."
                        tech={["ReactJS", "Tanstack Query", "Redux Toolkit", "TailwindCSS", "Supabase"]}
                        url="https://mynoet.netlify.app/"
                        imgSrc={myNoet}
                    />
                    <ProjectCard 
                        title="Moovees"
                        desc="A platform built with ReactJS that integrates TMDB's API to display movie details, trailers, ratings, and recommendations. Designed for ease of use, it offers a clean and efficient way to explore films."
                        tech={["ReactJS", "TailwindCSS", "Appwrite"]}
                        url="https://moovees.netlify.app/"
                        imgSrc={moovees}
                    />
                    <ProjectCard 
                        title="Bill Splitter App"
                        desc="A user-friendly web application designed to simplify splitting bills between two or more people, including optional tip calculations. Built with HTML, CSS, and JavaScript, it offers a clean and intuitive interface for quick and accurate bill division."
                        tech={["Html", "CSS", "Javascript"]}
                        url="https://splitify.netlify.app/"
                        imgSrc={splitter}
                    />
                    {
                        revealAll && 
                        <>
                            <ProjectCard
                                title="Genotype Match Checker"
                                desc="The idea that birthed this project is to assist couples in determining if their genotypes are compatible for their future children. Designed with simplicity and accuracy in mind, it provides quick insights to support informed family planning decisions."
                                tech={["Html", "CSS", "Javascript"]}
                                url="https://akhatorenosa.github.io/genotype_match_checker"
                                imgSrc={Genotype}
                            />
                            <ProjectCard
                                title="DoTaska"
                                desc="A task management application that allows users to create, edit, and delete tasks. Built with ReactJS, it provides a clean interface and efficient navigation."
                                tech={["ReactJS", "TypeScript", "TailwindCSS", "Motion"]}
                                url="https://dotaska.netlify.app/"
                                imgSrc={doTaska}
                            />
                            <ProjectCard
                                title="Techkare"
                                desc="A centralized platform for managing and displaying patient data, designed to streamline workflows and improve care delivery. Built with ReactJS and integrated with a robust API, it ensures seamless functionality."
                                tech={["ReactJS", "TailwindCSS", "API"]}
                                url="https://techkare.netlify.app/"
                                imgSrc={Techkare}
                            />
                            <ProjectCard 
                                title="Unscramble"
                                desc="A fun and interactive word game where players unscramble letters to form words. Built with ReactJS, it offers a clean interface and engaging gameplay."
                                tech={["ReactJS", "CSS", "API"]}
                                url="https://akhatorenosa.github.io/unscramble-game/"
                                imgSrc={Unscramble}
                            />
                            {/* <ProjectCard
                                title="Foodie"
                                desc="A food recipe application that allows users to search for recipes based on ingredients, cuisine, and dietary preferences. Built with ReactJS and TailwindCSS, it provides a user-friendly interface for discovering delicious meals."
                                tech={["NextJs", "TailwindCSS"]}
                                url="https://foodie.netlify.app/"
                                imgSrc={Foodie}
                            /> */}
                            <ProjectCard
                                title="Kickrs"
                                desc="A sleek and responsive product page designed to showcase items with detailed descriptions, and high-quality images. Built to enhance the shopping experience, it ensures seamless navigation and quick purchasing decisions."
                                tech={["ReactJS", "TailwindCSS", "Appwrite"]}
                                url="https://kickrs.netlify.app/"
                                imgSrc={Kickrs}
                            />
                            <ProjectCard
                                title="Lokateur"
                                desc="A web application is a geolocation tool that converts IP addresses into detailed location data, including city, country, time zone, and currency. Built with precision and user-friendliness in mind, it provides accurate and instant results for developers, businesses, and curious users alike.."
                                tech={["ReactJS", "TailwindCSS", "API"]}
                                url="https://lokateur.netlify.app/"
                                imgSrc={Lokateur}
                            />
                        </>
                    }

                    
                    <div className="w-full flex justify-center items-center mt-5">
                        <button 
                            className="group w-fit h-fit flex justify-center items-center gap-3 bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] hover:font-semibold py-2 px-4 rounded-full transition-all duration-300"
                            onClick={() => setRevealAll(!revealAll)}
                        >
                            {revealAll ? "Switch Back" : "Reveal All"} <i className={`bi bi-arrow-right -rotate-45 ${revealAll ? "group-hover:-rotate-90" : "group-hover:rotate-90"} transition-all duration-300`}></i>
                        </button>
                    </div>
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