"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";
import Link from "next/link";

// Assuming the JSON data is stored in a variable called hotelData
const hotelData =
  typeof window !== "undefined" &&
  JSON.parse(localStorage.getItem("hotel-response") || "[]");

const HotelsList = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev?.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // Filter hotels based on selected criteria, ensuring hotelData is an array
  const filteredHotels = Array.isArray(hotelData)
    ? hotelData.filter(
        (hotel) =>
          selectedRatings?.length === 0 || selectedRatings?.includes(hotel?.rating)
      )
    : [];

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const formartUrl = (url) => {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    return url;
  };

  return (
    <div className="container p-4 lg:p-10">
      <header className="bg-[#bf2180] text-white p-4 rounded-t-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[18px] lg:text-xl font-bold mb-2 sm:mb-0">
            Hotel Search Results
          </h1>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Hotel Ratings</h2>
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="flex items-center">
                <Checkbox
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={() => handleRatingChange(rating)}
                />
                <span className="ml-2">{rating} Stars</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-lg font-semibold mb-2 sm:mb-0">
                {filteredHotels.length} hotels found
              </h2>
              <select className="border rounded p-2">
                <option>Price (Low to high)</option>
                <option>Price (High to low)</option>
              </select>
            </div>
          </div>

          {paginatedHotels.map((hotel, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  {hotel.images && hotel.images.length > 0 && (
                    <Image
                      src={formartUrl(hotel.images[0].url)}
                      alt={hotel.name}
                      width={100}
                      height={100}
                      className="rounded-md mr-4"
                    />
                  )}
                  <div>
                    <Link
                      href={`/hotel-booking/${hotel.propertyId}`}
                      className="font-semibold"
                    >
                      {hotel.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {hotel.address.city}, {hotel.address.country}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <p className="font-semibold">{hotel.rating} Stars</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm text-gray-500">Property Type</p>
                  <p>{hotel.propertyType}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2"
                >
                  More Details
                </Button>
                <Button className="w-full sm:w-auto bg-[#bf2180] hover:bg-[#a11c6d]">
                  Book Now
                </Button>
              </div>
            </div>
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  );
};

export { HotelsList };
