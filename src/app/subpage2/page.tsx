'use client';

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
            This image shows the <code>robots.ts</code> file. 
            Here you can see how the robots.txt rules are set up for the site, controlling which pages search engines can crawl. 
            The <code>robots.txt</code> is generated dynamically by the Next.js application, allowing for flexible and easy management of search engine indexing rules.
            </p>
        </div>
        <img src="/sitemap-xml.png" alt="sitemap.ts file" className="mx-auto mt-4" />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About the Code</h2>
            <p className="text-lg">
            This image shows the <code>robots.ts</code> file. 
            Here you can see how the robots.txt rules are set up for the site, controlling which pages search engines can crawl. 
            The <code>robots.txt</code> is generated dynamically by the Next.js application, allowing for flexible and easy management of search engine indexing rules.
            </p>
        </div>
      </div>
    </div>
  );
}
