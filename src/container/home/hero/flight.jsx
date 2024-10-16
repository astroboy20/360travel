"use client";
import React, { useState } from "react";
import { PiAirplaneTakeoffThin, PiAirplaneLandingThin } from "react-icons/pi";
import { FaExchangeAlt } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { IoIosSearch } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/date-picker";

const Flight = () => {
  const [way, setWay] = useState("one-way"); 

  const onWayChange = (e) => {
    setWay(e.target.value);
  };

  // const handleSubmit= ()=>{

  // }

  return (
    <main className="flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4 gap-5">
        <div className="flex justify-between lg:justify-normal gap-5">
     
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              value="one-way"
              checked={way === "one-way"}
              onChange={onWayChange}
            />
            <label className="text-[14px] font-bold">One-way</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              value="two-way"
              checked={way === "two-way"}
              onChange={onWayChange}
            />
            <label className="text-[14px] font-bold">Round trip</label>
          </div>
        </div>

        <Select className="outline-none">
          <SelectTrigger className="w-full lg:w-fit rounded-full text-[12px] ring-0 focus:ring-0 focus:outline-none px-3 py-2 ">
            <SelectValue placeholder="Select flight type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Economy">Economy</SelectItem>
            <SelectItem value="Economy Premium">Economy Premium</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="First">First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row gap-2 w-full">
          <div className="relative flex flex-col lg:flex-row items-center w-full lg:w-3/5">
            <div className="w-full lg:flex-1">
              <label className="block text-sm mb-1 text-[12px]">
                Flying From
              </label>
              <div className="border p-3 flex gap-2 items-center rounded-[13px] w-full">
                <PiAirplaneTakeoffThin size={"20px"} color="#bf2180" />
                <input
                  className="outline-none w-full text-[12px]"
                  placeholder="Flying From"
                />
              </div>
            </div>

            <span className="absolute z-10 border-2 bg-white text-black rounded-full flex items-center justify-center p-1.5 left-[70%] lg:left-1/2 top-[60%] lg:top-[70%] transform -translate-x-1/2 -translate-y-1/2">
              <FaExchangeAlt size={"10px"} />
            </span>

            <div className="w-full lg:flex-1">
              <label className="block text-sm mb-1 text-[12px]">
                To Destination
              </label>
              <div className="border p-3 flex gap-2 items-center rounded-[13px] w-full">
                <PiAirplaneLandingThin
                  size={"20px"}
                  style={{ marginLeft: "10px" }}
                  color="#bf2180"
                />
                <input
                  className="outline-none w-full text-[12px]"
                  placeholder="To Destination"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <label className="block text-sm mb-1 text-[12px]">Passengers</label>
            <div className="border p-3 flex gap-2 items-center rounded-[13px] w-full ">
              <FiUser size={"25px"} color="#bf2180" />
              <input
                className="outline-none w-full text-[12px]"
                placeholder="Number of Passengers"
              />
              <span className="flex items-center justify-center rounded-full border border-black p-1">
                <SlArrowDown size={"15px"} color="#bf2180" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <span className="w-full lg:w-1/2">
            <label className="text-[12px]">Departure Date</label>
            <DatePicker />
          </span>

          {way === "two-way" && (
            <span className="w-full lg:w-1/2">
              <label className="text-[12px]">Return Date</label>
              <DatePicker />
            </span>
          )}

          <div className="mt-auto w-full lg:w-1/2">
            <Button className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] text-[12px] flex gap-2 items-center justify-center">
              <IoIosSearch size={20} />
              Find your Flight
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Flight };
