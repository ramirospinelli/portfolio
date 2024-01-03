import Typewriter from 'typewriter-effect';

import type { I18NProps } from '@/i18n';
import { getI18N } from '@/i18n';
import { GradientText } from '@/shared/Gradient';
import { HeroAvatar } from '@/shared/HeroAvatar';
import { Section } from '@/shared/Section';

const Hero = ({ currentLocale }: I18NProps) => {
  const i18n = getI18N({ currentLocale });

  return (
    <Section>
      <HeroAvatar
        title={
          <div className="flex gap-2">
            {i18n.hero_title}
            <Typewriter
              options={{
                strings: ['Ramiro.'],
                autoStart: true,
                loop: true,
                wrapperClassName:
                  'bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent',
              }}
            />
            👋
          </div>
        }
        description={
          <>
            <span>{i18n.description.part1}</span>
            <GradientText>Frontend</GradientText>
            <span>{i18n.description.part2}</span>
            <span>{i18n.description.part3}</span>
          </>
        }
        avatar={
          <div className="flex flex-col items-center gap-[15px]">
            <div className="rounded-full border-4 border-sky-500">
              <img
                src="/assets/images/profile.png"
                className="h-[250px] w-[250px] rounded-b-full  object-cover"
                alt="profile"
              />
            </div>
            <a
              href="/assets/resume.pdf"
              download="Ramiro Spinelli - Resume"
              className="inline-block">
              <button className="h-8 rounded  bg-sky-500 px-4 font-bold text-white hover:bg-cyan-400">
                {i18n.download_button}
              </button>
            </a>
          </div>
        }
      />
    </Section>
  );
};

export { Hero };
