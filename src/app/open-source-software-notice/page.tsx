import React from "react";
import type { Metadata } from "next";
import styles from "../page.module.scss";

/* Metadata: block indexing & following (bot) */
export const metadata: Metadata = {
  title: "Open Source Software Notice",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
};

/* Types */
export interface Attachment {
  label: string; // e.g., "PDF", "HTML"
  href: string; // e.g., "/assets/ossn/conbox-ossn.pdf"
  external?: boolean; // open in new tab (default: true)
}

export interface LicenseRow {
  software: string;
  softwareHref?: string; // main link for the software cell
  vehicles: string; // e.g., "Taycan, 911"
  primalSop: string; // e.g., "CW 46/2025"
  attachments?: Attachment[];
}

export interface OssnProps {
  title: string;
  intro: string;
  rows: LicenseRow[];
  className: string; // required to satisfy react/require-default-props
}

/* Helper: classnames */
const cx = (...cls: (string | undefined | false)[]): string =>
  cls.filter(Boolean).join(" ");

/* Data records (edit or replace) */
/* This is a content block where user can add the software information */
/* The attachments should be part of /public/assests/ossn/<att_name> */
const DATA_RECORDS: LicenseRow[] = [
  {
    software: "ConBox_2020_RD",
    vehicles: "911, Taycan, Panamera, Cayenne",
    primalSop: "CW 25/2024",
    softwareHref: "/assets/ossn/ConBox_2020_RD.txt",
    /*
    attachments: [
      { label: "HTML", href: "/assets/ossn/conbox-ossn.html" },
      { label: "PDF", href: "/assets/ossn/conbox-ossn.pdf" },
    ],
    */
  },
  {
    software: "WWS",
    vehicles: "Macan, Panamera, Cayenne",
    primalSop: "CW 25/2023",
    softwareHref: "/assets/ossn/OSO-3667_WWS.txt",
    /*
    attachments: [
      { label: "HTML", href: "/assets/ossn/wws-ossn.html" },
      { label: "PDF", href: "/assets/ossn/wws-ossn.pdf" },
    ],
    */
  },
  {
    software: "OnboardDataCollector 2.0.58d",
    vehicles: "Macan",
    primalSop: "CW 49/2023",
    softwareHref: "/assets/ossn/OnboardDataCollector_2_0_58d.txt",
    /*
    attachments: [
      { label: "HTML", href: "/assets/ossn/OnboardDataCollector_2_0_58d.html" },
      { label: "PDF", href: "/assets/ossn/OnboardDataCollector_2_0_58d.pdf" },
    ],
    */
  },
  {
    software: "HCP5_P6/Autoedge Runtime",
    vehicles: "Macan",
    primalSop: "CW 49/2023",
    softwareHref: "/assets/ossn/HCP5_P6_Autoedge_Runtime.txt",
    /*
    attachments: [
      { label: "HTML", href: "/assets/ossn/HCP5_P6_Autoedge_Runtime.html" },
      { label: "PDF", href: "/assets/ossn/HCP5_P6_Autoedge_Runtime.pdf" },
    ],
    */
  },
];

/* Reuse table component */
const OssnTable = ({
  title,
  intro,
  rows,
  className,
}: OssnProps): React.ReactElement => {
  const data = rows.length > 0 ? rows : DATA_RECORDS;

  return (
    <div className={cx(styles.container, styles.ossn, className)}>
      {/* Header */}
      <header className={styles.headerWrap}>
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
      </header>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Table-like grid */}
      <section className={styles.table}>
        {/* Column headers */}
        <div className={cx(styles.grid, styles.headerRow)}>
          <div className={cx(styles.th, styles.colSoftware)}>Software</div>
          <div className={cx(styles.th, styles.colVehicles)}>
            Potential relevant vehicles (incl. all bodywork variants)
          </div>
          <div className={cx(styles.th, styles.colSop)}>Primal SOP</div>
        </div>

        {/* Rows */}
        <ul className={styles.rows}>
          {data.length > 0 ? (
            data.map((r) => (
              <li
                key={`${r.software}-${r.primalSop}-${r.vehicles}`}
                className={cx(styles.grid, styles.row)}
              >
                {/* Software */}
                <div className={cx(styles.td, styles.colSoftware)}>
                  {r.softwareHref ? (
                    <a
                      href={r.softwareHref}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {r.software}
                    </a>
                  ) : (
                    <span className={styles.wrap}>{r.software}</span>
                  )}

                  {(r.attachments?.length ?? 0) > 0 && (
                    <div className={styles.attachments}>
                      {(r.attachments ?? []).map((a) => (
                        <a
                          key={`${a.label}-${a.href}`}
                          href={a.href}
                          target={a.external === false ? undefined : "_blank"}
                          rel={
                            a.external === false
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className={styles.attachmentChip}
                        >
                          {a.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Vehicles */}
                <div className={cx(styles.td, styles.colVehicles)}>
                  {r.vehicles}
                </div>

                {/* Primal SOP */}
                <div className={cx(styles.td, styles.colSop)}>
                  {r.primalSop}
                </div>
              </li>
            ))
          ) : (
            <li className={`${styles.grid} ${styles.row}`}>
              <div className={`${styles.td} ${styles.tdFull}`}>
                No data available
              </div>
            </li>
          )}
        </ul>
      </section>

      {/* Footer divider */}
      <div className={cx(styles.divider, styles.footerDivider)} />
    </div>
  );
};

/* App Router page */
const Page = (): React.ReactElement => {
  return (
    <OssnTable
      title="Open Source Software Notice"
      intro="In addition to the information provided in the vehicles of Porsche AG regarding Open Source Software Notices you can also download corresponding information here:"
      rows={DATA_RECORDS}
      className="" /* passing empty to satisfy required prop */
    />
  );
};

export default Page;
