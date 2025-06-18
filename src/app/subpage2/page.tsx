import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap.ts",
};

export default function Subpage2() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to "sitemap" page.</h1>
        <p className="text-lg mt-2">Images of the code, simple as that</p>
      </header>
       <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
        <img src="/sitemap-snippet.png" alt="sitemap.ts file" className="mx-auto mt-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About the Code</h2>
            <p className="text-lg">
              This code defines a dynamic sitemap generator for a Next.js application using the App Router. It exports a function called sitemap that returns an array of objects, each representing a URL entry for your sitemap.
              Each object includes:
              <ul className="list-disc pl-6 mt-4 mb-4">
                <li><code>url</code>: The full URL of the page.</li>
                <li><code>lastModified</code>: The date the page was last modified, set to the current date and time with <code>new Date()</code>.</li>
                <li><code>changeFrequency</code>: How often the content at the URL is likely to change (e.g., 'daily', 'weekly', 'monthly').</li>
                <li><code>priority</code>: The priority of this URL relative to other pages (from 0.0 to 1.0).</li>
                <li><code>images</code> (optional): An array of image URLs associated with the page, which can help search engines index images.</li>
              </ul>
              The function's return type, MetadataRoute.Sitemap, ensures the structure matches what Next.js expects for generating a sitemap.xml file. This allows your sitemap to be generated dynamically and always up to date.
            </p>
        </div>
        <img src="/sitemap-xml.png" alt="sitemap.ts file" className="mx-auto mt-4" />
          
      </div>
    </div>
  );
}
