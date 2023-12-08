"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allDocs } from "contentlayer/generated";
import {
  type FlyoutNavigationUpdateEvent,
  PButtonGroup,
  PButtonPure,
  PFlyoutNavigation,
  PFlyoutNavigationItem,
  PLink,
  PLinkPure,
} from "@porsche-design-system/components-react/ssr";
import s from "./navigation.module.scss";

export interface NavigationProps {
  jobsCounter?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ jobsCounter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [
    flyoutNavigationActiveIdentifier,
    setFlyoutNavigationActiveIdentifier,
  ] = useState<string>("documentation");

  const onOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const onDismiss = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const onUpdate = useCallback(
    (e: CustomEvent<FlyoutNavigationUpdateEvent>) =>
      setFlyoutNavigationActiveIdentifier(e.detail.activeIdentifier),
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
      <PFlyoutNavigation
        open={isMenuOpen}
        activeIdentifier={flyoutNavigationActiveIdentifier}
        onDismiss={onDismiss}
        onUpdate={onUpdate}
      >
        {homeLinks.map((link) => (
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
        ))}
        <PFlyoutNavigationItem identifier="documentation" label="Documentation">
          <h3>Documentation</h3>
          {allDocs.map((link) => (
            <Link href={{ pathname: link.slug }} onClick={onDismiss}>
              {link.title}
            </Link>
          ))}
        </PFlyoutNavigationItem>
        <PButtonGroup className={s["button-group"]}>
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
      </PFlyoutNavigation>
    </div>
  );
};
