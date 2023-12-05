import { GradientText } from '../shared/Gradient';
import { HeroAvatar } from '../shared/HeroAvatar';
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
        <a
          href="/assets/resume.pdf"
          download="Ramiro Spinelli - Resume"
          className="inline-block"
        >
          <button className="h-8 rounded  bg-sky-500 px-4 font-bold text-white hover:bg-cyan-400">
            Download CV
          </button>
        </a>
      }
    />
  </Section>
);

export { Hero };
