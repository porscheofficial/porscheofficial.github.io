import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./heroSection.module.scss";
import { Display } from "../../01_atoms/Display";
import { Heading } from "../../01_atoms/Heading";
import { Text } from "../../01_atoms/Text";

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
        {description && (
          <Text
            size="medium"
            align="center"
            theme="dark"
            className={s.description}
          >
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};
