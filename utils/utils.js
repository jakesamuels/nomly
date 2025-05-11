// Spoonacular API
const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
const apiId = process.env.NEXT_PUBLIC_EDAMAM_API_KEY;
const appId = process.env.NEXT_PUBLIC_EDAMAM_APP_ID;

export const searchRecipesBytTitle = async (query) => {
  try {
    // const data = await fetch(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&titleMatch=${query}&number=100`
    // );

    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${apiId}&q=${query}`
    );

    const recipeData = await data.json();

    console.log(recipeData);

    return recipeData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export const fetchRecipeById = async (id) => {
  try {
    // const data = await fetch(
    //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
    // );

    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${appId}&app_key=${apiId}`
    );

    const recipeData = await data.json();

    return recipeData;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// export const fetchRandomRecipes = async () => {
//   try {
//     const data = await fetch(
//       `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=3`
//     );

//     const recipeData = await data.json();

//     return recipeData;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// };
