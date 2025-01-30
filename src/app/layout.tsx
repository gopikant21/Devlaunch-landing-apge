import type { Metadata } from "next";
import { spaceGrotesk, outfit } from "./fonts";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevLaunch - Transform Your Ideas Into Digital Reality",
  description:
    "Professional software development services for your business needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-cal`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
