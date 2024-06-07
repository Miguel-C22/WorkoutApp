import connectMongoDB from "../../../../../db/connectDB"
import Workout from '../../../../../schema/createWorkout'
import { NextResponse } from "next/server"

//Fetch all workouts specifically to the user 
export async function GET(request, { params }) {
    try {
      const userId = params.userId;
      await connectMongoDB();
      const allWorkouts =  await Workout.find({ userId: userId })
        return NextResponse.json({ message: `All Workouts for ${userId}`, allWorkouts }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch all workouts" }, { status: 500 });
    }
}
