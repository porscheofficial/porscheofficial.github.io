import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./heroSection.module.scss";
import { Text } from "../../01_atoms/Text";
import { Display } from "../../01_atoms/Display";

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
    <section className={s["hero-container"]}>
      <div className={s["background-image-container"]}>
        <ExportedImage
          className={s["hero-image"]}
          src={imageSrc}
          alt={imageAlt}
          fill
        />
        <div className={s["image-overlay"]} />
      </div>
      <Text size="small" align="center" theme="dark" className={s.subtitle}>
        {subtitle}
      </Text>
      <Display
        size="medium"
        align="center"
        theme="dark"
        tag="h1"
        className={s.title}
      >
        {title}
      </Display>
    </section>
  );
};
