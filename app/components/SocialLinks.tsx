import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export function SocialLinks() {
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/TomasSoldador', icon: <FaGithub /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tomás-soldador-84335823a', icon: <FaLinkedin /> },
    { name: 'Instagram', url: 'https://www.instagram.com/tomas_.zgrav._', icon: <FaInstagram /> },
  ]

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label={link.name}
        >
          <span className="sr-only">{link.name}</span>
          <span className="text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  )
}

