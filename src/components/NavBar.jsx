import React from 'react'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [active, setActive] = useState(false);
  return (

    <>
      <div className='flex justify-between h-[90px] bg-[#040A1A] w-full items-center text-white font-abc font-bold'>
        <h1 className='text-[2.5rem] mx-5'>
          <Link to='/'>Pickup</Link>
        </h1>
        <div className='gap-5 text-[1.5em] md:flex hidden '>
          <button className='hover:text-[#c4bfbf]'>For Enterprise</button>
          <button className='hover:text-[#c4bfbf]'>Delivery Partners</button>
        </div>
        <div className='block md:hidden cursor-pointer text-3xl mx-3' onClick={() => setActive(!active)}>
          <div>{active ? <IoMdClose /> : <HiOutlineMenuAlt3 />}</div>
        </div>
        <button className='hover:text-[#c4bfbf] mx-5 md:block hidden'>Login</button>
      </div>
    </>
  )
}

export default NavBar
