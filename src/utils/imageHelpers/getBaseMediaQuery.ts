export const getBaseMediaQuery = (
  nextMediaQuery: `(min-width: ${number}px)`
): `(max-width: ${number}px)` => {
  const minWidth = Number(/\d+/.exec(nextMediaQuery)?.[0]);
  if (Number.isNaN(minWidth)) {
    throw new Error("Invalid media query");
  }
  const maxWidth = minWidth - 1;
  return `(max-width: ${maxWidth}px)`;
};
