//providers
import { ThemeProvider } from "./components/theme-provider";
import NavigationBarWrapper from "./components/NavigationBarWrapper";
import FooterWrapper from "./components/FooterWrapper";

//next imports
import type { Metadata, Viewport } from "next";

//CSS
import "./globals.css";

//shadcn components
import { Toaster } from "./components/ui/toaster";

//libs imports
import { seoMetadata } from "../lib/seo";

export const metadata: Metadata = {
  ...seoMetadata,
};

export const viewport: Viewport = {
  themeColor: "#F3790A",
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
          <NavigationBarWrapper />
          {children}
          <FooterWrapper />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
