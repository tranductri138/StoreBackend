// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";

// Utiles
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import categoryRoutes from "./src/routes/categoryRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import uploadRoutes from "./src/routes/uploadRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";

import { isExistFile } from "./src/service/File.js"
import fs from "fs";

dotenv.config();
const port = process.env.PORT || 5000;


const app = express()
const __dirname = path.resolve()

app.use(morgan('default'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use("/api/users", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID });
});

app.get("/hello" , (req , res) => {
  return res.send({ message :"Hi im store-backend"})
})

app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

setTimeout(async ()=>{
  isExistFile(`${__dirname}/uploads`)
  // await connectDB();
  app.listen(port, () => console.log(`Server running on port: ${port}`));
})