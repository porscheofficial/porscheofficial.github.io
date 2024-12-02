"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { compareDesc } from "date-fns";
import { usePathname } from "next/navigation";
import { allBlogs, allDocs } from "contentlayer/generated";
import {
  type FlyoutMultilevelUpdateEventDetail,
  PButtonPure,
  PFlyoutMultilevel,
  PFlyoutMultilevelItem,
  PLinkPure,
  PLinkTile,
} from "@porsche-design-system/components-react/ssr";
import ExportedImage from "next-image-export-optimizer";
import s from "./navigation.module.scss";

export interface NavigationProps {
  jobsCounter?: string;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [
    flyoutNavigationActiveIdentifier,
    setFlyoutNavigationActiveIdentifier,
  ] = useState<string>();

  const onOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const onDismiss = useCallback(() => {
    setIsMenuOpen(false);
    setFlyoutNavigationActiveIdentifier(undefined);
  }, []);
  const onUpdate = useCallback(
    (e: CustomEvent<FlyoutMultilevelUpdateEventDetail>) =>
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
  ];

  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const firstDoc = posts[0];
  const otherDocs = posts.slice(1, posts.length);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className={s["menu-container"]}>
      <PButtonPure icon="menu-lines" theme="dark" onClick={() => onOpen()}>
        Menu
      </PButtonPure>
      <PFlyoutMultilevel
        open={isMenuOpen}
        activeIdentifier={flyoutNavigationActiveIdentifier}
        onDismiss={onDismiss}
        onUpdate={onUpdate}
      >
        {homeLinks.map((link) => (
          <PLinkPure
            className={s.navLink}
            size="medium"
            alignLabel="start"
            icon="none"
            stretch
            tabIndex={0}
            key={link.name}
          >
            <Link
              href={{ pathname: link.url, hash: link.hash }}
              onClick={onDismiss}
            >
              {link.name}
            </Link>
          </PLinkPure>
        ))}
        <PFlyoutMultilevelItem
          identifier="blog"
          label="Contributor Stories"
          key="blog"
        >
          <PLinkTile
            href={firstDoc.slug}
            label={firstDoc.title}
            description={firstDoc.title}
            size="default"
            compact
            className={s.navLinkImage}
          >
            <ExportedImage
              src={firstDoc.image}
              alt={firstDoc.title}
              fill
              placeholder="blur"
              sizes="(max-width: 759px) 100vw, 50vw"
            />
          </PLinkTile>
          <h3>Further Stories</h3>
          {otherDocs.map((link) => (
            <Link
              href={{ pathname: link.slug }}
              onClick={onDismiss}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </PFlyoutMultilevelItem>
        <PFlyoutMultilevelItem
          identifier="documentation"
          label="Documentation"
          key="docs"
        >
          {allDocs.map((link) => (
            <Link
              href={{ pathname: link.slug }}
              onClick={onDismiss}
              key={link.title}
            >
              {link.title}
            </Link>
          ))}
        </PFlyoutMultilevelItem>
      </PFlyoutMultilevel>
    </div>
  );
};
