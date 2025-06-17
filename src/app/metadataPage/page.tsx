import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metadata",
};

export default function Subpage1() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Metadata</h1>
        <p className="text-lg mt-2">Under titel</p>
        
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <img src="/robots-snippet.png" alt="robots.ts file" className="mx-auto mt-4" />
      <div>
          <h2 className="text-2xl font-semibold mb-2">About the Code</h2>
          <p className="text-lg">
            <strong>File-based:</strong> Next.js has a range of special files that are specifically used for metadata purposes:
          </p>
          <ul className="list-disc list-inside mt-2 text-lg">
            <li>
              <code>favicon.ico</code>, <code>apple-icon.jpg</code>, and <code>icon.jpg</code>: Utilized for favicons and icons
            </li>
            <li>
              <code>opengraph-image.jpg</code> and <code>twitter-image.jpg</code>: Employed for social media images
            </li>
            <li>
              <code>robots.txt</code>: Provides instructions for search engine crawling
            </li>
            <li>
              <code>sitemap.xml</code>: Offers information about the website's structure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
