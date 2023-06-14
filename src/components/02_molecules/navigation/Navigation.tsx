"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "../../01_atoms/LinkButton";
import { ButtonGroup } from "../../01_atoms/ButtonGroup";
import s from "./navigation.module.scss";
import { BurgerMenu } from "../../01_atoms/BurgerMenu";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Flyout } from "../../01_atoms/Flyout";

export interface NavigationProps {
  jobsCounter?: string;
}

export const Navigation = ({ jobsCounter }: NavigationProps): JSX.Element => {
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
      url: "/",
      name: "FOSS Movement",
    },
    {
      url: "/",
      name: "Projects",
    },
    {
      url: "/",
      name: "News & Media",
    },
    {
      url: "/docs",
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
        <div slot="footer">
          <ButtonGroup>
            <LinkButton
              href="https://jobs.porsche.com/index.php?ac=search_result&search_criterion_keyword%5B%5D=Open%20Source"
              variant="secondary"
              theme="light"
            >
              FOSS Jobs <span className={s["job-counter"]}>{jobsCounter}</span>
            </LinkButton>
            <LinkButton
              href="https://github.com/porscheofficial"
              variant="secondary"
              theme="light"
              iconSource="/assets/octicons/mark-github.svg"
              hideLabel
            >
              GitHub
            </LinkButton>
          </ButtonGroup>
        </div>
      </Flyout>
    </div>
  );
};
