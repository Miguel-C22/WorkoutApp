import {React, useState} from 'react'
import {getSpecificExercises} from '../../config/exerciseApi'
import DisplayExercises from './DisplayExercises'

function SearchExercise() {
  const [exercise, setExercise] = useState()
  const [exerciseData, setExerciseData] = useState(null);

  async function fetchData(e) {
      e.preventDefault()
      const data = await getSpecificExercises(exercise);
      setExerciseData(data);
    }
  
 

  return (
    <div>
      <p>Search for any exercise</p>
      <form onSubmit={fetchData}>
        <input 
          type="text" 
          placeholder="Search Exercise"  
          onChange={(e) => setExercise(e.target.value)} // Update state on change
          className="input input-bordered w-full max-w-xs" 
          required
        />
        <button className="btn" type="submit">Search</button> {/* Use type="submit" for form submission */}
      </form>

      <div>
        {exerciseData ? <DisplayExercises exerciseData={exerciseData} />: ""}
      </div>
        
    </div>
  );
}

export default SearchExercise