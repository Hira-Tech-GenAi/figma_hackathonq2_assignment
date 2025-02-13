import React from "react";
import ProductCard from "./productCard";
import { OurProduct_Data } from "./constant/ourProduct";

function OurProduct() {
  return (
    <section className="w-full mt-20 mb-16 px-4">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-center text-[#272343]">
          Our Products
        </h1>
      </div>

      {/* Our Product Grid */}
      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        <ProductCard data={OurProduct_Data} />
      </div>
    </section>
  );
}

export default OurProduct;
