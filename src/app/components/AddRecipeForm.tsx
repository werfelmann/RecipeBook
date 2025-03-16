"use client";
import { useState } from "react";

export default function AddRecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  // const handleSubmit() => {

  // }

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  };

  return (
    <div>
      <form action="POST">
        <label htmlFor="RecipeName">Recipe Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-md bg-gray-300 text-gray-700 m-4"
        />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          className="rounded-md bg-gray-300 text-gray-700 m-4"
        />
        <label htmlFor="instructions">Instructions</label>
        <input
          type="text"
          name="instructions"
          id="instructions"
          className="rounded-md bg-gray-300 text-gray-700 m-4"
        />
        <label htmlFor="ingredient">Ingredient</label>
        <input
          type="text"
          name="ingredient"
          id="ingredient"
          value={ingredient}
          className="rounded-md bg-gray-300 text-gray-700 m-4"
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button
          type="button"
          onClick={() => addIngredient(ingredient)}
          className="bg-gray-500 hover:text-black hover:underline hover:bg-blue-500 p-3 rounded-md"
        >
          Add Ingredient
        </button>
        <div>
          {ingredients.length > 0 ? (
            <div>
              <h3>Ingredients</h3>
              <ul>
                {ingredients.map((ingredientItem, index) => (
                  <li key={index}>{ingredientItem}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Add an ingredient</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-500 hover:text-black hover:underline hover:bg-blue-500 p-3 rounded-md"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
