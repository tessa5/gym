import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'

import { Box } from '@mui/material'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <Box>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetails />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  )
  }
export default App
