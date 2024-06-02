import {React, useState, useEffect} from 'react'
import useAlert from '../../customHooks/alert'
import useLoader from '../../customHooks/loader'
import { useUser } from '@clerk/clerk-react';

function CreateWorkout() {
  const { user } = useUser();
  
  //State
  const [exerciseRows, setExerciseRows] = useState([]);
  const [description, setDescription] = useState("")
  const [postType, setPostType] = useState("private")

  //Custom Hook
  const {setAlertSuccess, setAlertFail, AlertComponent} = useAlert()
  const { loading, setLoading, Loader } = useLoader()
 
  // Function to add a new row
  const addExerciseRow = () => {
    setExerciseRows([...exerciseRows, {
      exercise: '',
      sets: '',
      reps: '',
      weight: ''
    }]);
  };

  // Function to remove a row
  const removeExerciseRow = (indexToRemove) => {
    setExerciseRows(exerciseRows.filter((_, index) => index !== indexToRemove));
  };

  //Post Workout
  const postWorkout  = async (e) => {
    e.preventDefault()
    await setLoading(true)
    const postData = {
      userId: user.id, 
      email: user.emailAddresses[0]?.emailAddress,
      exercises: exerciseRows,
      description: description,
      postType: postType
    }
    try {
      const response = await fetch("http://localhost:3000/api/createWorkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
    console.log(postData)
    if(response){
      resetForm()
      setTimeout(function (){
        setAlertSuccess(false)
      }, 5000)
      setAlertSuccess(true)
      setLoading(false)
      console.log("Workout Posted")
    }
    } catch (error) {
      setTimeout(function (){
        setAlertFail(false)
      }, 5000)
      setAlertFail(true)
      setLoading(false)
      console.log(error)
    }
  }

  const resetForm = () => {
    setExerciseRows([{
      exercise: '',
      sets: '',
      reps: '',
      weight: ''
    }]);
    setDescription('');
    setPostType('private')
  };

  useEffect(() => {
    addExerciseRow()
  }, [])

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setPostType("public");
    } else {
      setPostType("private");
    }
  };


  return (
    <div className='fixed bottom-5 right-5'>
    <button className="btn btn-active" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Workout</button>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-screen-xl relative">
        <h3 className="font-bold text-lg mb-4">Workout Log</h3>

        {/*Check box on if the user wants their post to be Public or Private*/}
        <input type="checkbox" className="toggle" checked={postType === "public"} 
          onChange={handleCheckboxChange}/>
        <p>{postType}</p>
        

        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
        <div className="overflow-x-auto relative">
          <form onSubmit={postWorkout} method="dialog">

            {/*Workout table to log your workout*/}
            <table className="table mb-8">
              <thead>
                <tr>
                  <th>EXERCISE</th>
                  <th>SETS</th>
                  <th>REPS</th>
                  <th>WEIGHT</th>
                </tr>
              </thead>
              <tbody>
              {exerciseRows.map((exercise, index) => (
              <tr key={index}>
                <td>
                  <input
                    value={exercise.exercise} // Exercise
                    onChange={(e) => {
                      const updatedRows = [...exerciseRows];
                      updatedRows[index].exercise = e.target.value;
                      setExerciseRows(updatedRows);
                    }}
                    type="text"
                    placeholder="Exercise"
                    className="input input-bordered input-sm w-48 sm:w-64"
                    required
                  />
                </td>
                <td>
                  <input
                    value={exercise.sets} // Sets
                    onChange={(e) => {
                      const updatedRows = [...exerciseRows];
                      updatedRows[index].sets = e.target.value;
                      setExerciseRows(updatedRows);
                    }}
                    type="number"
                    placeholder="Sets"
                    className="input input-bordered input-sm w-48 sm:w-42"
                    required
                  />
                </td>
                <td>
                  <input
                    value={exercise.reps} // Reps
                    onChange={(e) => {
                      const updatedRows = [...exerciseRows];
                      updatedRows[index].reps = e.target.value;
                      setExerciseRows(updatedRows);
                    }}
                    type="number"
                    placeholder="Reps"
                    className="input input-bordered input-sm w-48 sm:w-42"
                    required
                  />
                </td>
                <td>
                  <input
                    value={exercise.weight} // Weight
                    onChange={(e) => {
                      const updatedRows = [...exerciseRows];
                      updatedRows[index].weight = e.target.value;
                      setExerciseRows(updatedRows);
                    }}
                    type="number"
                    placeholder="Weight"
                    className="input input-bordered input-sm w-48 sm:w-42"
                    required
                  />
                </td>
                <td>
                {exerciseRows.length > 1 && (
                  <button 
                    type="button"
                    className="btn btn-outline btn-error btn-sm" 
                    onClick={() => removeExerciseRow(index)}
                    >
                    remove
                  </button>
                )}
                </td>
              </tr>
              ))}
              </tbody>
              </table>

              {/*Bio*/}
              <textarea 
              value={description}
              onChange={(e) => (setDescription(e.target.value))}
              className="textarea textarea-bordered w-full mb-24" 
              placeholder="Description">
              </textarea>
              
              {/*post button and add another exercise button*/}
              <div className="modal-action mt-4 absolute bottom-0 left-4 sm:right-4">
              <button type="submit" className='btn btn-success btn-md'>Post</button>
                <button className="btn bg-stone-900 text-white btn-md" 
                onClick={(e) => {
                    e.preventDefault();
                    addExerciseRow();
                  }}>+ Exercise</button>
              </div>
            </form>
          </div>
        </div>
        {loading ? <div className='absolute'>{Loader()}</div> : ""}
        <div className='absolute w-64 sm:w-96'>
          <AlertComponent />
        </div>
      </dialog>
    </div>
  );
}

export default CreateWorkout