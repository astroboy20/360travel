import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { FiUser } from "react-icons/fi";

const Hotels = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 ">
          <div>
            <p className="text-[12px]">City Name</p>
            <div className="flex gap-2 border w-full items-center p-3 rounded-[13px]">
              <CiLocationOn size={"30px"} color="#bf2180" />
              <input className="outline-none w-full" />
              <span className="flex items-center justify-center rounded-full border border-black p-1">
                <SlArrowDown size={"15px"} color="#bf2180" />
              </span>
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
              {/* <input type="date" className="border w-full p-3 rounded-[13px]" /> */}
              <DatePicker />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkout</p>
              {/* <input type="date" className="border w-full p-3 rounded-[13px]" /> */}
              <DatePicker />
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] flex items-center justify-center">
              <IoIosSearch />
              Find your Hotel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hotels };
