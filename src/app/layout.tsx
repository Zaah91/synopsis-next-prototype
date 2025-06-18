import "./globals.css";
import Navbar from "@/components/Navbar";
import siteMetadata from "./metadataCollection";

export const metadata = siteMetadata;

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
