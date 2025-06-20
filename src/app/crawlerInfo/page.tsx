import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crawling",
};

export default function Crawlingpage() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Crawling, what is it?</h1>
      </header>

      <div className="grid grid-cols-5 gap-4 my-8">
        <p className="col-span-3 col-start-2 text-lg italic">
            Website crawling is the automated process of systematically browsing and downloading content from website pages, typically for indexing and analyzing the website's content. In this article, you will learn how website crawling works and why it's important for your website's SEO.
        </p>
      </div>
    </div>
  );
}