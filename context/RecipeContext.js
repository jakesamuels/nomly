"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { searchRecipesBytTitle } from "@/utils/utils";

// Create the RecipeContext
const RecipeContext = createContext();

// Custom Hook for easier context access
export const useRecipeContext = () => useContext(RecipeContext);

// Provider component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const recipeData = await searchRecipesBytTitle(query);
      setRecipes(recipeData);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <RecipeContext.Provider value={{ recipes, query, setQuery, handleSearch }}>
      {children}
    </RecipeContext.Provider>
  );
};
