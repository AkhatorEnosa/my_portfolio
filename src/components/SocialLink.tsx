import { Tooltip } from "@mui/material";

interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <Tooltip title={title} placement="top" arrow aria-label={title}>
      <div className="text-xl md:text-2xl lg:text-sm hover:scale-125 text-black/70 hover:text-inherit dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] transition-all duration-300">
        <a href={url} title={title} target="_blank"><i className={`bi ${icon}`}></i></a>
      </div>
    </Tooltip>
  )
}

export default SocialLink