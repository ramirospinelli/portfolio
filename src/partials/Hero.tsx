import { GradientText } from '../shared/Gradient';
import { HeroAvatar } from '../shared/HeroAvatar';
import { HeroSocial } from '../shared/HeroSocial';
import { Section } from '../shared/Section';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Ramiro</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            Passionate for technology and outdoor sports. More than 6 years
            helping companies to achieve their goals developing web applications
            solutions with the most modern Javascript frameworks and libraries.
          </p>
          <p>
            {' '}
            I like to keep learning every day and continue growing as a
            professional building good relationships with my colleagues.
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/ramirospinelli">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ramiro-spinelli/">
            <HeroSocial src="/assets/images/linkedin.png" alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/ramirospinelli">
            <HeroSocial
              src="/assets/images/instagram.png"
              alt="Instagram icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
