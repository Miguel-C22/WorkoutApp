import mongoose from "mongoose"

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL)
        console.log("Connected to MongoDB.")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB