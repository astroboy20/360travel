"use client"
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ShoppingCart, Zap, HourglassIcon } from "lucide-react";
import { BsHourglass } from "react-icons/bs";


const dashboardItems = [
  { icon: DollarSign, label: "Your balance", value: "$0" },
  { icon: ShoppingCart, label: "Total bookings", value: "0" },
  { icon: HourglassIcon, label: "Pending invoices", value: "0" },
  { icon: Zap, label: "Total reviews", value: "0" },
];

 const Dashboard = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg bg-white shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-[#bf2180]" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="truncate text-sm font-medium text-gray-500">
                      {item.label}
                    </dt>
                    <dd>
                      <div className="text-lg font-medium text-gray-900">
                        {item.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export {Dashboard}
