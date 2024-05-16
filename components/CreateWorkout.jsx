import {React, useState, useEffect} from 'react'
import useUserInfo from '../customHooks/userInfo'

function CreateWorkout() {
  const [exerciseRows, setExerciseRows] = useState([]);
  // const [userInfo, setUserInfo] = useState([])
  const userInfo = useUserInfo();

  console.log(userInfo);
 
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

  const postWorkout = (e) => {
    e.preventDefault()
    console.log(userInfo.email)
    console.log(userInfo.userId)
   
  }

  useEffect(() => {
    addExerciseRow()
  }, [])


  return (
    <div className='fixed bottom-5 right-5'>
    <button className="btn btn-active" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Workout</button>
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box max-w-screen-xl relative">
        <h3 className="font-bold text-lg mb-4">Workout Log</h3>
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</button>
        <div className="overflow-x-auto relative">
          <form onSubmit={postWorkout} method="dialog">
            <table className="table mb-24">
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
                  />
                </td>
                <td>
                  <button className="btn btn-outline btn-error btn-sm" onClick={() => removeExerciseRow(index)}>
                    remove
                  </button>
                </td>
              </tr>
              ))}
              </tbody>
              </table>
              <div className="modal-action mt-4 absolute bottom-4 right-4">
                <button type="submit" className='btn btn-success btn-md'>Post</button>
                <button className="btn bg-stone-900 text-white btn-md" onClick={addExerciseRow}>+ Exercise</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CreateWorkout