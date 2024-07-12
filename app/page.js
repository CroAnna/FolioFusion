import Link from "next/link";
import Hero from "./_components/Hero";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
    </main>
  );
}
