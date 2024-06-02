import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
import {User} from "storeschema1"
import mongoose from "mongoose";

dotenv.config();

setTimeout(async ()=>{
    await connectDB()
    const session = await User.startSession()
    session.startTransaction()
    const user = await User.find({})
    console.log(user)
    await session.commitTransaction()
    await session.endSession()
})