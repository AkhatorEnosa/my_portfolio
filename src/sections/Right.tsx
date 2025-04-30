import ProjectCard from "../components/ProjectCard"
import soozeer from "../assets/soozeer.png";
// import Shaup from '../assets/shaup.png'
// import Unscramble from '../assets/unscramble.png'
import myNoet from '../assets/mynoet.png'
import moovees from '../assets/moovees.png'
// import doTaska from '../assets/dotaska.png'
// import Lokateur from '../assets/lokateur.png'
import splitter from '../assets/splitter.png'
// import Genotype from '../assets/gmc.png'
// import Techkare from '../assets/techkare.png'
// import Foodie2 from '../assets/foodie.png'
// import Foodie from '../assets/foodie.gif'
// import Kickrs from '../assets/kickrs.png'

const Right = () => {
  return (
        <section className="col-span-4 w-full h-full flex flex-col overflow-scroll scroll-smooth">
            <div id="about">
                <p>I am a <b>Frontend Developer</b> with a B.Sc in Computer Science, passionate about crafting <b>intuitive, responsive,</b> and <b>scalable</b> applications. I specialize in modern tools like <b>JavaScript, TypeScript, ReactJS, Motion</b> for sleek user interfaces, <b>TailwindCSS</b> for streamlined styling, and <b>Redux Toolkit</b> for seamless state management when not using ReactJs's <b>Context API</b>. I have also worked with <b>Supabase</b> and <b>PostgreSQL</b> to integrate robust backend solutions that elevate frontend performance. 
                <br /><br />
                My goal? Build user-focused experiences that solve real-world problems while keeping code clean and efficient. I am also open to <b>remote work</b> opportunities and thrive on continuous learning to stay updated on the ever-evolving tech landscape.</p>
            </div>

            <div id="skills" className="mt-10">
                <h1 className="text-2xl font-bold">Skills</h1>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lh font-bold">Languages</h2>
                        <p className="text-sm">JavaScript</p>
                        <p className="text-sm">TypeScript</p>
                        <p className="text-sm">HTML</p>
                        <p className="text-sm">CSS</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">Frameworks</h2>
                        <p className="text-sm">ReactJS</p>
                        <p className="text-sm">Redux Toolkit</p>
                        <p className="text-sm">Tanstack Query</p>
                        <p className="text-sm">TailwindCSS</p>
                        <p className="text-sm">Bootstrap</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">Tools</h2>
                        <p className="text-sm">Git</p>
                        <p className="text-sm">GitHub</p>
                        <p className="text-sm">PostgreSQL</p>
                        <p className="text-sm">Supabase</p>
                        <p className="text-sm">Figma</p>
                        <p className="text-sm">Motion(formerly Framer Motion)</p>
                        <p className="text-sm">VS Code</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-lg font-bold">Soft Skills</h2>
                        <p className="text-sm">Problem Solving</p>
                        <p className="text-sm">Teamwork</p>
                        <p className="text-sm">Communication</p>
                        <p className="text-sm">Adaptability</p>
                        <p className="text-sm">Time Management</p>
                        <p className="text-sm">Attention to Detail</p>
                        <p className="text-sm">Collaboration</p>
                        <p className="text-sm">Emotional Intelligence</p>
                    </div>
                </div>
            </div>

            <div id="projects" className="mt-10">
                <h1 className="text-2xl font-bold">Projects</h1>
                <div className="w-full flex flex-col gap-3 mt-5">
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
                </div>
            </div>

            {/* <div>
                <p className="text-2xl mt-10">I am currently open to remote opportunities.</p>
                <p className="text-sm mt-2 opacity-80">Feel free to reach out for collaboration or just a chat!</p>
            </div> */}
        </section>
  )
}

export default Right