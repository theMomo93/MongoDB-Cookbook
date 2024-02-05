import React, { useState } from "react";
import Navbar from "@/component/Navbar";

const AddRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    preparation: "",
    imageUrl: "",
    ingredients: [""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddIngredient = () => {
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: [...prevRecipe.ingredients, ""],
    }));
  };

  const handleIngredientChange = (index, value) => {
    setNewRecipe((prevRecipe) => {
      const newIngredients = [...prevRecipe.ingredients];
      newIngredients[index] = value;
      return {
        ...prevRecipe,
        ingredients: newIngredients,
      };
    });
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/recipes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error("Failed to add recipe");
      }

      setNewRecipe({
        title: "",
        description: "",
        preparation: "",
        imageUrl: "",
        ingredients: [""],
      });
    } catch (error) {
      console.error("Error adding recipe:", error.message);
    }
  };



  

  return (
    <div className="bg-gray-600 m-b h-full">
      <Navbar />

      <form onSubmit={handleAddRecipe} className="mb-8 mx-4">
        <h2 className="text-xl font-bold mb-2 text-white">Add a New Recipe</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="title" className="mr-2 text-white">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newRecipe.title}
            onChange={handleInputChange}
            required
            className="px-2 py-1 border rounded"
          />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="imageUrl" className="mr-2 text-white">
            Image URL:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={newRecipe.imageUrl}
            onChange={handleInputChange}
            className="px-2 py-1 border rounded"
          />
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="description" className="mr-2 text-white">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newRecipe.description}
            onChange={handleInputChange}
            required
            className="px-2 py-1 border rounded"
          />
        </div>

        <div className="flex items-center mb-4">
        <label htmlFor="ingredients" className="mr-2 text-white">
          Ingredients:
        </label>
        <div>
          {newRecipe.ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                className="px-2 py-1 border rounded mr-2"
              />
                <button
            type="button"
            onClick={handleAddIngredient}
            className="text-blue-500 hover:text-blue-700 focus:outline-none"
          >
            Add Ingredient
          </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="preparation" className="mr-2 text-white">
            Preparation:
          </label>
          <textarea
            id="preparation"
            name="preparation"
            value={newRecipe.preparation}
            onChange={handleInputChange}
            required
            className="px-2 py-1 border rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};
export default AddRecipe;