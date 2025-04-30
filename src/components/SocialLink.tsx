interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <a href={url} title={title} className="hover:scale-125 hover:text-[#008080] transition-all duration-300"><i className={`bi ${icon}`}></i></a>
  )
}

export default SocialLink