interface ProjectCardProps {
  title: string,
  desc: string,
  tech: string[],
    url: string,
    imgSrc: string,
}

const ProjectCard = ({ title, desc, tech, url, imgSrc }: ProjectCardProps) => {
  return (
    <a href={url} target="_blank" className="group text-sm hover:bg-[#1f2937]/5 dark:hover:bg-[#FFF9F0]/5 dark:text-[#FFF9F0] rounded-lg p-2 transition-all duration-300 flex flex-col gap-2">
        <div className="grid grid-cols-5 justify-between items-center gap-6">
            <div className="col-span-3 bg-blue-300 flex flex-col gap-2">
                <h2 className="w-full flex gap-2 text-lg font-bold group-hover:text-[#008080]">{title} <i className="bi bi-arrow-right -rotate-45 group-hover:rotate-0 transition-all duration-300"></i></h2>
                <p className="text-sm">{desc}</p>
                {/* <hr className="text-[#1f2937]/20"/> */}
                <div className="w-full flex gap-2 text-sm font-semibold ">
                    {tech.map((x: string) => (x + " • "))}
                </div>
                {/* <a href={url} target="_blank" className="text-sm text-[#FF6B6B]">View Project</a> */}
            </div>
            <div className="w-52 h-32 bg-red-400 dark:border-[#FFF9F0]/20 rounded-lg border-[1px] border-[#1f2937]/20 overflow-hidden">
                <img src={imgSrc} alt="Soozeer" className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"/>
            </div>
        </div>
    </a>
  )
}

export default ProjectCard