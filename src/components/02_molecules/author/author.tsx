import { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import {
  PHeading,
  PIcon,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./author.module.scss";
import { Section } from "../section/section";

interface AuthorProps {
  name: string;
  description?: string;
  slug?: string;
  imageSrc?: string | StaticImageData;
}
export const Author: React.FC<AuthorProps> = ({
  name,
  description,
  slug,
  imageSrc,
}) => {
  const Component = slug ? Link : "div";
  return (
    <Section>
      <Component
        className={`${s.author} ${slug ? s.link : ""}`}
        href={{ pathname: slug }}
        target="_blank"
      >
        {!!imageSrc && (
          <span className={s.image}>
            <ExportedImage src={imageSrc} alt="" fill placeholder="empty" />
          </span>
        )}

        <span className={s.content}>
          <PText ellipsis size="medium" theme="dark" className={s.title}>
            {name}
          </PText>

          <PText theme="dark" className={s.description}>
            {description}
          </PText>
        </span>
        {!!slug && <PIcon theme="dark" className={s.icon} />}
      </Component>
    </Section>
  );
};
