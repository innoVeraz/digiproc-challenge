import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-regular.ttf",
  variable: "--font-inter",
  weight: "100, 400, 500, 600, 700",
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
        className={`${inter.variable} antialiased relative max-w-screen-lg m-auto flex justify-center h-screen items-center tracking-extra-tight`}
      >
        {children}
      </body>
    </html>
  );
}
