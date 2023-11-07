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
        url: "https://avatars.githubusercontent.com/u/98014597?v=4",
        width: 1800,
        height: 1600,
        alt: "nobr image",
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
    icon: "https://raw.githubusercontent.com/3akare/nobr/e887a3ad2ed5ee75bd1b20abe2a1c5d58ec992a2/public/SEO/nobr-icon.svg",
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
