const VERCEL_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null;
export const BASE_URL =
  process.env.BASE_URL ?? VERCEL_URL ?? "https://opensource.porsche.com";
