import React from "react";
import Link from "next/link";
import {
  FaCompass,
  FaHistory,
  FaWallet,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="hidden bg-gray-50 w-64 h-screen  lg:flex flex-col justify-between shadow-lg fixed overflow-y-hidden p-[3%]">
      <div>
        <ul className="space-y-8">
          <li>
            <Link href="/dashboard" className="flex items-center text-black">
              <FaCompass className="mr-4" size={25} color="#bf2180"/> Overview
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/bookings"
              className="flex items-center text-black"
            >
              <FaHistory className="mr-4" size={25} color="#bf2180"/> My Bookings
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/wallet"
              className="flex items-center text-black"
            >
              <FaWallet className="mr-4" size={25} color="#bf2180"/> Wallet & Payment
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/settings"
              className="flex items-center text-black"
            >
              <FaCog className="mr-4" size={25} color="#bf2180"/> Account Settings
            </Link>
          </li>
          <div>
            <Link href="/logout" className="flex items-center text-black">
              <FaSignOutAlt className="mr-4" size={25} color="#bf2180"/> Logout
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export { SideBar };
