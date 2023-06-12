import { PIconProps } from "@porsche-design-system/components-react";
import { ProjectCardProps } from "../components/03_organisms/projectCard/ProjectCard";
import { NewsCardProps } from "../components/03_organisms/newsCard/NewsCard";

export interface linkSocial {
  url: string;
  name: string;
  icon: PIconProps["name"];
}

export interface Projects {
  heading: string;
  items: ProjectCardProps[];
}

export interface News {
  heading: string;
  items: NewsCardProps[];
}

export interface linkNotice {
  url: string;
  name: string;
}
