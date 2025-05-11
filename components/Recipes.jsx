"use client";
import { useState } from "react";
import { useRecipeContext } from "@/context/RecipeContext";
import RecipeCard from "./shared/RecipeCard";

const Recipes = () => {
  const { recipes } = useRecipeContext();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  if (!recipes?.results?.length) return null;

  const totalPages = Math.ceil(recipes.results.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const currentRecipes = recipes.results.slice(
    startIndex,
    startIndex + recipesPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0 });
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div>
      <p className="text-center text-3xl my-4">TODO - Filtering</p>
      <div className="mx-auto w-[87.5%] md:grid md:w-[89.7%] md:max-w-[689px] grid-cols-2 gap-6  lg:grid-cols-3 lg:max-w-[1110px]">
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Recipes;
