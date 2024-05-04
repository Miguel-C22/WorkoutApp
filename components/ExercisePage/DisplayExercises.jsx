import React from 'react'

function DisplayExercises(props) {
  return (
    <div>
          {props.exerciseData.map(data => (
            <div key={data.id}>
              <p>{data.name}</p>
              <p>Targets: {data.bodyPart}</p>
              <p>Equipment Needed: {data.equipment}</p>
              <img src={data.gifUrl} alt="" />
            </div>
          ))}
        </div> 
  )
}

export default DisplayExercises