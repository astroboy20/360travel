import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Tour = () => {
    // const handleDateChange = (date) => {
    //     console.log("Selected date:", date)
    //   }
  return (
    <div className="flex flex-col gap-10 lg:gap-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-[20px] font-bold">
          Excursions Page Under Development
        </h1>
        <p className="text-[#051036]">
          In the meantime, you can choose any excursion on Viator and send us
          the link via our Telegram channel for booking. We will process your
          request promptly and confirm your booking.
        </p>
      </div>
      {/* <DatePicker/> */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 w-full">
        <Button className="w-full bg-[#008768] text-white hover:bg-[#1062fe] rounded-[13px] p-3 h-[50px] flex gap-1 items-center text-[16px] font-bold">
          <IoIosSearch /> Viator.com
        </Button>
        <Button className="w-full bg-[#1062fe] text-white hover:bg-[#1062fe] rounded-[13px] p-3 h-[50px] flex gap-1 items-center text-[16px] font-bold">
          <FaTelegramPlane /> Telegram
        </Button>
      </div>
    </div>
  );
};

export { Tour };
