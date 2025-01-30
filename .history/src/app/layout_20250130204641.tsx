import type { Metadata } from "next";
import { clash, calSans } from "./fonts";
import "./globals.css";

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
      <body className={`${clash.variable} ${calSans.variable} font-cal`}>
        {children}
      </body>
    </html>
  );
}
