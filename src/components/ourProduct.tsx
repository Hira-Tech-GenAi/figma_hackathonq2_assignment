import React from 'react'
import ProductCard from './productCard'
import { OurProduct_Data } from './constant/ourProduct'

function OurProduct() {
  return (
    <>

       <section className='w-full mt-[173px] mb-[136px]'>

        {/* heading */}
        <div>
            <h1 className='text-[32px] leading-[35px] text-center font-semibold text-[#272343]'>Our Products</h1>
        </div>


        {/* our product main div */}
        <div className='w-full grid gap-[24px] grid-cols-4 grid-rows-2 mt-[74px]'>
            <ProductCard data={OurProduct_Data}/>
        </div>


       </section>

    </>
  )
}

export default OurProduct