import Image from "next/image";
import React from "react";

const Promo = () => {
  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] flex flex-col gap-10">
      <div className="flex flex-col">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Unbeatable Prices
        </h1>
        <p className="text-[#697488] leading-0 lg:leading-[35px]">
          Experience the trip of a lifetime with exclusive travel offers
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-3">
        <Image
          src={"/images/trip1.jpg"}
          width={550}
          height={500}
          objectFit="cover"
          className="rounded-[13px] border-2 border-[blue]"
        />

        <Image
          src={"/images/trip2.jpg"}
          width={550}
          height={500}
          objectFit="cover"
          className="rounded-[13px] border-2 border-[blue]"
        />
      </div>
    </main>
  );
};

export { Promo };
