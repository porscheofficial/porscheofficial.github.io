/* eslint-disable react/require-default-props */
import c from "classnames";
import { Children } from "react";
import s from "./header.module.scss";
import { HeaderLogo } from "./HeaderLogo";

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  logo?: JSX.Element;
  children: React.ReactNode;
}

export const Header = ({
  logoSrc,
  logoAlt,
  logoHref,
  logo,
  children,
}: HeaderProps): JSX.Element => {
  let logoEl: JSX.Element;
  const logoElDefault = <HeaderLogo src={logoSrc} alt={logoAlt} />;
  if (logo) {
    logoEl = logo;
  } else if (logoHref) {
    logoEl = <a href={logoHref}>{logoElDefault}</a>;
  } else {
    logoEl = logoElDefault;
  }

  const withSplitLayout = Children.count(children) > 0;

  return (
    <header
      className={c(s["header-container"], {
        [s["with-split-layout"]]: withSplitLayout,
      })}>
      {logoEl}
      {children && (
        <div className={s["secondary-header-content"]}>{children}</div>
      )}
    </header>
  );
};
