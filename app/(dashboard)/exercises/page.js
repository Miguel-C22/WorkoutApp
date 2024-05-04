'use client'

import React from 'react'
import SearchExercise from '../../../components/ExercisePage/SearchExercise.jsx'
import Selectors from '../../../components/ExercisePage/Selectors.jsx'

function page() {
  return (
    <div className='flex justify-center items-center flex-wrap '>
        <SearchExercise />
        <Selectors />
    </div>
  )
}

export default page