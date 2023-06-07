/* eslint-disable react/require-default-props */
import Link from "next/link";
import s from "./footer.module.scss";
import { Text } from "../../01_atoms/Text";
import { LinkPure } from "../../01_atoms/LinkPure";
import { LinkButton } from "../../01_atoms/LinkButton";
import { linkSocial } from "../../../types/general";
import { Icon } from "../../01_atoms/Icon";

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
      <div className={`${s.middle}`}>
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
        <Text theme="dark">Get in touch with us on social media.</Text>

        <ul className={s.content}>
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

      <div className={s["made-with"]}>
        <Icon
          name="arrow-double-right"
          theme="dark"
          color="notification-error"
        />
        Made with Free Open Source Software and{" "}
        <a
          href="https://designsystem.porsche.com/latest/about/introduction"
          target="_blank"
          rel="noreferrer"
        >
          Porsche Design System
        </a>
      </div>
    </footer>
  );
};
