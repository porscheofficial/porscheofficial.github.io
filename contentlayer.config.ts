import {
  defineDocumentType,
  makeSource,
  LocalDocument,
  defineNestedType,
} from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    // eslint-disable-next-line no-underscore-dangle
    resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",

    resolve: (doc: LocalDocument) =>
      // eslint-disable-next-line no-underscore-dangle
      doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    image: { type: "string", required: true },
    slug: { type: "string", required: false },
    description: { type: "string", required: false },
  },
}));

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog",
      required: true,
    },
    descriptionShort: {
      type: "string",
      description: "The description for the preview tile",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true,
    },
    readTime: {
      type: "string",
      description: "The reading time of the blog",
      required: true,
    },
    hashTags: {
      type: "list",
      of: { type: "string" },
      description: "The reading time of the blog",
      required: false,
    },
    author: {
      type: "nested",
      of: Author,
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the blog",
      required: true,
    },
  },
  // @ts-expect-error TODO
  computedFields,
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true,
    },
    descriptionShort: {
      type: "string",
      description: "The description for the preview tile",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the document",
      required: true,
    },
    image: {
      type: "string",
      description: "The image of the doc",
      required: true,
    },
  },
  // @ts-expect-error TODO
  computedFields,
}));

// eslint-disable-next-line import/no-default-export
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Doc],
});
