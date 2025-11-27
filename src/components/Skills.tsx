import {motion} from "framer-motion"

interface SkillsProps {
  name: string,
    index: number,
    url: string,
    icon?: string,
    desc?: string,
}

const Skills = ({name, index, url, icon, desc} : SkillsProps) => {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ amount: 0.2 }}
    
      href={url} target="_blank" key={index} className="group flex gap-2 text-xs sm:text-sm hover:text-[#008080] dark:text-[#f9fafb]/70 dark:hover:text-inherit hover:font-semibold transition-all duration-300" title={desc}>
    {
        icon && <i className={`${icon} group-hover:-translate-x-2 transition-all duration-300`}></i>
    } 
    {name}
</motion.a>
  )
}

export default Skills