/* eslint-disable react/require-default-props */
/* eslint-disable @next/next/no-img-element */
import s from "./header.module.scss";

export interface HeaderLogoProps {
  src?: string;
  alt?: string;
}

export const HeaderLogo = ({ src, alt }: HeaderLogoProps): JSX.Element => (
  <img className={s["header-logo"]} src={src} alt={alt} />
);
