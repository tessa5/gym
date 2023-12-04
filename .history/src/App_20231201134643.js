import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Home from './components/pages/Home'
import Na

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
