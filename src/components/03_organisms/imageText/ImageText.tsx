import { StaticImageData } from "next/image";
import s from "./imageText.module.scss";

import { Section } from "../../02_molecules/section/section";

interface ImageTextProps {
  children?: React.ReactNode;
  imageSrc?: string | StaticImageData;
}
export const ImageText: React.FC<ImageTextProps> = ({ children }) => {
  return <Section className={s.imageTextList}>{children}</Section>;
};
