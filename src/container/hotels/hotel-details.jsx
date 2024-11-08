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
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { HotelBookingForm } from "./hotel-booking-form";
import { ClipLoader } from "react-spinners";

const hotel = {
  amenities: [
    "Free Wi-Fi",
    "24/7 Room Service",
    "Fitness Center",
    "Restaurant",
    "Parking",
  ],
};

const HotelDetailView = ({ id }) => {
  const { data: details, isLoading } = useFetchItems({
    url: `https://360.futamart.com/hotels/details?propertyId=${id}`,
  });

  const formartUrl = (url) => (url.startsWith("//") ? `https:${url}` : url);
  const images = details?.images.slice(0, 5);
  if (isLoading) {
    return (
      <div className="flex h-[50dvh] justify-center items-center">
        <ClipLoader />
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#bf2180]">
        {details?.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Carousel className="relative w-full max-w-96 lg:max-w-xl mx-auto mb-8 lg:mb-0">
            <CarouselContent>
              {images?.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={formartUrl(image.url)}
                      alt={image?.caption}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Adjust indicator styles */}
            <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-1" />
            <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 rounded-full p-1" />
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
                {details?.address?.address1}, {details?.address?.country?.name}
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
        <Dialog>
          <DialogTrigger>
            {" "}
            <Button className="bg-[#bf2180] hover:bg-[#a11c6d] text-white w-full sm:w-auto">
              Book Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <HotelBookingForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export { HotelDetailView };
