type ShopCardProps = {
  name: string;
  image: string;
};

const ShopCard = ({ name, image }: ShopCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 cursor-pointer">
      
      {/* Bigger Image */}
      <div className="w-48 h-32 sm:w-52 sm:h-36 md:w-56 md:h-40 
                      overflow-hidden rounded-2xl shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name */}
      <p className="text-sm sm:text-base font-medium text-gray-800 text-center">
        {name}
      </p>
    </div>
  );
};

export default ShopCard;
