// Spoonacular API
const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const searchRecipesBytTitle = async (query) => {
  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${query}&number=100`
    );

    const recipeData = await data.json();

    return recipeData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
    );

    const recipeData = await data.json();

    return recipeData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export const fetchRandomRecipes = async () => {
  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`
    );

    const recipeData = await data.json();

    return recipeData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
