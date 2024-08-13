import React, { useState } from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constants'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const [navActive,setNavActive] = useState('Home')
  return (
    <nav className='w-full flex justify-between items-center navbar py-6'>
       <h1 className='text-white font-bold text-[2rem] bank relative px-10'>SRMV<span className='text-gradient'>BANK</span></h1>
      <ul className={`sm:flex hidden justify-end items-center  list-none gap-6`}>
        {navLinks.map((nav,i)=>(
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${navActive === nav.title ? "text-white" : "text-dimWhite"} hover:text-white`}
          onClick={() => setNavActive(nav.title)}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden'>
      <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain relative"
          onClick={() => setToggle(!toggle)}
        />
        <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="flex justify-start items-center flex-1 flex-col gap-2 ">
            {navLinks.map((nav,i)=>(
              <li key={nav.id} className={`list-none font-poppins font-medium cursor-pointer text-[16px] ${navActive === nav.title ? "text-white" : "text-dimWhite"} hover:text-white`}
              onClick={() => setNavActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
