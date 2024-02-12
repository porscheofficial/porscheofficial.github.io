import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import {
  PHeading,
  PLink,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./featureCard.module.scss";

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
        <ExportedImage
          src={imageSrc}
          alt={imageAlt}
          fill
          placeholder="blur"
          sizes="(min-width: 1000px) 50vw, 100vw"
        />
      </div>
      <div className={s.content}>
        <PHeading size="x-large" tag="h3">
          {title}
        </PHeading>
        <PText size="small" className={s.description}>
          {description}
        </PText>

        <PLink href={url} className={s.link}>
          Learn more
        </PLink>
      </div>
    </div>
  );
};
