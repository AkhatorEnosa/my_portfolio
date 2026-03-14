import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

interface ProjectCardProps {
  title: string,
  desc: string,
  tech: string[],
  url: string,
  imgSrc: string,
  construction: boolean,
}

const ProjectCard = ({ title, desc, tech, url, construction, imgSrc }: ProjectCardProps) => {
  return (
    <motion.a 
      layout
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}. (opens in a new tab)`}
      className="group relative dark:hover:text-inherit  dark:bg-[#1c1c1c] bg-[#f9fafb] dark:text-[#f9fafb] text-black/80 hover:text-inherit lg:dark:text-[#f9fafb]/70 lg:dark:hover:text-[#f9fafb] border-[1px] md:border-none border-[#1f2937]/20 dark:border-[#f9fafb]/20 lg:shadow rounded-lg md:p-4 transition-all duration-300 flex flex-col gap-2">
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 justify-between items-center gap-4 md:gap-6">
            <div className="w-full md:w-fit md:col-span-3 flex flex-col justify-between px-4 md:px-0 gap-2">
              <h2 aria-label={title} className="w-full heading flex gap-2 text-lg lg:text-xl font-semibold lg:group-hover:underline capitalize">{title} <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-all duration-300" aria-hidden="true"></i></h2>
              <p className="text-sm line-clamp-2 md:line-clamp-none">{desc}</p>
            </div>
            <div className="relative w-full md:w-fit md:h-full md:col-span-2 flex justify-center items-start">
              {
                construction && 
                <Tooltip title="possible future updates" placement="bottom" arrow>
                  <span className="absolute size-6 lg:opacity-0 lg:group-hover:opacity-100 flex justify-center items-center bg-yellow-500 rounded-full border-[1px] border-black dark:text-black right-0 -top-2 shadow-lg text-xs z-20 transition-opacity duration-300">
                    <NotificationsActiveOutlinedIcon sx={{ fontSize: 20 }}></NotificationsActiveOutlinedIcon>
                    <span className="sr-only">Notice: Possible future updates</span>
                  </span>
                </Tooltip>
              }
              <div className="w-full h-48 dark:border-[#f9fafb]/20 rounded-lg md:rounded-3xl md:border-[1px] border-[#1f2937]/20 overflow-hidden">
                  <img src={imgSrc} alt={`Screenshot of the ${title} project interface`} className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-300"/>
              </div>
            </div>
        </div>

        <ul className="opacity-80 group-hover:opacity-100 w-full flex gap-2 md:mt-5 text-[10px] justify-center sm:justify-normal p-2 md:p-0 font-semibold uppercase tracking-wider flex-wrap"
          aria-label={`Technologies used to build ${title}`}
        >
            {/* {tech.map((x: string) => (x + " • "))} */}
            {tech.map((x: string, index: number) => (
                <li key={index} className="px-2 py-1 border border-indigo-500/50 dark:border-green-400/50 text-indigo-500 dark:text-green-400 bg-transparent rounded-2xl">{x}</li>
            ))}
        </ul>
    </motion.a>
  )
}

export default ProjectCard