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
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "nobr",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    url: "https://nobr-delta.vercel.app",
    siteName: "nobr",
    images: [
      {
        url: "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "nobr",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    creator: "@nobr_hq",
    images: [
      "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
    ],
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
