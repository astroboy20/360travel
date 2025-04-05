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
import './HomePage.css'; 

function HomePage() {
  return (
    <div className="container">
      <div className="card">
        <h1>GalaxyServices</h1>
        <p>Helping you get the best deals on Flights, Hotels, and Car Rentals.</p>
        <p>Our Telegram Channels were recently shut down. We are building a new platform not reliant on Telegram or any other app. In the meantime, please contact us on Signal.</p>
        <div className="contact">
          📱 To place an order, contact us on Signal:<br />
          <strong>galaxy.92</strong><br />
          <a
            href="https://signal.me/#eu/ZPC2JVhP6HOFJnnJ3n-7PjYdS2CDWj10-0Dngt2CYlnPiIMLO3ZCa66AMfFMJKTp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to add our account
          </a>
        </div>
        <div>
          🚀 Join our Signal channel for updates:<br />
          <a
            href="https://signal.group/#CjQKIJqkVHAy2ltoRQgDdQJZQVP7dJlhY6JmRK3kHqxSfigSEhCRA4YfukLk1DFyzc7g6WKL"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to join
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;