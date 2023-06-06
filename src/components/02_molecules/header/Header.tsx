/* eslint-disable react/require-default-props */
import Link from "next/link";
import s from "./header.module.scss";
import { Wordmark } from "../../01_atoms/Wordmark";
import { Crest } from "../../01_atoms/Marquee";
import { Navigation } from "../navigation/Navigation";

export interface HeaderProps {
  logo?: JSX.Element;
}

export const Header = ({ logo }: HeaderProps): JSX.Element => {
  return (
    <header className={s["header-container"]}>
      <div className={s["logo-container"]}>
        <Link className={s["link-container"]} href="/">
          {logo ?? (
            <>
              <Wordmark theme="dark" size="small" />
              <Crest />
            </>
          )}
        </Link>
      </div>

      <Navigation />
    </header>
  );
};
