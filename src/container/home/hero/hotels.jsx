import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoManOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
const Hotels = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <span>
          <p>City Name</p>
          <div className="flex gap-2 border w-full items-center p-3 rounded-[10px]">
            <CiLocationOn />
            <input className="outline-none w-full" />
            <span>
              <SlArrowDown />
            </span>
          </div>
        </span>

        <span>
          <p>Traveller</p>
          <div className="flex gap-2 border w-full items-center p-3 rounded-[10px]">
            <IoManOutline />
            <input className="outline-none w-full" />
            <span>
              <SlArrowDown />
            </span>
          </div>
        </span>

        <div className="flex gap-4 col-span-2 items-end">
          <span>
            <p>Checkin</p>
            <input type="date" className="w-fit border p-3 rounded-[10px]" />
          </span>
          <span>
            <p>Checkout</p>
            <input type="date" className="w-fit border p-3 rounded-[10px]" />
          </span>
          <span>
          <p></p>
          <Button className="w-full px-[30px] py-[25px] flex items-center justify-center">
            <IoIosSearch />
            Find your Hotel
          </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export { Hotels };
