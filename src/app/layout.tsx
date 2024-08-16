import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/LandingPage/NavBar";

export const metadata: Metadata = {
  title: "Venn Sneaker",
  description: "Welcome to ventt, The world of sneaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Raleway my-4">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
