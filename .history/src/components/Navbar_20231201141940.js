import React from 'react'
import { Link } from 'react-router-dom'
import Stack  from '@mui/material/Stack'

const Navbar = () => {
  return (
    
        <Link to='/'>
            <img src='' alt="logo"/>
        </Link>
        <Link to='/home'>Home</Link>
    
  )
}

export default Navbar