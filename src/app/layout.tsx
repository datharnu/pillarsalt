import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mulish } from "next/font/google";
import "./globals.css";
import UIProvider from "./provider/NextuiProvider";

const inter = Mulish({ subsets: ["latin"] });

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
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
