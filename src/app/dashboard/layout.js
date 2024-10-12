// import { SideBar } from "@/container/dashboard/side-bar";

import { Header } from "@/container/dashboard/header";
import { Sidebar } from "@/container/dashboard/side-bar";

export const metadata = {
  title: "GalaxyTravel",
  description:
    "Explore the world with GalaxyTravel - your gateway to unforgettable adventures and seamless travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#f9e9f2]">
    <Sidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f9e9f2]">
        {children}
      </main>
    </div>
  </div>
  );
}
