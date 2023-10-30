import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { PHeading } from "@porsche-design-system/components-react/ssr";
import s from "./imageText.module.scss";

import { Section } from "../../02_molecules/section/section";

interface ImageTextProps {
  children?: React.ReactNode;
  title?: string;
  left?: boolean;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  theme: "dark" | "light" | undefined;
}
export const ImageText: React.FC<ImageTextProps> = ({
  children,
  title,
  left,
  imageSrc,
  imageAlt,
  theme,
}) => {
  return (
    <Section className={s.imageTextList} spacing="xxl">
      <div className={`${s.description} ${left ? "left" : ""}`}>
        {title && (
          <PHeading theme={theme} size="medium" tag="h2">
            {title}
          </PHeading>
        )}
        {children}
      </div>
      <div className={`${s.image} ${left ? "left" : ""}`}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill />
      </div>
    </Section>
  );
};
