import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect("mongodb+srv://admin123:admin321@cluster0.kqa6tcy.mongodb.net/ContentfulCookbook?retryWrites=true&w=majority" );

    console.log("Connected to db");
  } catch (error) {
    console.log("🚀 ~ error connecting to db:", error.message);
  }
}