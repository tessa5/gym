import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./../img/logo.png"

const Navbar = () => {
  return (
    <Link to='/'>
        <
            img src={logo} 
            alt='logo'
            className='w-12 ' />
    </Link>
    
  )
}

export default Navbar