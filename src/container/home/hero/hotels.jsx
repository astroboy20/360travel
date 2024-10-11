"use client";
import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { FiUser } from "react-icons/fi";
import { ClipLoader } from "react-spinners";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryList } from "@/provider/data";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Hotels = () => {
  const toast = useToast();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState("");
  const [id, setId] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [travellerCount, setTravellerCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [show, setShow] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);

  // UseEffect to fetch cities based on the query
  useEffect(() => {
    if (cities.length >= 3) {
      setIsLoading(true);
      axios
        .get(`https://360.futamart.com/cities?query=${cities}`)
        .then((response) => {
          setData(response.data?.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [cities]); // Trigger the effect when `cities` changes

  const handleCityChange = (e) => {
    setCities(e.target.value); // Update the city search term
    setSelectedCity("");
    setId(null);
  };

  //counts
  const handlePrev_Traveller = () => {
    setTravellerCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNext_Traveller = () => {
    setTravellerCount((prev) => prev + 1);
  };

  const handlePrev_Room = () => {
    setRoomCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNext_Room = () => {
    setRoomCount((prev) => prev + 1);
  };

  const handlePrev_Children = () => {
    setChildrenCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNext_Children = () => {
    setChildrenCount((prev) => prev + 1);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const totalTravellers = childrenCount + travellerCount;

  const handleSelectId = (city) => {
    setId(city?.id);
    setSelectedCity(`${city.name}, ${city.country.name}`);
    setCities("");
    setData(null);
  };

  const handleCheckinChange = (date) => {
    setCheckinDate(date);
  };

  const handleCheckoutChange = (date) => {
    setCheckoutDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !checkinDate || !checkoutDate) {
      toast({
        title: "Error!",
        description: "Please select a city, check-in date, and check-out date.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    axios
      .get(
        `https://360.futamart.com/hotels?id=${id}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row w-full gap-2">
          <div className="w-full">
            <p className="text-[12px]">City Name</p>
            <div className="relative">
              <div className="flex gap-2 border  items-center p-3 rounded-[13px]">
                <CiLocationOn size={"30px"} color="#bf2180" />
                <input
                  className="outline-none w-full"
                  placeholder="Search by city"
                  type="text"
                  value={selectedCity || cities}
                  onChange={handleCityChange}
                />
                {isLoading && <ClipLoader size={20} />}
              </div>

              {data && !isLoading && (
                <div className="absolute bg-white w-full border mt-1 rounded-lg shadow-lg max-h-[200px] overflow-y-auto z-50">
                  <ul className="p-2">
                    {data?.length > 0 ? (
                      data?.map((city) => (
                        <li
                          key={city.id}
                          onClick={() => handleSelectId(city)}
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {city.name}, {city.country.name}
                        </li>
                      ))
                    ) : (
                      <li className="p-2 text-sm text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="w-full">
            <p className="text-[12px]">Traveller</p>
            <div className="relative">
              <div
                className="flex gap-2 border w-full items-center p-3 rounded-[13px] cursor-pointer"
                onClick={handleShow}
              >
                <FiUser size={"30px"} color="#bf2180" />
                <input
                  className="outline-none w-full"
                  readonly
                  value={`Travellers ${totalTravellers} Rooms ${roomCount}`}
                />
                <span className="flex items-center justify-center rounded-full border border-black p-1">
                  <SlArrowDown size={"15px"} color="#bf2180" />
                </span>
              </div>
              {show && (
                <div className="absolute bg-white w-full border mt-1 rounded-lg shadow-lg h-fit overflow-y-auto ">
                  <ul className="p-2">
                    <li className="p-2  flex justify-between">
                      Rooms
                      <span className="flex gap-2 items-center">
                        <FaMinus onClick={handlePrev_Room} />
                        {roomCount}
                        <FaPlus onClick={handleNext_Room} />
                      </span>
                    </li>
                    <li className="p-2 flex justify-between">
                      Adults{" "}
                      <span className="flex gap-2 items-center">
                        <FaMinus onClick={handlePrev_Traveller} />
                        {travellerCount}
                        <FaPlus onClick={handleNext_Traveller} />
                      </span>
                    </li>
                    <li className="p-2 flex justify-between">
                      Children{" "}
                      <span className="flex gap-2 items-center">
                        <FaMinus onClick={handlePrev_Children} />
                        {childrenCount}
                        <FaPlus onClick={handleNext_Children} />
                      </span>
                    </li>
                  </ul>
                  {childrenCount >= 1 && (
                    <div className="flex-flex-col gap-2 p-2">
                      <p className="p-2 font-bold">Child age</p>
                      <div className="grid grid-cols-2 gap-3">
                        {Array.from({ length: childrenCount }).map(
                          (_, index) => (
                            <Select key={index}>
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder={`Age of child ${index + 1}`}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {[...Array(17).keys()].map((age) => (
                                  <SelectItem key={age} value={age.toString()}>
                                    {age}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex-flex-col gap-2 p-2">
                    <p className="p-2 font-bold">Nationality</p>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryList.map((country, index) => (
                          <SelectItem key={index} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:flex-row gap-2 lg:1/2">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkin</p>
              <DatePicker
                selectedDate={checkinDate}
                placeholder={"Pick a date"}
                onDateChange={handleCheckinChange}
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkout</p>
              <DatePicker
                selectedDate={checkoutDate}
                placeholder={"Pick a date"}
                onDateChange={handleCheckoutChange}
              />
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button
              className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] flex items-center gap-2 text-[12px] justify-center hover:bg-[#bf2180] hover:text-white"
              onClick={handleSubmit}
            >
              <IoIosSearch size={20} />
              Find your Hotel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hotels };
