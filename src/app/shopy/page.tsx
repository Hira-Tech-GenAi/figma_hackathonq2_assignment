import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import Feature from "@/components/feature";
import { feature_data } from "@/components/constant/feature";

function Page() {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[111px]">
        {/* Product Image */}
        <div className="w-full max-w-[675px]">
          <Image
            src="/products/product2.png"
            alt="chair"
            width={675}
            height={607}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[60px] leading-tight font-bold text-[#272343]">
            Library Stool <br /> Chair
          </h1>

          <Button className="text-lg md:text-xl font-semibold text-white bg-[#029FAE] mt-6 px-8 py-3 rounded-full">
            $20.00 USD
          </Button>

          <div className="max-w-md text-lg md:text-xl text-[#272343] pt-6 border-t mt-6 mx-auto lg:mx-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>

          <Button className="w-full md:w-[212px] h-[63px] flex items-center justify-center gap-3 text-white bg-[#029FAE] mt-6">
            <FiShoppingCart size={24} />
            <p className="text-lg md:text-xl font-medium">Add To Cart</p>
          </Button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full mt-20">
        {/* Heading */}
        <div className="text-[#000000] font-bold flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h1 className="text-2xl md:text-3xl tracking-wide">
            Featured Products
          </h1>
          <p className="text-lg underline mt-3 md:mt-0 cursor-pointer">
            View all
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {feature_data.map((item, index) => (
            <Feature key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
