import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

import { HeroAvatar } from '@/shared/HeroAvatar';
import { Section } from '@/shared/Section';

import i18n from '../pages/i18n';

const Hero = () => {
  const { t } = useTranslation('hero');

  useEffect(() => {
    i18n.init();
  }, []);

  return (
    <Section>
      <HeroAvatar
        title={
          <div className="flex gap-2">
            {t('title')}
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
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>
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
                {t('download_button')}
              </button>
            </a>
          </div>
        }
      />
    </Section>
  );
};

export { Hero };
