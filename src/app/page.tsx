// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importProjects from "js-yaml-loader!./../data/projects.yml";
// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importNews from "js-yaml-loader!./../data/news.yml";
import { Text } from "../components/01_atoms/Text";
import { HeroSection } from "../components/03_organisms/heroSection/HeroSection";
import s from "./page.module.scss";
import heroImage from "../../public/assets/heroImage2.png";
import { Textblock } from "../components/02_molecules/textblock/Textblock";
import FOSSMovement from "./FOSS_MOVEMENT.mdx";
import { ProjectCard } from "../components/03_organisms/projectCard/ProjectCard";
import { NewsCard } from "../components/03_organisms/newsCard/NewsCard";
import { Carousel } from "../components/01_atoms/Carousel";
import { Section } from "../components/02_molecules/section/section";
import { Projects, News } from "../types/general";

const Home: React.FC = () => {
  const projects: Projects = importProjects as Projects;
  const news: News = importNews as News;

  return (
    <main className={s.main}>
      <HeroSection
        title="Porsche Open Source Platform"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Textblock className={s.intro}>
        <Text theme="dark" size="large" align="center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </Text>
      </Textblock>
      <Section>
        <FOSSMovement />
      </Section>
      <Section>
        <Carousel
          id="projects"
          slidesPerPage={{ base: 1, s: 3 }}
          heading={projects.heading}
          theme="dark"
          alignHeader="center"
          rewind={false}
        >
          {projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              repo={project.repo}
              imageAlt={project.imageAlt}
              imageSrc={project.imageSrc}
              status={project.status}
            />
          ))}
        </Carousel>
      </Section>
      <Section>
        <Carousel
          id="news"
          slidesPerPage={{ base: 1, s: 2 }}
          heading={news.heading}
          theme="dark"
          alignHeader="center"
          rewind={false}
        >
          {news.items.map((media) => (
            <NewsCard
              key={media.title}
              title={media.title}
              url={media.url}
              imageAlt={media.imageAlt}
              imageSrc={media.imageSrc}
            />
          ))}
        </Carousel>
      </Section>
    </main>
  );
};

export default Home;
