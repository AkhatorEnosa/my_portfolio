import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface NavLinkProps {
  url: string;
  title: string;
}

const NavLink = ({url, title}: NavLinkProps) => {
  const { selectedSection, setSelectedSection } = useContext(AppContext)
  return (
    <a href={url} 
      className={`group relative w-fit h-fit flex justify-center items-center gap-3 capitalize text-sm ${selectedSection === title ? "font-bold text-[#008080] dark:text-[#f9fafb]" : "hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] hover:font-bold opacity-80 hover:opacity-100"}  transition-all duration-150`}
      onClick={() => {
        setSelectedSection(title);
        // localStorage.setItem('section', title)
      }}
    >{title} <i className={`bi -rotate-45 ${selectedSection !== title ? "group-hover:rotate-0 bi-arrow-right-short" : "rotate-0 bi-arrow-right"} transition-all duration-150`}></i></a>
  )
}

export default NavLink