import {
  Star,
  MapPin,
  Clock,
  ArrowLeft,
  Phone,
  Globe,
  Heart,
  Check,
} from "lucide-react";
import { Restaurant } from "../types/restaurant";
import { useEffect, useState } from "react";
import { storeData } from "../lib/store/store";
import { K_SAVED_RESTAURANTS } from "../lib/crate/generated";
import { debug } from "@tauri-apps/plugin-log";
import { haptics } from "../utils/haptics";

interface RestaurantDetailPageProps {
  restaurant: Restaurant;
  onBack: () => void;
}

enum State {
  LOADING,
  LOADED,
  ERROR,
}

function RestaurantDetailPage({
  restaurant,
  onBack,
}: RestaurantDetailPageProps) {
  const [state, setState] = useState(State.LOADING);
  const [savedRestaurants, setSavedRestaurants] = useState<Restaurant[]>([]);
  const [saved, setSaved] = useState(false);

  const onToggleSave = async () => {
    setState(State.LOADING);
    let updatedRestaurants: Restaurant[];

    if (saved) {
      debug(`Removing restaurant ${restaurant.id} from saved`);
      updatedRestaurants = savedRestaurants.filter(
        (r) => r.id !== restaurant.id,
      );
    } else {
      debug(`Adding restaurant ${restaurant.id} to saved`);
      updatedRestaurants = [...savedRestaurants, restaurant];
    }

    setSavedRestaurants(updatedRestaurants);
    setSaved(!saved);

    try {
      await storeData().set(K_SAVED_RESTAURANTS, updatedRestaurants);
      await storeData().save();
      await haptics.success();
      setState(State.LOADED);
    } catch (error) {
      debug(`Error saving restaurants: ${error}`);
      await haptics.error();
      setState(State.ERROR);
    }
  };

  const init = async () => {
    // Load saved restaurants
    setState(State.LOADING);
    const savedRestaurants =
      await storeData().get<Restaurant[]>(K_SAVED_RESTAURANTS);
    debug(`Loaded saved restaurants: ${JSON.stringify(savedRestaurants)}`);
    if (savedRestaurants) {
      setSavedRestaurants(savedRestaurants);
      setSaved(savedRestaurants.some((r) => r.id === restaurant.id));
    }
    setState(State.LOADED);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="space-y-6 pb-8">
      {/* Back Button */}
      <button
        onClick={async () => {
          await haptics.navigation();
          onBack();
        }}
        className="flex items-center space-x-2 text-food-orange hover:text-food-red transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Home</span>
      </button>

      {/* Restaurant Hero Image */}
      <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {restaurant.name}
          </h1>
          <div className="flex items-center space-x-2">
            <div className="bg-white px-3 py-1 rounded-full flex items-center space-x-1">
              <Star size={18} className="text-food-yellow fill-food-yellow" />
              <span className="font-bold text-gray-800">
                {restaurant.rating}
              </span>
            </div>
            <span className="text-white text-sm">
              ({restaurant.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={async () => {
            await haptics.toggle();
            onToggleSave();
          }}
          disabled={state === State.LOADING}
          aria-pressed={saved}
          aria-label={saved ? "Unsave restaurant" : "Save restaurant"}
          aria-busy={state === State.LOADING}
          className={`relative flex items-center justify-center space-x-3 px-4 py-3 rounded-lg shadow-md transition-transform transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-food-orange active:scale-95 ${saved ? "bg-food-brown text-white hover:bg-food-red/90" : "bg-gradient-to-r from-food-orange to-food-red text-white hover:opacity-95"}`}
        >
          {/* Loading spinner (visible while saving) */}
          {state === State.LOADING ? (
            <svg
              className="w-5 h-5 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
          ) : saved ? (
            <>
              <Heart size={18} className="text-white" />
              <Check size={16} className="text-white/90 mr-0" />
            </>
          ) : (
            <Heart size={18} className="text-white" />
          )}

          <span className="font-medium">
            {state === State.LOADING ? (
              <span className="inline-flex items-center">
                Saving
                <span className="sr-only">Saving {restaurant.name}</span>
              </span>
            ) : saved ? (
              <span className="inline-flex items-center space-x-2">
                <span>Saved</span>
              </span>
            ) : (
              "Save"
            )}
          </span>
        </button>
        {/* Hide share button for now
        <button className="flex items-center justify-center space-x-2 bg-white text-food-orange border-2 border-food-orange px-4 py-3 rounded-lg hover:bg-food-cream transition-colors shadow-md">
          <Share2 size={20} />
          <span className="font-medium">Share</span>
        </button>*/}
      </div>

      {/* Restaurant Details */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Details</h2>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin size={20} className="text-food-red mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Location</p>
            <p className="text-gray-600">{restaurant.location}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Clock size={20} className="text-food-orange mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Cuisine Type</p>
            <p className="text-gray-600">{restaurant.cuisine}</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Phone size={20} className="text-food-orange mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Contact</p>
            <p className="text-gray-600">+62 21 1234 5678</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Globe size={20} className="text-food-orange mt-1 flex-shrink-0" />
          <div>
            <p className="font-medium text-gray-800">Website</p>
            <a
              href="#"
              onClick={async (e) => {
                e.preventDefault();
                await haptics.buttonPress();
              }}
              className="text-food-orange hover:text-food-red hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="font-medium text-gray-800 mb-2">Price Range</p>
          <p className="text-2xl font-bold text-food-orange">
            {restaurant.priceRange}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          {restaurant.description}
        </p>
        <p className="text-gray-600 leading-relaxed">
          This restaurant has been carefully selected by FoodAndTravel, a Google
          Local Guide Level 9, ensuring you get the best dining experience. With
          a rating of {restaurant.rating} stars and thousands of positive
          reviews, this establishment consistently delivers exceptional food and
          service.
        </p>
      </div>

      {/* Opening Hours */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Opening Hours</h2>
        <div className="space-y-2">
          {[
            { day: "Monday - Friday", hours: "10:00 AM - 10:00 PM" },
            { day: "Saturday", hours: "9:00 AM - 11:00 PM" },
            { day: "Sunday", hours: "9:00 AM - 11:00 PM" },
          ].map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-800 font-medium">{schedule.day}</span>
              <span className="text-gray-600">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Dishes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Popular Dishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Signature Dish #1", price: "$25" },
            { name: "Chef Special #2", price: "$32" },
            { name: "House Favorite #3", price: "$28" },
            { name: "Customer Choice #4", price: "$30" },
          ].map((dish, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-food-cream rounded-lg"
            >
              <span className="text-food-brown font-medium">{dish.name}</span>
              <span className="text-food-orange font-bold">{dish.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action
      <div className="bg-gradient-to-r from-food-orange to-food-red rounded-lg shadow-lg p-6 text-center text-white">
        <h3 className="text-2xl font-bold mb-2">Ready to Visit?</h3>
        <p className="mb-4 opacity-90">
          Make a reservation now for the best experience!
        </p>
        <button className="bg-white text-food-orange px-8 py-3 rounded-lg font-bold hover:bg-food-cream transition-colors shadow-md">
          Book a Table
        </button>
        </div>*/}
    </div>
  );
}

export default RestaurantDetailPage;
