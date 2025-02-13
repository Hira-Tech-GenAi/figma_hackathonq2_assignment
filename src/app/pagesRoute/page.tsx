import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

function PagesRoute() {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between mt-12 mb-12 px-4 sm:px-6 md:px-8">
        {/* First Div */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-xl sm:text-2xl font-medium mb-6">Bag</h2>

          {/* Card Div 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-6 border-b border-gray-300">
            {/* Picture Div */}
            <div>
              <Image
                src="/products/product3.png"
                alt="chair"
                width={150}
                height={150}
                className="w-24 sm:w-32"
              />
            </div>

            {/* Text Div */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <p className="text-base sm:text-lg text-[#272343]">
                  Library Stool Chair
                </p>
                <h2 className="text-sm sm:text-base font-medium">MRP: $99</h2>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Ashen Slate/Cobalt Bliss
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <p>
                  Size: <span className="text-black">L</span>
                </p>
                <p>
                  Quantity: <span className="text-black">1</span>
                </p>
              </div>

              {/* Icons Div */}
              <div className="flex items-center gap-4 mt-4">
                <FaRegHeart size={20} />
                <IoTrashOutline size={20} />
              </div>
            </div>
          </div>

          {/* Second Card Div */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pb-6 border-b border-gray-300 mt-6">
            {/* Picture Div */}
            <div>
              <Image
                src="/products/cat1.png"
                alt="chair"
                width={150}
                height={150}
                className="w-24 sm:w-32"
              />
            </div>

            {/* Text Div */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <p className="text-base sm:text-lg text-[#272343]">
                  Library Stool Chair
                </p>
                <h2 className="text-sm sm:text-base font-medium">MRP: $99</h2>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Ashen Slate/Cobalt Bliss
              </p>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <p>
                  Size: <span className="text-black">L</span>
                </p>
                <p>
                  Quantity: <span className="text-black">1</span>
                </p>
              </div>

              {/* Icons Div */}
              <div className="flex items-center gap-4 mt-4">
                <FaRegHeart size={20} />
                <IoTrashOutline size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h1 className="text-lg sm:text-xl font-medium mb-6">Summary</h1>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm">Subtotal</p>
              <h2 className="text-sm font-medium">$198.00</h2>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-sm">Estimated Delivery & Handling</p>
              <h2 className="text-sm font-medium">Free</h2>
            </div>

            <div className="flex justify-between items-center border-t border-b py-4 mb-4">
              <p className="text-sm">Total</p>
              <h2 className="text-sm font-medium">$198.00</h2>
            </div>

            <Button className="w-full text-sm font-medium text-white py-3 rounded-full bg-[#029FAE]">
              Member Checkout
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default PagesRoute;
