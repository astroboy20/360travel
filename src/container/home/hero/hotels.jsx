"use client";
import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { SlArrowDown } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/date-picker";
import { FiUser } from "react-icons/fi";
import { useFetchItems } from "@/container/hooks/useFetchItems";
import { ClipLoader } from "react-spinners";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Hotels = () => {
  const [cities, setCities] = useState("");
  const [travellers, setTravellers] = useState("");
  const [travellerCount, setTravellerCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [show, setShow] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState(cities);

  // Debounce the city input to avoid too many API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(cities);
    }, 500); // Delay for debouncing

    return () => {
      clearTimeout(handler);
    };
  }, [cities]);

  // Fetch only if debouncedQuery is not empty
  const { data, isLoading, error } = useFetchItems({
    url: debouncedQuery
      ? `https://360.futamart.com/cities?query=${debouncedQuery}`
      : null,
  });

  const handleCityChange = (e) => {
    setCities(e.target.value);
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

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
          <div>
            <p className="text-[12px]">City Name</p>
            <div className="relative">
              <div className="flex gap-2 border w-full items-center p-3 rounded-[13px]">
                <CiLocationOn size={"30px"} color="#bf2180" />
                <input
                  className="outline-none w-full"
                  placeholder="Search by city"
                  type="text"
                  value={cities}
                  onChange={handleCityChange}
                />
                {isLoading && <ClipLoader size={20} />}
              </div>

              {data?.data && !isLoading && (
                <div className="absolute bg-white w-full border mt-1 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
                  <ul className="p-2">
                    {data?.data?.length > 0 ? (
                      data?.data?.map((city) => (
                        <li
                          key={city.id}
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

          <div>
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
                  value={`Travellers ${travellerCount} Rooms ${roomCount}`}
                />
                <span className="flex items-center justify-center rounded-full border border-black p-1">
                  <SlArrowDown size={"15px"} color="#bf2180" />
                </span>
              </div>
              {show && (
                <div className="absolute bg-white w-full border mt-1 rounded-lg shadow-lg max-h-[200px] overflow-y-auto">
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
                    <li>
                      
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:flex-row gap-2 lg:1/2">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkin</p>
              <DatePicker />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkout</p>
              <DatePicker />
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] flex items-center gap-2 text-[12px] justify-center">
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
