"use client"
import { useState } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious, 
} from "@/components/ui/pagination"

const flightData = [
  {
    airline: 'AT',
    flightNumber: '811, 555',
    departureTime: '05:55 PM',
    arrivalTime: '05:50 AM',
    duration: '12:55 Hours',
    stops: 'FRA - LOS',
    originalPrice: 558.75,
    discountedPrice: 447,
  },
  {
    airline: 'ET',
    flightNumber: '707, 901',
    departureTime: '10:05 PM',
    arrivalTime: '12:10 PM',
    duration: '15:05 Hours',
    stops: 'FRA - LOS',
    originalPrice: 597.18,
    discountedPrice: 477.75,
  },
  {
    airline: 'Emirates',
    flightNumber: '44, 783',
    departureTime: '11:00 AM',
    arrivalTime: '03:20 PM',
    duration: '1 Day 05:20 Hours',
    stops: 'FRA - LOS',
    originalPrice: 626.25,
    discountedPrice: 501,
  },
  {
    airline: 'Emirates',
    flightNumber: '46, 783',
    departureTime: '03:15 PM',
    arrivalTime: '03:20 PM',
    duration: '1 Day 01:05 Hours',
    stops: 'FRA - LOS',
    originalPrice: 626.25,
    discountedPrice: 501,
  },
  {
    airline: 'Emirates',
    flightNumber: '48, 783',
    departureTime: '10:20 PM',
    arrivalTime: '03:20 PM',
    duration: '18:00 Hours',
    stops: 'FRA - LOS',
    originalPrice: 626.25,
    discountedPrice: 501,
  },
  {
    airline: 'Lufthansa',
    flightNumber: '6560, 566',
    departureTime: '10:00 PM',
    arrivalTime: '11:50 PM',
    duration: '1 Day 02:50 Hours',
    stops: 'FRA - LOS',
    originalPrice: 656.25,
    discountedPrice: 525,
  },
]

const airlines = [
  { name: 'ET', logo: '🇪🇹' },
  { name: 'Emirates', logo: '🇦🇪' },
  { name: 'Lufthansa', logo: '🇩🇪' },
  { name: 'EgyptAir', logo: '🇪🇬' },
  { name: 'Turkish Airlines', logo: '🇹🇷' },
  { name: 'British Airways', logo: '🇬🇧' },
  { name: 'Air France', logo: '🇫🇷' },
  { name: 'KLM Royal Dutch Airlines', logo: '🇳🇱' },
]

export default function FlightSearchResults() {
  const [priceRange, setPriceRange] = useState([400, 2300])
  const [selectedStops, setSelectedStops] = useState('all')
  const [selectedAirlines, setSelectedAirlines] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues)
  }

  const handleStopChange = (value) => {
    setSelectedStops(value)
  }

  const handleAirlineChange = (airline) => {
    setSelectedAirlines(prev =>
      prev.includes(airline)
        ? prev.filter(a => a !== airline)
        : [...prev, airline]
    )
  }

  const filteredFlights = flightData.filter(flight =>
    flight.discountedPrice >= priceRange[0] &&
    flight.discountedPrice <= priceRange[1] &&
    (selectedStops === 'all' || (selectedStops === 'direct' && flight.stops.split('-').length === 2)) &&
    (selectedAirlines.length === 0 || selectedAirlines.includes(flight.airline))
  )

  const totalPages = Math.ceil(filteredFlights.length / itemsPerPage)
  const paginatedFlights = filteredFlights.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="container  p-4 lg:p-10">
      <header className="bg-[#bf2180] text-white p-4 rounded-t-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[18px] lg:text-xl font-bold mb-2 sm:mb-0">FRA → LOS Adults 1 Childs 0 Infants 0</h1>
          
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Flight Stops</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="stops"
                value="all"
                checked={selectedStops === 'all'}
                onChange={() => handleStopChange('all')}
                className="mr-2"
              />
              All Flights
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="stops"
                value="direct"
                checked={selectedStops === 'direct'}
                onChange={() => handleStopChange('direct')}
                className="mr-2"
              />
              Direct
            </label>
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Price Range</h2>
          <Slider
            defaultValue={priceRange}
            max={2300}
            min={400}
            step={1}
            onValueChange={handlePriceRangeChange}
          />
          <div className="flex justify-between mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Airlines</h2>
          <div className="space-y-2">
            {airlines.map((airline) => (
              <label key={airline.name} className="flex items-center">
                <Checkbox
                  checked={selectedAirlines.includes(airline.name)}
                  onCheckedChange={() => handleAirlineChange(airline.name)}
                />
                <span className="ml-2">{airline.logo} {airline.name}</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-lg font-semibold mb-2 sm:mb-0">
                {filteredFlights.length} flights found on 20-10-2024
              </h2>
              <select className="border rounded p-2">
                <option>Price (Low to high)</option>
                <option>Price (High to low)</option>
              </select>
            </div>
          </div>

          {paginatedFlights.map((flight, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="text-2xl mr-2">
                    {flight.airline === 'AT' ? '✈️' :
                     flight.airline === 'ET' ? '🇪🇹' :
                     flight.airline === 'Emirates' ? '🇦🇪' :
                     flight.airline === 'Lufthansa' ? '🇩🇪' : '✈️'}
                  </span>
                  <div>
                    <h3 className="font-semibold">{flight.airline}</h3>
                    <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-sm line-through text-gray-500">USD {flight.originalPrice}</p>
                  <p className="text-lg font-bold text-[#bf2180]">USD {flight.discountedPrice}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div className="text-center sm:text-left mb-2 sm:mb-0">
                  <p className="font-semibold">{flight.departureTime} - {flight.arrivalTime}</p>
                  <p className="text-sm text-gray-500">Trip Duration</p>
                  <p>{flight.duration}</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-sm text-gray-500">Flight Stops 1</p>
                  <p>{flight.stops}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Button variant="outline" className="w-full sm:w-auto mb-2 sm:mb-0">
                  More Details
                </Button>
                <Button className="w-full sm:w-auto bg-[#bf2180] hover:bg-[#a11c6d]">
                  Book Flight
                </Button>
              </div>
            </div>
          ))}

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink 
                    href="#" 
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      </div>
    </div>
  )
}