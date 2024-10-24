'use client'

import React from "react"
import { GrApple } from "react-icons/gr"
import { BiLogoPlayStore } from "react-icons/bi"
import {
  FaTwitter,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa"
import { IoLockClosedOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#bf2180] px-4 md:px-[10%] text-white py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 py-[5%]">
        <div className="flex flex-col gap-8">
          <h1 className="text-[20px] lg:text-[50px] font-bold">GalaxyTravel</h1>
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[14px]">Toll Free Customer Care</p>
              <p className="text-[16px] lg:text-[18px] font-semibold">+852-1264-5524</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[14px]">Need live support?</p>
              <p className="text-[16px] lg:text-[18px] font-semibold">
                support@GalaxyTravel.net
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[16px]">Your all-in-one travel app</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex gap-3 w-fit rounded-[16px] px-6 py-3 items-center bg-[#ffffff1A] hover:bg-[#ffffff33] transition-colors">
                <GrApple size={35} />
                <p className="text-[15px]">
                  Soon on <br className="hidden lg:block" /> Apple{" "}
                  <br className="hidden lg:block" /> Store
                </p>
              </div>
              <div className="flex gap-3 w-fit rounded-[16px] px-6 py-3 items-center bg-[#ffffff1A] hover:bg-[#ffffff33] transition-colors">
                <BiLogoPlayStore size={35} />
                <p className="text-[15px]">
                  Soon on <br className="hidden lg:block" /> Google{" "}
                  <br className="hidden lg:block" /> Play
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[16px]">Follow us on social media</p>
            <div className="flex gap-5">
              <Link href="#" aria-label="Facebook">
                <FaFacebookF size={20} className="hover:text-[#ffffff80] transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitter size={20} className="hover:text-[#ffffff80] transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <AiFillInstagram size={20} className="hover:text-[#ffffff80] transition-colors" />
              </Link>
              <Link href="#" aria-label="Telegram">
                <FaTelegramPlane size={20} className="hover:text-[#ffffff80] transition-colors" />
              </Link>
            </div>
            <p className="text-[12px] lg:text-[14px]">
              © 2022-2024 GalaxyTravel All rights reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[18px] font-semibold"> Get Updates & More</p>
          <div>
            <div className="flex gap-3 items-center bg-white px-3 py-2 rounded-[13px]">
              <MdOutlineMail color="#bf2180" size={30} />
              <Input
                placeholder="Enter your email"
                className="bg-transparent w-full outline-none text-black text-[13px] border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button className="rounded-[10px] bg-[#bf2180] text-[15px] hover:bg-[#a11d6f]">
                Subscribe
              </Button>
            </div>
            <p className="text-[#ffffff80] flex gap-2 items-center text-[12px] lg:text-[14px] mt-2">
              <IoLockClosedOutline /> Don't worry your information is safe with us
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p className="font-semibold"> Our Products</p>
              <Link href="#" className="hover:underline">Hotels</Link>
              <Link href="#" className="hover:underline">Flights</Link>
              <Link href="#" className="hover:underline">Tours</Link>
            </div>
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p className="font-semibold">About GalaxyTravel</p>
              <Link href="#" className="hover:underline">About Us</Link>
              <Link href="#" className="hover:underline">Contact Us</Link>
              <Link href="#" className="hover:underline">FAQ</Link>
            </div>
            <div className="flex flex-col gap-3 text-[14px] lg:text-[16px]">
              <p className="font-semibold">Partner with GalaxyTravel</p>
              <p>partner@GalaxyTravel.net</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-[#ffffff40] my-4" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
        <Link href="#" className="text-[14px] hover:underline">Policy and Terms</Link>
        <Image
          src="/images/payment.png"
          width={100}
          height={21}
          alt="Accepted payment methods"
        />
      </div>
    </footer>
  )
}

export { Footer }