// eslint-disable-next-line import/no-webpack-loader-syntax,import/no-unresolved
// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importProjects from "js-yaml-loader!./../data/projects.yml";
import { Text } from "../components/01_atoms/Text";
import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import s from "./page.module.scss";
import heroImage from "../../public/assets/heroImage2.png";
import { Textblock } from "../components/02_molecules/textblock/Textblock";
import FOSSMovement from "./FOSS_MOVEMENT.mdx";
import { ProjectCard } from "../components/03_organisms/projectCard/ProjectCard";
import { Carousel } from "../components/01_atoms/Carousel";
import { Section } from "../components/02_molecules/section/section";
import { Projects } from "../types/general";

const Home: React.FC = () => {
  const projects: Projects = importProjects;

  return (
    <main className={s.main}>
      <HeroSection
        title="Porsche Open Source Platform"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Textblock id={s.intro}>
        <Text theme="dark" size="large" align="center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </Text>
      </Textblock>
      <Section>
        <Textblock id={s["foss-movement"]}>
          <FOSSMovement />
        </Textblock>
      </Section>
      <Section>
        <Carousel
          slidesPerPage={{ base: 1, s: 3 }}
          heading={projects.heading}
          theme="dark"
          alignHeader="center"
          rewind={false}
        >
          {projects.items.map((project) => (
            <ProjectCard
              title={project.title}
              url={project.url}
              imageAlt={project.imageAlt}
              imageSrc={project.imageSrc}
              fork={project.fork}
              subtitle={project.subtitle}
              stars={project.stars}
              status={project.status}
            />
          ))}
        </Carousel>
      </Section>
    </main>
  );
};

export default Home;
