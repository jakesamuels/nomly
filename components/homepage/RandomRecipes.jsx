"use client";
import { useState, useEffect } from "react";
import { fetchRandomRecipes } from "@/utils/utils";
import RecipeCard from "../shared/RecipeCard";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipeData = await fetchRandomRecipes();
        setRecipes(recipeData.recipes);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRecipeData();
  }, []);

  return (
    <section>
      <h2>Explore a World of Delicious Recipes</h2>
      <p>
        Discover a diverse collection of mouthwatering recipes for every
        occasion, dietary need, and skill level. From quick weeknight meals to
        impressive weekend feasts, find inspiration and step-by-step
        instructions to create culinary magic in your own kitchen.
      </p>
      <div className="md:grid grid-cols-3 gap-4 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RandomRecipes;
