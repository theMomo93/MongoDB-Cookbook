import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import recipeRoutes from "./routes/recipesRoutes.js"
import connectDB from "./utils/connectDB.js"

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use("/recipes", recipeRoutes);

connectDB();
app.listen(5000, () => console.log("Server is up and running!"));