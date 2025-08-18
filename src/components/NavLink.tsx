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
      className={`group relative w-fit h-fit p-2 px-4 lg:p-0 rounded-full flex justify-center items-center lg:gap-3 capitalize text-sm ${selectedSection === title ? "font-semibold bg-[#1f2937] dark:bg-[#f9fafb] dark:text-[#1F2937] text-[#f9fafb] lg:text-[#008080] lg:bg-transparent lg:dark:bg-transparent lg:dark:text-white gap-5" : "bg-[#1f2937]/5 dark:bg-[#1f2937]/80 dark:text-[#f9fafb]/60 lg:text-[#1F2937] lg:hover:text-[#008080] gap-0 lg:dark:text-[#f9fafb]/80 lg:dark:hover:text-[#f9fafb] hover:font-semibold opacity-80 hover:opacity-100"} transition-all duration-150`}
      onClick={() => {
        setSelectedSection(title);
        localStorage.setItem('section', title)
      }}
    >{title} <i className={`bi -rotate-45 ${selectedSection !== title ? "group-hover:rotate-0 bi-arrow-right-short" : "rotate-0 bi-arrow-right"} transition-all duration-150`}></i></a>
  )
}

export default NavLink