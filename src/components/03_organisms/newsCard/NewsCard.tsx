import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
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
    <div>
      <LinkTile label="Read more" compact="true" description={title} href={url}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill placeholder="empty" />
      </LinkTile>
    </div>
  );
};
