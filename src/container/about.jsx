import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="mt-[160px] lg:mt-[100px] mb-[50px] mx-[20px] lg:mx-[60px] flex flex-col gap-12 lg:gap-24">
      {/* Introduction */}
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-[30px] lg:text-[36px] font-extrabold leading-[50px] tracking-tight text-gray-800">
          Why Choose GalaxyTravel?
        </h1>
        <p className="text-[#555B6E] text-[16px] lg:text-[20px] leading-[28px] lg:leading-[38px] max-w-[800px] mx-auto">
          Discover exceptional travel experiences with unbeatable service and guaranteed best prices. Explore the world with confidence, trusted by millions.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-6 items-center">
            <Image src={feature.icon} width={80} height={80} alt={feature.title} />
            <div>
              <h2 className="text-[20px] lg:text-[22px] font-semibold text-gray-900">
                {feature.title}
              </h2>
              <p className="text-[14px] lg:text-[16px] leading-[26px] text-gray-600">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="lg:w-1/2">
          <h1 className="text-[30px] lg:text-[36px] font-extrabold leading-[50px] tracking-tight text-gray-800">
            About GalaxyTravel
          </h1>
          <p className="text-[#555B6E] text-[16px] lg:text-[20px] leading-[28px] lg:leading-[38px]">
            GalaxyTravel is committed to delivering world-class travel services. Whether it's flights, accommodations, or unique adventures, we handle every aspect with care. Our goal is to make your travel affordable, stress-free, and unforgettable.
          </p>
        </div>
        <div className="lg:w-1/2">
          <p className="text-[16px] lg:text-[20px] leading-[28px] lg:leading-[38px]">
            From dream vacations to quick getaways, GalaxyTravel ensures you always receive the best value. Our team is here 24/7 to assist, offering peace of mind for all your journeys.
          </p>
          <p className="text-[16px] lg:text-[20px] leading-[28px] lg:leading-[38px] mt-4">
            Let us manage the details while you enjoy the excitement of exploring new destinations. Wherever you want to go, GalaxyTravel will be your trusted guide.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-[32px] lg:text-[46px] font-extrabold text-gray-800 leading-[60px]">
              {stat.number}
            </h2>
            <p className="text-[#555B6E] text-[14px] lg:text-[18px] leading-[24px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

// Data for features and statistics
const features = [
  {
    icon: "/images/price.svg",
    title: "Best Price Guarantee",
    description: "Transparent pricing with no hidden fees. We promise the best rates for your travels.",
  },
  {
    icon: "/images/price.svg",
    title: "Effortless Booking",
    description: "Plan and book seamlessly with user-friendly options and flexibility.",
  },
  {
    icon: "/images/price.svg",
    title: "Round-the-Clock Support",
    description: "Our dedicated team is available 24/7, ensuring you’re never on your own.",
  },
];

const stats = [
  { number: "4,958", label: "Destinations" },
  { number: "2,869", label: "Properties" },
  { number: "2M+", label: "Satisfied Customers" },
  { number: "574,974", label: "Happy Travelers" },
];

export { About };
