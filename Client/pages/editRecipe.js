import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "@/component/Navbar";
import { useParams } from "react-router-dom";

const AddRecipe = () => {
  const { id } = useParams() || {};

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    description: "",
    preparation: "",
    imageUrl: "",
    ingredients: [""],
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:5000/recipes/get/one?id=${id}`

      );
      console.log("🚀 ~ response:", response);

      if (response.data.success) {
        setNewRecipe(response.data.post);
      }
    };

    fetchData();
  }, [id]);

  const handleEditRecipe = async () => {
    const response = await axios.put(`http://localhost:5000/recipes/edit/${id}`, {
      newRecipe,
   });
    console.log("🚀 ~ response:", response);

    if (response.data.success) {
      console.log("Success editing recipe");
    }
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients[index] = value;
    setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
  };
  
  const handleAddIngredient = () => {
    setNewRecipe({ ...newRecipe, ingredients: [...newRecipe.ingredients, ""] });
  };
  



  return (
    <div className="bg-gray-600 m-b h-full">
      <Navbar />

      <form onSubmit={handleEditRecipe} className="mb-8 mx-4">
        <h2 className="text-xl font-bold mb-2 text-white">Edit Recipe</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="title" className="mr-2 text-white">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newRecipe.title}
            onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
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
            onChange={(e) => setNewRecipe({ ...newRecipe, imageUrl: e.target.value })}
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
            onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
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
            onChange={(e) => setNewRecipe({ ...newRecipe, preparation: e.target.value })}
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


