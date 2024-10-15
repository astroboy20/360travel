import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/container/home/about";
import { Blog } from "@/container/home/blog";
import { Deals } from "@/container/home/deals";
import { FAQ } from "@/container/home/faqs";
import Hero from "@/container/home/hero/hero";
import { Price } from "@/container/home/price-about";
import { Promo } from "@/container/home/promo";
import { Testimonials } from "@/container/home/testimonials";
import { HotelContainer } from "@/container/hotels/hotel";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HotelContainer />
      <Footer />
    </main>
  );
}