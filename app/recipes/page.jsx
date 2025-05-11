import SearchedRecipes from "@/components/recipes_search/SearchedRecipes";
import SearchRecipes from "@/components/recipes_search/SearchRecipes";

const page = () => {
  return (
    <div>
      <SearchRecipes />

      <SearchedRecipes />
    </div>
  );
};

export default page;
