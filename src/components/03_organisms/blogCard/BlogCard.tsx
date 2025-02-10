import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { format, parseISO } from "date-fns";
import {
  PHeading,
  PLinkPure,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./blogCard.module.scss";

export interface BlogCardProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  time?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  time,
  url,
}) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <ExportedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1300px) 33vw, (min-width: 760px) 50vw, 100vw"
        />
      </div>
      <div className={s.content}>
        <PHeading
          ellipsis
          size="medium"
          theme="dark"
          className={s.title}
          tag="h3"
        >
          {title}
        </PHeading>
        {time && (
          <PText tag="span" size="x-small" theme="dark" className={s.description}>
            {format(parseISO(time), "yyyy")}
          </PText>
        )}
        <PText ellipsis size="small" theme="dark" className={s.description}>
          {description}
        </PText>

        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
        <a className={s["link-overlay"]} aria-hidden href={url} tabIndex={-1} />
        <PLinkPure href={url} theme="dark" className={s.link}>
          Learn more
        </PLinkPure>
      </div>
    </div>
  );
};
