import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./projectCard.module.scss";
import { Tag } from "../../01_atoms/Tag";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Heading } from "../../01_atoms/Heading";
import { Text } from "../../01_atoms/Text";
import { Icon } from "../../01_atoms/Icon";

interface GithubResponse {
  description: string;
  html_url: string;
  stargazers_count: string;
  forks: string;
}

export const getGitHubData = async (repo: string): Promise<GithubResponse> => {
  const res = await fetch(`https://api.github.com/repos/${repo}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<GithubResponse>;
};

export interface ProjectCardProps {
  title: string;
  repo: string;
  status: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = async ({
  title,
  repo,
  imageSrc,
  imageAlt,
  status,
}) => {
  const githubData: GithubResponse = await getGitHubData(repo);
  return (
    <div className={s.card}>
      <div className={s.image}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill />
      </div>
      <div className={s.content}>
        <Heading size="medium" theme="dark" className={s.title} tag="h3">
          {title}
        </Heading>
        <Text ellipsis size="small" theme="dark" className={s.subtitle}>
          {githubData.description}
        </Text>
        <div className={s.actions}>
          <Tag color="background-base" className={s.status}>
            {status}
          </Tag>

          <div className={s.stars}>
            <Icon source="/assets/octicons/star-24.svg" theme="dark" />
            {githubData.stargazers_count}
          </div>

          <div className={s.forks}>
            <Icon source="/assets/octicons/repo-forked-24.svg" theme="dark" />
            {githubData.forks}
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          className={s["link-overlay"]}
          aria-hidden
          href={githubData.html_url}
          tabIndex={-1}
        />
        <LinkPure href={githubData.html_url} theme="dark" className={s.link}>
          Learn more
        </LinkPure>
      </div>
    </div>
  );
};
