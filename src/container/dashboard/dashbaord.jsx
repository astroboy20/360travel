"use client";
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Zap, HourglassIcon } from "lucide-react";
import { BsHourglass } from "react-icons/bs";
import { Content } from "./content";

const dashboardItems = [
  { icon: DollarSign, label: "Your balance", value: "$0" },
  { icon: ShoppingCart, label: "Total bookings", value: "0" },
  { icon: HourglassIcon, label: "Pending invoices", value: "0" },
  { icon: Zap, label: "Total reviews", value: "0" },
];

const Dashboard = () => {
  return (
    <div className="p-[6%] flex flex-col gap-10">
     <Content/>
      <div className="bg-white p-6 h-[300px] rounded-lg shadow-md flex flex-col">
        <h1 className="text-2xl font-bold">Recent Searches</h1>
      </div>
    </div>
  );
};

export { Dashboard };
