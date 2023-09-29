import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { PHeading, PText } from "@porsche-design-system/components-react/ssr";
import s from "./imageText.module.scss";

import { Section } from "../../02_molecules/section/section";

interface ImageTextProps {
  children?: React.ReactNode;
  title?: string;
  left?: boolean;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}
export const ImageText: React.FC<ImageTextProps> = ({
  children,
  title,
  left,
  imageSrc,
  imageAlt,
}) => {
  return (
    <Section className={s.imageTextList}>
      <div className={`${s.description} ${left ? "left" : ""}`}>
        <PHeading theme="dark" size="medium" tag="h2">
          {title}
        </PHeading>
        <PText theme="dark">{children}</PText>
      </div>
      <div className={`${s.image} ${left ? "left" : ""}`}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill />
      </div>
    </Section>
  );
};
