// Spoonacular API
const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

export const searchRecipesBytTitle = async (query) => {
  try {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${query}&number=9`
    );

    const recipeData = await data.json();

    return recipeData;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
