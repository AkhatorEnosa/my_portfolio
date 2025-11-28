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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ amount: 0.2 }}
      aria-label={title}
      href={url} target="_blank" className="group relative text-xs sm:text-sm dark:text-[#f9fafb]/70 dark:hover:text-inherit bg-[#1f2937]/5 dark:bg-[#f9fafb]/5 md:bg-transparent md:darK:bg-transparent md:hover:bg-[#1f2937]/5 md:dark:hover:bg-[#f9fafb]/5 dark:text-[#f9fafb] border-[1px] md:border-none border-[#1f2937]/20 dark:border-[#f9fafb]/20 lg:shadow rounded-lg md:p-4 transition-all duration-300 flex flex-col gap-2">
        <div className="flex flex-col-reverse md:grid md:grid-cols-5 justify-between items-center gap-4 md:gap-6">
            <div className="w-full md:w-fit md:col-span-3 md:h-full flex flex-col justify-between px-4 md:px-0 gap-2">
                <div className="w-full flex flex-col gap-2">
                  <h2 aria-label={title} className="w-full flex gap-2 text-lg font-bold lg:group-hover:underline  group-hover:text-[#008080] group-hover:dark:text-inherit capitalize">{title} <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-all duration-300"></i></h2>
                  <p className="sm:text-sm line-clamp-2 sm:line-clamp-3 md:line-clamp-none">{desc}</p>
                </div>
                {/* <hr className="text-[#1f2937]/20"/> */}
                {/* <a href={url} target="_blank" className="text-sm text-[#FF6B6B]">View Project</a> */}
            </div>
            <div className="relative w-full md:w-fit md:h-full md:col-span-2 flex justify-center items-start">
              {
                construction && 
                <Tooltip title="possible future updates" placement="bottom" arrow>
                  <span className="absolute size-6 lg:opacity-0 lg:group-hover:opacity-100 flex justify-center items-center bg-yellow-500 rounded-full border-[1px] border-black dark:text-black right-0 -top-2 shadow-lg text-xs z-20 transition-opacity duration-300">
                    <NotificationsActiveOutlinedIcon sx={{ fontSize: 20 }}></NotificationsActiveOutlinedIcon>
                  </span>
                </Tooltip>
              }
              <div className="w-full h-48 dark:border-[#f9fafb]/20 rounded-lg md:rounded-3xl md:border-[1px] border-[#1f2937]/20 overflow-hidden">
                  <img src={imgSrc} alt={`${title} image`} className="w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-300"/>
              </div>
            </div>
        </div>

        <div className="w-full flex gap-2 md:mt-5 text-[10px] justify-center sm:justify-normal p-2 md:p-0 font-semibold uppercase tracking-wider flex-wrap">
            {/* {tech.map((x: string) => (x + " • "))} */}
            {tech.map((x: string, index: number) => (
                <p key={index} className="px-2 py-1 bg-[#008080]/10 dark:bg-[#2a3b52]/80 rounded-2xl">{x}</p>
            ))}
        </div>
    </motion.a>
  )
}

export default ProjectCard