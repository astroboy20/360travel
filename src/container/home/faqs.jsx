"use client";
import React, { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a trip with GalaxyTravel?",
      answer:
        "Booking with GalaxyTravel is simple! Just browse our destinations, select your package, and complete the booking in just two clicks. You’ll receive a confirmation email with all the details right away.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "We provide 24/7 customer support to assist you with any issues or questions you may have before, during, or after your trip. You can reach us via phone, email, or live chat.",
    },
    {
      question: "Can I make changes to my booking?",
      answer:
        "Yes, you can modify your booking, including dates and destinations, by contacting our support team. Please note that changes may be subject to availability and additional charges.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a wide range of payment methods, including all major credit cards, PayPal, and even cryptocurrencies. Choose the payment method that suits you best during checkout.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "Absolutely not! We believe in transparent pricing. The price you see at checkout is the final price—no hidden fees, ever.",
    },
  ];

  return (
    <section className="py-10 px-5 lg:py-20 lg:px-20 bg-[#f7f9fc]">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-[#051036]">
        Frequently Asked Questions
      </h2>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#e4e9f0]">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left text-[#051036] bg-[#f7f9fc] focus:outline-none"
            >
              <span className="text-sm lg:text-base font-medium">
                {faq.question}
              </span>
              {openIndex === index ? (
                <HiChevronUp className="w-5 h-5 text-[#bf2180]" />
              ) : (
                <HiChevronDown className="w-5 h-5 text-[#bf2180]" />
              )}
            </button>
            {openIndex === index && (
              <div className="py-2 pl-2 text-sm lg:text-base text-[#697488]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export { FAQ };
