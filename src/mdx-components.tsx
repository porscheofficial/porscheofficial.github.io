import type { MDXComponents } from "mdx/types";
import { Heading } from "./components/01_atoms/Heading";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h2: ({ children }) => (
      <Heading
        size={{ base: "small", s: "medium" }}
        align="center"
        theme="dark"
        tag="h5"
      >
        {children}
      </Heading>
    ),
    ...components,
  };
};

export default useMDXComponents;
