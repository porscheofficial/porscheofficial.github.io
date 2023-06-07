import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./card.module.scss";
import { Tag } from "../../01_atoms/Tag";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Heading } from "../../01_atoms/Heading";
import { Text } from "../../01_atoms/Text";
import { Icon } from "../../01_atoms/Icon";

export interface CardProps {
  title: string;
  subtitle: string;
  url: string;
  status: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  stars: number;
  fork: number;
}

export const Card: React.FC<CardProps> = ({
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
        <Text size="small" theme="dark" className={s.subtitle}>
          {subtitle}
        </Text>
        <div className={s.actions}>
          <Tag color="background-base">{status}</Tag>

          <div>
            <Icon name="star" theme="dark" />
            {stars}
          </div>

          <div>
            <Icon name="share" theme="dark" />
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
