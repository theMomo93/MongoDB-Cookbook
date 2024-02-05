import mongoose from "mongoose";

// const schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    
  },
  description: {
    type: String,
    required: true,
    unique: true,
},
preparation: {
        type: String,
        required: true,
        unique: true,
  },
  
  ingredients: [{ type: String }],
});

// users
const Recipe = mongoose.model("Recipe", userSchema);

export default Recipe;