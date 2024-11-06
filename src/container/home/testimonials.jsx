"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "New York, USA",
    rating: 5,
    text: "My trip to Paris was absolutely magical! The flight booking process was seamless, and the recommendations for accommodations were spot-on. I'll definitely be using this service for all my future travels.",
    image: "/images/female1.jpg",
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   location: "London, UK",
  //   rating: 4,
  //   text: "I was skeptical about using an online travel service, but I'm so glad I did. The customer support was excellent, and they helped me find a great deal on my flight to Tokyo. Highly recommended!",
  //   image: "/placeholder.svg?height=400&width=400",
  // },
  {
    id: 3,
    name: "Maria Garcia",
    location: "Barcelona, Spain",
    rating: 5,
    text: "As a frequent traveler, I've used many flight booking services, but this one stands out. The interface is user-friendly, and the prices are unbeatable. My recent trip to Australia was perfect from start to finish.",
    image: "/images/woman.jpg",
  },
  {
    id: 4,
    name: "Chen Chen",
    location: "Singapore",
    rating: 4,
    text: "I appreciate the attention to detail this service provides. From seat selection to meal preferences, everything was taken care of. My flight to San Francisco was comfortable and stress-free.",
    image: "/images/asia-woman.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-[#f9e9f2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          What Our Travelers Are Saying
        </h2>
        <Card className="overflow-hidden">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 aspect-square relative">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={`${testimonials[currentIndex].name}'s testimonial`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <div
                  className="flex items-center space-x-1"
                  aria-label={`Rating: ${testimonials[currentIndex].rating} out of 5 stars`}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[currentIndex].rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-center mt-6 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
