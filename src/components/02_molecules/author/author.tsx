import { StaticImageData } from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import s from "./author.module.scss";
import { Text } from "../../01_atoms/Text";
import { Heading } from "../../01_atoms/Heading";
import { Section } from "../section/section";
import { Icon } from "../../01_atoms/Icon";

interface AuthorProps {
  name: string;
  description?: string;
  slug?: string;
  imageSrc: string | StaticImageData;
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
        <span className={s.image}>
          <ExportedImage src={imageSrc} alt="" fill placeholder="empty" />
        </span>

        <span className={s.content}>
          <Heading
            ellipsis
            size="medium"
            theme="dark"
            className={s.title}
            tag="h3"
          >
            {name}
          </Heading>

          <Text theme="dark" className={s.description}>
            {description}
          </Text>
        </span>
        {slug && <Icon theme="dark" className={s.icon} />}
      </Component>
    </Section>
  );
};
