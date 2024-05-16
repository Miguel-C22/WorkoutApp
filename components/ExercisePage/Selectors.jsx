import {React, useState, useEffect} from 'react'
import {exercises} from '../../data/exercises'
import {getSpecificExercises} from '../../config/exerciseApi'
import DisplayExercises from './DisplayExercises'
import useLoader from '../../customHooks/loader'

function Selectors() {
  const [selectedBodyPart, setSelectedBodyPart] = useState('')
  const [specificExercises, setSpecificExercises] = useState([])
  const [selectedExercise, setSelectedExercise] = useState()
  const [exerciseData, setExerciseData] = useState([]);
  const { loading, setLoading, Loader } = useLoader()

  function handleBodyPartChange(e){
      setSelectedBodyPart(e.target.value);
      setSpecificExercises(exercises[e.target.value]);
    };

  async function fetchData(e) {
    const exerciseValue = e.target.value;
    await setLoading(true)
    setSelectedExercise(exerciseValue); // Update selected exercise first
    const data = await getSpecificExercises(exerciseValue); // Fetch data for the selected exercise
    setExerciseData(data);
  }

  useEffect(() => { 
    if (exerciseData.length > 0) {
      setLoading(false);
    }
  }, [exerciseData, setLoading]);
  
  
    return (
      <div>
        <div className='flex flex-col justify-start items-center mb-12'>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold">Body Part</span>
            </div>
            <select 
              className="select select-bordered bg-stone-900 text-white text-xl"
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
                <span className="label-text font-bold">Exercise</span>
              </div>
              <select 
                className="select select-bordered  bg-stone-900 text-white text-xl"
                key="exercise-select"
                value={selectedExercise || ''}
                onChange={fetchData}
              >
                <option value="" disabled>Select Exercise</option>
                {specificExercises.map((exercise, index) => (
                  <option key={`exercise-${index}`}>{exercise}</option>
                ))}
              </select>
            </label>
            : ""}

            {loading ?  <div className='mt-24'>{Loader()}</div>: ""}

          {exerciseData ? <DisplayExercises exerciseData={exerciseData} />: ""}
        </div>
      </div>
    );
}

export default Selectors