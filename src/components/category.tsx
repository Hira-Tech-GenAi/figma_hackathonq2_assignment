import React from "react";
import ImageCard from "./imageCard";
import Image from "next/image";

function Category() {
  return (
    <section className="w-full mt-[136px] px-4 sm:px-6 md:px-8 lg:px-10">
      {/* heading */}
      <h1 className="text-[32px] leading-[35px] font-semibold text-[#272343] text-center sm:text-left">
        Top categories
      </h1>

      {/* Images main div */}
      <div className="w-full h-[424px] flex flex-wrap gap-[24px] mt-[40px] justify-center sm:justify-start">
        {/* ImageCard component should be responsive, you can adjust width inside ImageCard */}
        <ImageCard />
      </div>

      {/* bottom pictures */}
      <div className="w-full h-[648px] mt-[229px]">
        {/* first full image for large screens */}
        <div className="w-full mb-4 sm:mb-6 lg:mb-8">
          <Image
            src={"/products/card1.png"}
            alt={"picture"}
            width={648}
            height={648}
            className="w-full h-full object-cover"
          />
        </div>

        {/* small images grid */}
        <div className="grid grid-cols-2 gap-[24px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Small Images */}
          <div>
            <Image
              src={"/products/card2.png"}
              alt="chair2"
              width={312}
              height={312}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Image
              src={"/products/card3.png"}
              alt="chair3"
              width={312}
              height={312}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Image
              src={"/products/card4.png"}
              alt="chair4"
              width={312}
              height={312}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <Image
              src={"/products/card5.png"}
              alt="chair5"
              width={312}
              height={312}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
