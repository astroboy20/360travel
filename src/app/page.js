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
    <div className="min-h-screen bg-[#0d1b2a] text-white flex justify-center items-center p-5 text-center">
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

        <h2 className="text-2xl font-bold mt-8 mb-4">Hotel Booking</h2>
        <p className="text-lg mb-4">Send us a screenshot that contains:</p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5">
          <li className="mb-2">Property Name (must be a large chain like Hilton, Marriott, etc) no small independent hotels as they often create issues when trying to check in)</li>
          <li className="mb-2">Dates of stay (check-in and check-out)</li>
          <li className="mb-2">Total cost (minimum $350 USD or $500 CAD)</li>
          <li className="mb-2 italic">You pay us 50% and we book the hotel</li>
          <li className="mb-2 italic">Hotel orders are delivered within 24 hours of your stay</li>
          <li className="mb-2 italic">You must be legally old enough to stay in a hotel in the city you're visiting</li>
          <li className="mb-2 italic">You must provide a CREDIT CARD to the hotel front desk for a damage deposit (usually $200 - $500), they do not accept DEBIT cards</li>
        </ul>
        
        <hr className="my-8 border-[#334155]" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Flight Booking</h2>
        <p className="text-lg mb-4">Send us a screenshot that contains:</p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5">
          <li className="mb-2">Departure Airport</li>
          <li className="mb-2">Arrival Airport</li>
          <li className="mb-2">Total cost (minimum $350 USD or $500 CAD)</li>
          <li className="mb-2">You pay us 50% and we book the flight</li>
          <li className="mb-2">Flight orders are delivered within 48 hours of departure</li>
          <li className="mb-2">We mainly do flights within Canada and USA, international flights are sometimes possible upon request. Send us a screenshot and we will let you know if your flight is something we can do or not.</li>
        </ul>
        
        <hr className="my-8 border-[#334155]" />

        <h2 className="text-2xl font-bold mt-8 mb-4">Car Rentals Booking</h2>
        <p className="text-lg mb-4">Send us a screenshot from BUDGET.COM or AVIS.com that contains:</p>
        <ul className="text-left max-w-[500px] mx-auto mb-6 pl-5">
          <li className="mb-2">Pickup & Drop-off Location (Airports only)</li>
          <li className="mb-2">Pickup and Drop-off Date & Time</li>
          <li className="mb-2">Type of vehicle you want</li>
          <li className="mb-2">Total cost (minimum $350 USD or $500 CAD)</li>
          <li className="mb-2">We recommend adding insurance online to avoid paying more at the counter. If you have personal car insurance that allows rentals, they will need to see those documents before giving you the car. Your credit card insurance will not apply as you are not booking this with your own credit card.</li>
          <li className="mb-2">You must be legally old enough to drive and have a valid license</li>
          <li className="mb-2">No refunds if you are unable to pick up the car due to age or license issues</li>
          <li className="mb-2 italic">You must provide a CREDIT CARD to the rental counter for a damage deposit (usually $200 - $500), they do not accept DEBIT cards</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

