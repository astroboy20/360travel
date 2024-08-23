import { Button } from "@/components/ui/button";
import React from "react";
import { PiCreditCardFill } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { MdQuickreply } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

const About = () => {
  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] flex flex-col gap-7 lg:gap-10">
      <div className="text-center">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Why 360Travel?
        </h1>
        <p className="text-[16px] text-[#697488] leading-[30px]">
          Travel on your terms – extraordinary, affordable, unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex flex-col gap-7 lg:gap-10">
          <p className="text-[16px] text-[#051036] leading-[30px]">
            At 360Travel, we believe travel is more than a destination—it's a
            way of life. We’re not just here to get you from point A to point B;
            we’re here to make the journey as remarkable as the destination
            itself. Imagine exploring the world without breaking the bank,
            booking your dream trip in seconds, and knowing that support is just
            a tap away, no matter where you are. With savings up to 50%, why
            settle for ordinary when extraordinary is within reach?
          </p>
          <Button className="lg:hidden w-fit px-10 h-[50px] rounded-[13px] bg-[#bf2180] text-white font-medium flex gap-2 items-center">
            Start Your Journey <HiArrowUpRight width={"10px"} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex items-center gap-5">
            <MdQuickreply size={"60px"} color="#E6D2E8" />{" "}
            <span>
              <h3 className="text-[18px] font-medium">Book in a Blink</h3>
              <p className="text-[#697488] text-[16px]">
                Two clicks and you’re set. Simple, fast, done.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FaBusinessTime size={"60px"} color="#E6D2E8" />
            <span>
              <h3 className="text-[18px] font-medium">Always-On Support</h3>
              <p className="text-[#697488] text-[16px]">
                Help is at your fingertips 24/7, wherever you go.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <TbCirclePercentageFilled size={"60px"} color="#E6D2E8" />
            <span>
              <h3 className="text-[18px] font-medium">Maximize Your Savings</h3>
              <p className="text-[#697488] text-[16px]">
                Stretch your budget further with deals up to 50% off.
              </p>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <PiCreditCardFill size={"60px"} color="#E6D2E8" />
            <span>
              <h3 className="text-[18px] font-medium">Pay Your Way</h3>
              <p className="text-[#697488] text-[16px]">
                Choose how you pay—credit, crypto, and beyond.
              </p>
            </span>
          </div>
        </div>
      </div>

      <Button className="hidden lg:flex w-fit px-10 h-[50px] rounded-[13px] bg-[#bf2180] text-white font-medium gap-2 items-center">
        Start Your Journey <HiArrowUpRight width={"10px"} />
      </Button>
    </main>
  );
};

export { About };
