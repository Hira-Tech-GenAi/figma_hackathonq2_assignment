import React from 'react'
import { Card } from './ui/card'
import Image from "next/image"
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import { Feat_data } from './constant/featureProduct'

function ProductCard({data}: {data: Feat_data[]}) {
  return (
    <>

       {data.map((item, index)=> {
        return(
            <Card className='h-full w-[312px] overflow-hidden shadow-none border-none ' key={index}>

        {/* image div 2 */}
        <div className='w-full h-[312px] relative'>
            <Image src={item.src} alt="product1" layout='fill' objectFit='cover'/>

            {/* for float */}
         {item.badge == true &&
            <Badge className={`text-[13px] leading-[14px] text-white py-[6px] px-[10px] ${item.badgeColor}-500 absolute top-[20px] left-[20px]`}>{item.badgeText}</Badge>
         }
        </div>


        {/* text price div 2 */}
        <div className='flex items-center justify-between mt-[14px] pl-[1px] '>
            <div>
                <p className='leading-[20px] text-[#007580]'>{item.heading}</p>

                <div className='flex items-center gap-1 mt-[10px]'>
                  <h2 className='text-[18px] leading-[20px] text-[#272343] font-semibold'>${item.newPrice}</h2>
                  
                  {item.oldPrice_h2 == true && 
                    <h2 className='text-[14px] leading-[15px] text-[#9A9CAA] line-through'>${item.oldPrice}</h2>
                  }
                </div>
            </div>

           {item.shopBg &&
            <div>
            <Button className={`h-[44px] w-[44px] rounded-[8px] ${item.shopBg}-500 `}>
               <LuShoppingCart size={24}/>
            </Button>
           </div>
           }
        </div>

      </Card>
        )
       })}
      

    </>
  )
}

export default ProductCard