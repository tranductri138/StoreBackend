import mongoose from "mongoose";

const connectDB = async () => {
  try {

    console.log(process.env.MONGO_URI)
    const cn = await mongoose.connect(process.env.MONGO_URI, {
      readPreference :"primary"
    })
    console.log(`Successfully connected to mongoDB 👍`)
  } catch (error) {
    console.error(`ERROR mongodb: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
