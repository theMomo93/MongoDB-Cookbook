import React, { useState } from "react";

export default function CreateARecipe() {
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    description: "",
    ingredients: {},
    preparationSteps: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleIngredientChange = (key, value) => {
    setFormData({
      ...formData,
      ingredients: { ...formData.ingredients, [key]: value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // POST request to your API route
    const response = await fetch('/api/addRecipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    console.log(data);
  };
  

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-4 space-y-4 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
        style={{ maxWidth: "70%" }}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ingredients:
          </label>
          {Object.keys(formData.ingredients).map((key, index) => (
            <input
              key={index}
              type="text"
              value={formData.ingredients[key]}
              onChange={(e) => handleIngredientChange(key, e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          ))}
          <button
            type="button"
            onClick={() =>
              handleIngredientChange(
                `ingredient${Object.keys(formData.ingredients).length + 1}`,
                ""
              )
            }
            className="mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Ingredient
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preparation Steps:
          </label>
          <textarea
            name="preparationSteps"
            value={formData.preparationSteps}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
}
