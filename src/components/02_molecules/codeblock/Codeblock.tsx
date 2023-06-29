"use client";
import React, { ReactNode } from "react";
import { Highlight } from "prism-react-renderer";
import { a11y } from "./themes/a11y";
import s from "./codeblock.module.scss";

interface CodeblockProps {
  children: ReactNode;
  wrapperClassName: string | undefined;
}

export const Codeblock: React.FC<React.PropsWithChildren<CodeblockProps>> = ({
  children,
  wrapperClassName,
}) => {
  const matches = wrapperClassName?.match(/language-(?<lang>.*)/);
  const highlightedCode =
    children !== null && children !== undefined
      ? // eslint-disable-next-line @typescript-eslint/no-base-to-string
        children.toString().trim()
      : "";
  return (
    <Highlight
      theme={a11y}
      code={highlightedCode}
      language={matches?.groups?.lang ? matches.groups.lang : ""}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${s.codeblock} ${className}`}>
          {tokens.map((line) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...getLineProps({ line })}>
              {line.map((token) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <span {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
