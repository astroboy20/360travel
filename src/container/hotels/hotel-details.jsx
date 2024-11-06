"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Wifi,
  Coffee,
  Utensils,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useFetchItems } from "../hooks/useFetchItems";

// This would typically come from a prop or context, but for this example, we'll use mock data
const hotel = {
  name: "Hilton Frankfurt Airport",
  address: {
    country: "Germany",
    city: "Frankfurt am Main",
    area: "Flughafen",
  },
  rating: 4.5,
  images: [
    { url: "/placeholder.svg?height=400&width=600", alt: "Hotel exterior" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Hotel lobby" },
    { url: "/placeholder.svg?height=400&width=600", alt: "Hotel room" },
  ],
  description:
    "Experience luxury and convenience at the Hilton Frankfurt Airport. Located within walking distance of the airport terminals, our hotel offers modern amenities, spacious rooms, and exceptional service.",
  amenities: [
    "Free Wi-Fi",
    "24/7 Room Service",
    "Fitness Center",
    "Restaurant",
    "Bar",
    "Business Center",
    "Parking",
  ],
};

const HotelDetailView = ({ id }) => {
  const { data: details } = useFetchItems({
    url: `https://360.futamart.com/hotels/details?propertyId=${id}`,
  });
  console.log(details);

  const formartUrl = (url) => {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    return url;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#bf2180]">
        {details?.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Carousel className="w-full max-w-xl mx-auto mb-8 lg:mb-0">
            <CarouselContent>
              {details?.images?.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={formartUrl(image.url)}
                      alt={image?.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Hotel Details</h2>
              <p className="text-gray-600 mb-4 line-clamp-5">
                {details?.description}
              </p>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{details?.rating} / 5</span>
              </div>
              <p className="text-gray-600 mb-4">
                {hotel.address.address1}, {details?.address?.country?.name}
              </p>
              <h3 className="text-xl font-semibold mb-2">Amenities</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {hotel.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    {amenity.includes("Wi-Fi") && (
                      <Wifi className="w-4 h-4 mr-2" />
                    )}
                    {amenity.includes("Room Service") && (
                      <Coffee className="w-4 h-4 mr-2" />
                    )}
                    {amenity.includes("Restaurant") && (
                      <Utensils className="w-4 h-4 mr-2" />
                    )}
                    {amenity.includes("Parking") && (
                      <Car className="w-4 h-4 mr-2" />
                    )}
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-center px-4 sm:px-0">
        <Button className="bg-[#bf2180] hover:bg-[#a11c6d] text-white w-full sm:w-auto">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export { HotelDetailView };
