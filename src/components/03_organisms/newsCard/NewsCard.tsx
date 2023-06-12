import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./newsCard.module.scss";
import { LinkTile } from "../../01_atoms/LinkTile";

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
    <div className={s.card}>
      <LinkTile
        label="Read more"
        description={title}
        href={url}
      >
        <ExportedImage src={imageSrc} alt={imageAlt} fill />
      </LinkTile>
    </div>
  );
};
