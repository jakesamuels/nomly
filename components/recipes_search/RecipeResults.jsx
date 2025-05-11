"use client";

import { useRecipeContext } from "@/context/RecipeContext";
import RecipeCard from "../shared/RecipeCard";

const RecipeResults = () => {
  const { recipes } = useRecipeContext();

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.recipe.label} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeResults;
