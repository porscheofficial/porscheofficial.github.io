import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import {
  PDisplay,
  PHeading,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./heroSection.module.scss";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={s["hero-container"]}>
      <div className={s["background-image-container"]}>
        <ExportedImage
          className={s["hero-image"]}
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
        />
        <div className={s["image-overlay"]} />
      </div>
      <div className={s["title-container"]}>
        <PHeading
          size="medium"
          align="center"
          theme="dark"
          className={s.subtitle}
        >
          {subtitle}
        </PHeading>
        <PDisplay
          size="medium"
          align="center"
          theme="dark"
          tag="h1"
          className={s.title}
        >
          {title}
        </PDisplay>
        {description && (
          <PText
            size="medium"
            align="center"
            theme="dark"
            className={s.description}
          >
            {description}
          </PText>
        )}
      </div>
    </div>
  );
};
