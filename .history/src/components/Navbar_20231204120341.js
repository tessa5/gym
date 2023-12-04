import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../img/logo.png"

const Navbar = () => {
  return (
    <div className="flex justify-around">
    <Link to='/'>
        <
            img src={logo}  
            alt='logo'
            className='w-24 h-24 m-[0px 20px]' />
    </Link>
    <Link to='/'className='text-2xl border-b-2 border-black h-'>Home</Link>
    </div>
  )
}

export default Navbar