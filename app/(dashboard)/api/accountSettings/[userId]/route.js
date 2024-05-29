import connectMongoDB from "../../../../../db/connectDB";
import UserData from "../../../../../schema/usersData"
import { NextResponse } from "next/server";

export async function PATCH(request, {params}){
    try {
        const userId = params.userId // !IMPORTANT
        const req = await request.json(); // !IMPORTANT

        // Extracting fields from request body
        const { 
            email, 
            userName,
            profilePicture,  
            prBench,
            prDeadLift,
            prSquat,
            bio
        } = req;

        // Creating an object to store the fields that need updating
        const updates = {};

        // Checking if each field is present in the request body and adding it to the updates object if it is
        if (email !== undefined) updates.email = email;
        if (userName !== undefined) updates.userName = userName;
        if (profilePicture !== undefined) updates.profilePicture = profilePicture;
        if (prBench !== undefined) updates.prBench = prBench;
        if (prDeadLift !== undefined) updates.prDeadLift = prDeadLift;
        if (prSquat !== undefined) updates.prSquat = prSquat;
        if (bio !== undefined) updates.bio = bio;

        // Updating the user data in the database
        await connectMongoDB();
        const updatedUserData = await UserData.findOneAndUpdate({ userId: userId }, updates, { new: true });

        // Sending the updated user data in the response
        if(!updatedUserData){
            return NextResponse.json({ message: `Failed to update User Account Data for User ID:${userId}`}, { status: 404 }); 
        }
        return NextResponse.json({ message: `User Account Data Changed for User ID:${userId}`}, { status: 201 });
    } catch (error) {
        // Handling errors
        return NextResponse.json({ message: `Failed to update User Account Data for User ID:${userId}`}, { status: 404 });    }
}


export async function GET(request, { params }) {
  try {
    const userId = params.userId;

    await connectMongoDB();
    const individualUser = await UserData.find({ userId: userId });

    if (!individualUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User found", data: individualUser }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}