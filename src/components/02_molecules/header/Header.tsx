/* eslint-disable react/require-default-props */
import Link from "next/link";
import {
  PCrest,
  PWordmark,
  PLinkPure,
} from "@porsche-design-system/components-react/ssr";
import { spacingFluidXSmall } from "@porsche-design-system/components-react/styles";
import s from "./header.module.scss";
import { Navigation } from "../navigation/Navigation";

interface JobsResponse {
  SearchResult: {
    SearchResultCountAll: string;
  };
}

const getJobsData = async (): Promise<JobsResponse> => {
  const res = await fetch(
    "https://porsche-beesite-production-gjb.app.beesite.de/search/?data=%7B%22SearchParameters%22%3A%7B%22FirstItem%22%3A1%2C%22CountItem%22%3A0%2C%22MatchedObjectDescriptor%22%3A%5B%22Facet%3APositionLocation.City%22%5D%7D%2C%22SearchCriteria%22%3A%5B%7B%22CriterionName%22%3A%22PublicationChannel.Code%22%2C%22CriterionValue%22%3A%5B%2212%22%5D%7D%2C%7B%22CriterionName%22%3A%22PositionFormattedDescription.Content%22%2C%22CriterionValue%22%3A%5B%22Open%20Source%22%5D%7D%5D%2C%22LanguageCode%22%3A%22EN%22%7D",
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<JobsResponse>;
};

export interface HeaderProps {
  logo?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = async ({ logo }) => {
  const jobsCounter = (await getJobsData()).SearchResult.SearchResultCountAll;
  return (
    <header className={s["header-container"]}>
      <div className={s["logo-container"]}>
        <Link href="/">
          {logo ?? (
            <>
              <PWordmark theme="dark" size="small" />
              <PCrest />
            </>
          )}
        </Link>
      </div>
      <div className={s["github-container"]}>
        <PLinkPure
          href="https://github.com/porscheofficial"
          theme="dark"
          iconSource="/assets/octicons/mark-github.svg"
          hideLabel
          style={{ padding: spacingFluidXSmall }}
        >
          GitHub
        </PLinkPure>
      </div>
      <Navigation jobsCounter={jobsCounter} />
    </header>
  );
};
