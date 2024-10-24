"use client";
import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserNav } from "./useNav";
import { PiHamburger } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, History, Wallet, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarItems = [
    { icon: Compass, label: "Overview", href: "/dashboard" },
    { icon: History, label: "My Bookings", href: "/dashboard/bookings" },
    { icon: Wallet, label: "Wallet & Payment", href: "/dashboard/payment" },
    { icon: Settings, label: "Account Settings", href: "/dashboard/settings" },
  ];
  return (
    <header className="lg:hidden bg-white shadow bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[#bf2180]">
          GalaxyTravel
        </h1>
        <div className="flex items-center space-x-4">
          <div className="block lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={setIsOpen}
                      className={cn(
                        "flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-[#f9e9f2] text-[#bf2180]"
                          : "text-gray-600 hover:bg-[#f9e9f2] hover:text-[#bf2180]"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          {/* <UserNav /> */}
        </div>
      </div>
    </header>
  );
};
