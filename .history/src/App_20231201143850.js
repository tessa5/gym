import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'



import Home from './pages/Home'
import Navbar from './components/Navbar'
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exercise" element={<ExerciseDetails />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
  }
export default App
