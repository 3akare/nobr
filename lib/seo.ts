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
      "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
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
      "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
    ],
  },
  category: "communication",
  icons: {
    icon: "https://raw.githubusercontent.com/3akare/nobr/b85f55bfc675d54fd129aeaef956ef4505a8a035/public/SEO/opengraph-logo%202.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
