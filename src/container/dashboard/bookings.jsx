import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaHourglassHalf,
  FaBolt,
} from "react-icons/fa";
import { Content } from "./content";

const Bookings = () => {
  return (
    <div className="p-[6%] flex flex-col gap-10">
    <Content/>
     <div className="bg-white p-6 h-[300px] rounded-lg shadow-md flex flex-col">
       <h1 className="text-2xl font-bold">Recent Bookings</h1>

       
     </div>
   </div>
  );
};

export { Bookings };
