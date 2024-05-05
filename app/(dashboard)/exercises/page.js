import SearchSwap from "../../../components/ExercisePage/SearchSwap"
import {displayExercises} from "../../../config/exerciseApi"
import DisplayExercises from "../../../components/ExercisePage/DisplayExercises"

async function page() {
  // const exerciseData = await displayExercises()


  return (
    <div>
      <p className='font-bold text-3xl text-center mb-12'>Search for over 1300 exercises</p>
      <SearchSwap />
      <div className="border border-solid border-black border-2 m-4 mt-16"></div>
      {/* <DisplayExercises exerciseData={exerciseData} /> */}
    </div>
  )
}

export default page