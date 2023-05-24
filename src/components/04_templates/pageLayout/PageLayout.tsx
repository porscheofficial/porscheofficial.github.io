/* eslint-disable react/require-default-props */
import { Header } from "../../02_molecules/header/Header";

export interface PageLayoutProps {
  children: React.ReactNode;
  logo: JSX.Element;
  secondaryHeaderContent?: React.ReactNode;
}

export const PageLayout = ({
  children,
  logo,
  secondaryHeaderContent,
}: PageLayoutProps): JSX.Element => (
  <>
    <Header logo={logo}>{secondaryHeaderContent}</Header>
    {children}
  </>
);
