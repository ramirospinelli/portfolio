import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { GradientText } from '@/shared/Gradient';

import i18n from '../pages/i18n';
import { Company } from '../shared/Company';
import { Section } from '../shared/Section';
import { ColorTags, Tags } from '../shared/Tags';

const CompaniesList = () => {
  const { t } = useTranslation('companies');

  useEffect(() => {
    i18n.init();
  }, []);

  return (
    <Section
      title={
        <>
          {t('title.part1')}
          <GradientText>{t('title.part2')}</GradientText> 💼
        </>
      }>
      <div className="flex flex-col gap-6">
        <Company
          name="TotalCoin"
          role="Senior Frontend Developer"
          description={t('totalcoin')}
          date="DEC 2023 - PRESENT"
          link="https://ar.totalcoin.com/"
          img={{
            src: '/assets/images/totalcoin.png',
            alt: 'TotalCoin',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>React JS</Tags>
              <Tags color={ColorTags.INDIGO}>React Native</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            </>
          }
        />
        <Company
          name="Kodaris"
          role="Senior UX Engineer"
          description={t('kodaris')}
          date="OCT 2023 - PRESENT"
          link="https://www.kodaris.com/"
          img={{
            src: '/assets/images/kodaris.png',
            alt: 'Kodaris',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>React JS</Tags>
              <Tags color={ColorTags.VIOLET}>Angular JS</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.LIME}>HTML</Tags>
              <Tags color={ColorTags.EMERALD}>CSS</Tags>
              <Tags color={ColorTags.INDIGO}>EJS</Tags>
            </>
          }
        />
        <Company
          name="Sovos"
          role="Senior Software Engineer"
          description={t('sovos')}
          date="AUG 2017 - JUN 2021 / MAR 2022 - NOV 2023"
          link="https://sovos.com/"
          img={{ src: '/assets/images/sovos.png', alt: 'Sovos' }}
          category={
            <>
              <Tags color={ColorTags.BLUE}>Java</Tags>
              <Tags color={ColorTags.SKY}>React JS</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.STONE}>SQL Server</Tags>
              <Tags color={ColorTags.TEAL}>Oracle</Tags>
            </>
          }
        />
        <Company
          name="Axioma Studios"
          role="Senior Full Stack Developer"
          description={t('axioma')}
          date="AUG 2020 - JUL 2022"
          link="https://www.axiomastudios.com/"
          img={{ src: '/assets/images/axioma.png', alt: 'Axioma' }}
          category={
            <>
              <Tags color={ColorTags.SKY}>React JS</Tags>
              <Tags color={ColorTags.VIOLET}>Angular JS</Tags>
              <Tags color={ColorTags.INDIGO}>React Native</Tags>
              <Tags color={ColorTags.FUCHSIA}>Node JS</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            </>
          }
        />
        <Company
          name="Leniolabs"
          role="Frontend Developer"
          description={t('lenio')}
          date="JUN 2021 - FEB 2022"
          link="https://www.leniolabs.com/"
          img={{
            src: '/assets/images/leniolabs.png',
            alt: 'Leniolabs',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>React.JS</Tags>
              <Tags color={ColorTags.VIOLET}>Angular JS</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            </>
          }
        />
        <Company
          name="Global Learning"
          role="Academic Assistant"
          description={t('globallearning')}
          date="SEPT 2020 - OCT 2021"
          link="https://www.linkedin.com/company/globallearning-ar/"
          img={{
            src: '/assets/images/globallearning.png',
            alt: 'Global Learning',
          }}
          category={
            <>
              <Tags color={ColorTags.SKY}>React JS</Tags>
              <Tags color={ColorTags.FUCHSIA}>Node JS</Tags>
              <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
              <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              <Tags color={ColorTags.LIME}>HTML</Tags>
              <Tags color={ColorTags.EMERALD}>CSS</Tags>
              <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            </>
          }
        />
      </div>
    </Section>
  );
};

export { CompaniesList };
