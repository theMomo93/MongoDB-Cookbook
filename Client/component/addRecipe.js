import React, { useState, useEffect } from "react";
import Navbar from "@/component/Navbar";
import Link from "next/link";
import Footer from "@/component/Footer";

const Recipes = () => {
  // State variables for the new recipe form
  const [newRecipe, setNewRecipe] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/recipes/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }

      // Optionally, you can fetch the updated recipe list after adding a new recipe
      // and update the state to reflect the changes.

      // Reload the recipes after adding a new one
      fetchRecipes();
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch('http://localhost:5000/recipes/list/all');
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="bg-gray-600 m-b h-full">
      <Navbar />
      {/* ... (Your existing JSX code) */}

      {/* Form for adding a new recipe */}
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
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Recipes;
