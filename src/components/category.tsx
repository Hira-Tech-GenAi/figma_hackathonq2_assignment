import ImageCard from "./imageCard";
import Image from "next/image";

function Category() {
  return (
    <section className="w-full mt-8 sm:mt-16 md:mt-24 lg:mt-32 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold text-[#272343] text-center sm:text-left mb-6 sm:mb-8 md:mb-10">
        Top categories
      </h1>

      {/* Images main div */}
      <div className="w-full flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-start mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        {/* ImageCard component should be responsive, you can adjust width inside ImageCard */}
        <ImageCard />
      </div>

      {/* bottom pictures */}
      <div className="w-full">
        <div className="w-full mb-4 sm:mb-6 lg:mb-8">
          <Image
            src="/products/card1.png"
            alt="picture"
            width={648}
            height={648}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-[12px]">
          {[
            { src: "/products/card2.png", alt: "chair2" },
            { src: "/products/card3.png", alt: "chair3" },
            { src: "/products/card4.png", alt: "chair4" },
            { src: "/products/card5.png", alt: "chair5" },
          ].map((image, index) => (
            <div key={index} className="aspect-square">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={312}
                height={312}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
