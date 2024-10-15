import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import FlightSearchResults from "@/container/flight/flight-booking";
import HotelSearchResults from "@/container/hotels/hotel-booking";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HotelSearchResults />
      <Footer />
    </main>
  );
}
