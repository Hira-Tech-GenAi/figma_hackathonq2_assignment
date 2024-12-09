"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full flex flex-col">
        {/* Top div 1 */}
        <div className="w-full h-[45px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 bg-[#272343]">
          <div className="flex items-center gap-[8px]">
            <FaCheck size={16} color="#ffffff" />
            <p className="text-white font-inter text-[13px] font-normal leading-none flex items-center mb-2 sm:mb-0">
              Free shipping on all orders over $50
            </p>
          </div>

          {/* Top right icons */}
          <div className="flex gap-[24px] text-[13px] leading-[16px] text-white">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-[6px] focus:outline-none hover:cursor-pointer">
                Eng
                <ChevronDown size={7} />
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>Russian</DropdownMenuItem>
                <DropdownMenuItem>Urdu</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <p>Faqs</p>
            <div className="flex items-center gap-[6px]">
              <IoAlertCircleOutline />
              <p>Need Help</p>
            </div>
          </div>
        </div>

        {/* Second div 2 */}
        <div className="w-full h-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-[#F0F2F3]">
          <div className="flex items-center mb-4 sm:mb-0">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h2 className="text-[26px] leading-[31px] font-medium">Comforty</h2>
          </div>

          <div className="flex items-center gap-[8px] py-[11px] px-[16px] bg-white rounded-[8px]">
            <LuShoppingCart size={22} />
            <p className="text-[12px] leading-[13px] font-medium">Cart</p>
            <Button
              size={"icon"}
              className="h-[20px] w-[20px] rounded-full bg-[#007580]"
            >
              2
            </Button>
          </div>
        </div>

        {/* Third div 3 */}
        <nav className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-24 bg-white shadow-bottom-gray py-4 shadow-[0_4px_6px_rgba(128,128,128,0.1)]">
          {/* Hamburger Button for Small Devices */}
          <div className="sm:hidden flex items-center" onClick={toggleMenu}>
            <Image
              src="/menu.png"
              alt="Hamburger Menu"
              width={24}
              height={24}
            />
          </div>

          {/* Navigation Links */}
          <div
            className={`sm:flex sm:space-x-6 sm:space-y-0 space-y-2 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            } sm:block`}
          >
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mb-4 sm:mb-0">
              <li className="text-[#007580] text-[14px] font-inter font-medium">
                <Link href="/" className="hover:text-[#005f6b]">
                  Home
                </Link>
              </li>
              <li className="text-[#636270] text-[14px] font-inter font-medium">
                <Link href="/shop" className="hover:text-[#007580]">
                  Shop
                </Link>
              </li>
              <li className="text-[#636270] text-[14px] font-inter font-medium">
                <Link href="/product" className="hover:text-[#007580]">
                  Product
                </Link>
              </li>
              <li className="text-[#636270] text-[14px] font-inter font-medium">
                <Link href="/pages" className="hover:text-[#007580]">
                  Pages
                </Link>
              </li>
              <li className="text-[#636270] text-[14px] font-inter font-medium">
                <Link href="/about" className="hover:text-[#007580]">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Number */}
          <div className="flex items-center gap-1">
            <p className="text-[#636270] font-inter text-[14px] font-medium">
              Contact:
            </p>
            <p className="text-[#272343] font-inter text-[14px] font-medium">
              (808) 555-0111
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
