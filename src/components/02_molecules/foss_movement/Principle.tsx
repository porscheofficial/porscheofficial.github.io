/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactNode } from "react";
import { PTag, PText } from "@porsche-design-system/components-react/ssr";
import s from "./principle.module.scss";

export interface PrincipleProps {
  hashtag: string;
  children: ReactNode;
}

export const Principle: React.FC<PropsWithChildren<PrincipleProps>> = (
  props: PrincipleProps,
) => {
  const { hashtag, children } = props;
  return (
    <div className={s.principle}>
      <PTag className={s.hashtag} theme="light">
        #{hashtag}
      </PTag>
      <PText size="medium" theme="dark">
        {children}
      </PText>
    </div>
  );
};
