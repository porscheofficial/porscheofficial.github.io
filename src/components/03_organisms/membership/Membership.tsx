import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import s from "./membership.module.scss";

export interface MembershipProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
}

export const Membership: React.FC<MembershipProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  title,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  url,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={s["membership-container"]}>
      <div className={s.logo}>
        <ExportedImage src={imageSrc} alt={imageAlt} fill />
      </div>
      <div className={s.description}>{description}</div>
    </div>
  );
};
