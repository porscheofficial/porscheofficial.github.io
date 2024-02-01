import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import {
  PHeading,
  PIcon,
  PLinkPure,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./projectCard.module.scss";

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
          <PIcon source="/assets/octicons/star-24.svg" theme="dark" />
          {githubData.stargazers_count}
        </div>
        <div className={s.forks}>
          <PIcon source="/assets/octicons/repo-forked-24.svg" theme="dark" />
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
  const githubData: GithubResponse | null =
    repo.includes("https://github.com/") && !repo.includes("search?q=")
      ? await getGitHubData(repo.split("https://github.com/")[1])
      : null;
  return (
    <div className={s.card}>
      <div className={s.image}>
        <ExportedImage
          src={imageSrc}
          alt={imageAlt}
          placeholder="blur"
          sizes="33w"
          fill
        />
      </div>
      <div className={s.content}>
        <PText theme="dark" size="x-small" className={s.status}>
          {status}
        </PText>
        <PHeading
          ellipsis
          size="medium"
          theme="dark"
          className={s.title}
          tag="h3"
        >
          {title}
        </PHeading>
        <PText ellipsis size="small" theme="dark" className={s.subtitle}>
          {githubData !== null ? githubData.description : description}
        </PText>
        <div className={s.actions}>{renderGitHubStats(githubData)}</div>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a
          className={s["link-overlay"]}
          aria-hidden
          href={repo}
          tabIndex={-1}
        />
        <PLinkPure href={repo} theme="dark" className={s.link}>
          Learn more
        </PLinkPure>
      </div>
    </div>
  );
};
