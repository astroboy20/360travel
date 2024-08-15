"use client";
import React, { useState } from "react";
import Image from "next/image";
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
    <div className="py-[2%] px-[6%] bg-[#eceffb] flex justify-between">
      <div className="flex flex-col gap-10">
        <div className="uppercase text-[50px] font-[800] flex flex-col">
          <span className="leading-[72.5px]">Unforgettable trips</span>
          <span className="leading-[25px] text-[#3563ed]">
            unbeatable prices
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <Button
              onClick={() => handleSelected("hotel")}
              className={`text-[16px] flex items-center gap-3  rounded-[10px] px-[25px] py-[25px] hover:bg-[#287dfa] hover:text-white ${
                selected === "hotel"
                  ? "border-0 bg-[#287dfa] text-white"
                  : "border-2 border-[#287dfa] text-[#287dfa] bg-[#e8f2ff] "
              }`}
            >
              <LuHotel size={"20px"}/> Hotel
            </Button>
            <Button
              onClick={() => handleSelected("flight")}
              className={`text-[18px] flex items-center gap-3 rounded-[10px] px-[25px] py-[25px] hover:bg-[#287dfa] hover:text-white ${
                selected === "flight"
                  ? "border-0 bg-[#287dfa] text-white"
                  : "border-2 border-[#287dfa] text-[#287dfa] bg-[#e8f2ff] "
              }`}
            >
              <BsAirplane size={"20px"}/> Flights
            </Button>
            <Button
              onClick={() => handleSelected("tour")}
              className={`text-[16px] flex items-center gap-3  rounded-[10px] px-[25px] py-[25px] hover:bg-[#287dfa] hover:text-white ${
                selected === "tour"
                  ? "border-0 bg-[#287dfa] text-white"
                  : "border-2  border-[#287dfa] text-[#287dfa] bg-[#e8f2ff] "
              }`}
            >
              <LiaToolboxSolid size={"20px"}/> Tours
            </Button>
          </div>
          <div>
            <Card className="shadow-[0_0_40px_0,rgba(82,85,90,0.1)] rounded-[13px] p-[5%]">
              {selected === "hotel" && <Hotels />}
              {selected === "flight" && <Flight />}
              {selected === "tour" && <Tour />}
            </Card>
          </div>
        </div>
      </div>
      <Image src={"/images/hero.png"} width={500} height={500} />
    </div>
  );
};

export default Hero;
