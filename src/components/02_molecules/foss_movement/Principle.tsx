/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactNode } from "react";
import s from "./principle.module.scss";
import { Text } from "../../01_atoms/Text";
import { Tag } from "../../01_atoms/Tag";

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
      <Tag className={s.hashtag} theme="light">
        #{hashtag}
      </Tag>
      <Text size="medium" theme="dark">
        {children}
      </Text>
    </div>
  );
};
