import { PIconProps } from "@porsche-design-system/components-react";
import { ProjectCardProps } from "../components/03_organisms/projectCard/ProjectCard";
import { NewsCardProps } from "../components/03_organisms/newsCard/NewsCard";
import { MembershipProps } from "../components/03_organisms/membership/Membership";

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

export interface Memberships {
  heading: string;
  items: MembershipProps[];
}

export interface linkNotice {
  url: string;
  name: string;
}

export interface PageProps {
  params: {
    slug: string[];
  };
}
