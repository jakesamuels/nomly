"use client";

import { useRecipeContext } from "@/context/RecipeContext";

const RecipeSearchBar = () => {
  const { recipes, query, setQuery, handleSearch } = useRecipeContext();

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

      <p className="text-center text-3xl my-4">TODO - Filtering</p>
    </div>
  );
};

export default RecipeSearchBar;
