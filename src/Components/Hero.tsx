import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative overflow-hidden" style={{ height: "100vh", width: "100%" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/5.jpg" // Corrected: Path should be in quotes
          alt="Hero background"
          layout="intrinsic" // Use intrinsic layout for controlling width/height
          width={1920} // Set a fixed width (e.g., 1920px)
          height={1080} // Set a fixed height (e.g., 1080px)
          objectFit="cover" // Ensure the image covers the area
          priority
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-left md:justify-start min-h-screen bg-black bg-opacity-40 px-4 md:px-8">
        {/* Content Box */}
        <div className="w-full text-left max-w-sm md:max-w-md lg:max-w-lg p-4 md:p-8 rounded-lg shadow-lg">
          <h6 className="text-sm md:text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
            New Arrival
          </h6>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-[#B88E2F]">
            Discover Our <br /> New Collection
          </h3>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-white">
            Explore the finest selection of premium products tailored just for you.
          </p>
          <Link href="/shop">
            <button className="bg-[#B88E2F] text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded-md hover:bg-gray-800 transition duration-300">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
