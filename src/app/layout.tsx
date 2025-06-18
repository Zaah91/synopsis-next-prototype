import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Prototype",
    default: "Next.js Prototype",
  },
  description: "An example of using metadata in Next.js with robots.txt and sitemap.xml",
  metadataBase: new URL("https://github.com/Zaah91/synopsis-next-prototype"),
  openGraph: { // Open Graph metadata for social media sharing
    title: "Next.js Prototype",
    description: "An example of using metadata in Next.js with robots.txt and sitemap.xml",
    url: "https://github.com/Zaah91/synopsis-next-prototype",
    siteName: "Next.js Prototype",
    images: [
      {
        url: "https://github.com/Zaah91/synopsis-next-prototype/blob/master/public/sitemap-snippet.PNG",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
