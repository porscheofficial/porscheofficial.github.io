import { MetadataRoute } from "next";
import { allBlogs, allDocs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { BASE_URL } from "../config";

export const dynamic = "force-static";

const Sitemap = (): MetadataRoute.Sitemap => {
  const blogs = allBlogs.map((doc) => ({
    url: `${BASE_URL}${doc.slug}`,
    lastModified: format(parseISO(doc.date), "yyyy-MM-dd"),
  }));
  const docs = allDocs.map((doc) => ({
    url: `${BASE_URL}${doc.slug}`,
    lastModified: format(parseISO(doc.date), "yyyy-MM-dd"),
  }));

  const staticPaths = [
    {
      url: `${BASE_URL}`,
      lastModified: "2023-08-25",
    },
    {
      url: `${BASE_URL}/legal-notice`,
      lastModified: "2023-08-25",
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: "2023-08-25",
    },
  ];

  return [...staticPaths, ...blogs, ...docs];
};
// eslint-disable-next-line import/no-default-export
export default Sitemap;
