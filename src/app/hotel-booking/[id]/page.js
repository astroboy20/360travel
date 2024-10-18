"use client"
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HotelDetailView } from "@/container/hotels/hotel-details";
import {useRouter, useParams} from "next/navigation"
export default function Home() {
const params  = useParams()

const {id} = params
console.log("id",id)

  return (
    <main className="">
      <Header />
      <HotelDetailView id={id}/>
      <Footer />
    </main>
  );
}
