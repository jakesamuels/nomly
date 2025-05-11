import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  const recipeUrl = recipe._links.self.href;
  const parts = recipeUrl.split("/");
  const recipeIdWithParams = parts[parts.length - 1];
  const recipeId = recipeIdWithParams.split("?")[0];

  return (
    <Link
      href={`/recipes/${recipeId}`}
      className={`relative rounded-lg w-full flex flex-col mb-8 md:mb-0 justify-end bg-[url(${recipe.image})] h-[300px] p-4 xl:hover:scale-[1.05] transition-all`}
      style={{
        backgroundImage: `url(${recipe.recipe.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0,0,0,0.15)",
        backgroundBlendMode: "darken",
      }}
    >
      <Image
        src="/logo.png"
        width={60}
        height={60}
        alt="Nomly logo"
        className="absolute top-4 left-4"
      />

      {/* TODO - ADD FAVOURITE ICON (Heart?) */}

      <p className="text-xl font-bold text-white text-shadow-md">
        {recipe.recipe.label}
      </p>
    </Link>
  );
};

export default RecipeCard;
