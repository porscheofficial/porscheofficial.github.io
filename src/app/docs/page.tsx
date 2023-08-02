import Link from "next/link";
// eslint-disable-next-line import/no-unresolved
import { allDocs } from "contentlayer/generated";

const DocsPage: React.FC = () => {
  return (
    <ul>
      {allDocs.map((doc) => (
        <li>
          <Link href={{ pathname: doc.slug }} key={doc.slug}>
            {doc.title} | {doc.date}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DocsPage;
