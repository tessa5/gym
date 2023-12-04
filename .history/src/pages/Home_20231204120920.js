import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import E

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