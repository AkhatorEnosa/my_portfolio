interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <a href={url} title={title} target="_blank" className="text-xl md:text-sm hover:scale-125 hover:text-[#008080] dark:text-[#f9fafb]/60 dark:hover:text-[#f9fafb] transition-all duration-300"><i className={`bi ${icon}`}></i></a>
  )
}

export default SocialLink