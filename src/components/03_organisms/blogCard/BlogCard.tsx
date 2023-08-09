import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./blogCard.module.scss";
import { Text } from "../../01_atoms/Text";
import { Heading } from "../../01_atoms/Heading";
import { LinkPure } from "../../01_atoms/LinkPure";

export interface BlogCardProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  url,
}) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill placeholder="empty" />
      </div>
      <div className={s.content}>
        <Heading
          ellipsis
          size="medium"
          theme="dark"
          className={s.title}
          tag="h3"
        >
          {title}
        </Heading>
        <Text ellipsis size="small" theme="dark" className={s.description}>
          {description}
        </Text>

        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className={s["link-overlay"]} aria-hidden href={url} tabIndex={-1} />
        <LinkPure href={url} theme="dark" className={s.link}>
          Learn more
        </LinkPure>
      </div>
    </div>
  );
};
