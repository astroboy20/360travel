"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      src: "/images/testimonial1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit.",
    },
    {
      id: 2,
      src: "/images/trip1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit.",
    },
    {
      id: 3,
      src: "/images/hero.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit.",
    },
    {
      id: 4,
      src: "/images/trip2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit.",
    },
  ];

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
    <main className="py-10 px-5 lg:py-10 lg:px-10 gap-10 bg-[#f9e9f2]">
      <div className="grid grid-cols-1 gap-10 lg:gap-20">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-left">
            What Our Travelers Are Saying
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Testimonial Image and Text */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <div className="border border-gray-200 rounded-md p-5 transition-all duration-300 ease-in-out bg-white ">
              <Image
                src={testimonials[currentIndex].src}
                width={400}
                height={400}
                alt={`testimonial-${currentIndex}`}
                className="rounded-md w-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm lg:text-base text-gray-600">
              {testimonials[currentIndex].text}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-5 mt-5">
              <button
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
                onClick={handlePrev}
              >
                <FaArrowLeft className="text-gray-700" size={20} />
              </button>
              <button
                className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition duration-300"
                onClick={handleNext}
              >
                <FaArrowRight className="text-gray-700" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Testimonials };
