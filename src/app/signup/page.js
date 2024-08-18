import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Register } from "@/container/auth/register";

export default function Page() {
  return (
    <main>
      <Header />
      <Register />
      <Footer />
    </main>
  );
}
