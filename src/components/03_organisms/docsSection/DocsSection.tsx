import { allDocs } from "contentlayer/generated";
import {
  PText,
  PHeading,
  PLinkPure,
} from "@porsche-design-system/components-react/ssr";
import s from "./docsSection.module.scss";

export const DocsSection: React.FC = () => {
  return (
    <div className={s.section}>
      {allDocs.length > 0 && (
        <>
          {allDocs.map((doc) => (
            <div className={s.card} key={`doc-${doc.title}`}>
              <div>
                <PHeading ellipsis size="medium" theme="dark" tag="h3">
                  {doc.title}
                </PHeading>
                <PText theme="dark" size="small" className={s.description}>
                  {doc.descriptionShort}
                </PText>
                <PLinkPure href={doc.slug} theme="dark" className={s.link}>
                  Learn more
                </PLinkPure>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
