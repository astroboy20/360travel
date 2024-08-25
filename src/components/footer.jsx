import React from "react";
import { GrApple } from "react-icons/gr";
import { BiLogoPlayStore } from "react-icons/bi";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaAngleDown,
  FaCaretDown,
} from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Button } from "./ui/button";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-[#bf2180] px-[10%] text-white py-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 py-[5%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[20px] lg:text-[50px]">GalaxyTravel</h1>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[14px]">Toll Free Customer Care</p>
              <p className="text-[16px] lg:text-[18px]">+852-1264-5524</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px]">Need live support?</p>
              <p className="text-[16px] lg:text-[18px]">
                support@GalaxyTravel.net
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p>Your all-in-one travel app</p>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="flex gap-3 w-fit rounded-[16px] px-10 py-3 items-center bg-[#ffffff1A]">
                <GrApple size={"35px"} />
                <p className="text-[15px]">
                  {" "}
                  Soon on <br className="hidden lg:block" /> Apple{" "}
                  <br className="hidden lg:block" /> Store
                </p>
              </div>
              <div className="flex gap-3 w-fit rounded-[16px] px-10 py-3 items-center bg-[#ffffff1A]">
                {" "}
                <BiLogoPlayStore size={"35px"} />
                <p className="text-[15px]">
                  Soon on <br className="hidden lg:block" /> Google{" "}
                  <br className="hidden lg:block" /> Play
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p>Follow us on social media</p>
            <div className="flex gap-3">
              <FaFacebookF size={"15px"} />
              <FaTwitter size={"15px"} />
              <AiFillInstagram size={"15px"} />
              <FaTelegramPlane size={"15px"} />
            </div>
            <p className="text-[12px] lg:text-[14px]">
              {" "}
              © 2022-2024 GalaxyTravel All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p> Get Updates & More</p>
          <div>
            <div className="flex gap-3 items-center bg-white px-3 py-2 rounded-[13px]">
              <MdOutlineMail color="#bf2180" size={"30px"} />
              <input
                placeholder="Enter your email"
                className="bg-transparent w-full outline-none text-black text-[13px]"
              />
              <Button className="rounded-[10px] bg-[#bf2180] text-[15px]">
                Subscribe
              </Button>
            </div>
            <p className="text-[#ffffff80] flex gap-2 items-center text-[12px] lg:text-[14px]">
              <IoLockClosedOutline /> Don't worry your information is safe with
              us Our Products Hotels
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p> Our Products</p>
              <p> Hotels</p>
              <p> Flights</p>
              <p> Tours</p>
            </div>
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p>About GalaxyTravel</p>
              <p>About Us</p>
              <p>Contact Us</p>
              <p>FAQ</p>
            </div>
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p>Partner with GalaxyTravel</p>
              <p>partner@GalaxyTravel.net</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex justify-between py-2">
        <li className="tetx-[14px]">Policy and Terms</li>
        <Image
          src={"/images/payment.png"}
          width={100}
          height={21}
          alt="payment"
        />
      </div>
    </footer>
  );
};

export { Footer };
