import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import {
  PDisplay,
  PHeading,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./heroSection.module.scss";
import {
  ArtDirectionImageData,
  isArtDirectionAsset,
} from "../../../utils/imageHelpers/isArtDirectionAsset";
import { ArtDirectionImage } from "../../01_atoms/artDirectionImage/ArtDirectionImage";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc: string | StaticImageData | ArtDirectionImageData;
  imageAlt: string;
  position?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  position = "right center",
}) => {
  return (
    <div className={s["hero-container"]}>
      <div className={s["background-image-container"]}>
        {isArtDirectionAsset(imageSrc) ? (
          <ArtDirectionImage
            src={imageSrc}
            alt={imageAlt}
            className={s["hero-image"]}
            placeholder="blur"
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: position }}
          />
        ) : (
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
        )}
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
