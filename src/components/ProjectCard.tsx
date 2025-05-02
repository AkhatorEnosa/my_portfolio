import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string,
  desc: string,
  tech: string[],
    url: string,
    imgSrc: string,
}

const ProjectCard = ({ title, desc, tech, url, imgSrc }: ProjectCardProps) => {
  return (
    <motion.a 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ amount: 0.2 }}
      href={url} target="_blank" className="group text-sm hover:bg-[#1f2937]/5 dark:hover:bg-[#f9fafb]/5 dark:text-[#f9fafb] rounded-lg p-4 transition-all duration-300 flex flex-col gap-2">
        <div className="grid grid-cols-5 justify-between items-center gap-6">
            <div className="col-span-3 flex flex-col gap-2">
                <h2 className="w-full flex gap-2 text-lg font-bold group-hover:text-[#008080] group-hover:dark:text-inherit">{title} <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-all duration-300"></i></h2>
                <p className="text-sm">{desc}</p>
                {/* <hr className="text-[#1f2937]/20"/> */}
                <div className="w-full flex gap-2 mt-5 text-sm font-semibold flex-wrap">
                    {/* {tech.map((x: string) => (x + " • "))} */}
                    {tech.map((x: string, index: number) => (
                        <p key={index} className="px-2 py-1 bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 border-[0.5px] border-[#1f2937] dark:border-[#f9fafb] rounded-2xl">{x}</p>
                    ))}
                </div>
                {/* <a href={url} target="_blank" className="text-sm text-[#FF6B6B]">View Project</a> */}
            </div>
            <div className="col-span-2 h-32 dark:border-[#f9fafb]/20 rounded-lg border-[1px] border-[#1f2937]/20 overflow-hidden">
                <img src={imgSrc} alt="Soozeer" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"/>
            </div>
        </div>
    </motion.a>
  )
}

export default ProjectCard