import connectMongoDB from "../../../../db/connectDB";
import UserData from "../../../../schema/usersData"
import { NextResponse } from "next/server";

export async function GET(request){
    try {
        await connectMongoDB()
        const allUsers = await UserData.find({})
        return NextResponse.json({ message: "All Users", data: allUsers }, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: "Failed to get all users", error: error.message }, {status: 500})
    }
    
}