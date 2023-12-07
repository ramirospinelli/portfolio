import { HeroSocial } from '@/shared/HeroSocial';
import { Section } from '@/shared/Section';

const Social = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Social;
