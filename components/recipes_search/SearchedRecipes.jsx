"use client";

import { useRecipeContext } from "@/context/RecipeContext";
import RecipeCard from "../shared/RecipeCard";

const SearchedRecipes = () => {
  const { recipes } = useRecipeContext();

  return (
    <div>
      <p className="text-center text-3xl my-4">TODO - Filtering</p>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe.label} recipe={recipe} />
      ))}
    </div>
  );
};

export default SearchedRecipes;
