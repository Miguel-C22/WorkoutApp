import {React, useState} from 'react'
import {exercises} from '../../data/exercises'
import {getSpecificExercises} from '../../config/exerciseApi'
import DisplayExercises from './DisplayExercises'

function Selectors() {
  const [selectedBodyPart, setSelectedBodyPart] = useState('')
  const [specificExercises, setSpecificExercises] = useState([])
  const [selectedExercise, setSelectedExercise] = useState()
  const [exerciseData, setExerciseData] = useState(null);

  function handleBodyPartChange(e){
      setSelectedBodyPart(e.target.value);
      setSpecificExercises(exercises[e.target.value]);
    };

  async function fetchData(e) {
    const exerciseValue = e.target.value;
    setSelectedExercise(exerciseValue); // Update selected exercise first
    const data = await getSpecificExercises(exerciseValue); // Fetch data for the selected exercise
    setExerciseData(data);
  }
  
  
    return (
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Body Part</span>
          </div>
          <select 
            className="select select-bordered"
            value={selectedBodyPart}
            onChange={handleBodyPartChange}
            key="body-part-select"
          >
            <option value="" disabled defaultValue>Select Body Part</option>
            {Object.keys(exercises).map((bodyPart, index) => (
              <option key={`body-part-${index}`}>{bodyPart}</option>
            ))}
          </select>
        </label>
    
        {specificExercises && selectedBodyPart ? 
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Exercise</span>
            </div>
            <select 
              className="select select-bordered"
              key="exercise-select"
              value={selectedExercise}
              onChange={fetchData}
            >
              {specificExercises.map((exercise, index) => (
                <option key={`exercise-${index}`}>{exercise}</option>
              ))}
            </select>
          </label>
          : ""}
        <div>
          {exerciseData ? <DisplayExercises exerciseData={exerciseData} />: ""}
        </div>
      </div>
    );
}

export default Selectors