import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honorary mentions",
};

export default function Honorarypage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Honorary mentions</h1>
        <p className="text-lg mt-2">Information, sources, documentation & guides.</p>
      </header>

      
      <div className="grid grid-cols-5 gap-4 my-8">
        <div className="col-span-3 col-start-2">
          <div className="mb-2 font-semibold text-lg">App router metadata, chapter 16</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://nextjs.org/learn/dashboard-app/adding-metadata</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">Metadata and OG images</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://nextjs.org/docs/app/getting-started/metadata-and-og-images</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">generateMetadata, Nedarvning af meta data</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://nextjs.org/docs/app/api-reference/functions/generate-metadata</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">Programming robots.ts</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">Programming sitemap.ts</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">How Do I Optimise My Website For Easier Crawling?</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://www.hikeseo.co/learn/technical/crawling</li>
          </ul>
          <div className="mb-2 font-semibold text-lg">Googlebot</div>
          <ul className="list-disc pl-6 mb-4">
            <li>https://developers.google.com/search/docs/crawling-indexing/googlebot</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
