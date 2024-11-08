"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "@/components/date-picker";

const roomTypes = [
  { id: "studio", name: "Studio", price: 100 },
  { id: "one-bedroom", name: "One Bedroom", price: 150 },
  { id: "two-bedroom", name: "Two Bedroom", price: 200 },
];

const HotelBookingForm = () => {
  const data =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("formData"));

  const [checkinDate, setCheckinDate] = useState(data?.checkinDate || "");
  const [checkoutDate, setCheckoutDate] = useState(data?.checkoutDate || "");
  const [rooms, setRooms] = useState(data?.roomCount || "");
  const [guests, setGuests] = useState(data?.travellerCount || "");
  const [fullName, setFullName] = useState("");
  const [roomType, setRoomType] = useState(roomTypes[0].id);

  const handleCheckinChange = (date) => {
    setCheckinDate(date);
  };

  const handleCheckoutChange = (date) => {
    setCheckoutDate(date);
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log("Booking submitted:", { guests, roomType });
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-none border-none outline-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#bf2180]">
          Book Your Stay
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="check-in">Check-in Date</label>
              <DatePicker
                selectedDate={checkinDate}
                placeholder={"Pick a date"}
                onDateChange={handleCheckinChange}
                minDate={new Date()}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="check-out">Check-out Date</label>
              <DatePicker
                selectedDate={checkoutDate}
                placeholder={"Pick a date"}
                onDateChange={handleCheckoutChange}
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-2">
              <label htmlFor="rooms">Number of Rooms</label>
              <Input
                id="rooms"
                type="number"
                readOnly
                value={roooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="guests">Number of Guests</label>
              <Input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="name">Full Name </label>
            <Input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="room-type">Room Type</label>
            <Select value={roomType} onValueChange={setRoomType}>
              <SelectTrigger id="room-type">
                <SelectValue placeholder="Select a room type" />
              </SelectTrigger>
              <SelectContent>
                {roomTypes.map((room) => (
                  <SelectItem key={room.id} value={room.id}>
                    {room.name} - ${room.price}/night
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full bg-[#bf2180] hover:bg-[#a11c6d] text-white"
          onClick={handleSubmit}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export { HotelBookingForm };
