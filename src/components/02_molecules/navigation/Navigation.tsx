"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AccordionUpdateEvent } from "@porsche-design-system/components-react";
import { allDocs } from "contentlayer/generated";
import {
  PAccordion,
  PButtonGroup,
  PButtonPure,
  PFlyout,
  PLink,
  PLinkPure,
} from "@porsche-design-system/components-react/ssr";
import s from "./navigation.module.scss";

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
    [],
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
    {
      url: "/blog",
      name: "Contributor Stories",
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={s["menu-container"]}>
      <PButtonPure icon="menu-lines" theme="dark" onClick={() => onOpen()}>
        Menu
      </PButtonPure>
      <PFlyout open={isMenuOpen} position="left" onDismiss={onDismiss}>
        <ul>
          {homeLinks.map((link) => (
            <li key={link.name}>
              <PLinkPure
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
              </PLinkPure>
            </li>
          ))}
        </ul>
        <PAccordion
          className={s.docsAccordion}
          theme="light"
          size="medium"
          compact
          open={isDocsAccordionOpen}
          onUpdate={onDocsAccordionUpdate}
        >
          <span slot="heading">Documentation</span>
          {allDocs.map((link) => (
            <PLinkPure
              key={link.slug}
              className={s.navLink}
              size="medium"
              alignLabel="left"
              icon="none"
              stretch
              tabIndex={0}
            >
              <Link href={{ pathname: link.slug }} onClick={onDismiss}>
                {link.title}
              </Link>
            </PLinkPure>
          ))}
        </PAccordion>
        <div slot="footer">
          <PButtonGroup>
            <PLink
              href="https://jobs.porsche.com/index.php?ac=search_result&search_criterion_keyword%5B%5D=Open%20Source"
              variant="secondary"
              theme="light"
            >
              FOSS Jobs <span className={s["job-counter"]}>{jobsCounter}</span>
            </PLink>
            <PLink
              href="https://github.com/porscheofficial"
              variant="secondary"
              theme="light"
              iconSource="/assets/octicons/mark-github.svg"
              hideLabel
            >
              GitHub
            </PLink>
          </PButtonGroup>
        </div>
      </PFlyout>
    </div>
  );
};
