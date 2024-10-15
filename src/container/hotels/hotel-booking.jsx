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

const hotelData = [
  {
    name: 'Hotel Luxury',
    location: 'Paris, France',
    rating: 5,
    originalPrice: 350,
    discountedPrice: 280,
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Pool'],
  },
  {
    name: 'Ocean View Resort',
    location: 'Maldives',
    rating: 4,
    originalPrice: 450,
    discountedPrice: 400,
    amenities: ['Oceanfront', 'Free Airport Shuttle', 'Spa'],
  },
  {
    name: 'Mountain Retreat',
    location: 'Switzerland',
    rating: 5,
    originalPrice: 600,
    discountedPrice: 500,
    amenities: ['Free Wi-Fi', 'Breakfast Included', 'Ski Access'],
  },
  {
    name: 'City Lights Hotel',
    location: 'New York, USA',
    rating: 4,
    originalPrice: 300,
    discountedPrice: 250,
    amenities: ['Free Wi-Fi', 'City View', 'Bar'],
  },
  {
    name: 'Desert Oasis',
    location: 'Dubai, UAE',
    rating: 5,
    originalPrice: 700,
    discountedPrice: 600,
    amenities: ['Pool', 'Private Beach', 'Luxury Spa'],
  },
  {
    name: 'Cultural Stay',
    location: 'Kyoto, Japan',
    rating: 4,
    originalPrice: 350,
    discountedPrice: 320,
    amenities: ['Free Wi-Fi', 'Traditional Rooms', 'Garden View'],
  },
]

const hotelBrands = [
  { name: 'Hilton', logo: '🏨' },
  { name: 'Marriott', logo: '🏨' },
  { name: 'Hyatt', logo: '🏨' },
  { name: 'InterContinental', logo: '🏨' },
  { name: 'Accor', logo: '🏨' },
]

export default function HotelSearchResults() {
  const [priceRange, setPriceRange] = useState([200, 1000])
  const [selectedRatings, setSelectedRatings] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3

  const handlePriceRangeChange = (newValues) => {
    setPriceRange(newValues)
  }

  const handleRatingChange = (rating) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    )
  }

  const handleBrandChange = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const filteredHotels = hotelData.filter(hotel =>
    hotel.discountedPrice >= priceRange[0] &&
    hotel.discountedPrice <= priceRange[1] &&
    (selectedRatings.length === 0 || selectedRatings.includes(hotel.rating)) &&
    (selectedBrands.length === 0 || selectedBrands.some(brand => hotel.name.includes(brand)))
  )

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage)
  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="container p-4 lg:p-10">
      <header className="bg-[#bf2180] text-white p-4 rounded-t-lg">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-[18px] lg:text-xl font-bold mb-2 sm:mb-0">Hotel Search Results</h1>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Hotel Ratings</h2>
          <div className="space-y-2">
            {[5, 4, 3].map((rating) => (
              <label key={rating} className="flex items-center">
                <Checkbox
                  checked={selectedRatings.includes(rating)}
                  onCheckedChange={() => handleRatingChange(rating)}
                />
                <span className="ml-2">{rating} Stars</span>
              </label>
            ))}
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Price Range</h2>
          <Slider
            defaultValue={priceRange}
            max={1000}
            min={200}
            step={10}
            onValueChange={handlePriceRangeChange}
          />
          <div className="flex justify-between mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>

          <h2 className="text-lg font-semibold mt-6 mb-4">Hotel Brands</h2>
          <div className="space-y-2">
            {hotelBrands.map((brand) => (
              <label key={brand.name} className="flex items-center">
                <Checkbox
                  checked={selectedBrands.includes(brand.name)}
                  onCheckedChange={() => handleBrandChange(brand.name)}
                />
                <span className="ml-2">{brand.logo} {brand.name}</span>
              </label>
            ))}
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h2 className="text-lg font-semibold mb-2 sm:mb-0">
                {filteredHotels.length} hotels found
              </h2>
              <select className="border rounded p-2">
                <option>Price (Low to high)</option>
                <option>Price (High to low)</option>
              </select>
            </div>
          </div>

          {paginatedHotels.map((hotel, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow mb-4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <span className="text-2xl mr-2">🏨</span>
                  <div>
                    <h3 className="font-semibold">{hotel.name}</h3>
                    <p className="text-sm text-gray-500">{hotel.location}</p>
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-sm line-through text-gray-500">USD {hotel.originalPrice}</p>
                  <p className="text-lg font-bold text-[#bf2180]">USD {hotel.discountedPrice}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                <div className="text-center sm:text-left mb-2 sm:mb-0">
                  <p className="font-semibold">{hotel.rating} Stars</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div className="text-center sm:text-right">
                  <p className="text-sm text-gray-500">Amenities</p>
                  <p>{hotel.amenities.join(', ')}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Button variant="outline" className="w-full sm:w-auto mb-2 sm:mb-0">
                  More Details
                </Button>
                <Button className="w-full sm:w-auto bg-[#bf2180] hover:bg-[#a11c6d]">
                  Book Now
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
