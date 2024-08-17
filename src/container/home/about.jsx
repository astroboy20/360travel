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
      <div>
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Why Choose 360Travel?
        </h1>
        <p className="text-[16px] text-[#697488] leading-[30px]">
          Unlimited Adventures, Unmatched Savings – with 360Travel
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 ">
        <div className="flex flex-col gap-7 lg:gap-10">
          <p className="text-[16px] text-[#051036] leading-[30px]">
            At 360Travel.net, we go beyond booking trips—we craft personalized
            travel experiences tailored to your dreams. Our platform ensures the
            best prices, quick two-click booking, and 24/7 customer support.
            Enjoy up to 50% off on flights, hotels, and tours, making every
            journey unforgettable. We’re dedicated to transforming your travel,
            providing comfort and confidence wherever you go.
          </p>
          <Button className=" lg:hidden w-fit px-10 h-[50px] rounded-[13px] bg-[#0068ef] text-white font-medium flex gap-2 items-center ">
            Learn More <HiArrowUpRight width={"10px"} />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex items-center gap-5">
            <MdQuickreply size={"60px"} color="#7fb3f7" />{" "}
            <span>
              <h3 className="text-[18px] font-medium">Instant Booking</h3>
              <p className="text-[#697488] text-[16px]">
                Reserve with just two clicks.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <FaBusinessTime size={"60px"} color="#7fb3f7" />
            <span>
              <h3 className="text-[18px] font-medium">24/7 Support</h3>
              <p className="text-[#697488] text-[16px]">
                We solve any issue, any time.
              </p>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <TbCirclePercentageFilled size={"60px"} color="#7fb3f7" />
            <span>
              <h3 className="text-[18px] font-medium">Save up to 50%</h3>
              <p className="text-[#697488] text-[16px]">
                Discounts on flights, hotels, and tours.
              </p>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <PiCreditCardFill size={"60px"} color="#7fb3f7" />
            <span>
              <h3 className="text-[18px] font-medium">All Payment Methods</h3>
              <p className="text-[#697488] text-[16px]">
                From credit cards to cryptocurrency
              </p>
            </span>
          </div>
        </div>
      </div>

      <Button className="hidden lg:flex w-fit px-10 h-[50px] rounded-[13px] bg-[#0068ef] text-white font-medium  gap-2 items-center ">
        Learn More <HiArrowUpRight width={"10px"} />
      </Button>
    </main>
  );
};

export { About };
