interface NavLinkProps {
  url: string;
  title: string;
}

const NavLink = ({url, title}: NavLinkProps) => {
  return (
    <a href={url} className="group relative w-fit h-fit flex justify-center items-center gap-3 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] opacity-80 hover:opacity-100 hover:font-medium hover:tracking-wider transition-all duration-300">{title} <i className="bi bi-arrow-right-short -rotate-45 group-hover:rotate-0 transition-all duration-300"></i></a>
  )
}

export default NavLink