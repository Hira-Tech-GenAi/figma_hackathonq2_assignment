import Image from "next/image";
import ProductCard from "./productCard";
import { featureProduct_Data } from "@/components/constant/featureProduct";

function LogoFeature() {
  return (
    <section className="w-full flex flex-col mt-8 md:mt-[53px] px-4 md:px-6 lg:px-8">
      {/* logos div */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-[80px]">
        <Image
          src="/logos/logo1.png"
          alt="logo1"
          width={85}
          height={87}
          className="w-16 md:w-auto"
        />
        <Image
          src="/logos/logo2.png"
          alt="logo2"
          width={107}
          height={109}
          className="w-20 md:w-auto"
        />
        <Image
          src="/logos/logo3.png"
          alt="logo3"
          width={135}
          height={139}
          className="w-24 md:w-auto"
        />
        <Image
          src="/logos/logo4.png"
          alt="logo4"
          width={63}
          height={65}
          className="w-12 md:w-auto"
        />
        <Image
          src="/logos/logo5.png"
          alt="logo5"
          width={98}
          height={101}
          className="w-18 md:w-auto"
        />
        <Image
          src="/logos/logo6.png"
          alt="logo6"
          width={113}
          height={115}
          className="w-20 md:w-auto"
        />
        <Image
          src="/logos/logo7.png"
          alt="logo7"
          width={84}
          height={87}
          className="w-16 md:w-auto"
        />
      </div>

      {/* feature products */}
      <div className="flex flex-col mt-6 md:mt-[24px]">
        {/* heading */}
        <h1 className="text-2xl md:text-[32px] leading-tight font-semibold text-[#272343]">
          Featured Products
        </h1>

        {/* products main div */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[24px] mt-6 md:mt-[40px]">
          {/* product card */}
          <ProductCard data={featureProduct_Data} />
        </div>
      </div>
    </section>
  );
}

export default LogoFeature;
