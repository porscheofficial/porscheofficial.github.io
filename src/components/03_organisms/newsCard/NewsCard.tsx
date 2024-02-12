import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { PLinkTile } from "@porsche-design-system/components-react/ssr";
import s from "./newsCard.module.scss";

export interface NewsCardProps {
  title: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  title,
  imageSrc,
  imageAlt,
  url,
}) => {
  return (
    <PLinkTile
      label="Read more"
      compact="true"
      description={title}
      href={url}
      className={s.link}
    >
      <ExportedImage
        src={imageSrc}
        alt={imageAlt}
        fill
        placeholder="blur"
        sizes="(min-width: 760px) 33vw, 100vw"
      />
    </PLinkTile>
  );
};
