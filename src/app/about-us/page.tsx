import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import RevCard from "@/components/revCard";

function AboutPage() {
  return (
    <>
      <section className="w-full py-10 px-4 sm:px-6 md:px-8">
        {/* About Div 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {/* 1 */}
          <div className="bg-[#007580] p-8 sm:p-10 lg:p-16 text-white text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              About Us - Comforty
            </h1>
            <div className="mt-4 text-sm sm:text-base leading-6 max-w-md mx-auto lg:mx-0">
              <p>
                At Comforty, we believe that the right chair can transform your
                space and elevate your comfort. Specializing in ergonomic
                design, premium materials, and modern aesthetics, we craft
                chairs that seamlessly blend style with functionality.
              </p>
            </div>
            <Button className="mt-8 sm:mt-10 lg:mt-16 w-40 sm:w-48 h-12 bg-[#F9F9F926] rounded-none">
              View Collection
            </Button>
          </div>

          {/* 2 */}
          <div className="w-full lg:w-[619px] h-60 sm:h-72 lg:h-[463px] relative">
            <Image
              src="/products/card5.png"
              alt="chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Div 2 */}
        <div className="mt-16 sm:mt-20">
          <h1 className="text-xl sm:text-2xl lg:text-3xl text-center font-semibold">
            What makes our Brand Different
          </h1>

          {/* Card Review Main Div */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <RevCard />
          </div>
        </div>

        {/* Div 3 */}
        <div className="mt-16 sm:mt-20">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Our Popular Products
          </h1>

          {/* Pictures */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {/* Div 1 */}
            <div>
              <div>
                <Image
                  src="/products/p1.png"
                  alt="sofa"
                  width={630}
                  height={375}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg sm:text-xl mt-4 text-[#2A254B]">
                The Poplar suede sofa
              </p>
              <h4 className="text-base sm:text-lg mt-2 text-[#2A254B]">
                $99.00
              </h4>
            </div>

            {/* Div 2 */}
            <div>
              <div>
                <Image
                  src="/products/p2.png"
                  alt="chair"
                  width={305}
                  height={375}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg sm:text-xl mt-4 text-[#2A254B]">
                The Dandy chair
              </p>
              <h4 className="text-base sm:text-lg mt-2 text-[#2A254B]">
                $99.00
              </h4>
            </div>

            {/* Div 3 */}
            <div>
              <div>
                <Image
                  src="/products/p3.png"
                  alt="chair"
                  width={305}
                  height={375}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg sm:text-xl mt-4 text-[#2A254B]">
                The Dandy chair
              </p>
              <h4 className="text-base sm:text-lg mt-2 text-[#2A254B]">
                $99.00
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
