import UrlShortenerContainer from "@/components/url-shortener-container";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24 space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">URL Minimizer</h1>
        <p className="md:text-lg">Shrink, simplify, and share your links with URL Minimizer!</p>
      </div>
      <UrlShortenerContainer />     

    </main>
  );
}
