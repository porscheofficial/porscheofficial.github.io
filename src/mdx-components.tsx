import type { MDXComponents } from "mdx/types";
import { Heading } from "./components/01_atoms/Heading";
import { TextList, TextListItem } from "./components/01_atoms/TextList";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <Heading
        size={{ base: "large", s: "x-large" }}
        align="center"
        theme="dark"
        tag="h1"
      >
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading
        size={{ base: "small", s: "medium" }}
        align="left"
        theme="dark"
        tag="h2"
      >
        {children}
      </Heading>
    ),
    ul: ({ children }) => <TextList theme="dark">{children}</TextList>,
    li: ({ children }) => <TextListItem>{children}</TextListItem>,
    ...components,
  };
};

export default useMDXComponents;
