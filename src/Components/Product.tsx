"use client"
import { useState } from "react";
import Image from "next/image";

interface Card {
  name: string;
  description: string;
  image: string;
  price: string;
}

const data: Card[] = [
  {
    name: "Smart Watch",
    price: "Rs. 2800",
    image: "/watch.JPEG",
    description: "I20 ultra max suit smart watch 10 in 1 in one box 2.3 inches large screen smart watch with earbuds,",
  },
  {
    name: "Tumbler",
    price: "Rs. 2090",
    image: "/tumbler.JPEG",
    description: "High Quality Stainless Steel Tumbler with Straw 1200ml",
  },
  {
    name: "Solar LED",
    price: "Rs. 500",
    image: "/light.JPEG",
    description: "Waterproof Solar Deck fence Lights Lamp Solar LED Step Light Solar Lights for Home, Outdoor Stairs, Step, Fence, Yard, Patio, and Pathway (Assorted Color)",
  },
  {
    name: "Bottle Cover",
    price: "Rs. 300",
    image: "/cover.JPEG",
    description: "Water Dispenser Bottle Cover, Gallon Water Bottle Dust Poof Cloth, Random Colours & Design",
  },
  {
    name: "Airtight Jar",
    price: "Rs. 700",
    image: "/grain.JPEG",
    description: "2.5L Airtight Grain Jar (Premium Quality) Each",
  },
  {
    name: "Leather Case Organizer Tray",
    price: "Rs. 600",
    image: "/tray.JPEG",
    description: "Leather Case Organizer Tray (Square Random Colors)",
  },
  {
    name: "Neck Pillow",
    price: "Rs. 560",
    image: "/pillow.JPEG",
    description: "Filling: 100% Polyurethane fiber Foam Plush cover: 90% Polyester; 10% Spandex Snap fastener",
  },
  {
    name: "Dishwashing Gloves",
    price: "Rs. 480",
    image: "/gloves.JPEG",
    description: "Dishwashing Gloves Big (Random Colours)",
  },
  {
    name: "Glass Jar",
    price: "Rs. 390",
    image: "/jar.JPEG",
    description: "Glass Cover Jar with Spoon & Brush(Box Packing) Each",
  },
  {
    name: "Acrylic Box",
    price: "Rs. 1850",
    image: "/box.JPEG",
    description: "Acrylic 4 Grid Storage Box (Premium Quality)",
  },
];

export default function Products() {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 products initially

  const loadMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more products
  };

  return (
    <section className="container mx-auto px-4 py-8 mt-10">
      {/* Section Heading */}
      <h2 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mb-8">
        Our Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.slice(0, visibleCount).map((card, index) => (
          <div
            key={index}
            className="bg-gray-200 shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80">
              
              <Image
                src={card.image}
                alt={card.name}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                {card.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                {card.description}
              </p>
              <p className="font-bold text-lg text-[#B88E2F]">{card.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < data.length && (
        <div className="flex justify-center mt-8">
          <button
            className="text-[#B88E2F] border-2 border-[#B88E2F] px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-md hover:bg-[#B88E2F] hover:text-white transition duration-300"
            onClick={loadMoreProducts}
          >
            Show More
          </button>
        </div>
      )}
    </section>
  );
}
