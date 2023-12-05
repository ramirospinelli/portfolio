import { Company } from '../shared/Company';
import { GradientText } from '../shared/Gradient';
import { Section } from '../shared/Section';
import { ColorTags, Tags } from '../shared/Tags';

const CompaniesList = () => (
  <Section
    title={
      <>
        My <GradientText>Experience</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Company
        name="Kodaris"
        role="Senior UX Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        date="OCT 2023 - PRESENT"
        link="/"
        img={{
          src: '/src/assets/images/kodaris.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.SKY}>React JS</Tags>
            <Tags color={ColorTags.VIOLET}>Angular JS</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.LIME}>HTML</Tags>
            <Tags color={ColorTags.EMERALD}>CSS</Tags>
          </>
        }
      />
      <Company
        name="Sovos"
        role="Senior Software Engineer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        date="AUG 2017 - JUN 2021 / MAR 2022 - NOV 2023"
        link="/"
        img={{ src: '/src/assets/images/sovos.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>JAVA</Tags>
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        date="AUG 2020 - JUL 2022"
        link="/"
        img={{ src: '/src/assets/images/axioma.png', alt: 'Project Maps' }}
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
        name="Lenio Labs"
        role="Frontend Developer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        date="JUN 2021 - FEB 2022"
        link="/"
        img={{ src: '/src/assets/images/leniolabs.png', alt: 'Project Maps' }}
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        date="SEPT 2020 - OCT 2021"
        link="/"
        img={{
          src: '/src/assets/images/globallearning.png',
          alt: 'Project Maps',
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

export { CompaniesList };
