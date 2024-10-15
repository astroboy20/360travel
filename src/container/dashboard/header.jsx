import React from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { UserNav } from "./useNav"
import { PiHamburger } from "react-icons/pi"

export const Header = () =>{
  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="hidden lg:flex text-2xl font-semibold text-gray-900">Hi, Tolulope</h1>
        <h1 className="flex lg:hidden text-[24px] lg:text-[40px] font-bold">
                GalaxyTravel
              </h1>
        <div className="flex items-center space-x-4">
          <form className="relative hidden lg:flex">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className=" w-full appearance-none rounded-md pl-8 pr-4"
              placeholder="Search..."
              type="search"
            />
          </form>
          <UserNav />
        </div>
      </div>
    </header>
  )
}