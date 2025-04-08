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

function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-950 text-white text-center p-5 w-full">
      <div className="container w-full min-h-screen flex justify-center items-center">
        <div className="bg-blue-900 p-6 rounded-xl shadow-lg max-w-lg w-full">
          <h1 className="text-2xl md:text-2.5xl font-semibold mb-4">GalaxyServices</h1>
          <p className="text-lg mb-6 leading-relaxed">Helping you get the best deals on Flights, Hotels, and Car Rentals.</p>
          <p className="text-lg mb-6 leading-relaxed">Our Telegram Channels were recently shut down. We are building a new platform not reliant on Telegram or any other app. In the meantime, please contact us on Signal.</p>
          <div className="font-bold mb-5 text-sm md:text-base">
            📱 To place an order, contact us on Signal:<br />
            <strong>galaxy.92</strong><br />
           <button className="w-40 py-3 rounded-lg shadow-lg shadow-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500">
           <a
              href="https://signal.me/#eu/ZPC2JVhP6HOFJnnJ3n-7PjYdS2CDWj10-0Dngt2CYlnPiIMLO3ZCa66AMfFMJKTp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyan-400 hover:underline font-semibold break-words"
            >
              Click here to add our account
            </a>
           </button>
          </div>
          <div>
            🚀 Join our Signal channel for updates:<br />
            <button className="w-40 py-3 rounded-lg shadow-lg shadow-blue-500 bg-gradient-to-r from-indigo-500 to-purple-500 ">
  <a
    href="https://signal.group/#CjQKIJqkVHAy2ltoRQgDdQJZQVP7dJlhY6JmRK3kHqxSfigSEhCRA4YfukLk1DFyzc7g6WKL"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-cyan-400 hover:underline  font-semibold break-words"
  >
    Click here to join
  </a>
</button>
          </div>
          <br/>
          <div>
            To place a food order for DoorDash 50% off, please message @GalaxyServicesBot on Telegram. It is generally open 12PM to 11PM (EST) daily. <a className='text-blue-600 hover:underline' href="https://t.me/GalaxyServicesBot">Click here</a> to place an order
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;