"use client";
import { ReactNode } from "react";
import s from "./textblock.module.scss";

interface TextblockProps {
  id: string;
  children: ReactNode;
  className?: React.HTMLAttributes<HTMLElement>["className"];
}

export const Textblock: React.FC<React.PropsWithChildren<TextblockProps>> = (
  props: TextblockProps
) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const { id, children, className } = props;

  return (
    <section className={s["textblock-container"]}>
      <div className={`${s.textblock} ${className ?? ""}`} id={id}>
        {children}
      </div>
    </section>
  );
};

Textblock.defaultProps = {
  className: undefined,
};
