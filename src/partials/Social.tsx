import { HeroSocial } from '@/shared/HeroSocial';

const Social = () => {
  return (
    <div className="flex gap-2">
      <a href="https://github.com/ramirospinelli">
        <HeroSocial src="/assets/images/github.png" alt="Github icon" />
      </a>
      <a href="https://www.linkedin.com/in/ramiro-spinelli/">
        <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
      </a>
      <a href="https://www.instagram.com/ramirospinelli">
        <HeroSocial src="/assets/images/instagram.png" alt="Instagram icon" />
      </a>
    </div>
  );
};

export default Social;
