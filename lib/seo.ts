import { Metadata } from "next";

export const seoMetadata: Metadata = {
  title: "nobr: Anonymous Chat for Everyone",
  description:
    "Discover a safe and fun way to connect with people from around the world",
  applicationName: "nobr",
  creator: "David Bakare",
  metadataBase: new URL("https://nobr-delta.vercel.app/"),
  openGraph: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    url: "https://nobr-delta.vercel.app/",
    siteName: "nobr",
    images: [
      {
        url: "/images/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "nobr logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "nobr: Anonymous Chat for Everyone",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    card: "summary",
    creator: "@nobr_hq",
    images: [
      {
        url: "/images/icons/icon-512x512.png",
        type: "image/png",
        width: 512,
        height: 512,
      },
    ],
  },
  category: "communication",
  icons: {
    icon: "/images/icons/icon-512x512.png",
    apple: "/images/icons/icon-512x512.png",
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
  manifest: "/manifest.json",
};
