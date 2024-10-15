"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/hotels", label: "Hotels" },
    { href: "/flights", label: "Flights" },
    { href: "/", label: "Tours" },
    { href: "/", label: "Blog" },
    { href: "/about-us", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight sm:text-2xl">
            GalaxyTravel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={
                pathname === item.href
                  ? "border-b-2 border-b-[#bf2180]"
                  : `text-sm font-medium transition-colors hover:text-primary`
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Get Started Button and Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Button asChild className="hidden sm:inline-flex bg-[#bf2180]">
            <Link href="/signup">Get started</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className={
                        pathname === item.href
                          ? "border-b-2 border-b-2-[#bf2180]"
                          : "block px-2 py-1 text-lg hover:text-primary transition-colors"
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8">
                  <Button
                    asChild
                    className="w-full bg-[#bf2180]"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/signup">Get started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
