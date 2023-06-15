/* eslint-disable react/require-default-props */
import { Header } from "../../02_molecules/header/Header";
import { Footer } from "../../02_molecules/footer/Footer";

export interface PageLayoutProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
}

export const PageLayout = ({
  children,
  logo,
}: PageLayoutProps): JSX.Element => (
  <>
    <Header logo={logo} />
    {children}
    <Footer />
  </>
);
