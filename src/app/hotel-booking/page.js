import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import  { HotelsList } from "@/container/hotels/hotel-booking";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HotelsList />
      <Footer />
    </main>
  );
}
