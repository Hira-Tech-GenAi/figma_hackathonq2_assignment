import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from "next/image"

function page() {
  return (
    <>

       <section className='w-full mt-[57px]'>

        {/* heading */}
       <div>
            <h1 className='text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
      </div>


        {/* Cards main */}
        <div className='w-full grid grid-cols-4 gap-y-[84px] grid-rows-3 mt-[40px] '>
          <ProductCard data={Product_Data} />
        </div>



        {/* bottom subscribe section */}
        <div className='w-full text-center mt-[173px] py-[100px] bg-[#F0F2F3]'>

           <h1 className='text-[50px] leading-[58px] font-medium '>Or subscribe to the newsletter</h1>


           {/* input and button */}
           <div className='flex items-center justify-center gap-[74ppx] mt-[20px] text-black'>
            
            <div className='border-b-[2px] border-black'>
            <Input type="email" placeholder="Your email"  className='w-[643px] h-[32px] border-none border-b-[2px] text-[16px] leadin-[16px] py-[15px] px-[20px]' />
            </div>

            <div className='border-b-[2px] border-black ml-[8px] mb-[2px]'>
            <Button className='text-[16px] leadin-[110%] font-semibold py-[14px] px-[24px] bg-transparent text-black shadow-none'>Subscribe</Button>
            </div>

          </div>



          {/* heading 2 */}
          <h1 className='text-[50px] leading-[58px] font-medium mt-[70px]'>Follow products and discounts on Instagram</h1>


          {/* pictures div */}
          <div className='flex itmes-center justify-center gap-[24px] mt-[60px]'>

            <Image src={"/products/cat2.png"} alt="pic" width={186} height={186}/>
            <Image src={"/products/cat1.png"} alt="pic" width={186} height={186}/>
            <Image src={"/products/product2.png"} alt="pic" width={186} height={186}/>
            <Image src={"/products/product1.png"} alt="pic" width={186} height={186}/>
            <Image src={"/products/product3.png"} alt="pic" width={186} height={186}/>
            <Image src={"/products/cat3.png"} alt="pic" width={186} height={186}/>

          </div>
          

        </div>


       </section>
    
    </>
  )
}

export default page