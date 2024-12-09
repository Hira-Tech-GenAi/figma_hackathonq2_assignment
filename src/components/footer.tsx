import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="w-full flex flex-col border-t-[1px] border-b-[1px] pt-[80px] px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:gap-[24px]">
        {/* div 1 */}
        <div className="flex flex-col gap-[24px] mb-6 sm:mb-0">
          <div className="flex items-center gap-[8px]">
            <Image src={"/logo.png"} alt="logo" width={40} height={40} />
            <h2 className="text-[26px] leading-[31px] font-medium">Comforty</h2>
          </div>

          <p className="text-[16px] leading-[24px] text-[#272343]">
            Vivamus tristique odio sit amet velit semper, <br /> eu posuere
            turpis interdum. <br />
            Cras egestas purus
          </p>

          <div className="flex items-center gap-[32px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center border-[1px] border-black rounded-full">
              <FaFacebook size={16} color="#007580" />
            </div>
            <FaTwitter size={16} color="#636270" />
            <FaInstagram size={16} color="#636270" />
            <FaPinterest size={16} color="#636270" />
            <FaYoutube size={16} color="#636270" />
          </div>
        </div>

        {/* div 2 */}
        <div className="sm:ml-[97px] mb-6 sm:mb-0">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">
            Category
          </h1>
          <div className="flex flex-col gap-[12px] text-[16px] leading-[17px] text-[#272343] mt-[20px]">
            <p>Armchair</p>
            <p>Wing Chair</p>
            <p className="underline text-[#007580]">Desk Chair</p>
            <p>Wooden Chair</p>
            <p>Park Bench</p>
          </div>
        </div>

        {/* div 3 */}
        <div className="sm:ml-[119px] mb-6 sm:mb-0">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">
            Support
          </h1>
          <div className="flex flex-col gap-[12px] text-[16px] leading-[17px] text-[#272343] mt-[20px]">
            <p>Help & Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
        </div>

        {/* div 4 */}
        <div className="sm:ml-[68px]">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">
            Newsletter
          </h1>
          <div className="flex gap-[12px] mt-[20px]">
            <Input
              type="email"
              placeholder="Your email"
              className="text-[16px] leading-[16px] text-[#9A9CAA] py-[15px] px-[20px]"
            />
            <Button className="text-[16px] leading-[110%] font-semibold py-[14px] px-[24px] bg-[#029FAE]">
              Subscribe
            </Button>
          </div>
          <p className="text-[15px] leading-[22px] text-[#272343] mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
            Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between py-[24px] border-t-[1px] mt-[60px]">
        <div className="text-[14px] leading-[21px] text-[#9A9CAA]">
          @ 2024 - All rights reserved by <span>Hira Khalid</span>
        </div>
        <div className="text-[#000000c2]">
          <Image src={"/end.png"} alt="paypal" width={227} height={27} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
