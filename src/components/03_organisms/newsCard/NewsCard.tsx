import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { PLinkTile } from "@porsche-design-system/components-react/ssr";

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
    <PLinkTile label="Read more" compact="true" description={title} href={url}>
      <ExportedImage src={imageSrc} alt={imageAlt} fill placeholder="empty" />
    </PLinkTile>
  );
};
