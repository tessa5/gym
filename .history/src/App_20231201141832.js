import React from 'react'
import {Route, Routes} from 'react-router-dom'
import  Box  from '@mui/material/Box'


import Home from './pages/Home'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box with='400px' sx={{width: {xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetails />}/>
      </Routes>
      <Footer />
   
  )
  }
export default App
