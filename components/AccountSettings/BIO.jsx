import React, { useState } from 'react';
import useUpdateUserData from '../../customHooks/updateUserData';

function BIO({ userData }) {
  const [bio, setBio] = useState()

  const { updateUserData } = useUpdateUserData()

  function clearBio () {
    setBio("")
  }

  async function handleSubmit () {
    const usersBio = {
      bio: bio
    }
    updateUserData(usersBio)
  }

  return (
  <div className='flex flex-col items-center 
  justify-center text-center gap-4
  bg-white shadow-2xl w-full p-8 rounded-lg mb-8'>
    <p className='text-2xl font-bold'>Profile BIO</p>
    <form method="dialog" className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <textarea 
        className="textarea textarea-bordered  h-48 min-h-48 resize-y p-2 bg-white" 
        placeholder="Bio"
        value={bio ?? userData.bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      <div className='flex gap-2 justify-center'>
        <button className="btn btn-success">Save</button>
        <button type='button' onClick={clearBio} className="btn btn-error">Clear</button>
      </div>
    </form>
</div>
  )
}

export default BIO






























/*

OLD WAY KEEP FOR NOW

import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function BIO({ userData }) {
  
  const { user } = useUser();

  const [bio, setBio] = useState()

  function clearBio () {
    setBio("")
  }

  async function handleSubmit () {
    const usersBio = {
      bio: bio
    }
    try {
      const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usersBio),
      })
      if(!response) {
        console.log("Failed")
      }
      console.log("Success")
    } catch (error) {
      
    }
  }

  return (
  <div className='flex flex-col items-center 
  justify-center text-center gap-4
  bg-white shadow-2xl w-full p-8 rounded-lg mb-8'>
    <p className='text-2xl font-bold'>Profile BIO</p>
    <form method="dialog" className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <textarea 
        className="textarea textarea-bordered  h-48 min-h-48 resize-y p-2 bg-white" 
        placeholder="Bio"
        value={bio ?? userData.bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>
      <div className='flex gap-2 justify-center'>
        <button className="btn btn-success">Save</button>
        <button type='button' onClick={clearBio} className="btn btn-error">Clear</button>
      </div>
    </form>
</div>
  )
}

export default BIO


*/