import { Tooltip } from "@mui/material";

interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <Tooltip title={title} placement="bottom" arrow aria-label={title}>
      <div>
        <a href={url} title={title} target="_blank" className="text-xl md:text-sm hover:scale-125 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] transition-all duration-300"><i className={`bi ${icon}`}></i></a>
      </div>
    </Tooltip>
  )
}

export default SocialLink