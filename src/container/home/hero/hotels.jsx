"use client";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { FiUser } from "react-icons/fi";
import { useFetchItems } from "@/container/hooks/useFetchItems";
import { ClipLoader } from "react-spinners";

const Hotels = () => {
  const [cities, setCities] = useState("");
  const { data, isLoading } = useFetchItems({
    url: `https://360.futamart.com/cities?query=${cities}`,
  });
  console.log(data?.name);
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 ">
          <div>
            <p className="text-[12px]">City Name</p>
            <div className="flex gap-2 border w-full items-center p-3 rounded-[13px]">
              <CiLocationOn size={"30px"} color="#bf2180" />
              <input
                className="outline-none w-full"
                placeholder = "Search by city"
                type="text"
                value={cities}
                onChange={(e) => setCities(e.target.value)}
              />
              {isLoading && (
                <ClipLoader size={20}/>
              ) }
            </div>
          </div>

          <div>
            <p className="text-[12px]">Traveller</p>
            <div className="flex gap-2 border w-full items-center p-3 rounded-[13px]">
              <FiUser size={"30px"} color="#bf2180" />
              <input className="outline-none w-full" />
              <span className="flex items-center justify-center rounded-full border border-black p-1">
                <SlArrowDown size={"15px"} color="#bf2180" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:flex-row gap-2 lg:1/2">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkin</p>
              <DatePicker />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkout</p>
              <DatePicker />
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] flex items-center gap-2 text-[12px] justify-center">
              <IoIosSearch size={20} />
              Find your Hotel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hotels };
