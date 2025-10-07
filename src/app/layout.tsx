import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";



export const metadata: Metadata = {
  title: "Teslo | Shop",
  description: "A virtual store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
