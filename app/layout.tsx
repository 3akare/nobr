import { ThemeProvider } from "./components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

import { Footer, NavigationBar } from "./components";
import { Toaster } from "./components/ui/toaster";

export const metadata: Metadata = {
  title: "nobr",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "nobr" },
  icons:
    "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
  description:
    "Discover a safe and fun way to connect with people from around the world",
  openGraph: {
    siteName: "nobr",
    countryName: "Nigeria",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    title: "nobr",
    url: "https://nobr-delta.vercel.app",
    type: "website",
    images: {
      url: "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
      height: 800,
      width: 1260,
    },
  },
  twitter: {
    title: "nobr",
    creator: "David Bakare",
    description:
      "Discover a safe and fun way to connect with people from around the world",
    images: {
      url: "https://nobr-delta.vercel.app/_next/static/media/light-nobr-logo.46b49c35.svg",
      height: 800,
      width: 1260,
    },
    card: "summary",
  },
  applicationName: "nobr",
  keywords: [
    "nobr",
    "chat",
    "private",
    "secure",
    "secret",
    "message",
    "messaging",
    "hide",
    "hidden",
    "confidential",
    "discreet",
    "incognito",
    "online",
    "untraceable",
    "strangers",
    "someone",
    "friend",
    "encrypted",
    "romance",
    "date",
    "where",
    "place",
  ],
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
