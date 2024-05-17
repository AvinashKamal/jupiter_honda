import Image from "next/image";
import Hero from "./ui/homepage/sections/Hero";
import Stock from "./ui/homepage/sections/Stock";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[1296px] justify-center mx-auto p-16 lg:p-16">
      {/* Hero Section */}
      <Hero />
      <Stock />
    </main>
  );
}
