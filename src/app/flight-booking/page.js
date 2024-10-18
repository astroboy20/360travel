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

// {childrenCount >= 1 && (
//   <div className="flex-flex-col gap-2 p-2">
//     <p className="p-2 font-bold">Child age</p>
//     <div className="grid grid-cols-2 gap-3">
//       {Array.from({ length: childrenCount }).map((_, index) => (
//         <Select
//           key={index}
//           onValueChange={(value) => handleChildAgeChange(index, value)} // Capture the selected age
//         >
//           <SelectTrigger className="w-full">
//             <SelectValue
//               placeholder={`Age of child ${index + 1}`}
//             />
//           </SelectTrigger>
//           <SelectContent>
//             {[...Array(17).keys()].map((age) => (
//               <SelectItem key={age} value={age.toString()}>
//                 {age}
//               </SelectItem>
//             ))}
//           </SelectContent>
//         </Select>
//       ))}
//     </div>
//   </div>
// )}
