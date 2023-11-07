//providers
import { ThemeProvider } from "./components/theme-provider";

//next imports
import type { Metadata } from "next";

//CSS
import "./globals.css";

//components
import { Footer, NavigationBar } from "./components";

//shadcn components
import { Toaster } from "./components/ui/toaster";

//libs imports
import { seoMetadata } from "../lib/seo";

export const metadata: Metadata = {
  ...seoMetadata,
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
