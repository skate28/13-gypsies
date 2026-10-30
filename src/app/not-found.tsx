import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-coal px-5 pt-24 text-center text-paper">
      <p className="font-slab text-7xl text-coral">404</p>
      <p className="mt-4 text-lg">That page isn&apos;t on the menu.</p>
      <Link href="/" className="mt-6 rounded-full bg-coral px-6 py-3 font-semibold">Back to 13 Gypsies</Link>
    </main>
  );
}
