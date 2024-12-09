import React from 'react'
import Image from "next/image"
import ProductCard from './productCard'
import {featureProduct_Data} from "@/components/constant/featureProduct"

function LogoFeature() {
  return (
    <>

       <section className='w-full flex flex-col mt-[53px]'>
        
        {/* logos div */}
        <div className='flex items-center gap-[106px]'>

            <Image src={"/logos/logo1.png"} alt="logo1" width={85} height={87}/>
            <Image src={"/logos/logo2.png"} alt="logo2" width={107} height={109}/>
            <Image src={"/logos/logo3.png"} alt="logo3" width={135} height={139}/>
            <Image src={"/logos/logo4.png"} alt="logo4" width={63} height={65}/>
            <Image src={"/logos/logo5.png"} alt="logo5" width={98} height={101}/>
            <Image src={"/logos/logo6.png"} alt="logo6" width={113} height={115}/>
            <Image src={"/logos/logo7.png"} alt="logo7" width={84} height={87}/>

        </div>


        {/* feature products */}
        <div className='flex flex-col mt-[24px]'>
            
            {/* heading */}
            <h1 className='text-[32px] leading-[35px] font-semibold text-[#272343]'>Featured Products</h1>


            {/* products main div */}
            <div className='w-full h-[377px] grid grid-cols-4 gap-[24px] mt-[40px]'>

                {/* product card */}
                <ProductCard data={featureProduct_Data} />
            </div>

        </div>

       </section>

    </>
  )
}

export default LogoFeature