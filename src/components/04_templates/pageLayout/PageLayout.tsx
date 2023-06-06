/* eslint-disable react/require-default-props */
import { Header } from "../../02_molecules/header/Header";

export interface PageLayoutProps {
  children: React.ReactNode;
  logo?: JSX.Element;
}

export const PageLayout = ({
  children,
  logo,
}: PageLayoutProps): JSX.Element => (
  <>
    <Header logo={logo} />
    {children}
  </>
);
