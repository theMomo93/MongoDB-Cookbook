import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { managementClient } from "contentful-management";

function FetchedRecipes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your backend API endpoint
        const response = await fetch('http://localhost:5000/recipes/list/all');
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    // Fetch data from your backend when the component mounts
    fetchData();
  }, []);

  // Function to delete a recipe entry by entryId
  const deleteRecipe = async (entryId) => {
    try {
      // Assuming managementClient is properly configured
      const space = await managementClient.getSpace(
        import.meta.env.VITE_REACT_APP_SPACE_ID
      );
      const environment = await space.getEnvironment("master");
      const entry = await environment.getEntry(entryId);
      await entry.delete();

      // Update state to remove the deleted entry from the displayed recipes
      setData((prevData) => prevData.filter((item) => item.sys.id !== entryId));
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
  };

  // Render loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Render the fetched recipes
  return (
    <div className="bg-yellow-400">
      {data &&
        data.map((item) => {
          const ingredients = parseIngredients(item.fields.ingredients);

          return (
            <div key={item.sys.id}>
              <h2>{item.fields.title}</h2>
              <p>{item.fields.description}</p>
              <ul>
                {ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.name} - Quantity: {ingredient.quantity}
                  </li>
                ))}
              </ul>
              {item.fields.image && (
                <img
                  src={`https:${item.fields.image.fields.file.url}`}
                  alt={item.fields.image.fields.title}
                  style={{
                    width: "250px",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              )}
              <button onClick={() => deleteRecipe(item.sys.id)}>
                Delete Recipe
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default FetchedRecipes;
