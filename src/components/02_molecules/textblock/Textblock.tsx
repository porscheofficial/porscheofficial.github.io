"use client";
import { ReactNode } from "react";
import s from "./textblock.module.scss";

export const Textblock: React.FC<
  React.PropsWithChildren<{ children?: ReactNode }>
> = ({ children }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <section className={s["textblock-container"]}>
      <div className={s["textblock"]}>{children}</div>
    </section>
  );
};
