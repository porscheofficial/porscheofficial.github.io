import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./heroSection.module.scss";
import { Display } from "../../01_atoms/Display";
import { Heading } from "../../01_atoms/Heading";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
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
        <Heading
          size="medium"
          align="center"
          theme="dark"
          className={s.subtitle}
        >
          {subtitle}
        </Heading>
        <Display
          size="medium"
          align="center"
          theme="dark"
          tag="h1"
          className={s.title}
        >
          {title}
        </Display>
      </div>
    </div>
  );
};
