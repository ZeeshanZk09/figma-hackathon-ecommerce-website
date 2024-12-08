import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderForHome from "@/components/HeaderForHome";


export const clashDisplayExtralight = localFont({
  src: "./fonts/ClashDisplay-Extralight.woff",
  variable: "--clashDisplay-extralight",
  style: "normal",
  weight: "100 900",
});

export const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.woff",
  variable: "--satoshi-regular",
  style: "normal",
  weight: "100 900",
});

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
      <body
        className={`${satoshiRegular.variable} ${clashDisplayExtralight.variable}  antialiased`}
      >
        <HeaderForHome  />
        {children}
      </body>
    </html>
  );
}
