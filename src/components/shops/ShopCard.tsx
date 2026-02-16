type ShopCardProps = {
  name: string;
  image: string;
};

const ShopCard = ({ name, image }: ShopCardProps) => {
  return (
    <div className="flex flex-col items-center gap-4 cursor-pointer">
      
      {/* Bigger Image */}
      <div className="relative h-[180px] w-[189px] rounded-2xl overflow-hidden group cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
