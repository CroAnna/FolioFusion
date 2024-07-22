import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";

export default async function Home() {
  return (
    <main className="flex flex-col gap-24 mb-24">
      <Hero />
      <Pricing />
    </main>
  );
}
