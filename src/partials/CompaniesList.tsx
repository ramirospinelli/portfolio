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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{
          src: '/assets/images/kodaris.png',
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/sovos.png', alt: 'Project Fire' }}
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/axioma.png', alt: 'Project Maps' }}
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/leniolabs.png', alt: 'Project Maps' }}
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/globallearning.png', alt: 'Project Maps' }}
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
