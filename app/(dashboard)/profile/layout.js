"use client"
import React from 'react'
import ProfilePages from "../../../components/ProfilePages"
import CreateWorkout  from "../../../components/CreateWorkout"

function layout({children}) {
  return (
    <div>
        {children}
        <ProfilePages />
        <CreateWorkout />
    </div>
  )
}

export default layout