import Image from "next/image";
import { category_Data } from "@/components/constant/category";

function ImageCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {category_Data.map((item, index) => (
        <div
          className="relative rounded-lg overflow-hidden shadow-lg"
          key={index}
        >
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.name}
            width={424}
            height={424}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
            <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
            <p className="text-sm mt-2">{item.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageCard;
