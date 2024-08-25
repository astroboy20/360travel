import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="mt-[100px] mb-[60px] mx-[20px] lg:mx-[80px] flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
          Why Choose Us
        </h1>
        <p className="text-[#697488] leading-0 lg:leading-[35px]">
          Exceptional services at unbeatable prices
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-10">
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={"/images/price.svg"}
            width={100}
            height={100}
            alt="price icon"
          />
          <div>
            {" "}
            <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
              Best Price Guarantee
            </h1>
            <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
              Booking a vacation can be a nightmare, but finding the best price
              shouldn't be.
            </p>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={"/images/price.svg"}
            width={100}
            height={100}
            alt="price icon"
          />
          <div>
            {" "}
            <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
              Easy & Quick Booking
            </h1>
            <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
              Say goodbye to the stress with easy and quick booking options.
            </p>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-5 items-center">
          <Image
            src={"/images/price.svg"}
            width={100}
            height={100}
            alt="price icon"
          />
          <div>
            {" "}
            <h1 className="text-[16px] lg:text-[18px] leading-[33.75px] font-bold">
              Customer Care 24/7
            </h1>
            <p className="text-[12px] lg:text-[14px] leading-[30px] text-[#697488]">
              No more waiting until regular business hours to make that pressing
              query.
            </p>
          </div>{" "}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 text-left">
          <h1 className="text-[24px] lg:text-[30px] font-bold leading-[43.5px]">
            About GalaxyTravel
          </h1>
          <p className="text-[#697488] leading-0 lg:leading-[35px]">
            Unforgettable trips, unbeatable prices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="flex flex-col gap-3">
            <p>
            GalaxyTravel is your reliable partner in the world of travel. We
              offer a wide range of travel services, among which you are sure to
              find the perfect fit for your needs and wishes.
            </p>
            <p>
              Our team consists of professionals with years of experience in
              tourism, who are ready to help you with any questions related to
              travel. We strive to provide you with high quality service as well
              as save your time and money. We are convinced that travel is not
              only a vacation, but also an opportunity to broaden your horizons
              and enjoy new experiences. With GalaxyTravel you can be sure that
              your trip will be unforgettable and the price will be unbeatable.
              We are always available to help you plan and organize your next
              trip so you can enjoy every moment of your vacation.
            </p>
          </div>
          <Image
            src={"/images/hero.png"}
            width={500}
            height={500}
            alt="business-flyer"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5  lg:grid-cols-4 text-center">
        <div>
          <h1 className="text-[24px] lg:text-[40px] font-bold leading-[52px]">
            4,958
          </h1>
          <p className="text-[#697488] text-[14px] leading-0 lg:leading-[19.6px]">
            Destinations
          </p>
        </div>
        <div>
          <h1 className="text-[24px] lg:text-[40px] font-bold leading-[52px]">
            2,869
          </h1>{" "}
          <p className="text-[#697488] text-[14px] leading-0 lg:leading-[19.6px]">
            Total Properties
          </p>
        </div>
        <div>
          <h1 className="text-[24px] lg:text-[40px] font-bold leading-[52px]">
            2M
          </h1>
          <p className="text-[#697488] text-[14px] leading-0 lg:leading-[19.6px]">
            Happy customers
          </p>
        </div>
        <div>
          <h1 className="text-[24px] lg:text-[40px] font-bold leading-[52px]">
            574,974
          </h1>
          <p className="text-[#697488] text-[14px] leading-0 lg:leading-[19.6px]">
            Our Volunteers
          </p>
        </div>
      </div>
    </main>
  );
};

export { About };
