declare module "*.module.scss" {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module "*.yml" {
  const data: any;
  export default data;
}

declare module "*.png";
declare module "*.jpg";
