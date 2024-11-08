"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

const roomTypes = [
  { id: "studio", name: "Studio", price: 100 },
  { id: "one-bedroom", name: "One Bedroom", price: 150 },
  { id: "two-bedroom", name: "Two Bedroom", price: 200 },
]

const HotelBookingForm =() => {
  const [checkIn, setCheckIn] = useState()
  const [checkOut, setCheckOut] = useState()
  const [guests, setGuests] = useState(1)
  const [roomType, setRoomType] = useState(roomTypes[0].id)

  const handleSubmit = () => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", { checkIn, checkOut, guests, roomType })
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#bf2180]">Book Your Stay</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="check-in">Check-in Date</Label>
              <div className="relative">
                <Input
                  id="check-in"
                  type="text"
                  placeholder="Select date"
                  value={checkIn ? format(checkIn, "PPP") : ""}
                  readOnly
                />
                <CalendarIcon className="absolute right-3 top-3 h-4 w-4 opacity-50" />
              </div>
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                className="rounded-md border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="check-out">Check-out Date</Label>
              <div className="relative">
                <Input
                  id="check-out"
                  type="text"
                  placeholder="Select date"
                  value={checkOut ? format(checkOut, "PPP") : ""}
                  readOnly
                />
                <CalendarIcon className="absolute right-3 top-3 h-4 w-4 opacity-50" />
              </div>
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                className="rounded-md border"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="guests">Number of Guests</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="room-type">Room Type</Label>
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
  )
}

export {HotelBookingForm}