"use client";
import { useState } from "react";
import { searchRecipesBytTitle } from "@/utils/utils";

export const SearchRecipes = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const recipeData = await searchRecipesBytTitle(query);
      setRecipes(recipeData);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  console.log(recipes);

  return (
    <div>
      <input
        type="text"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find your favourite dish"
        className="border-1 border-solid border-gray-300 rounded-xl"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
