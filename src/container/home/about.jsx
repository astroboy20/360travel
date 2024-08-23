import { Button } from "@/components/ui/button";
import React from "react";
import { PiCreditCardFill } from "react-icons/pi";
import { FaBusinessTime } from "react-icons/fa";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { MdQuickreply } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

const About = () => {
  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] flex flex-col gap-7 lg:gap-10 bg-[#f7f9fc]">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-[26px] lg:text-[34px] font-bold leading-tight text-[#051036]">
          Why 360Travel?
        </h1>
        <p className="text-[16px] lg:text-[18px] text-[#697488] mt-2 lg:mt-4 leading-relaxed">
          Travel on your terms – extraordinary, affordable, unforgettable.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex flex-col gap-7 lg:gap-10 max-w-lg mx-auto lg:mx-0">
          <p className="text-[16px] lg:text-[16px] text-[#051036] leading-relaxed">
            At 360Travel, we believe travel is more than a destination—it's a
            way of life. We’re not just here to get you from point A to point B;
            we’re here to make the journey as remarkable as the destination
            itself. Imagine exploring the world without breaking the bank,
            booking your dream trip in seconds, and knowing that support is just
            a tap away, no matter where you are. With savings up to 50%, why
            settle for ordinary when extraordinary is within reach?
          </p>
          <Button className="lg:hidden w-full px-10 h-[50px] rounded-[13px] bg-[#bf2180] text-white font-medium flex justify-center items-center gap-2">
            Start Your Journey <HiArrowUpRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <MdQuickreply size={"50px"} className="text-[#bf2180]" />
            <div>
              <h3 className="text-[16px] lg:text-[16px] font-medium text-[#051036]">
                Book in a Blink
              </h3>
              <p className="text-[#697488] text-[16px] lg:text-[16px] leading-relaxed">
                Two clicks and you’re set. Simple, fast, done.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <FaBusinessTime size={"50px"} className="text-[#bf2180]" />
            <div>
              <h3 className="text-[16px] lg:text-[16px] font-medium text-[#051036]">
                Always-On Support
              </h3>
              <p className="text-[#697488] text-[16px] lg:text-[16px] leading-relaxed">
                Help is at your fingertips 24/7, wherever you go.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <TbCirclePercentageFilled size={"50px"} className="text-[#bf2180]" />
            <div>
              <h3 className="text-[16px] lg:text-[16px] font-medium text-[#051036]">
                Maximize Your Savings
              </h3>
              <p className="text-[#697488] text-[16px] lg:text-[16px] leading-relaxed">
                Stretch your budget further with deals up to 50% off.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <PiCreditCardFill size={"50px"} className="text-[#bf2180]" />
            <div>
              <h3 className="text-[16px] lg:text-[16px] font-medium text-[#051036]">
                Pay Your Way
              </h3>
              <p className="text-[#697488] text-[16px] lg:text-[16px] leading-relaxed">
                Choose how you pay—credit, crypto, and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action for Larger Screens */}
      <Button className="hidden lg:flex w-full lg:w-auto mx-auto lg:mx-auto px-10 h-[50px] rounded-[13px] bg-[#bf2180] text-white font-medium gap-2 items-center">
        Start Your Journey <HiArrowUpRight className="w-5 h-5" />
      </Button>
    </main>
  );
};

export { About };
