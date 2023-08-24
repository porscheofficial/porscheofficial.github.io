import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./projectCard.module.scss";
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

export const renderGitHubStats = (
  githubData: GithubResponse | null,
): React.JSX.Element | null => {
  if (githubData !== null) {
    return (
      <>
        <div className={s.stars}>
          <Icon source="/assets/octicons/star-24.svg" theme="dark" />
          {githubData.stargazers_count}
        </div>
        <div className={s.forks}>
          <Icon source="/assets/octicons/repo-forked-24.svg" theme="dark" />
          {githubData.forks}
        </div>
      </>
    );
  }
  return null;
};

export interface ProjectCardProps {
  title: string;
  repo: string;
  description: string;
  status: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = async ({
  title,
  repo,
  description,
  imageSrc,
  imageAlt,
  status,
}) => {
  const githubData: GithubResponse | null = repo.includes("https://github.com/")
    ? await getGitHubData(repo.split("https://github.com/")[1])
    : null;
  return (
    <div className={s.card}>
      <div className={s.image}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill placeholder="empty" />
      </div>
      <div className={s.content}>
        <Text theme="dark" size="x-small" className={s.status}>
          {status}
        </Text>
        <Heading
          ellipsis
          size="medium"
          theme="dark"
          className={s.title}
          tag="h3"
        >
          {title}
        </Heading>
        <Text ellipsis size="small" theme="dark" className={s.subtitle}>
          {githubData !== null ? githubData.description : description}
        </Text>
        <div className={s.actions}>{renderGitHubStats(githubData)}</div>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          className={s["link-overlay"]}
          aria-hidden
          href={repo}
          tabIndex={-1}
        />
        <LinkPure href={repo} theme="dark" className={s.link}>
          Learn more
        </LinkPure>
      </div>
    </div>
  );
};
