import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link href={'/'} className="btn btn-ghost text-white text-xl">D.Mart-Shop</Link>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 ">
         <Image 
         src={'/images/bars-solid.svg'}
         alt="bars-solid" 
         width={30}
         height={30}
         />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
           <Link href={'/cart'}>
              carts
              <span className="badge">New</span>
              </Link>
          </li>
          <li> <Link href={'/products'}>
              Products
             
              </Link></li>
          <li><Link href={'/contact'}>
              Contact
             
              </Link></li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header