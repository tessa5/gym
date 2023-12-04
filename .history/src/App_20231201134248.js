import React from 'react'
import {Route, Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
      Navbar
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDe/>
      </Routes>
    </>
  )
  }
export default App
