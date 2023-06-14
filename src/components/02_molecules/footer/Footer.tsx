"use client";

/* eslint-disable react/require-default-props */
import Link from "next/link";
import s from "./footer.module.scss";
import { Text } from "../../01_atoms/Text";
import { Divider } from "../../01_atoms/Divider";
import { LinkPure } from "../../01_atoms/LinkPure";
import { LinkButton } from "../../01_atoms/LinkButton";
import { Textblock } from "../textblock/Textblock";
import { linkSocial, linkNotice } from "../../../types/general";
import WLTP from "./WLTP.mdx";

export const Footer = (): JSX.Element => {
  const links = [
    {
      url: "https://investorrelations.porsche.com/en/",
      name: "Investors Relations",
    },
    {
      url: "https://www.porsche.com/international/aboutporsche/overview/",
      name: "At a Glance",
    },
    {
      url: "https://www.porsche.com/international/aboutporsche/jobs/",
      name: "Jobs & Careers",
    },
    {
      url: "https://newsroom.porsche.com/en.html",
      name: "Newsroom & Press",
    },
    {
      url: "https://www.porsche.com/international/aboutporsche/innovation/",
      name: "Innovation",
    },
    {
      url: "https://www.porsche.com/international/aboutporsche/75years/",
      name: "75 Years",
    },
  ];

  const linksSocial: linkSocial[] = [
    {
      url: "https://www.facebook.com/porsche/",
      name: "facebook",
      icon: "logo-facebook",
    },
    {
      url: "https://www.instagram.com/porsche/",
      name: "instagram",
      icon: "logo-instagram",
    },
    {
      url: "https://www.pinterest.com/porsche/",
      name: "pinterest",
      icon: "logo-pinterest",
    },
    {
      url: "https://www.youtube.com/user/Porsche/",
      name: "youtube",
      icon: "logo-youtube",
    },
    {
      url: "https://twitter.com/Porsche/",
      name: "twitter",
      icon: "logo-twitter",
    },
    {
      url: "https://www.linkedin.com/company/porsche-ag/",
      name: "linkedin",
      icon: "logo-linkedin",
    },
  ];

  const linksNotice: linkNotice[] = [
    {
      url: "https://www.porsche.com/international/legal-notice/",
      name: "Legal notice",
    },
    {
      url: "https://www.porsche.com/international/privacy/",
      name: "Privacy Policy",
    },
    {
      url: "https://www.porsche.com/international/fuel-consumption/",
      name: "Consumption/Emissions",
    },
    {
      url: "https://www.porsche.com/licenses",
      name: "Open Source Software Notice",
    },
    {
      url: "https://www.porsche.com/international/aboutporsche/overview/compliance/whistleblower-system/",
      name: "Whistleblower System",
    },
  ];

  return (
    <footer className={s.footer}>
      <div className={s.left}>
        <Text size="large" theme="dark">
          Porsche Company
        </Text>
        <ul className={s.content} id={s["company-links"]}>
          {links.map((link) => (
            <li>
              <LinkPure theme="dark" icon="none">
                <Link href={{ pathname: link.url }}>{link.name}</Link>
              </LinkPure>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.middle}>
        <Text size="large" theme="dark">
          Contact
        </Text>
        <div className={s.content}>
          <Text theme="dark">Do you have any questions?</Text>

          <LinkButton
            href="mailto:open_source_office@porsche.de"
            theme="dark"
            variant="secondary"
          >
            Contact Us
          </LinkButton>
        </div>
      </div>
      <div className={s.right}>
        <Text size="large" theme="dark">
          Social Media
        </Text>
        <div className={s.content}>
          <Text theme="dark">Get in touch with us on social media.</Text>

          <ul>
            {linksSocial.map((link) => (
              <li className={s.inline}>
                <LinkButton
                  href={link.url}
                  theme="dark"
                  variant="secondary"
                  icon={link.icon}
                  hideLabel
                  className={s.content}
                >
                  {link.name}
                </LinkButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Divider className={s.divider} theme="dark" />
      <div className={s.notice}>
        © 2023 Dr. Ing. h.c. F. Porsche AG.{" "}
        {linksNotice.map((link) => (
          <LinkPure theme="dark" icon="none" underline>
            <Link href={{ pathname: link.url }}>{link.name}.</Link>
          </LinkPure>
        ))}
        <Textblock id={s.wltp}>
          <WLTP />
        </Textblock>
      </div>
      <div className={s["made-with"]}>
        Made with{" "}
        <LinkPure theme="dark" icon="none">
          <Link
            href={{
              pathname:
                "https://github.com/porscheofficial/porscheofficial.github.io",
            }}
            target="_blank"
            rel="noreferrer"
          >
            Free Open Source Software
          </Link>
        </LinkPure>{" "}
        and{" "}
        <LinkPure theme="dark" icon="none">
          <Link
            href={{
              pathname:
                "https://designsystem.porsche.com/latest/about/introduction",
            }}
            target="_blank"
            rel="noreferrer"
          >
            Porsche Design System
          </Link>
        </LinkPure>
      </div>
    </footer>
  );
};
