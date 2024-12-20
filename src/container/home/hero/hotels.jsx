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
import { useRouter } from "next/navigation";

const Hotels = () => {
  const toast = useToast();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState("");
  const [id, setId] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [travellerCount, setTravellerCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [show, setShow] = useState(false);
  const [checkinDate, setCheckinDate] = useState(null);
  const [checkoutDate, setCheckoutDate] = useState(null);
  const [childAges, setChildAges] = useState(Array(childrenCount).fill(""));

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
  }, [cities]);

  const handleCityChange = (e) => {
    setCities(e.target.value);
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
    setChildrenCount((prev) => {
      const newCount = prev > 0 ? prev - 1 : 0;
      setChildAges((ages) => ages.slice(0, newCount)); // Adjust childAges array when decreasing children count
      return newCount;
    });
  };

  const handleNext_Children = () => {
    setChildrenCount((prev) => {
      const newCount = prev + 1;
      setChildAges((ages) => [...ages, ""]); // Add an empty string for new child age when increasing children count
      return newCount;
    });
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

  const handleChildAgeChange = (index, age) => {
    setChildAges((prevAges) => {
      const newAges = [...prevAges]; // Create a new array to avoid mutating state directly
      newAges[index] = age; // Set the age at the given index
      return newAges; // Return the updated array
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredChildAges = childAges.filter(
      (age) => age !== "" && age !== undefined
    );

    console.log("Filtered Child Ages:", filteredChildAges);
    
    setLoading(true);
    const formData = {
      selectedCity,
      travellerCount,
      roomCount,
      childAges: filteredChildAges,
      childrenCount,
      checkinDate,
      checkoutDate,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }

    if (
      !id ||
      !checkinDate ||
      !checkoutDate ||
      filteredChildAges.length !== childrenCount
    ) {
      toast({
        title: "Error!",
        description: "Please fill in all fields including child ages.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    if (new Date(checkoutDate) <= new Date(checkinDate)) {
      toast({
        title: "Error!",
        description: "Checkout date should be after the check-in date.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return;
    }

    axios
      .get(
        `https://360.futamart.com/hotels?id=${id}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&room=${roomCount}&adult=${travellerCount}&childAges=${filteredChildAges.join(
          ","
        )}`
      )
      .then((response) => {
        setLoading(false);
        if (typeof window !== "undefined") {
          localStorage.setItem("hotel-response", JSON.stringify(response.data));
        }
        router.push("/hotel-booking");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
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
                  readOnly
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
                            <Select
                              key={index}
                              onValueChange={(value) =>
                                handleChildAgeChange(index, value)
                              }
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue
                                  placeholder={`Age of child ${index + 1}`}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {[...Array(17).keys()].map((age) => (
                                  <SelectItem key={age} value={age}>
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
                minDate={new Date()}
              />
            </div>

            <div className="w-full lg:w-1/2">
              <p className="text-[12px]">Checkout</p>
              <DatePicker
                selectedDate={checkoutDate}
                placeholder={"Pick a date"}
                onDateChange={handleCheckoutChange}
                minDate={new Date()}
              />
            </div>
          </div>

          <div className="w-full mt-auto">
            <Button
              className="w-full bg-[#bf2180] text-white h-[50px] font-600 rounded-[13px] flex items-center gap-2 text-[12px] justify-center hover:bg-[#bf2180] hover:text-white"
              onClick={handleSubmit}
            >
              {loading ? (
                <ClipLoader color="#fff" />
              ) : (
                <div className="flex items-center gap-2">
                  {" "}
                  <IoIosSearch size={20} />
                  Find your Hotel
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hotels };
