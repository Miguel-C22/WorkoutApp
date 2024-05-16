import {React, useState, useEffect} from 'react'
import {getSpecificExercises} from '../../config/exerciseApi'
import DisplayExercises from './DisplayExercises'
import useLoader from '../../customHooks/loader'

function SearchExercise() {
  const [exercise, setExercise] = useState()
  const [exerciseData, setExerciseData] = useState([]);
  const { loading, setLoading, Loader } = useLoader()

  async function fetchData(e) {
      e.preventDefault()
      await setLoading(true)
      const data = await getSpecificExercises(exercise);
      setExerciseData(data);
    }
  
    useEffect(() => {
      if (exerciseData.length > 0) {
        setLoading(false);
      }
    }, [exerciseData, setLoading]);
 

  return (
<div className='flex flex-col items-center justify-center'>
  <div>
    <form 
      onSubmit={fetchData}
      className="flex flex-col flex-wrap justify-center" // Add justify-center class to center the form horizontally
    >
      <div className="label">
        <span className="label-text font-bold">Search for any exercise</span>
      </div>

      <input 
        type="text" 
        placeholder="Search Exercise"  
        onChange={(e) => setExercise(e.target.value)} // Update state on change
        className="input input-bordered w-full max-w-xs bg-stone-900 text-white text-xl" 
        required
      />
      <button className="btn bg-white shadow-2xl w-full max-w-xs mt-2" type="submit">Search</button> {/* Use type="submit" for form submission */}
    </form>
  </div>

  {loading ?  <div className='mt-24'>{Loader()}</div>: ""}

  <div>
    {exerciseData ? <DisplayExercises exerciseData={exerciseData} />: ""}
  </div>
</div>
  );
}

export default SearchExercise