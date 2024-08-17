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

  const dropdownRef = useRef(null);
  const infoRef = useRef(null); // Reference for the first section

  const optionData = [
    { id: 1, name: "usd", url: "currency-USD" },
    { id: 2, name: "gbp", url: "currency-GBP" },
    { id: 3, name: "sar", url: "currency-SAR" },
    { id: 4, name: "eur", url: "currency-EUR" },
    { id: 5, name: "pkr", url: "currency-PKR" },
    { id: 6, name: "jpy", url: "currency-JPY" },
    { id: 7, name: "inr", url: "currency-INR" },
    { id: 8, name: "cny", url: "currency-CNY" },
    { id: 9, name: "try", url: "currency-TRY" },
    { id: 10, name: "irr", url: "currency-IRR" },
  ];

  const handleSelect = (name) => {
    setSelectedOption(name);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const infoHeight = infoRef.current
        ? infoRef.current.getBoundingClientRect().height
        : 0;

      setIsHeaderFixed(scrollPosition > infoHeight);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div
        ref={infoRef} // Reference for the first section
        className="bg-[#3554D1] text-white flex justify-between items-center py-[1%] px-[2%] text-[12px] lg:text-[0.75rem]"
      >
        <p className="flex gap-5">
          <span className="hidden lg:block">+1234567890</span>{" "}
          <span className="hidden lg:block">|</span> support@360travel.net
        </p>

        <div className="flex items-center gap-5">
          <div className="relative" ref={dropdownRef}>
            <div
              className={`bg-transparent text-white hover:opacity-60 hover:bg-[#cecece] rounded-[8px] p-2 flex items-center justify-between w-fit cursor-pointer ${
                isOpen ? "border-2 text-white" : ""
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedOption.toUpperCase()}
              <FaAngleDown color="white" className="ml-2" />
            </div>
            {isOpen && (
              <div className="absolute text-left right-2 lg:right-0 mt-1 bg-white text-black text-[16px] lg:text-[20px] border border-[#3554D1] rounded-[10px] w-fit lg:w-[200px] z-10">
                {optionData.map((data) => (
                  <div
                    key={data.id}
                    className="px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1] active:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelect(data.name)}
                  >
                    {data.name.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
          <span className="hidden lg:block">|</span>
          <div className="hidden lg:flex gap-3 items-center">
            <FaFacebookF size={"15px"} />
            <FaTwitter size={"15px"} />
            <AiFillInstagram size={"15px"} />
            <FaTelegramPlane size={"15px"} />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center py-[1%] px-[2%] bg-[eef0fb] ${
          isHeaderFixed ? "fixed top-0 left-0 w-full z-50 shadow-lg bg-white" : ""
        }`}
      >
        <div className="flex items-center gap-20">
          <h1 className="text-[20px] lg:text-[40px]">360Travels</h1>
          <div className="hidden lg:flex gap-5 text-[15px] text-[#051036]">
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Hotels
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Flights
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Tours
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Blog
            </Link>
            <Link href={"/"} className="hover:text-[#0a5aca]">
              Contact Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <p className="hover:text-[#0a5aca] cursor-pointer flex gap-2 items-center">
                Company <FaCaretDown />
              </p>
              {isCompanyOpen && (
                <div className="absolute mt-1 bg-white text-black p-[10%] border border-gray-300 rounded-[10px] w-[200px] z-10">
                  <Link
                    href="/about"
                    className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href={"/"}
            className="bg-[#0068ef] text-white rounded-[13px] px-[30px] py-[14px] text-[14px] hover:bg-[#3554d1] hover:transition-all"
          >
            Register
          </Link>
          <Link
            href={"/"}
            className="border border-[#0068ef] text-[#0068ef] rounded-[13px] px-[30px] py-[14px] text-[14px] hover:bg-[#3554d1] hover:text-white hover:transition-all"
          >
            Login
          </Link>
        </div>
        <div className="flex gap-3 items-center lg:hidden">
          <HiOutlineUserCircle size={"20px"} />
          <TbMenuDeep size={"20px"} onClick={handleShowMenu} />
        </div>
      </div>
      {showMenu && (
        <div className="lg:hidden bg-white text-black p-5 border-t border-gray-200">
          <Link
            href={"/"}
            className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
          >
            Hotels
          </Link>
          <Link
            href={"/"}
            className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
          >
            Flights
          </Link>
          <Link
            href={"/"}
            className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
          >
            Tours
          </Link>
          <Link
            href={"/"}
            className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
          >
            Blog
          </Link>
          <Link
            href={"/"}
            className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
          >
            Contact Us
          </Link>
          <div className="relative">
            <p
              className="px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1] cursor-pointer flex items-center"
              onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            >
              Company <FaCaretDown />
            </p>
            {isCompanyOpen && (
              <div className="absolute mt-1 bg-white text-black p-5 border border-gray-300 rounded-[10px] w-[200px] z-10">
                <Link
                  href="/about"
                  className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block px-5 py-2 hover:bg-gray-100 hover:text-[#3554d1]"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export {Header};
