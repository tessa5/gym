import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'

const App = () => {
  return (
    <Box width='400px'>
      Navbar
      <Routes>
        <Route path='/home'>Home</Route>
      </Routes>
    </Box>
  )
  }
export default App
