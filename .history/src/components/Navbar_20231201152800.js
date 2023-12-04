import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./img"

const Navbar = () => {
  return (
    <Link to='/'>
        <img src={logo} alt='logo' />
    </Link>
    
  )
}

export default Navbar