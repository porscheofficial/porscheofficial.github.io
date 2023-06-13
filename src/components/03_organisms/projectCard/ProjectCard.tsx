import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./projectCard.module.scss";
import { Tag } from "../../01_atoms/Tag";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Heading } from "../../01_atoms/Heading";
import { Text } from "../../01_atoms/Text";
import { Icon } from "../../01_atoms/Icon";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  url: string;
  status: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  stars: number;
  fork: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  stars,
  url,
  status,
  fork,
}) => {
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
          {subtitle}
        </Text>
        <div className={s.actions}>
          <Tag color="background-base" className={s.status}>
            {status}
          </Tag>

          <div className={s.stars}>
            <Icon source="/assets/octicons/star-24.svg" theme="dark" />
            {stars}
          </div>

          <div className={s.forks}>
            <Icon source="/assets/octicons/repo-forked-24.svg" theme="dark" />
            {fork}
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className={s["link-overlay"]} aria-hidden href={url} tabIndex={-1} />
        <LinkPure href={url} theme="dark" className={s.link}>
          Learn more
        </LinkPure>
      </div>
    </div>
  );
};
