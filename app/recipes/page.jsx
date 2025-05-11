import RecipeSearchBar from "@/components/recipes_search/RecipeSearchBar";
import RecipeResults from "@/components/recipes_search/RecipeResults";

const page = () => {
  return (
    <div>
      <RecipeSearchBar />

      <RecipeResults />
    </div>
  );
};

export default page;
