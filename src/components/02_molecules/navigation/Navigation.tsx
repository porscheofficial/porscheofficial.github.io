"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import s from "./navigation.module.scss";
import { BurgerMenu } from "../../01_atoms/BurgerMenu";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Flyout } from "../../01_atoms/Flyout";

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const onOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const onDismiss = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const pathname = usePathname();

  const links = [
    {
      url: "https://github.com/porscheofficial",
      name: "GitHub",
    },
    {
      url: "/doc",
      name: "Documentation",
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={s["menu-container"]}>
      <BurgerMenu onClick={() => onOpen()} />
      <Flyout open={isMenuOpen} position="left" onDismiss={onDismiss}>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.name}>
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
      </Flyout>
    </div>
  );
};
