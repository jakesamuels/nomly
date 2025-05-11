"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchRecipeById } from "@/utils/utils";

const page = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  async function fetchRecipeData(id) {
    try {
      const recipeData = await fetchRecipeById(id);
      setRecipe(recipeData);
    } catch (error) {
      console.error("Failed to fetch recipe data:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchRecipeData(id);
    }
  }, [id]);

  return (
    <div>
      <h1>{recipe?.recipe?.label}</h1>
    </div>
  );
};

export default page;
