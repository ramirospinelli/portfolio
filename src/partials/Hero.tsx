import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { GradientText } from '@/shared/Gradient';
import { HeroAvatar } from '@/shared/HeroAvatar';
import { Section } from '@/shared/Section';

import i18n from '../pages/i18n';
import Social from './Social';

const Hero = () => {
  const { t } = useTranslation('hero');

  useEffect(() => i18n.init(), []);

  return (
    <Section>
      <HeroAvatar
        title={
          <>
            {t('title')}
            <GradientText>Ramiro</GradientText>
            👋
          </>
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
              className="inline-block"
            >
              <button className="h-8 rounded  bg-sky-500 px-4 font-bold text-white hover:bg-cyan-400">
                {t('download_button')}
              </button>
            </a>
          </div>
        }
        socialButtons={<Social />}
      />
    </Section>
  );
};

export { Hero };
