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
  PHeading,
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
        theme="light"
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
          <PHeading tag="h3" size="small">
            Further Stories
          </PHeading>
          {otherDocs.map((link) => (
            <PLinkPure
              href={link.slug}
              onClick={onDismiss}
              key={link.title}
              alignLabel="start"
              icon="none"
              stretch
              className={s.navSubLink}
            >
              {link.title}
            </PLinkPure>
          ))}
        </PFlyoutMultilevelItem>
        <PFlyoutMultilevelItem
          identifier="documentation"
          label="Documentation"
          key="docs"
        >
          {allDocs.map((link) => (
            <PLinkPure
              href={link.slug}
              onClick={onDismiss}
              key={link.title}
              alignLabel="start"
              icon="none"
              stretch
              className={s.navSubLink}
            >
              {link.title}
            </PLinkPure>
          ))}
        </PFlyoutMultilevelItem>
      </PFlyoutMultilevel>
    </div>
  );
};
