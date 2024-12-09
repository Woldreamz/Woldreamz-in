import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City of God",
  description: "Woldreamz Software Platform is a versatile solution designed to help businesses of all sizes build their brand and start selling quickly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="https://i.postimg.cc/xjwDWjgB/woldreamz-inc-favicon-black.png" />
      <body className={font.className}>{children}</body>
    </html>
  );
}
