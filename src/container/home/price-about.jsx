import React from "react";

const Price = () => {
  return (
    <main className="py-[10%] px-[5%] lg:py-[5%] lg:px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 w-full items-center">
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/aSf3wsb4U5I?autoplay=0"
          className="rounded-[13px] w-full h-[200px] lg:w-[500px] lg:h-[300px]"
        ></iframe>

     
      </div>
      <div className="flex flex-col gap-3 lg:gap-5">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          {" "}
          Unbeatable Prices
        </h1>
          <p className="text-[#051036] lg:leading-[35px]">
          We understand that value for money is important to our travelers.
          That's why we go above and beyond to negotiate exclusive deals and
          discounts with our trusted partners. Whether you're planning a
          budget-friendly getaway or a luxurious escape, we have options to suit
          every taste and budget. Enjoy peace of mind knowing that you're
          getting the best prices without compromising on quality.
        </p>
      </div>
    </main>
  );
};

export { Price };
