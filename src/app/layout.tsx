import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Prototype",
    default: "Next.js Prototype",
  },
  description: "An example of using metadata in Next.js with robots.txt and sitemap.xml",
  metadataBase: new URL("https://example.com"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
