import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme } from "@radix-ui/themes";
import { NextThemeProvider } from "@/components/layouts/ThemeProvider";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { MainContextProvider } from "@/context/mainContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContextProvider className={inter.className}>
          <NextThemeProvider>
            <Theme>
              <Navbar />
              {children}
              <Footer />
            </Theme>
          </NextThemeProvider>
        </MainContextProvider>
      </body>
    </html>
  );
}
