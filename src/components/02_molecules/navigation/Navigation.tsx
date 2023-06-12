"use client";
/* eslint-disable react/require-default-props */
import { useState } from "react";
import Link from "next/link";
import ReactFocusLock from "react-focus-lock";
import { useKeyPressEvent } from "react-use";
import s from "./navigation.module.scss";
import { BurgerMenu } from "../../01_atoms/BurgerMenu";
import { Button } from "../../01_atoms/Button";
import { LinkPure } from "../../01_atoms/LinkPure";
import { ButtonPure } from "../../01_atoms/ButtonPure";

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const links = [
    {
      url: "https://github.com/porscheofficial",
      name: "GitHub",
    },
  ];

  useKeyPressEvent("Escape", () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <>
      <div className={s["menu-container"]}>
        <BurgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <ReactFocusLock
          as="div"
          disabled={!isMenuOpen}
          className={`${s.drawer} ${isMenuOpen ? s.active : ""}`}
          aria-label="navigation modal dialog"
        >
          {isMenuOpen && (
            <>
              <ButtonPure
                className={s["btn-close-mobile"]}
                hideLabel
                icon="close"
                onClick={() => setIsMenuOpen(false)}
              >
                Close
              </ButtonPure>
              <Button
                className={s["btn-close"]}
                hideLabel
                icon="close"
                onClick={() => setIsMenuOpen(false)}
                variant="secondary"
                theme="dark"
              >
                Close
              </Button>
            </>
          )}

          <div className={s.content}>
            <nav>
              <ul>
                {links.map((link) => (
                  <li className={s.item} key={link.name}>
                    <LinkPure
                      size="medium"
                      alignLabel="left"
                      icon="arrow-head-right"
                      stretch
                      tabIndex={0}
                    >
                      <Link href={{ pathname: link.url }}>{link.name}</Link>
                    </LinkPure>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ReactFocusLock>
      </div>
      <div className={`${s.backdrop} ${isMenuOpen ? s.active : ""}`} />
    </>
  );
};
