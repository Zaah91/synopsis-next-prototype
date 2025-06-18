import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metadata",
};

export default function Metadatapage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Metadata</h1>
        <p className="text-lg mt-2">Many ways - Many results</p>
        <img src="/metadata-layout.png" alt="Metadata layput code example" className="mx-auto mt-4" />
      </header>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-8">
      <div>
          <h2 className="text-2xl font-semibold mb-2">About the Code</h2>
          <p className="text-lg">
            <strong>File-based:</strong> Next.js has a range of special files that are specifically used for metadata purposes:
          </p>
            <ul className="list-disc pl-6 mt-4">
                <li><code>robots.txt</code> - Controls how search engines index the site.</li>
                <li><code>sitemap.xml</code> - Provides a structured list of the site's pages for search engines.</li>
                <li><code>favicon.ico</code> - The icon displayed in the browser tab.</li>
                <li><code>apple-touch-icon.png</code> - The icon used when the site is added to the home screen on iOS devices.</li>
            </ul>
        </div>
        <img src="/metadata-subpage.png" alt="metadate subpage code example" className="mx-auto mt-4" />
        <div className="col-span-2 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold mb-2">What is metadata?</h2>
          <p>
            In web development, metadata provides additional details about a webpage. Metadata is not visible to the users visiting the page. Instead, it works behind the scenes, embedded within the page's HTML, usually within the <code>&lt;head&gt;</code> element. This hidden information is crucial for search engines and other systems that need to understand your webpage's content better.
          </p>
        </div>
        <div className="col-span-2 border-t border-gray-300 pt-4">
          <h2 className="text-2xl font-semibold mb-2">Why is metadata important?</h2>
            <p>
                Metadata plays a significant role in enhancing a webpage's SEO, making it more accessible and understandable for search engines and social media platforms. Proper metadata helps search engines effectively index webpages, improving their ranking in search results. Additionally, metadata like Open Graph improves the appearance of shared links on social media, making the content more appealing and informative for users.
            </p>
        </div>
      </div>
    </div>
  );
}
