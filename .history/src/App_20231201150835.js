import React from 'react'
import { Routes, Route} from 'react-router-dom'


import Home from './pages/Home'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise/:id" element={<ExerciseDetails />}/>
      </Routes>
      
      <Footer />
    </div>
  )
  }
export default App
