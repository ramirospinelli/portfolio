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
            I am a <GradientText>frontend</GradientText> developer with a love
            for outdoor sports and technology. I have over 5 years of experience
            helping companies achieve their goals by developing web and mobile
            applications using the latest JavaScript tools.
          </p>
          <p>
            I enjoy continuous learning and building strong relationships with
            my colleagues every day.
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
