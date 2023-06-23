import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import Link from "next/link";
import s from "./membership.module.scss";
import { Text } from "../../01_atoms/Text";

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
        <Link href={{ pathname: url }} aria-label={title}>
          <ExportedImage src={imageSrc} alt={imageAlt} fill />
        </Link>
      </div>
      <div className={s.description}>
        <Text theme="dark" size="small">
          {description}
        </Text>
      </div>
    </>
  );
};
