interface SkillsProps {
  name: string,
    index: number,
    url: string,
    icon?: string,
    desc?: string,
}

const Skills = ({name, index, url, icon, desc} : SkillsProps) => {
  return (
    <a href={url} target="_blank" key={index} className="flex gap-2 text-sm" title={desc}>
    {
        icon && <i className={icon}></i>
    } 
    {name}
</a>
  )
}

export default Skills