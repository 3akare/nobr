import { ThemeProvider } from "./components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

import { Footer, NavigationBar } from "./components";
import { Toaster } from "./components/ui/toaster";

export const metadata: Metadata = {
  title: "nobr: Anonymous Chat for Everyone",
  description:
    "Discover a safe and fun way to connect with people from around the world",
  referrer: "origin-when-cross-origin",
  creator: "David Bakare",
  applicationName: "nobr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "nobr",
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
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/98014597?v=4",
  },
  twitter: {
    card: "summary_large_image",
    title: "nobr",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    creator: "@nobr_hq",
    images: ["https://avatars.githubusercontent.com/u/98014597?v=4"],
  },
  category: "communication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
