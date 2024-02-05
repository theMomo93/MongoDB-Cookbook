import express from "express";
import {
  listAll,
  listOne,
  handleDeleteRecipe,
  addRecipe,
  handleEditRecipe
} from "../controllers/recipesController.js";

const router = express.Router();

//list
router.get("/list/all", listAll);
router.get("/list/one", listOne);

//add recipe
router.post("/add", addRecipe);

//delete
router.delete("/delete/:id", handleDeleteRecipe);

//edit
router.put("/edit/:id", handleEditRecipe);

export default router;
