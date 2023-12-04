import React from 'react'
import { Link } from 'react-router-dom'
import Stack  from '@mui/material/Stack'

const Navbar = () => {
  return (
    <Stack>
        <Link to='/'>
            <img src='' alt="logo"/>
        </Link>
        <Link to='/home'>Home</Link>
    </Stack>
  )
}

export default Navbar