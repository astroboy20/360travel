import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import FlightSearchResults from "@/container/flight/flight-booking";

export default function Home() {
  return (
    <main className="">
      <Header />
      <FlightSearchResults />
      <Footer />
    </main>
  );
}
