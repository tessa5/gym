import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/Navbar'
import ExerciseDetails from './components/pages/ExerciseDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetails />}/>
      </Routes>
    </>
  )
  }
export default App
