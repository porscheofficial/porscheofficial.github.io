import { ReactNode } from "react";
import s from "./section.module.scss";

interface SectionProps {
  children: ReactNode;
  id?: string;
}
export const Section: React.FC<SectionProps> = ({ children, id }) => {
  return (
    <div className={s.section} id={id}>
      {children}
    </div>
  );
};
