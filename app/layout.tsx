import { ThemeProvider } from "./components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

import { Footer, NavigationBar } from "./components";

export const metadata: Metadata = {
  title: "nobr | Home",
  description: "Talk to Strangers",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
