import path from "path";
import { PLink } from "@porsche-design-system/components-react/ssr";
import s from "./editOnGithub.module.scss";

export interface EditOnGithubProps {
  file: string;
}

export const EditOnGithub: React.FC<EditOnGithubProps> = ({ file }) => {
  const url = new URL(
    path.join("porscheofficial/porscheofficial.github.io/edit/main/", file),
    "https://github.com/",
  );
  return (
    <div className={s["editOnGithub-container"]}>
      <PLink
        className={s.editOnGithub}
        href={url.href}
        variant="secondary"
        iconSource="/assets/octicons/mark-github.svg"
        theme="dark"
      >
        Edit on GitHub
      </PLink>
    </div>
  );
};
