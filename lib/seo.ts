import { Metadata } from "next";

export const seoMetadata: Metadata = {
  title: "nobr: Anonymous Chat for Everyone",
  description:
    "Discover a safe and fun way to connect with people from around the world",
  applicationName: "nobr",
  creator: "David Bakare",
  openGraph: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    url: "https://nobr-delta.vercel.app",
    siteName: "nobr",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "https://avatars.githubusercontent.com/u/98014597?v=4",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    card: "summary_large_image",
    creator: "@nobr_hq",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/98014597?v=4",
        width: 1800,
        height: 1600,
      },
    ],
  },
  category: "communication",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/98014597?v=4",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: { google: "TFcYP148KTertzx1jMuzix6-ROA_573XyKLrSl6ugWE" },
};
