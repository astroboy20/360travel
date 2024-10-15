import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FlightContainer } from "@/container/flight/flight";

export default function Home() {
  return (
    <main className="">
      <Header />
      <FlightContainer />
      <Footer />
    </main>
  );
}
