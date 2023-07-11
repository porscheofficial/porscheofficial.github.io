/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactNode } from "react";
import s from "./principle.module.scss";
import { Tag } from "../../01_atoms/Tag";
import { Text } from "../../01_atoms/Text";

export interface PrincipleProps {
  hashtag: string;
  children: ReactNode;
}

export const Principle: React.FC<PropsWithChildren<PrincipleProps>> = (
  props: PrincipleProps
) => {
  const { hashtag, children } = props;
  return (
    <div className={s.principle}>
      <span className={s.hashtag}>
        #{hashtag}
      </span>
      <Text size="medium" theme="dark">
        {children}
      </Text>
    </div>
  );
};
