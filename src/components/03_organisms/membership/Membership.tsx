import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { PText } from "@porsche-design-system/components-react/ssr";
import s from "./membership.module.scss";

export interface MembershipProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const Membership: React.FC<MembershipProps> = ({
  title,
  description,
  url,
  imageSrc,
  imageAlt,
}) => {
  return (
    <>
      <div className={s.logo}>
        <Link href={{ pathname: url }} aria-label={title} className={s.link}>
          <ExportedImage
            src={imageSrc}
            alt={imageAlt}
            placeholder="blur"
            sizes="(min-width: 760px) 33vw, 100vw"
            fill
          />
        </Link>
      </div>
      <div className={s.description}>
        <PText theme="dark" size="small">
          {description}
        </PText>
      </div>
    </>
  );
};
