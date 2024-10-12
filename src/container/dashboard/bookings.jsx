import React from "react";
import {
  FaDollarSign,
  FaShoppingCart,
  FaHourglassHalf,
  FaBolt,
} from "react-icons/fa";

const Bookings = () => {
  return (
    <div className="flex flex-col gap-10  w-full h-screen bg-gray-100">
      <div className="flex flex-col gap-10 p-[6%] ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-700">Hi, Tolulope</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaDollarSign size={40} className="text-3xl text-[#bf2180] mb-4" />
            <h2 className="text-2xl font-bold">$0</h2>
            <p className="text-gray-500">Your balance</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaShoppingCart size={40} className="text-3xl text-[#bf2180] mb-4" />
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-500">Total bookings</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaHourglassHalf size={40} className="text-3xl text-[#bf2180] mb-4" />
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-500">Pending invoices</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <FaBolt size={40} className="text-3xl text-[#bf2180] mb-4" />
            <h2 className="text-2xl font-bold">0</h2>
            <p className="text-gray-500">Total reviews</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
           <h1 className="text-[32px] font-bold">Recent Bookings</h1>
        
          </div>
      </div>
    </div>
  );
};

export { Bookings };
