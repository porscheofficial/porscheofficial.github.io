declare module "*.module.scss" {
  const classes: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default classes;
}

declare module "*.png" {
  const value: import("react-native").ImageSourcePropType;
  // eslint-disable-next-line import/no-default-export
  export default value;
}
