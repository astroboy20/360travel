"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      src: "/images/testimonial1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 2,
      src: "/images/trip1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 3,
      src: "/images/hero.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 4,
      src: "/images/trip2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 5,
      src: "/images/testimonail2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 6,
      src: "/images/testimonail1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
    {
      id: 7,
      src: "/images/testimonial.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend quam vehicula velit maximus, nec eleifend quam hendrerit. Phasellus vulputate velit vestibulum viverra finibus. Ut feugiat velit a sem pretium pharetra. Phasellus iaculis lorem odio, eget volutpat nisi sollicitudin et",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (e) => {
    setCurrentIndex(Number(e.target.value));
  };

  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] gap-10 bg-[#E5F0FD]">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 lg:gap-20">
        <div className="flex flex-col gap-3 lg:gap-5">
          <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
            Exceptional Service
          </h1>
          <p className="text-[#697488] lg:leading-[35px]">
            Your satisfaction is our top priority. Our dedicated team of travel
            experts is available round the clock to assist you at every step of
            your journey.
          </p>

          <Image
            src={"/images/hero.png"}
            width={500}
            height={500}
            alt="business-flyer"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
              Real Reviews
            </h1>
            <Button className="flex w-fit px-5 lg:px-10 h-[50px] rounded-[13px] bg-[#0068ef] text-white font-medium  gap-3 items-center">
              <FaTelegramPlane size={"25px"} /> Telegram
            </Button>
          </div>

          <div className="flex flex-col gap-5 w-full ">
            <div className="border border-[blue] rounded-sm p-1 flex justify-center items-center">
              <Image
                src={testimonials[currentIndex].src}
                width={400}
                height={400}
                alt={`testimonial-${currentIndex}`}
                className="mb-4 rounded-md"
              />
            </div>

            <div className="tmb-4">
              <p className="text-[12px] lg:text-[16px]">
                {testimonials[currentIndex].text}
              </p>
            </div>
            <div className="flex w-full items-center">
              <span className="text-[16px] font-medium">01</span>
              <input
                type="range"
                min="0"
                max={testimonials.length - 1}
                value={currentIndex}
                onChange={handleSlide}
                className=" h-1.5 w-full bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #4caf50 ${
                    (currentIndex / (testimonials.length - 1)) * 100
                  }%, #ddd ${
                    (currentIndex / (testimonials.length - 1)) * 100
                  }%)`,
                }}
              />
              <span className="text-[16px] font-medium">
                0{testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Testimonials };
