"use client";
import { useState } from "react";
const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${query}&number=100`
      );

      const recipeData = await data.json();

      setRecipes(recipeData);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  console.log(recipes);

  return (
    <div>
      <input
        type="text"
        className="bg-red-500"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
