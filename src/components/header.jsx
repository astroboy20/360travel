"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
  FaAngleDown,
  FaCaretDown,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("usd");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSelect = (name) => {
    setSelectedOption(name);
    setIsOpen(false);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div
        className={`flex justify-between items-center py-[10%] px-[6%]  lg:py-[1%] lg:px-[2%] fixed top-0 left-0 w-full z-50 shadow-lg bg-white`}
      >
        <div className="flex flex-col w-full  items-center gap-10">
          <div className="w-full flex justify-between items-center ">
            <div className="flex gap-8 items-center">
              <h1 className="text-[24px] lg:text-[40px] font-bold">
                GalaxyTravel
              </h1>
            </div>
            <div className="hidden lg:flex gap-5 text-[15px] text-[#051036]">
              <Link href={"/"} className="hover:text-[#bf2180]">
                Hotels
              </Link>
              <Link href={"/"} className="hover:text-[#bf2180]">
                Flights
              </Link>
              <Link href={"/"} className="hover:text-[#bf2180]">
                Tours
              </Link>
              <Link href={"/"} className="hover:text-[#bf2180]">
                Blog
              </Link>
              <Link href={"/about-us"} className="hover:text-[#bf2180]">
                About
              </Link>
            </div>
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href={"/signup"}
                className="bg-[#bf2180] text-white rounded-[8px] px-[30px] py-[10px] text-[14px] hover:bg-[#bf2180] hover:transition-all"
              >
                Get started
              </Link>
            </div>

            <div className="flex gap-3 items-center lg:hidden">
              <HiOutlineUserCircle size={40} />
              <TbMenuDeep size={40} onClick={handleShowMenu} />
            </div>
          </div>

          {showMenu && (
            <div className="lg:hidden fixed flex flex-col gap-5  text-center left-0 w-full h-[100dvh] bg-white text-black  ">
              <div
                onClick={handleShowMenu}
                className="ml-auto text-right font-bold mb-5 p-5"
              >
                <span>X</span>
              </div>
              <Link
                href={"/"}
                className="  hover:bg-gray-100 hover:text-[#bf2180]"
              >
                Hotels
              </Link>
              <Link
                href={"/"}
                className="hover:bg-gray-100 hover:text-[#bf2180]"
              >
                Flights
              </Link>
              <Link
                href={"/"}
                className="hover:bg-gray-100 hover:text-[#bf2180]"
              >
                Tours
              </Link>
              <Link
                href={"/"}
                className=" hover:bg-gray-100 hover:text-[#bf2180]"
              >
                Blog
              </Link>
              <Link
                href={"/about-us"}
                className=" hover:bg-gray-100 hover:text-[#bf2180]"
              >
                About
              </Link>
              <div className="hidden lg:flex items-center gap-5">
                <Link
                  href={"/signup"}
                  className="bg-[#bf2180] text-white rounded-[8px] px-[30px] py-[10px] text-[14px] hover:bg-[#bf2180] hover:transition-all"
                >
                  Get started
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
