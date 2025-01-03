'use client'
import React from 'react'
import Card from '@/components/card'
import ProductData from '@/storeproducts/data'
import { useRouter } from 'next/navigation';

const ProductPage = () => {
    const Router = useRouter();
  return (
<div className='w-screen flex justify-center items-center bg-white'>
    <div className='w-[95%] bg-white justify-center grid py-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
   {ProductData.map((card, index) =>{
    return(
<div key={index} onClick={() => Router.push(`/products/${index + 1}`)} className='cursor-pointer'  >
<Card
image = {card.image} 
 title = {card.title}
 price = {card.price}
 description = {card.description}
 rating={card.rating}
 />
</div>
    )
   })}     

    </div>
    </div>
  )
}

export default ProductPage