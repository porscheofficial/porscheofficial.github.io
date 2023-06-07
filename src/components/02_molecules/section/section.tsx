import { ReactNode } from "react";
import s from "./section.module.scss";

interface SectionProps {
  children: ReactNode;
}
export const Section: React.FC<SectionProps> = ({ children }): JSX.Element => {
  return <div className={s.section}>{children}</div>;
};
