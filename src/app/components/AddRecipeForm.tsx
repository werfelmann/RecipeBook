"use client";
import { useState } from "react";

export default function AddRecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [recipe, setRecipe] = useState({
    title: recipeName,
    description: description,
    instructions: instructions,
    ingredients: ingredients,
  });

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
    setIngredient("");
  };

  return (
    <div>
      <div className="grid-cols-1">
        <form>
          <label htmlFor="RecipeName">Recipe Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={recipeName}
            className="rounded-md bg-gray-300 text-gray-700 m-4"
            onChange={(e) => setRecipeName(e.target.value)}
          />
          <label htmlFor="Description">Description</label>
          <textarea
            rows={4}
            cols={50}
            type="text"
            name="description"
            id="description"
            value={description}
            className="rounded-md bg-gray-300 text-gray-700 m-4"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="instructions">Instructions</label>
          <textarea
            rows={4}
            cols={50}
            type="text"
            name="instructions"
            id="instructions"
            value={instructions}
            className="rounded-md bg-gray-300 text-gray-700 m-4"
            onChange={(e) => setInstructions(e.target.value)}
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
          <div>{recipeName && <h1 className="text-4xl">{recipeName}</h1>}</div>
          <div>{description && <h2 className="text-lg">{description}</h2>}</div>
          <div>
            {instructions && <h2 className="text-lg">{instructions}</h2>}
          </div>
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
    </div>
  );
}
