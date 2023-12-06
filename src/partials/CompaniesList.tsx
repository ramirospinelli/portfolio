import { Company } from '../shared/Company';
import { GradientText } from '../shared/Gradient';
import { Section } from '../shared/Section';
import { ColorTags, Tags } from '../shared/Tags';

const CompaniesList = () => (
  <Section
    title={
      <>
        My <GradientText>Experience</GradientText> 🤓
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Company
        name="Kodaris"
        role="Senior UX Engineer"
        description="Kodaris is a company that manages the supply chain platform for large construction clients. My role as a frontend developer involves maintaining and adding new features to clients' e-commerce platforms and the ERP."
        date="OCT 2023 - PRESENT"
        link="https://www.kodaris.com/"
        img={{
          src: '/portfolio/assets/images/kodaris.png',
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
        description="Sovos is the world's largest network for electronic invoice processing, managing over 2.6 billion electronic documents annually in Latin America alone. As a software engineer, my tasks included developing and testing new features in both the backend and frontend, as well as deploying them."
        date="AUG 2017 - JUN 2021 / MAR 2022 - NOV 2023"
        link="https://sovos.com/"
        img={{ src: '/portfolio/assets/images/sovos.png', alt: 'Sovos' }}
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
        description="Axioma is a company specializing in the design and development of responsive websites, e-commerce, institutional sites, and intranets, as well as mobile and desktop applications. As a full-stack software developer, I worked on various web and mobile projects, handling tasks related to backend, databases, and frontend development."
        date="AUG 2020 - JUL 2022"
        link="https://www.axiomastudios.com/"
        img={{ src: '/portfolio/assets/images/axioma.png', alt: 'Axioma' }}
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
        description="Lenio is a company that offers knowledge and experience on all of the main frontend JavaScript stacks: React, Angular, AngularJS, Vue, D3js. As a frontend developer, I worked for one of their major clients, Ice, on the development and maintenance of their web application for mortgage management."
        date="JUN 2021 - FEB 2022"
        link="https://www.leniolabs.com/"
        img={{
          src: '/portfolio/assets/images/leniolabs.png',
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
        description="Global Learning is a company that offers courses, including the Full Stack JavaScript Developer course. I worked as an academic assistant in the delivery of the first course, which had more than 20 students. We provided them with an introduction to the world of software development, covering the fundamentals of programming and the most commonly used agile methodologies today."
        date="SEPT 2020 - OCT 2021"
        link="https://www.linkedin.com/company/globallearning-ar/"
        img={{
          src: '/portfolio/assets/images/globallearning.png',
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

export { CompaniesList };
