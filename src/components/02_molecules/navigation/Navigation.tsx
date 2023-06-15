"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AccordionUpdateEvent } from "@porsche-design-system/components-react";
import { Accordion } from "../../01_atoms/Accordion";
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
  const [isDocsAccordionOpen, setDocsAccordionOpen] = useState<boolean>(false);

  const onOpen = useCallback(() => {
    setIsMenuOpen(true);
    setDocsAccordionOpen(false);
  }, []);
  const onDismiss = useCallback(() => {
    setIsMenuOpen(false);
    setDocsAccordionOpen(false);
  }, []);
  const onDocsAccordionUpdate = useCallback(
    (e: CustomEvent<AccordionUpdateEvent>) => {
      setDocsAccordionOpen(e.detail.open);
    },
    []
  );
  const pathname = usePathname();

  const homeLinks = [
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
  ];

  const docsLinks = [
    {
      url: "/docs",
      name: "Contributing Upstream",
    },
    {
      url: "/docs",
      name: "Publishing FOSS",
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
          {homeLinks.map((link) => (
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
        <Accordion
          className={s.docsAccordion}
          theme="light"
          heading="Documentation"
          size="medium"
          compact
          open={isDocsAccordionOpen}
          onUpdate={onDocsAccordionUpdate}
        >
          {docsLinks.map((link) => (
            <LinkPure
              size="medium"
              alignLabel="left"
              icon="arrow-head-right"
              stretch
              tabIndex={0}
            >
              <Link href={{ pathname: link.url }}>{link.name}</Link>
            </LinkPure>
          ))}
        </Accordion>
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
