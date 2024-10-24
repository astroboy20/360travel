"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Bitcoin, DollarSign } from "lucide-react";
import Image from "next/image";
import { Content } from "./content";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("crypto");
  const [amount, setAmount] = useState("50");

  const handlePayNow = () => {
    console.log(`Processing payment of $${amount} via ${paymentMethod}`);
    // Add actual payment processing logic here
  };

  return (
    <div className="p-[6%] flex flex-col gap-10">
      <Content />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Fund Wallet</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <RadioGroup
              defaultValue="crypto"
              onValueChange={(value) => setPaymentMethod("crypto" || "stripe")}
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg mb-4">
                <RadioGroupItem value="crypto" id="crypto" />
                <label
                  htmlFor="crypto"
                  className="flex-grow flex items-center justify-between"
                >
                  <span className="text-lg">Pay With Crypto</span>
                  <div className="flex space-x-2">
                    <Bitcoin className="h-6 w-6 text-orange-500" />
                    {/* <Litecoin className="h-6 w-6 text-blue-400" /> */}
                    <DollarSign className="h-6 w-6 text-green-500" />
                    {/* <Ethereum className="h-6 w-6 text-purple-600" /> */}
                  </div>
                </label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg">
                <RadioGroupItem value="stripe" id="stripe" />
                <label
                  htmlFor="stripe"
                  className="flex-grow flex items-center justify-between"
                >
                  <span className="text-lg">Pay With Stripe</span>
                  <Image
                    src="/images/stripe.webp"
                    width={50}
                    height={24}
                    alt="Stripe logo"
                    className="rounded-full"
                  />
                </label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Amount in USD</h2>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
                min="1"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch space-y-4">
          <Button onClick={handlePayNow} className="w-full text-lg py-6">
            Pay Now →
          </Button>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Select your payment method</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Add your amount</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Click on Pay Now</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Proceed to complete payment</span>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  );
};

export { Payment };
