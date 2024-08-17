import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/container/home/about";
import Hero from "@/container/home/hero/hero";
import { Price } from "@/container/home/price-about";
import { Promo } from "@/container/home/promo";
import { Testimonials } from "@/container/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About/>
      <Price/>
      <Promo/>
      <Testimonials/>
      <Footer />
    </main>
  );
}
