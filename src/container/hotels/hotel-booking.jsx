"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { href: '/hotels', label: 'All Hotels' },
  { href: '/offers', label: 'Hotel Offers' },
  { href: '/bookings', label: 'Your Bookings' },
];

const HotelBooking = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hotels = [
    {
      name: 'Hilton Times Square',
      checkIn: '20th Oct 2024',
      checkOut: '23rd Oct 2024',
      duration: '3 Days, 2 Nights',
      amenities: ['Free Wi-Fi', 'Breakfast Included', 'Pool Access'],
      originalPrice: 'USD 600',
      discountedPrice: 'USD 550',
    },
    {
      name: 'Marriott Downtown',
      checkIn: '22nd Oct 2024',
      checkOut: '25th Oct 2024',
      duration: '4 Days, 3 Nights',
      amenities: ['Free Parking', 'Breakfast Included', 'Gym Access'],
      originalPrice: 'USD 800',
      discountedPrice: 'USD 700',
    },
    // Add more hotels as needed
  ];

  return (
    <div>
      {/* Sidebar for mobile screens */}
      <div className="block lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-2 py-1 text-lg hover:text-primary transition-colors"
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

      {/* Main content */}
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-semibold">54 Hotels found on 20-10-2024</h1>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          {/* Filters Section */}
          <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="font-semibold text-lg">Filters</h2>
            <div className="mt-4">
              <p className="font-medium">Hotel Rating</p>
              <ul>
                <li><input type="checkbox" /> ⭐⭐⭐⭐⭐</li>
                <li><input type="checkbox" /> ⭐⭐⭐⭐</li>
                <li><input type="checkbox" /> ⭐⭐⭐</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="font-medium">Price Range</p>
              <input type="range" min="100" max="3000" />
            </div>
            <div className="mt-4">
              <p className="font-medium">Hotel Chains</p>
              <ul>
                <li><input type="checkbox" /> Marriott</li>
                <li><input type="checkbox" /> Hilton</li>
                <li><input type="checkbox" /> Hyatt</li>
              </ul>
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="w-full lg:w-3/4">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-lg mb-4"
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <p>
                    <strong>Stay Duration:</strong> {hotel.duration}
                  </p>
                  <p>
                    <strong>Check-in:</strong> {hotel.checkIn} -{' '}
                    <strong>Check-out:</strong> {hotel.checkOut}
                  </p>
                  <p>
                    <strong>Amenities:</strong>{' '}
                    {hotel.amenities.join(', ')}
                  </p>
                </div>
                <div className="flex flex-col items-end mt-4 sm:mt-0">
                  <p className="text-red-600 line-through">{hotel.originalPrice}</p>
                  <p className="text-green-600 text-lg font-semibold">{hotel.discountedPrice}</p>
                  <Button className="mt-2 bg-blue-500 text-white">
                    Book Hotel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export  {HotelBooking};
