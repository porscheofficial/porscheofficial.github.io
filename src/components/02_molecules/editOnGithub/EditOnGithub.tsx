import path from "path";
import s from "./editOnGithub.module.scss";
import { LinkButton } from "../../01_atoms/LinkButton";

export interface EditOnGithubProps {
  file: string;
}

export const EditOnGithub: React.FC<EditOnGithubProps> = ({ file }) => {
  const url = path.join(
    "https://github.com/porscheofficial/porscheofficial.github.io/edit/main/",
    file
  );
  return (
    <div className={s["editOnGithub-container"]}>
      <LinkButton
        className={s.editOnGithub}
        href={url}
        variant="secondary"
        iconSource="/assets/octicons/mark-github.svg"
        theme="dark"
      >
        Edit on GitHub
      </LinkButton>
    </div>
  );
};
