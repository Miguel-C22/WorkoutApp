import connectMongoDB from "../../../../db/connectDB";
import UserData from "../../../../schema/usersData"
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const { 
            userId, 
            email, 
            userName,
            profilePicture = "",  
            prBench = null,
            prDeadLift = null,
            prSquat = null,
            bio = ""
        } = await request.json()
        await connectMongoDB()
        await UserData.create({ 
            userId, 
            email, 
            userName,
            profilePicture,  
            prBench,
            prDeadLift,
            prSquat,
            bio
        })
        return NextResponse.json({message: "User Data stored successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Failed to store Users Data" + error}, {status: 500})
    }
}





// Another way for a patch request using (request.nextUrl.searchParams.get)

// export async function PATCH(request) {
//     try {
//         const data = await request.json();
//         console.log(request.body);
//         const userId = request.nextUrl.searchParams.get("_id"); // Use "_id" instead of "userId"
//         console.log(userId)
//         // Extracting fields from request body
//         const { email } = data; // Ensure that the field name matches the actual request body key
//         console.log(email)
//         // Assuming you've already imported the necessary modules and defined UserData

//         // Updating the user data in the database
//         await connectMongoDB();
//         const updatedUserData = await UserData.findByIdAndUpdate(userId, { email }, { new: true });
//         console.log(updatedUserData)
//         if (updatedUserData) {
//             // User data updated successfully
//             return NextResponse.json({ message: "User data updated" + userId + email });
//         } else {
//             // User data update failed
//             return NextResponse.json({ message: "Failed to update user data"+ userId + email }, { status: 404 });
//         }
//     } catch (error) {
//         // Handling errors
//         return NextResponse.json({ message: "An error occurred while updating user data", error }, { status: 500 });
//     }
// }