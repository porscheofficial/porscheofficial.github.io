"use client";
/* eslint-disable react/require-default-props */
import { PropsWithChildren, ReactNode, useCallback, useState } from "react";
import type { AccordionUpdateEvent } from "@porsche-design-system/components-react";
import {
  PAccordion,
  PHeading,
} from "@porsche-design-system/components-react/ssr";
import s from "./keyValue.module.scss";

export interface KeyValueProps {
  text: string;
  children: ReactNode;
}

export const KeyValue: React.FC<PropsWithChildren<KeyValueProps>> = (
  props: KeyValueProps,
) => {
  const { text, children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onUpdate = useCallback((e: CustomEvent<AccordionUpdateEvent>) => {
    setIsOpen(e.detail.open);
  }, []);
  return (
    <div className={s["keyvalue-container"]}>
      <div className={s.keyvalue}>
        <PHeading tag="h2" theme="dark" size="x-large">
          {text}
        </PHeading>
        <div className={s["principles-accordion"]}>
          <PAccordion
            theme="dark"
            heading="Principles"
            headingTag="h3"
            size="medium"
            open={isOpen}
            onUpdate={onUpdate}
          >
            <div className={s.principles}>{children}</div>
          </PAccordion>
        </div>
      </div>
    </div>
  );
};
