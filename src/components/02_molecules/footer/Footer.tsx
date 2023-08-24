/* eslint-disable react/require-default-props */
import Link from "next/link";
import {
  PDivider,
  PLink,
  PLinkPure,
  PText,
} from "@porsche-design-system/components-react/ssr";
import s from "./footer.module.scss";
import { Textblock } from "../textblock/Textblock";
import { linkSocial, linkNotice } from "../../../types/general";
import WLTP from "./WLTP.mdx";

export const Footer: React.FC = () => {
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
      url: "https://www.porsche.com/international/faq/",
      name: "FAQ",
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
      url: "/legal-notice",
      name: "Legal notice",
    },
    {
      url: "/privacy",
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
        <PText size="large" theme="dark">
          Porsche Company
        </PText>
        <ul className={s.content} id={s["company-links"]}>
          {links.map((link) => (
            <li key={link.url}>
              <PLinkPure theme="dark" icon="none">
                <Link href={{ pathname: link.url }}>{link.name}</Link>
              </PLinkPure>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.middle}>
        <PText size="large" theme="dark">
          Contact
        </PText>
        <div className={s.content}>
          <PText theme="dark">Do you have any questions?</PText>

          <PLink
            href="mailto:open_source_office@porsche.de"
            theme="dark"
            variant="secondary"
          >
            Contact Us
          </PLink>
        </div>
      </div>
      <div className={s.right}>
        <PText size="large" theme="dark">
          Social Media
        </PText>
        <div className={s.content}>
          <PText theme="dark">Get in touch with us on social media.</PText>

          <ul>
            {linksSocial.map((link) => (
              <li className={s.inline} key={link.url}>
                <PLink
                  href={link.url}
                  theme="dark"
                  variant="secondary"
                  icon={link.icon}
                  hideLabel
                  className={s.content}
                >
                  {link.name}
                </PLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PDivider className={s.divider} theme="dark" />
      <div className={s.notice}>
        <div className={s.linkBar}>
          © 2023 Dr. Ing. h.c. F. Porsche AG.{" "}
          {linksNotice.map((link) => (
            <PLinkPure key={link.url} theme="dark" icon="none" underline>
              <Link href={{ pathname: link.url }}>{link.name}.</Link>
            </PLinkPure>
          ))}
        </div>
        <Textblock id={s.wltp}>
          <WLTP />
        </Textblock>
      </div>
      <div className={s["made-with"]}>
        Made with{" "}
        <PLinkPure theme="dark" icon="none">
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
        </PLinkPure>{" "}
        and{" "}
        <PLinkPure theme="dark" icon="none">
          <Link
            href={{
              pathname: "https://designsystem.porsche.com/latest/",
            }}
            target="_blank"
            rel="noreferrer"
          >
            Porsche Design System
          </Link>
        </PLinkPure>
      </div>
    </footer>
  );
};
