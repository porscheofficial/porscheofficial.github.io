// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importProjects from "js-yaml-loader!./../data/projects.yml";
// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importNews from "js-yaml-loader!./../data/news.yml";
// @ts-expect-error TODO
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import importMemberships from "js-yaml-loader!./../data/memberships.yml";
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
import { Projects, News, Memberships } from "../types/general";
import { Membership } from "../components/03_organisms/membership/Membership";
import { Heading } from "../components/01_atoms/Heading";
import { LinkButton } from "../components/01_atoms/LinkButton";

const Home: React.FC = () => {
  const projects: Projects = importProjects as Projects;
  const news: News = importNews as News;
  const memberships: Memberships = importMemberships as Memberships;

  return (
    <main className={s.main}>
      <HeroSection
        title="Porsche Open Source Platform"
        subtitle="FOSS@Porsche"
        imageSrc={heroImage}
        imageAlt="AI generated Porsche Taycan"
      />
      <Section className={s["foss-movement"]} spacing="none">
        <Textblock className={s.intro}>
          <Text theme="dark" size="x-large" align="center">
            With the Porsche FOSS Movement, we are continuing our open source
            journey and creating a common understanding of values, principles
            and goals - in all teams, all subsidiaries and across all national
            borders.
          </Text>
        </Textblock>

        <FOSSMovement />
      </Section>
      <Section id="projects" grid={false}>
        <Carousel
          slidesPerPage={{ base: 1, s: 3 }}
          heading={projects.heading}
          theme="dark"
          width="extended"
          alignHeader="center"
          rewind={false}
        >
          {projects.items.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              repo={project.repo}
              description={project.description}
              imageAlt={project.imageAlt}
              imageSrc={project.imageSrc}
              status={project.status}
            />
          ))}
        </Carousel>
      </Section>
      <Section id="news" grid={false}>
        <Carousel
          slidesPerPage={{ base: 1, s: 2 }}
          heading={news.heading}
          theme="dark"
          alignHeader="center"
          rewind={false}
          width="extended"
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
      <Section id="documentation" className={s.documentation}>
        <Heading
          theme="dark"
          align="center"
          size="x-large"
          className={s.headline}
        >
          Documentation
        </Heading>
        <Textblock className={s.text}>
          <Text theme="dark" size="medium" align="center">
            Our growing documentation covers best practices and standards on
            contributing to FOSS projects or creating new FOSS projects on
            behalf of Porsche.
          </Text>
        </Textblock>
        <LinkButton href="/docs" theme="dark" className={s.cta}>
          Read documentation
        </LinkButton>
      </Section>
      <Section id="memberships" className={s.memberships}>
        {memberships.items.map((membership) => (
          <Membership
            key={membership.title}
            description={membership.description}
            title={membership.title}
            url={membership.url}
            imageAlt={membership.imageAlt}
            imageSrc={membership.imageSrc}
          />
        ))}
      </Section>
    </main>
  );
};

export default Home;
