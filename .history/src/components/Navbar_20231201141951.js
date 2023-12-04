import React from 'react'
import { Link } from 'react-router-dom'
import Stack  from '@mui/material/Stack'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>
            <img src='' alt="logo"/>
        </Link>
        <Link to='/home'>Home</Link>
    </div
  )
}

export default Navbar