import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      href="/"
      className={`relative rounded-lg w-full flex flex-col mb-8 md:mb-0 justify-end bg-[url(${recipe.image})] h-[300px] p-4 xl:hover:scale-[1.05] transition-all`}
      style={{
        backgroundImage: `url(${recipe.image})`,
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
        {recipe.title}
      </p>
    </Link>
  );
};

export default RecipeCard;
