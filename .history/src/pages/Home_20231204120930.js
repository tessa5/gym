import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import 

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <ExercisesSearched />
      <Exercises />
    </div>
  )
}

export default Home