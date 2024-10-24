import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Dashboard } from "@/container/dashboard/dashbaord";
import { Payment } from "@/container/dashboard/payment";
// import { Dashbaord } from "@/container/dashboard/dashbaord";

export default function Page() {
  return (
    <main>
      {/* <Header />
      <Dashboard /> */}
      <Payment/>
      {/* <Footer /> */}
    </main>
  );
}
