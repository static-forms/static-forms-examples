import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StaticForms - Next.js Example",
  description: "A simple contact form using StaticForms.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

