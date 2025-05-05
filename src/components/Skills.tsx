interface SkillsProps {
  name: string,
    index: number,
    url: string,
    icon?: string,
    desc?: string,
}

const Skills = ({name, index, url, icon, desc} : SkillsProps) => {
  return (
    <a href={url} target="_blank" key={index} className="group flex gap-2 text-sm hover:text-[#008080] dark:hover:text-inherit dark:hover:font-semibold" title={desc}>
    {
        icon && <i className={`${icon} group-hover:-translate-x-2 transition-all duration-300`}></i>
    } 
    {name}
</a>
  )
}

export default Skills