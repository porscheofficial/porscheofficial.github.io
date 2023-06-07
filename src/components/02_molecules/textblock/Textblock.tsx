"use client";
import { ReactNode } from "react";
import s from "./textblock.module.scss";

interface TextblockProps {
  id: string;
  children: ReactNode;
}

export const Textblock: React.FC<React.PropsWithChildren<TextblockProps>> = (
  props: TextblockProps
) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { id } = props;
  const { children } = props;

  return (
    <section className={s["textblock-container"]}>
      <div className={s.textblock} id={id}>
        {children}
      </div>
    </section>
  );
};
