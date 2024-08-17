import Image from "next/image";
import React from "react";

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

export { Deals };
