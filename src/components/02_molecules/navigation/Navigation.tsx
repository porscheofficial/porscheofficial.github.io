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

export const Navigation: React.FC<NavigationProps> = ({ jobsCounter }) => {
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
      hash: "foss-movement",
      name: "FOSS Movement",
    },
    {
      url: "/",
      hash: "projects",
      name: "Projects",
    },
    {
      url: "/",
      hash: "news",
      name: "News & Media",
    },
  ];

  const docsLinks = [
    {
      url: "/docs/contributing",
      name: "Contributing Upstream",
    },
    {
      url: "/docs/creating",
      name: "Creating FOSS",
    },
    {
      url: "/docs/cla",
      name: "Contributor License Agreement",
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
                className={s.navLink}
                size="medium"
                alignLabel="left"
                icon="arrow-head-right"
                stretch
                tabIndex={0}
              >
                <Link
                  href={{ pathname: link.url, hash: link.hash }}
                  onClick={onDismiss}
                >
                  {link.name}
                </Link>
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
              key={link.name}
              className={s.navLink}
              size="medium"
              alignLabel="left"
              icon="arrow-head-right"
              stretch
              tabIndex={0}
            >
              <Link href={{ pathname: link.url }} onClick={onDismiss}>
                {link.name}
              </Link>
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
