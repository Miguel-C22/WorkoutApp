import {React, useState} from 'react'

function CreateWorkout() {
  const [exerciseRows, setExerciseRows] = useState([]);
  const [exerciseKey, setExerciseKey] = useState(1);

  function addAnotherExercise() {
    setExerciseRows([...exerciseRows, createExerciseRow()]);
    setExerciseKey(exerciseKey + 1);
  }

   function removeExercise(index) {
    setExerciseRows(exerciseRows.filter((_, i) => i !== index));
  }

  
  function createExerciseRow() {
    return (
      <tr key={exerciseKey}>
        <td><input type="text" placeholder='Exercise'/></td>
        <td><input type="text" placeholder='Sets'/></td>
        <td><input type="text" placeholder='Reps'/></td>
        <td><input type="text" placeholder='Weight'/></td>
        <td><button className="btn" onClick={() => removeExercise(exerciseKey)}>remove</button></td>
      </tr>
    );
  }

  return (
    <div className='fixed bottom-5 right-5'>
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Workout</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-screen-xl relative">
          <h3 className="font-bold text-lg mb-4">Workout Log</h3>
          <div className="overflow-x-auto">
            <table className="table mb-16">
              {/* head */}
              <thead>
                <tr>
                  <th>EXERCISE</th>
                  <th>SETS</th>
                  <th>REPS</th>
                  <th>WEIGHT</th>
                </tr>
              </thead>
              <tbody>
                {exerciseRows}
              </tbody>
            </table>
          </div>
          <div className="modal-action mt-4 absolute bottom-4 right-4">
            <button className="btn" onClick={addAnotherExercise}>+ Exercise</button>
            <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CreateWorkout