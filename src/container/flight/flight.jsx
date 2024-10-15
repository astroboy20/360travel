"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Flight } from "../home/hero/flight";

const FlightContainer = () => {
  const [selected, setSelected] = useState("hotel");
  const handleSelected = (option) => {
    setSelected(option);
  };

  return (
    <div className=" bg-[url('/images/hero-bg.png')] h-[650px] lg:h-[400px] flex justify-between w-full">
      <div className="flex items-center justify-center w-[95%] mx-[2.5%] lg:w-1/2 lg:mx-[25%] ">
        <Card className="border-2 border-[#E6D2E8]  shadow-[0_0_40px_0,rgba(230,210,232,1)] rounded-[13px] lg:p-[3%]  p-[5%] w-full  flex flex-col gap-10">
          <Flight />
        </Card>
      </div>
    </div>
  );
};

export { FlightContainer };
