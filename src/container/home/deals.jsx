import Image from "next/image";
import React from "react";

const popularCities = [
  { name: "Paris", image: "/images/paris.jpg" },
  { name: "New York", image: "/images/newyork.jpg" },
  { name: "Tokyo", image: "/images/tokyo.jpg" },
  { name: "London", image: "/images/london.jpg" },
  { name: "Dubai", image: "/images/dubai.jpg" },
  { name: "Rome", image: "/images/rome.jpg" },
];

const Deals = () => {
  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Discover deals in every city
        </h1>
        <p className="text-[#697488] leading-0 lg:leading-[35px]">
          From the stunning beaches of the U.A.E. to the rich cultural heritage
          of France
        </p>
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCities.map((city, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={city.image}
                width={200}
                height={200}
                alt={`${city.name} cityscape`}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
              <p className="mt-2 text-center font-semibold">{city.name}</p>
            </div>
          ))}
      </div>
    </main>
  );
};

export { Deals };
