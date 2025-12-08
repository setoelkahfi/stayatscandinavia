import { Star, MapPin, Clock } from "lucide-react";
import { Restaurant } from "../types/restaurant";
import { haptics } from "../utils/haptics";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  const handleClick = async () => {
    await haptics.cardTap();
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
    >
      {/* Restaurant Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center space-x-1 shadow-md">
          <Star size={16} className="text-food-yellow fill-food-yellow" />
          <span className="font-bold text-gray-800">{restaurant.rating}</span>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {restaurant.name}
        </h3>

        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin size={16} className="mr-1 text-food-red" />
          <span>{restaurant.location}</span>
        </div>

        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Clock size={16} className="mr-1 text-food-orange" />
          <span>{restaurant.cuisine}</span>
        </div>

        <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>

        {/* Price Range */}
        <div className="flex items-center justify-between">
          <span className="text-food-brown font-medium">
            {restaurant.priceRange}
          </span>
          <span className="text-xs text-gray-500">
            {restaurant.reviews} reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
