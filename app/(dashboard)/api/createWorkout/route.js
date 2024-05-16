import connectMongoDB from "../../../../db/connectDB"
import Workout from '../../../../schema/createWorkout'
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const { userId, email, exercises, description } = await request.json();
        await connectMongoDB()
        await Workout.create({ userId, email, exercises, description });
        return NextResponse.json({ message: "Workout Created" }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to create workout" }, { status: 500 });
    }
    
}
