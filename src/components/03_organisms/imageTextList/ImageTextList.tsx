import { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import s from "./imageTextList.module.scss";

import { Section } from "../../02_molecules/section/section";

interface ImageTextListProps {
  list: {
    description?: React.ReactNode;
    imageSrc: string | StaticImageData;
  }[];
}
export const ImageTextList: React.FC<ImageTextListProps> = ({ list }) => {
  return (
    <>
      {list.map((item, index) => (
        <Section className={s.imageTextList}>
          <div className={`${s.image} ${index % 2 === 0 ? "" : s.left}`}>
            <ExportedImage
              src={item.imageSrc}
              alt=""
              fill
              placeholder="empty"
            />
          </div>
          {/* TODO render mdx content? */}
          <div className={`${s.description} ${index % 2 === 0 ? "" : s.left}`}>
            {item.description}
          </div>
        </Section>
      ))}
    </>
  );
};
