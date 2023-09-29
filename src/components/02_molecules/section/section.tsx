import { ReactNode } from "react";
import s from "./section.module.scss";

interface SectionProps {
  children: ReactNode;
  id?: string;
  grid?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  spacing?: "s" | "m" | "l" | "xl" | "xxl" | "none";
}
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  grid = true,
  spacing = "xxl",
}) => {
  return (
    <div
      className={`${grid ? s["section-grid"] : ""} ${s.section}  ${
        className ?? ""
      } ${s[`section-${spacing}`]}`}
      id={id}
    >
      {children}
    </div>
  );
};
