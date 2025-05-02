// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";
// import { About } from "@/container/home/about";
// import { Blog } from "@/container/home/blog";
// import { Deals } from "@/container/home/deals";
// import { FAQ } from "@/container/home/faqs";
// import Hero from "@/container/home/hero/hero";
// import { Price } from "@/container/home/price-about";
// import { Promo } from "@/container/home/promo";
// import { Testimonials } from "@/container/home/testimonials";

// export default function Home() {
//   return (
//     <main className="">
//       <Header />
//       <Hero />
//       <About />
//       {/* <Price /> */}
//       <Deals />
//       <FAQ/>
//       {/* <Promo /> */}
//       <Testimonials />
//       {/* <Blog /> */}
//       <Footer />
//     </main>
//   );
// }

import React from 'react';
import './globals.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white flex justify-center items-center p-5">
      <div className="bg-[#1b263b] p-8 rounded-xl shadow-lg max-w-[600px] w-full">
        <h1 className="text-4xl font-bold mb-4">GalaxyServices</h1>
        <p className="text-lg mb-4 leading-relaxed">
          Helping you get the best deals on Flights, Hotels, and Car Rentals.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          Our Telegram Channels were recently shut down. We are building a new platform not reliant on Telegram or any other app. In the meantime, please contact us on Signal.
        </p>
        
        <div className="font-bold mb-6 text-base">
          <p>📱 To place an order, contact us on Signal:</p>
          <p className="my-2"><strong>galaxy.92</strong></p>
          <a 
            href="https://signal.me/#eu/ZPC2JVhP6HOFJnnJ3n-7PjYdS2CDWj10-0Dngt2CYlnPiIMLO3ZCa66AMfFMJKTp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00bcd4] font-bold hover:underline break-all"
          >
            Click here to add our account
          </a>
        </div>

        <div className="font-bold mb-6 text-base">
          <p>🚀 Join our Signal channel for updates:</p>
          <a 
            href="https://signal.group/#CjQKIJqkVHAy2ltoRQgDdQJZQVP7dJlhY6JmRK3kHqxSfigSEhCRA4YfukLk1DFyzc7g6WKL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00bcd4] font-bold hover:underline break-all"
          >
            Click here to join
          </a>
        </div>

        <hr className="my-8 border-[#334155]" />

        <p className="text-lg mb-6 leading-relaxed">
          If you need to order DoorDash 50% off, please message <strong>@GalaxyServicesBot</strong> on Telegram. It is generally open 12PM to 11PM (EST) daily.
          <a 
            href="https://t.me/GalaxyServicesBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#00bcd4] font-bold hover:underline ml-1"
          >
            Click here
          </a> to place an order.
        </p>
        
        <hr className="my-8 border-[#334155]" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Hotels</h2>
        <p className="text-lg mb-4 leading-relaxed">To book a hotel, send us a screenshot that contains:</p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5 space-y-2">
          <li>Property Name (must be a large chain like Hilton, Marriott, etc. — no small independent hotels)</li>
          <li>Dates of stay (check-in and check-out)</li>
          <li>Total cost (minimum $350 USD or $500 CAD)</li>
          <li>You pay us 50% and we book the hotel</li>
          <li>Hotel orders are delivered within 24 hours of your stay</li>
          <li>You must be legally old enough to stay in a hotel in the city you're visiting</li>
          <li>You must provide a CREDIT CARD to the hotel front desk for a damage deposit (usually $200–$500)</li>
        </ul>
        
        <hr className="my-8 border-[#334155]" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Flights</h2>
        <p className="text-lg mb-4 leading-relaxed">To book a flight, send us a screenshot containing:</p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5 space-y-2">
          <li>Departure Airport</li>
          <li>Arrival Airport</li>
          <li>Total cost (minimum $350 USD or $500 CAD)</li>
          <li>You pay us 50% and we book the flight</li>
          <li>Flight orders are delivered within 48 hours of departure</li>
        </ul>
        
        <hr className="my-8 border-[#334155]" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Car Rentals</h2>
        <p className="text-lg mb-4 leading-relaxed">
          To book a car rental, send us a screenshot from <strong>BUDGET.com</strong> or <strong>AVIS.com</strong> containing:
        </p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5 space-y-2">
          <li>Pickup & Drop-off Location (Airports only)</li>
          <li>Pickup and Drop-off Date & Time</li>
          <li>Type of vehicle you want</li>
          <li>Total cost</li>
          <li>We recommend adding insurance online to avoid paying more at the counter</li>
          <li>You must be legally old enough to drive and have a valid license</li>
          <li>No refunds if you are unable to pick up the car due to age or license issues</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;


