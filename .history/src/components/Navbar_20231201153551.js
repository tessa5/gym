import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../img/logo.png"

const Navbar = () => {
  return (
    <Link to='/'>
        <
            img src={logo} 
            alt='logo'
            className='w-16 h-12 m-[0px 20px]' />
    </Link>
    
  )
}

export default Navbar