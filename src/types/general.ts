import { PIconProps } from "@porsche-design-system/components-react";
import { CardProps } from "../components/03_organisms/card/Card";

export interface linkSocial {
  url: string;
  name: string;
  icon: PIconProps["name"];
}

export interface Projects {
  heading: string;
  items: CardProps[];
}

export interface linkNotice {
  url: string;
  name: string;
}
