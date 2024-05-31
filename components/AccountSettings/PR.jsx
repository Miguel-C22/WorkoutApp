import React, { useState } from 'react';
import useUpdateUserData from '../../customHooks/updateUserData';

function PR({ userData }) {

  const { updateUserData } = useUpdateUserData()

  const [prs, setPrs] = useState({})

  function clearPrs () {
    setPrs({
      bench: 0,
      squat: 0,
      deadLift: 0,
    });
  }

  async function handleSubmit () {
    const updatePrs = {
      prBench: prs.bench,
      prSquat: prs.squat,
      prDeadLift: prs.deadLift,
    }
    updateUserData(updatePrs)
  }

  return (
  <div className='flex flex-col items-center 
  justify-center text-center gap-4
  bg-white shadow-2xl w-full p-8 rounded-lg mb-8'>
    <p className='text-2xl font-bold'>Personal Records</p>
    <form method="dialog" className="flex flex-col gap-6" onSubmit={handleSubmit}>
      {/* if there is a button in form, it will close the modal */}
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Bench Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={prs.bench ?? userData.prBench}
          onChange={(e) => setPrs({...prs, bench: e.target.value})}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Squat Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"  
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={prs.squat ?? userData.prSquat}
          onChange={(e) => setPrs({...prs, squat: e.target.value})}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Deadlift Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs" 
          className="input input-bordered w-full max-w-xs bg-white" 
          value={prs.deadLift ?? userData.prDeadLift}
          onChange={(e) => setPrs({...prs, deadLift: e.target.value})}

        />
      </label>
      <div className='flex gap-2 justify-start'>
        <button className="btn btn-success">save</button>
        <button type='button' onClick={clearPrs} className="btn btn-error">Clear</button>
      </div>
    </form>
  </div>
  )
}

export default PR


























/*

OLD WAY! KEEPING THIS JUST FOR NOW

import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

function PR({ userData }) {

  const { user } = useUser();

  const [prs, setPrs] = useState({})

  function clearPrs () {
    setPrs({
      bench: 0,
      squat: 0,
      deadLift: 0,
    });
  }

  async function handleSubmit () {
    const updatePrs = {
      prBench: prs.bench,
      prSquat: prs.squat,
      prDeadLift: prs.deadLift,
    }
    try {
      const response = await fetch(`http://localhost:3000/api/accountSettings/${user.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatePrs),
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
    <p className='text-2xl font-bold'>Personal Records</p>
    <form method="dialog" className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Bench Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={prs.bench ?? userData.prBench}
          onChange={(e) => setPrs({...prs, bench: e.target.value})}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Squat Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs"  
          className="input input-bordered w-full max-w-xs  bg-white" 
          value={prs.squat ?? userData.prSquat}
          onChange={(e) => setPrs({...prs, squat: e.target.value})}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Deadlift Record</span>
        </div>
        <input 
          type="number" 
          placeholder="Lbs" 
          className="input input-bordered w-full max-w-xs bg-white" 
          value={prs.deadLift ?? userData.prDeadLift}
          onChange={(e) => setPrs({...prs, deadLift: e.target.value})}

        />
      </label>
      <div className='flex gap-2 justify-start'>
        <button className="btn btn-success">save</button>
        <button type='button' onClick={clearPrs} className="btn btn-error">Clear</button>
      </div>
    </form>
  </div>
  )
}

export default PR

*/