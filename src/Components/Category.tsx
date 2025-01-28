import Image from "next/image";

export default function ShopCategories() {
  return (
    <section className="py-16 bg-white flex items-center justify-center min-h-screen w-full">
      <div className="container mx-auto px-4 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-4">
          {/* Category 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg text-center">
            <div className="relative w-full" style={{ height: "300px" }}>
              <Image
                src="/watch.jpeg"
                alt="Category 1"
                width={300} // Fixed width
                height={300} // Fixed height
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">Smart Devices</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                Explore the latest gadgets and devices.
              </p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg text-center">
            <div className="relative w-full" style={{ height: "300px" }}>
              <Image
                src="/light.jpeg"
                alt="Category 2"
                width={300} // Fixed width
                height={300} // Fixed height
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">Home Decor</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                Enhance your living space with our decor collection.
              </p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg text-center">
            <div className="relative w-full" style={{ height: "300px" }}>
              <Image
                src="/kitchen.jpeg"
                alt="Category 3"
                width={300} // Fixed width
                height={300} // Fixed height
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">Kitchen Gadgets</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                Enhance your kitchen experience with our innovative gadgets collection.
              </p>
            </div>
          </div>

          {/* Additional categories can be added here following the same structure */}
        </div>
      </div>
    </section>
  );
}
