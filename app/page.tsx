import { Hero01 } from "@/components/ncdai/hero-01";
import Image from "next/image";

export default function Home() {
  return (
      <main className="fixed inset-0 top-20 flex h-[80dvh] w-full items-center">
        <Hero01 />
      </main>
  );
}
