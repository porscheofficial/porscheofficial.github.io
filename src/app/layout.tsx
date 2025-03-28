import { Metadata } from "next";
import Script from "next/script";
import {
  getInitialStyles,
  getFontFaceStylesheet,
  getFontLinks,
  getComponentChunkLinks,
  getIconLinks,
  getMetaTagsAndIconLinks,
  getDSRPonyfill,
  getBrowserSupportFallbackScript,
} from "@porsche-design-system/components-react/partials";
import { AppProvider } from "../components/AppProvider";
import { PageLayout } from "../components/04_templates/pageLayout/PageLayout";
import "./globals.scss";
import { BASE_URL } from "../config";

const siteConfig = {
  title: "Porsche Open Source Platform",
  description:
    "The POSP is a one-stop shop for all open-source activities of Porsche AG and subsidiaries, featuring selected projects and providing documentation on our FOSS best practices.",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Porsche",
    "FOSS",
    "Open Source",
    "FOSS Movement",
    "Collaboration",
    "GitHub",
  ],
  authors: [
    {
      name: "Porsche AG",
      url: new URL("https://porsche.com"),
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL("https://opensource.porsche.com"),
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Porsche",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const cspHeader = `
    default-src 'self' https://api.github.com/repos/;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.ui.porsche.com/porsche-design-system/;
    style-src 'self' 'unsafe-inline' https://cdn.ui.porsche.com/porsche-design-system/;
    img-src 'self' blob: data: https://cdn.ui.porsche.com/porsche-design-system/ https://raw.githubusercontent.com/porscheofficial/;
    font-src 'self' https://cdn.ui.porsche.com/porsche-design-system/;
    object-src 'none';
    manifest-src 'self' https://cdn.ui.porsche.com/porsche-design-system/;
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
    `;
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content={cspHeader.replace(/\n/g, "")}
        />
        <style id="antiClickjack">{"body{display:none !important;}"}</style>
        <Script id="antiClickjackScript">
          {`
            if (self === top) {
              var antiClickjack = document.getElementById("antiClickjack");
              antiClickjack.parentNode.removeChild(antiClickjack);
            } else {
              top.location = self.location;
            }
        `}
        </Script>
        {/* necessary for SSR support, injects stylesheet which defines visibility of pre-hydrated PDS components */}
        {getInitialStyles({ format: "jsx" })}
        {/* injects stylesheet which defines Porsche Next CSS font-face definition (=> minimize FOUT) */}
        {getFontFaceStylesheet({ format: "jsx" })}
        {/* preloads Porsche Next font (=> minimize FOUT) */}
        {getFontLinks({ format: "jsx" })}
        {/* preloads PDS component core chunk from CDN for PDS component hydration (=> improve loading performance) */}
        {getComponentChunkLinks({ format: "jsx" })}
        {/* preloads Porsche icons (=> minimize FOUC) */}
        {getIconLinks({ format: "jsx" })}
        {/* injects favicon, apple touch icons, android touch icons, etc. */}
        {getMetaTagsAndIconLinks({
          appTitle: String(metadata.title ?? siteConfig.title),
          format: "jsx",
        })}
      </head>
      <body>
        <AppProvider>
          <PageLayout>{children}</PageLayout>
        </AppProvider>
        {/* necessary for SSR support, enables declarative shadow dom support for Safari and Firefox */}
        {getDSRPonyfill({ format: "jsx" })}
        {/* shows a browser fallback overlay and blocks the page, in case browser is not supported (e.g. IE11) */}
        {getBrowserSupportFallbackScript({ format: "jsx" })}
      </body>
    </html>
  );
};

export default RootLayout;
