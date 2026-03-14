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
      aria-current={selectedSection === title ? "location" : undefined}
      className={`group relative w-full sm:w-fit sm:h-fit p-2 px-4 lg:p-0 rounded-lg sm:rounded-full flex sm:justify-center items-center lg:gap-3 capitalize text-sm ${selectedSection === title ? "font-semibold text-white dark:text-black lg:dark:text-green-400 lg:text-indigo-500 bg-[#1f2937] dark:bg-white lg:bg-transparent lg:dark:bg-transparent gap-5" : "sm:bg-[#1f2937]/5 sm:dark:bg-[#000000] lg:bg-transparent lg:dark:bg-transparent text-black dark:text-[#f9fafb] sm:dark:text-[#f9fafb]/60 lg:text-[#1F2937] lg:hover:text-indigo-500 gap-0 lg:dark:text-[#f9fafb]/80 lg:dark:hover:text-[#f9fafb] hover:font-semibold opacity-80 hover:opacity-100"} transition-all duration-150`}
      onClick={() => {
        setSelectedSection(title);
        localStorage.setItem('section', title)
      }}
    >{title} <i className={`bi -rotate-45 ${selectedSection !== title ? "group-hover:rotate-0 bi-arrow-right-short" : "rotate-0 bi-arrow-right"} transition-all duration-150`} aria-hidden="true"></i></a>
  )
}

export default NavLink