import { Tooltip } from "@mui/material";

interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <Tooltip title={title} placement="top" arrow>
      <a href={url} title={title} target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title !== "My Resume" ? "My account on" : ""} ${title} (opens in a new tab)`}
        className="text-xl md:text-2xl lg:text-sm hover:scale-125 text-black/70 hover:text-inherit dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] transition-all duration-300"
      >
        <i className={`bi ${icon}`} aria-hidden="true"></i>
        <span className="sr-only">{title}</span>
      </a>
    </Tooltip>
  )
}

export default SocialLink