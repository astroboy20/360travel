import { ReactQueryClientProvider } from "@/provider/provider";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "GalaxyTravel",
  description:
    "Explore the world with GalaxyTravel - your gateway to unforgettable adventures and seamless travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReactQueryClientProvider>
          <ChakraProvider toastOptions={{ defaultOptions: { position: 'top' } }}>{children}</ChakraProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
