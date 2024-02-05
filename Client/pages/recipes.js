import React, { useState, useEffect } from "react";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import axios from "axios";


const recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    preparation: "",
    imageUrl: "",
    ingredients: [""],
  });

  
  useEffect(() => {
    fetch('http://localhost:5000/recipes/list/all')
      .then(response => response.json())
      .then(data => {
        console.log('API response data:', data);
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  

  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(`http://localhost:5000/recipes/delete/${recipeId}`, {
        method: 'DELETE',
      });
  
      const data = await response.json();
  
      if (data.success) {
        // If the deletion was successful, update the recipes state
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe._id !== recipeId));
      } else {
        console.error('Failed to delete recipe:', data.error);
      }
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
    }
  };
  


  // Log the state for debugging
  console.log('recipes:', recipes);
  console.log('loading:', loading);
  console.log('error:', error);

  const editRecipe = async (recipeId) => {
    try {
      const response = await axios.put(`http://localhost:5000/recipes/edit/${recipeId}`, {
        newRecipe,
      });
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        console.log("Success editing recipe");
      }
    } catch (error) {
      console.error('Error editing recipe:', error.message);
    }
  };

  return (
    <div className="bg-gray-600 m-b h-full">
      <Navbar />
      <div>
        <h1 className="mb-6 ml-8 mt-16 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {" "}
            FoodBook&apos;s{" "}
          </span>{" "}
          All Recipes
        </h1>
        <p className="mb-10 ml-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Where Flavor Takes Center Stage and Laughter is the Secret Ingredient.
        </p>
      </div>
      <div className="text-center">
        <a
          href="addRecipe"
          className="ml-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-gradient-to-r to-emerald-600 from-sky-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add a Recipe <span className="ml-3 mr-2 text-2xl"> + </span>
        </a>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-96 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>

      <div className="flex flex-row flex-wrap mb-10">
  {loading ? (
    <p>Loading...</p>
  ) : Array.isArray(recipes) ? (
    recipes.map(recipe => (
      <div key={recipe._id} className="flex-shrink-0 w-full sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div className="pt-6 pb-4 text-left max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-emerald-800 h-full">
          <img src={recipe.image} alt={recipe.title} className="w-full h-auto rounded-lg mb-4" />
          <div className="ml-4 mr-2 mt-4">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
            <p className="ml-4 mr-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              {recipe.description}
            </p>
            <h3>Ingredients</h3>
            <ul className="ml-4 mr-4 mb-3 font-normal text-gray-700 dark:text-gray-400">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h3>Preparation</h3>
            <p className="ml-4 mr-4 mb-3 font-normal text-white-700 dark:text-white-800">
              {recipe.preparation}
            </p>
            <button
              className="ml-2 text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => deleteRecipe(recipe._id)}
            >
              Delete Recipe <span className="ml-2 font-bold"> X</span>
            </button>
            <button
              className="ml-2 text-black bg-gradient-to-br from-yellow-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => editRecipe(recipe._id)}
            >
              Edit Recipe <span className="ml-2 font-bold"> E </span>
            </button>
          </div>
        </div>
      </div>
    ))
  ) : null}
</div>

      <Footer />
    </div>
  );
}

export default recipes;
