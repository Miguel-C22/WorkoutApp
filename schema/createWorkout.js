import mongoose, { Schema } from "mongoose"

const exerciseSchema = new Schema({
  exercise: {
      type: String,
      required: true
  },
  sets: {
      type: Number,
      required: true
  },
  reps: {
      type: Number,
      required: true
  },
  weight: {
      type: Number,
      required: true
  }
});

const createWorkout = new Schema({
  userId: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true,
      match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          'Please provide a valid email',
      ],
      unique: true,
  },
  exercises: [exerciseSchema] // Array of exercises
});

const Workout = mongoose.models.Workout || mongoose.model("Workout", createWorkout)

export default Workout