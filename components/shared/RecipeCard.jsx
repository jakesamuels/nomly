import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <figure className="rounded-full mb-3">
        <Image
          src={recipe.image}
          width={800}
          height={800}
          alt={recipe.title}
          className="rounded-full shadow-lg mb-3 w-full  object-cover"
        />
      </figure>
      <figcaption className="text-lg font-semibold text-center mb-4">
        {recipe.title}
      </figcaption>
      <button className="bg-green-300 rounded-full py-1 px-8 text-lg font-normal text-white text-shadow-sm">
        View
      </button>
    </div>
  );
};

export default RecipeCard;
