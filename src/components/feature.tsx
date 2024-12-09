import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { feature_data } from "./constant/feature";

function Feature() {
  return (
    <div className="w-full mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
        {feature_data.map((item, index) => {
          return (
            <Card
              className="h-full w-full sm:w-[263px] md:w-[270px] lg:w-[300px] shadow-none border-none"
              key={index}
            >
              <div className="w-full h-[263px]">
                <Image
                  src={item.src}
                  alt="image"
                  width={270}
                  height={263}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex items-center justify-between text-[#272343] mt-[15px]">
                <p className="text-[16px] leading-[20px]">{item.heading}</p>
                <h3 className="text-[14px] leading-[16px] font-bold">
                  {item.price}
                </h3>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Feature;
