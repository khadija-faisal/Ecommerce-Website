import React from 'react'

const page = () => {
  return (
    <main className=' h-screen flex px-10 justify-end items-center bg-white'>
         <div className="Total bill flex flex-col gap-3 w-[50%] md:w-[30%]">
    <h4 className=" text-3xl text-[#333333]">Total Bill</h4>
    <div className=" flex-col border rounded-lg border-zinc-400 " >
      <div className=" Cart subtotal flex flex-col gap-3 p-3">
         <div className=" flex justify-between">
            <h6 className=" text-[#333333] text-base font-bold"> Cart Subtotal</h6>
            <p>$221.00</p>
         </div>
         <div className=" flex justify-between">
            <h6 className=" text-[#333333] text-sm ">Shopping Change</h6>
            <p>$00.00</p>
         </div>
      </div>
      <div className=" flex justify-between p-3 border-t border-zinc-400 ">
      <h6 className=" text-[#333333] text-base font-inter font-bold">Total</h6>
      <p>$221.00</p>
      </div>
    </div>
    <button type="submit" 
    className="  bg-indigo-500 text-white py-4 hover:bg-indigo-400 font- inter rounded-none" 
    >Proceed to Checkout</button>
   </div>
      
    </main>
  )
}

export default page