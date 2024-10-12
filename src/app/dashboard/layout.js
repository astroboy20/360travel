import { SideBar } from "@/container/dashboard/side-bar";

export const metadata = {
  title: "GalaxyTravel",
  description:
    "Explore the world with GalaxyTravel - your gateway to unforgettable adventures and seamless travel experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= "flex justify-between mt-[120px] lg:mt-[80px]">
        <SideBar/>
          <main className="w-full lg:ml-64 h-screen overflow-auto">{children}</main>
            
      </body>
    </html>
  );
}
