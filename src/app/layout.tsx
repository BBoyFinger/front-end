import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/LandingPage/NavBar";
import Footer from "@/components/Footer/Footer";
import CartProviders from "@/components/ShoppingCart/CartProviders";
import { CartModal } from "@/components/ShoppingCart/Cart";

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
          <CartProviders>
            <NavBar />
            <CartModal />
            {children}
            <Footer />
          </CartProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
