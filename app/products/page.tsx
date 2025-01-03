'use client'
import React from 'react'
import Card from '@/components/card'
import ProductData from '@/storeproducts/data'
import { useRouter } from 'next/navigation';

const ProductPage = () => {
    const Router = useRouter();
  return (
<div className='w-screen flex flex-col justify-center items-center bg-white'>
<div className="  flex-col text-center justify-center space-y-8 w-[90%] items-center">
        <p className="text-zinc-800 text-xl">OUR PRODUCTS</p>
        <h1 className="text-zinc-800 font-semibold text-4xl">
          Find our all popular product frome here
        </h1>
       
      </div>
    <div className='w-[95%] bg-white justify-center grid py-28 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
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