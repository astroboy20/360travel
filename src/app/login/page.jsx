import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Login } from "@/container/auth/login";

export default function Page() {
  return (
    <main>
      <Header />
      <Login />
      <Footer />
    </main>
  );
}
