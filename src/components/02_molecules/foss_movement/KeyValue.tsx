"use client";
/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactNode, useCallback, useState } from "react";
import type { AccordionUpdateEvent } from "@porsche-design-system/components-react";
import s from "./keyValue.module.scss";
import { Accordion } from "../../01_atoms/Accordion";
import { Heading } from "../../01_atoms/Heading";

export interface KeyValueProps {
  text: string;
  children: ReactNode;
}

export const KeyValue: React.FC<PropsWithChildren<KeyValueProps>> = (
  props: KeyValueProps
) => {
  const { text, children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onUpdate = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
    setIsOpen(e.detail.open);
  }, []);
  return (
    <div className={s["keyvalue-container"]}>
      <div className={s.keyvalue}>
        <Heading className={s.text} tag="h2" theme="dark" size="large">
          {text}
        </Heading>
        <div className={s["principles-accordion"]}>
          <Accordion
            theme="dark"
            heading="Principles"
            tag="h3"
            size="small"
            open={isOpen}
            onUpdate={onUpdate}
          >
            <div className={s.principles}>{children}</div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
