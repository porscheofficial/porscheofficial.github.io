"use client";
import { ReactNode } from "react";
import s from "./textblock.module.scss";

interface TextblockProps {
  id?: React.HTMLAttributes<HTMLElement>["id"];
  children: ReactNode;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const Textblock: React.FC<React.PropsWithChildren<TextblockProps>> = ({
  id,
  children,
  className,
}) => {
  return (
    <section
      className={`${s["textblock-container"]} ${className ?? ""}`}
      id={id}
    >
      {children}
    </section>
  );
};
