import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/container/home/hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
