import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      Welcome
      <Link href="builder/create-hero">
        <button className="btn btn-primary">Na buildera</button>
      </Link>
    </main>
  );
}
