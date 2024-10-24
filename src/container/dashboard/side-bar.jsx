"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Compass, History, Wallet, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: Compass, label: "Overview", href: "/dashboard" },
  { icon: History, label: "My Bookings", href: "/dashboard/bookings" },
  { icon: Wallet, label: "Wallet & Payment", href: "/dashboard/payment" },
  { icon: Settings, label: "Account Settings", href: "/dashboard/settings" },
]

 const Sidebar = ()=> {
  const pathname = usePathname()

  return (
    <aside className="hidden overflow-y-auto bg-white shadow-md lg:block">
      <div className="flex h-full flex-col justify-between">
        <div className="px-4 py-6">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#bf2180]">GalaxyTravel</span>
          </Link>
          <nav className="mt-6 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
        </div>
        <div className="p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/logout" className="space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}

export {Sidebar}