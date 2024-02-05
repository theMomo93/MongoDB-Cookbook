import Recipe from '../models/Recipe.js';




export const listAll = async (req, res) => {
    try {
      console.log("This is get all recipes");
  
      const recipes = await Recipe.find();
      console.log("🚀 ~ recipes:", recipes);
  
      res.send({ success: true, recipes });
    } catch (error) {
      console.log("🚀 ~ error in get all recipes:", error.message);
  
      res.status(500).send({ success: false, error: error.message });
    }
  };

//LIST ONE
export const listOne = async (req, res) => {
  try {
    console.log("this is get one recipe", req.query);

    const post = await recipe.findById(req.query.id);
    console.log("🚀 ~ post:", recipe);

    res.send({ success: true, recipe });
  } catch (error) {
    console.log("🚀 ~ error in get one post:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};



//ADD


export const addRecipe = async (req, res) => {
  try {
    // Create a new recipe using the Recipe model
    const newRecipe = await Recipe.create(req.body);

    // Send a success response
    res.status(200).json({ success: true, message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
// DELETE
export const handleDeleteRecipe = async (req, res) => {
  try {
    console.log("this is delete recipe", req.params);

    // Use the Recipe model to delete a recipe by ID
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    console.log("🚀 ~ recipe:", recipe);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in delete recipe:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

// EDIT
export const handleEditRecipe = async (req, res) => {
  try {
    console.log("this is edit post", req.body);

    const recipe = await Recipe.findByIdAndUpdate(
      req.body.recipe._id,
      {
        ...req.body.recipe,
      },
      { new: true }
    );
    console.log("🚀 ~ recipe:", recipe);

    res.send({ success: true });
  } catch (error) {
    console.log("🚀 ~ error in edit recipe:", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};