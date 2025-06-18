import { Metadata } from "next";

const siteMetadata: Metadata = {
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
        url: "https://github.com/Zaah91/synopsis-next-prototype/blob/master/public/duck.webp?raw=true",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: { // Twitter Card metadata
    card: "summary_large_image",
    title: "Next.js Prototype",
    description: "An example of using metadata in Next.js with robots.txt and sitemap.xml",
    images: [
      {
        url: "https://github.com/Zaah91/synopsis-next-prototype/blob/master/public/duck.webp?raw=true",
        width: 1200,
        height: 630,
        alt: "Twitter Card Image",
        },
    ]
    },
}

export default siteMetadata;