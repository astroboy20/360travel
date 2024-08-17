import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <main className="py-[15%] px-[5%] lg:py-[10%] lg:px-[10%] flex flex-col gap-10">
      <div className="flex flex-col text-center">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Get inspiration for next trip
        </h1>
        <p className="text-[#697488] leading-0 lg:leading-[35px]">
          Explore new travel destinations and discover new cultures
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <div className="flex flex-col gap-3 text-center">
          <Image
            src={"/images/blog1.jpg"}
            width={550}
            height={500}
            objectFit="cover"
            className="rounded-[13px] border-2 hover:border-[blue] transition-all duration-300 hover:scale-110"
          />
          <p>Top 5 Tips for Safe and Comfortable Travel in 2024</p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-3 text-center">
          <Image
            src={"/images/blog2.jpg"}
            width={550}
            height={500}
            objectFit="cover"
            className="rounded-[13px] border-2 hover:border-[blue] transition-all duration-300 hover:scale-110"
          />
          <p> Discover Taiwan: The Rising Travel Destination of 2024</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <Image
            src={"/images/blog3.jpg"}
            width={550}
            height={500}
            objectFit="cover"
            className="rounded-[13px] border-2 hover:border-[blue] transition-all duration-300 hover:scale-110 "
          />
          <p>Explore Georgia: The Hidden Gem</p>
        </div>
      </div>
    </main>
  );
};

export { Blog };
