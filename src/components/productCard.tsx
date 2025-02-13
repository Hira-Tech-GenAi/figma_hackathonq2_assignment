import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { Feat_data } from "./constant/featureProduct";

function ProductCard({ data }: { data: Feat_data[] }) {
  return (
    <>
      {data.map((item, index) => (
        <Card
          className="w-full max-w-[312px] overflow-hidden shadow-none border-none mx-auto"
          key={index}
        >
          {/* Image Container */}
          <div className="w-full h-[250px] md:h-[300px] relative">
            <Image
              src={item.src}
              alt="product1"
              layout="fill"
              objectFit="cover"
            />

            {/* Badge */}
            {item.badge && (
              <Badge
                className={`text-xs leading-[14px] text-white py-1 px-2 absolute top-4 left-4 bg-${item.badgeColor}-500`}
              >
                {item.badgeText}
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex items-center justify-between mt-4 px-2">
            <div>
              <p className="text-[#007580]">{item.heading}</p>

              <div className="flex items-center gap-2 mt-2">
                <h2 className="text-lg font-semibold text-[#272343]">
                  ${item.newPrice}
                </h2>
                {item.oldPrice_h2 && (
                  <h2 className="text-sm text-[#9A9CAA] line-through">
                    ${item.oldPrice}
                  </h2>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            {item.shopBg && (
              <Button
                className={`h-11 w-11 rounded-lg bg-${item.shopBg}-500 bg-[#029FAE]`}
              >
                <LuShoppingCart size={20} color="white " />
              </Button>
            )}
          </div>
        </Card>
      ))}
    </>
  );
}

export default ProductCard;
