"use client";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import Menu from "./components/Menu";
import RecipeList from "./components/RecipeList";
import { useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [groceryListItems, setGroceryListItems] = useState([]);

  return (
    <>
      <main>
        <Header />
        {/* We want three columns below the header, so we use grid layout and we specify 3 columns */}
        <div className="grid grid-cols-3">
          <div className="border p-4">
            <h2 className="text-xl font-bold">Recipe Book</h2>
            <RecipeList recipes={recipes} />
          </div>

          <div className="border p-4">
            <h2 className="text-xl font-bold">Menu</h2>
            <Menu menuItems={menuItems} />
          </div>

          <div className="border p-4">
            <h2 className="text-xl font-bold">Grocery List</h2>
            <GroceryList groceryListItems={groceryListItems} />
          </div>
        </div>
      </main>
    </>
  );
}
