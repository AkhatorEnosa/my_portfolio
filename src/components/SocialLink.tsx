interface SocialLinkProps {
    url: string;
    title: string;
    icon: string;
}

const SocialLink = ({url, title, icon}: SocialLinkProps) => {
  return (
    <a href={url} title={title}><i className={`bi ${icon}`}></i></a>
  )
}

export default SocialLink