import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";



export const metadata: Metadata = {
  title: "Ideaon",
  description: "Secure and private idea management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
      >
        {/* <Navbar/> */}
        {children}
      </body>
    </html>
  );
}
