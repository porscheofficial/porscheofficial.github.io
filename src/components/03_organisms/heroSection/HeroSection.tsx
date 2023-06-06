import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./heroSection.module.scss";
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
      <Heading
        size={{ base: "small", s: "medium" }}
        align="center"
        theme="dark"
        tag="h5"
        className={s.subtitle}
      >
        {subtitle}
      </Heading>
      <Heading
        size="xxl"
        align="center"
        theme="dark"
        tag="h1"
        className={s.title}
      >
        {title}
      </Heading>
    </section>
  );
};
