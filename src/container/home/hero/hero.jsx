"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Hotels } from "./hotels";
import { Flight } from "./flight";
import { Tour } from "./tour";
import { LuHotel } from "react-icons/lu";
import { BsAirplane } from "react-icons/bs";
import { LiaToolboxSolid } from "react-icons/lia";

const Hero = () => {
  const [selected, setSelected] = useState("hotel");
  const handleSelected = (option) => {
    setSelected(option);
  };

  return (
    <div className=" bg-[url('/images/hero-bg.png')] h-[650px] lg:h-[400px] flex justify-between w-full">
      <div className="flex items-center justify-center w-[95%] mx-[2.5%] lg:w-1/2 lg:mx-[25%] ">
        <Card className="border-2 border-[#E6D2E8]  shadow-[0_0_40px_0,rgba(230,210,232,1)] rounded-[13px] lg:p-[3%]  p-[5%] w-full  flex flex-col gap-10">
          <div className="flex gap-1 items-center">
            <Button
              onClick={() => handleSelected("hotel")}
              className={`text-[14px] lg:text-[16px] flex items-center gap-2  rounded-[10px] px-[10px] py-[5px] lg:p-[20px]  hover:bg-[#bf2180] hover:text-white ${
                selected === "hotel"
                  ? "border-0 bg-[#bf2180] text-white"
                  : "border border-[#bf2180] text-[#bf2180] bg-[#f9e9f2] "
              }`}
            >
              <LuHotel size={"20px"} /> Hotel
            </Button>
            <Button
              onClick={() => handleSelected("flight")}
              className={`text-[14px] lg:text-[18px] flex items-center gap-2 rounded-[10px] py-[5px] lg:p-[20px] hover:bg-[#bf2180] hover:text-white ${
                selected === "flight"
                  ? "border-0 bg-[#bf2180] text-white"
                  : "border border-[#bf2180] text-[#bf2180] bg-[#f9e9f2] "
              }`}
            >
              <BsAirplane size={"20px"} /> Flights
            </Button>
            <Button
              onClick={() => handleSelected("tour")}
              className={`text-[14px] lg:text-[18px] flex items-center gap-2  rounded-[10px] py-[5px] lg:p-[20px] hover:bg-[#bf2180] hover:text-white ${
                selected === "tour"
                  ? "border-0 bg-[#bf2180] text-white"
                  : "border  border-[#bf2180] text-[#bf2180] bg-[f9e9f2] "
              }`}
            >
              <LiaToolboxSolid size={"20px"} /> Tours
            </Button>
          </div>
          {selected === "hotel" && <Hotels />}
          {selected === "flight" && <Flight />}
          {selected === "tour" && <Tour />}
        </Card>
      </div>
    </div>
  );
};

export default Hero;
