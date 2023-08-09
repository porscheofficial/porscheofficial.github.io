import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./featureCard.module.scss";
import { Text } from "../../01_atoms/Text";
import { Heading } from "../../01_atoms/Heading";
import { LinkButton } from "../../01_atoms/LinkButton";

export interface FeatureCardProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
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
        <Heading size="x-large" tag="h3">
          {title}
        </Heading>
        <Text size="small" className={s.description}>
          {description}
        </Text>

        <LinkButton href={url} className={s.link}>
          Learn more
        </LinkButton>
      </div>
    </div>
  );
};
