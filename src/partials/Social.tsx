import { HeroSocial } from '@/shared/HeroSocial';

const socials = [
  {
    url: 'https://github.com/ramirospinelli',
    logo: '/assets/images/github.png',
    alt: 'Github icon',
  },
  {
    url: 'https://www.linkedin.com/in/ramiro-spinelli/',
    logo: '/assets/images/linkedin.png',
    alt: 'Linkedin icon',
  },
  {
    url: 'https://www.instagram.com/ramirospinelli',
    logo: '/assets/images/instagram.png',
    alt: 'Instagram icon',
  },
];

const Social = () => {
  return (
    <div className="flex gap-2">
      {socials.map((social) => (
        <a href={social.url} target="_blank" key={social.url}>
          <HeroSocial src={social.logo} alt={social.alt} />
        </a>
      ))}
    </div>
  );
};

export default Social;
