import { ReactNode } from "react";
import s from "./section.module.scss";

interface SectionProps {
  children: ReactNode;
  id?: string;
  grid?: boolean;
  className?: React.HTMLAttributes<HTMLElement>["className"];
  spacing?: "s" | "m" | "l" | "xl" | "none";
}
export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  grid,
  spacing,
}) => {
  const spacingClass = `section-${spacing ?? "xl"}`;
  return (
    <div
      className={`${grid ? s["section-grid"] : ""} ${s.section}  ${
        className ?? ""
      } ${s[spacingClass]}`}
      id={id}
    >
      {children}
    </div>
  );
};

Section.defaultProps = {
  grid: true,
  className: undefined,
  spacing: "xl",
};
