import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import {
  PDisplay,
  PHeading,
} from "@porsche-design-system/components-react/ssr";
import s from "./heroSection.module.scss";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  position?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  position = "right center",
}) => {
  return (
    <div className={s["hero-container"]}>
      <div className={s["background-image-container"]}>
        <ExportedImage
          className={s["hero-image"]}
          style={{ objectPosition: position }}
          src={imageSrc}
          alt={imageAlt}
          placeholder="blur"
          sizes="100vw"
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
      </div>
    </div>
  );
};
