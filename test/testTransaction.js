import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
import {Category} from "storeschema1"
import mongoose from "mongoose";

dotenv.config();

setTimeout(async ()=>{
    await connectDB()
    const session = await Category.startSession()
    session.startTransaction()
    const a1 = new Category({ name : "trihs"})
    const a2 = new Category({ name : "trihs1"})
    const a3 = new Category({ name : "trihs2"})
    await a1.save({session})
    await a2.save({session})
    await a3.save({session})

    await session.commitTransaction()
    await session.endSession()
})