"use client";
/* eslint-disable react/require-default-props */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "../../01_atoms/LinkButton";
import { ButtonGroup } from "../../01_atoms/ButtonGroup";
import s from "./navigation.module.scss";
import { BurgerMenu } from "../../01_atoms/BurgerMenu";
import { LinkPure } from "../../01_atoms/LinkPure";
import { Flyout } from "../../01_atoms/Flyout";

interface JobsResponse {
  SearchResult: {
    SearchResultCountAll: string;
  };
}

const getJobsData = async (): Promise<JobsResponse> => {
  const res = await fetch(
    "https://porsche-beesite-production-gjb.app.beesite.de/search/?data=%7B%22SearchParameters%22%3A%7B%22FirstItem%22%3A1%2C%22CountItem%22%3A0%2C%22MatchedObjectDescriptor%22%3A%5B%22Facet%3APositionLocation.City%22%5D%7D%2C%22SearchCriteria%22%3A%5B%7B%22CriterionName%22%3A%22PublicationChannel.Code%22%2C%22CriterionValue%22%3A%5B%2212%22%5D%7D%2C%7B%22CriterionName%22%3A%22PositionFormattedDescription.Content%22%2C%22CriterionValue%22%3A%5B%22Open%20Source%22%5D%7D%5D%2C%22LanguageCode%22%3A%22EN%22%7D"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<JobsResponse>;
};

export const Navigation = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [jobCounter, setJobCounter] = useState<string>("0");
  const onOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);
  const onDismiss = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  const pathname = usePathname();

  const links = [
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
    {
      url: "/docs",
      name: "Documentation",
    },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  getJobsData()
    .then((data: JobsResponse) =>
      setJobCounter(data.SearchResult.SearchResultCountAll)
    )
    .catch((error) => {
      throw new Error(error);
    });

  return (
    <div className={s["menu-container"]}>
      <BurgerMenu onClick={() => onOpen()} />
      <Flyout open={isMenuOpen} position="left" onDismiss={onDismiss}>
        <ul>
          {links.map((link) => (
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
        <div slot="footer">
          <ButtonGroup>
            <LinkButton
              href="https://jobs.porsche.com/index.php?ac=search_result&search_criterion_keyword%5B%5D=Open%20Source"
              variant="secondary"
              theme="light"
            >
              FOSS Jobs <span className={s["job-counter"]}>{jobCounter}</span>
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
