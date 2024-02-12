declare module "*.module.scss" {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module "*.yml" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any;
  // eslint-disable-next-line import/no-default-export
  export default data;
}

declare module "*.png";
declare module "*.jpg";
