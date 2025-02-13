import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

interface FeatureProps {
  src: string;
  heading: string;
  price: string;
}

function Feature({ src, heading, price }: FeatureProps) {
  return (
    <Card className="w-full shadow-lg border rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="w-full h-[263px]">
        <Image
          src={src}
          alt={heading}
          width={270}
          height={263}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 flex items-center justify-between text-[#272343]">
        <p className="text-[16px] leading-[20px] font-medium">{heading}</p>
        <h3 className="text-[14px] leading-[16px] font-bold">{price}</h3>
      </div>
    </Card>
  );
}

export default Feature;
