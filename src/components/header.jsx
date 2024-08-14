"use client";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("usd");

  const optionData = [
    { id: 1, name: "usd", url: "currency-USD" },
    { id: 2, name: "gbp", url: "currency-GBP" },
    { id: 3, name: "sar", url: "currency-SAR" },
    { id: 4, name: "eur", url: "currency-EUR" },
    { id: 5, name: "pkr", url: "currency-PKR" },
    { id: 6, name: "jpy", url: "currency-JPY" },
    { id: 7, name: "inr", url: "currency-INR" },
    { id: 8, name: "cny", url: "currency-CNY" },
    { id: 9, name: "try", url: "currency-TRY" },
    { id: 10, name: "irr", url: "currency-IRR" },
  ];

  const handleSelect = (name) => {
    setSelectedOption(name);
    setIsOpen(false);
  };

  return (
    <header>
      <div className="bg-[#3554D1] text-white flex justify-between items-center py-[1%] px-[2%] text-[0.75rem]">
        <p className="flex gap-5">
          +1234567890 <span>|</span> support@360travel.net
        </p>

        <div className="flex items-center gap-5">
          <div className="relative">
            <div
              className={`bg-transparent text-white  hover:bg-[#cecece] rounded-[8px] p-2 flex items-center justify-between w-fit cursor-pointer ${
                isOpen ? "border-2 text-white" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption.toUpperCase()}
              <FaAngleDown color="white" className="ml-2" />
            </div>
            {isOpen && (
              <div className="absolute flex flex-col gap-3 p-5 mt-1 bg-white text-black border border-[#3554D1] rounded-[10px] w-fit z-10">
                {optionData.map((data) => (
                  <div
                    key={data.id}
                    className="px-5 py-2  hover:bg-gray-100 active:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(data.name)}
                  >
                    {data.name.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span>|</span>
          <FaFacebookF size={"15px"} />
          <FaTwitter size={"15px"} />
          <AiFillInstagram size={"15px"} />
          <FaTelegramPlane size={"15px"} />
        </div>
      </div>
      <div className="flex justify-between items-center py-[1%] px-[2%] bg-[eef0fb]">
        <div className="flex items-center gap-20">
          <h1 className="text-[40px] ">360Travels</h1>
          <div className="flex gap-5 text-[15px] text-[#051036]">
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Hotels
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Flights
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Tours
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Blog
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Contact Us
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Company
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href={"/"}
            className="bg-[#0068ef] text-white rounded-[13px] px-[30px] py-[14px] text-[14px] hover:bg-[#3554d1] hover:transition-all"
          >
            Register
          </Link>
          <Link
            href={"/"}
            className="border border-[#0068ef] text-[#0068ef] rounded-[13px] px-[30px] py-[14px] text-[14px] hover:bg-[#3554d1] hover:text-white hover:transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
