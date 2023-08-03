import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

const BlogPage: React.FC = () => {
  return (
    <ul>
      {allBlogs.map((doc) => (
        <li>
          <Link href={{ pathname: doc.slug }} key={doc.slug}>
            {doc.title} | {doc.date}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogPage;
