import { useState } from "react";
import {
  Wifi,
  Wind,
  Tv,
  Coffee,
  Utensils,
  Bath,
  Bed,
  Car,
  Shield,
  Dumbbell,
  Users,
  Star,
  Check,
  MapPin,
  Building2,
  Home,
  Sparkles,
} from "lucide-react";
import { haptics } from "../utils/haptics";
import { useLang } from "../context/LanguageContext";

interface Amenity {
  icon: React.ReactNode;
  titleKey: keyof ReturnType<typeof useLang>["t"];
  descriptionKey: keyof ReturnType<typeof useLang>["t"];
  category: "essential" | "comfort" | "facility";
}

function WhatsForPage() {
  const { t } = useLang();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const amenities: Amenity[] = [
    {
      icon: <Wifi className="text-sas-red" size={28} />,
      titleKey: "highSpeedWifi",
      descriptionKey: "highSpeedWifiDesc",
      category: "essential",
    },
    {
      icon: <Wind className="text-sas-red" size={28} />,
      titleKey: "airConditioningTitle",
      descriptionKey: "airConditioningDesc",
      category: "essential",
    },
    {
      icon: <Tv className="text-sas-red" size={28} />,
      titleKey: "smartTvTitle",
      descriptionKey: "smartTvDesc",
      category: "comfort",
    },
    {
      icon: <Coffee className="text-sas-red" size={28} />,
      titleKey: "coffeeTea",
      descriptionKey: "coffeeTeaDesc",
      category: "comfort",
    },
    {
      icon: <Utensils className="text-sas-red" size={28} />,
      titleKey: "fullKitchenTitle",
      descriptionKey: "fullKitchenDesc",
      category: "essential",
    },
    {
      icon: <Bath className="text-sas-red" size={28} />,
      titleKey: "premiumBathroom",
      descriptionKey: "premiumBathroomDesc",
      category: "comfort",
    },
    {
      icon: <Bed className="text-sas-red" size={28} />,
      titleKey: "luxuryBedding",
      descriptionKey: "luxuryBeddingDesc",
      category: "comfort",
    },
    {
      icon: <Car className="text-sas-red" size={28} />,
      titleKey: "parking",
      descriptionKey: "parkingDesc",
      category: "facility",
    },
    {
      icon: <Shield className="text-sas-red" size={28} />,
      titleKey: "security24Title",
      descriptionKey: "security24Desc",
      category: "facility",
    },
    {
      icon: <Dumbbell className="text-sas-red" size={28} />,
      titleKey: "fitnessCenter",
      descriptionKey: "fitnessCenterDesc",
      category: "facility",
    },
    {
      icon: <Users className="text-sas-red" size={28} />,
      titleKey: "swimmingPoolTitle",
      descriptionKey: "swimmingPoolDesc",
      category: "facility",
    },
    {
      icon: <Building2 className="text-sas-red" size={28} />,
      titleKey: "mallAccess",
      descriptionKey: "mallAccessDesc",
      category: "facility",
    },
  ];

  const handleCategoryChange = async (category: string) => {
    if (category !== selectedCategory) {
      await haptics.selection();
      setSelectedCategory(category);
    }
  };

  const categories = [
    { id: "all", label: t.allAmenities, icon: <Star size={18} /> },
    { id: "essential", label: t.essential, icon: <Home size={18} /> },
    { id: "comfort", label: t.comfort, icon: <Sparkles size={18} /> },
    { id: "facility", label: t.facilities, icon: <Building2 size={18} /> },
  ];

  const filteredAmenities =
    selectedCategory === "all"
      ? amenities
      : amenities.filter((a) => a.category === selectedCategory);

  const designFeatures = [
    t.minimalistFurniture,
    t.naturalWoodAccents,
    t.neutralColorPalette,
    t.abundantNaturalLight,
    t.indoorPlants,
    t.cozyTextiles,
    t.functionalStorage,
    t.qualityCraftsmanship,
  ];

  const hyggeElements = [
    {
      title: t.warmLighting,
      description: t.warmLightingDesc,
    },
    {
      title: t.comfortableSeating,
      description: t.comfortableSeatingDesc,
    },
    {
      title: t.naturalMaterials,
      description: t.naturalMaterialsDesc,
    },
    {
      title: t.peacefulEnvironment,
      description: t.peacefulEnvironmentDesc,
    },
  ];

  const locationBenefits = [
    t.locationBenefit1,
    t.locationBenefit2,
    t.locationBenefit3,
    t.locationBenefit4,
    t.locationBenefit5,
    t.locationBenefit6,
  ];

  return (
    <div className="space-y-8 pb-safe-bottom">
      {/* Header */}
      <div className="bg-sas-gradient text-white p-6 -mx-4 -mt-4 rounded-b-3xl shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="mx-auto mb-3" size={40} />
          <h1 className="text-3xl font-bold mb-2 text-white">
            {t.amenitiesAndFeatures}
          </h1>
          <p className="text-gray-100">{t.amenitiesDesc}</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-sas-dark">
          {t.filterByCategory}
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-sas-gradient text-white shadow-lg"
                  : "bg-white text-sas-dark hover:bg-sas-light sas-shadow"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-sm text-sas-gray font-medium">
        {t.showingAmenities} {filteredAmenities.length}{" "}
        {filteredAmenities.length === 1 ? t.amenity : t.amenities}
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAmenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 sas-shadow hover:sas-shadow-lg transition-all duration-300 fade-in animate-in"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-sas-light rounded-full flex items-center justify-center">
                {amenity.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-sas-dark mb-1">
                  {t[amenity.titleKey]}
                </h3>
                <p className="text-sas-dark/70 text-sm leading-relaxed">
                  {t[amenity.descriptionKey]}
                </p>
              </div>
              <Check className="text-green-500 flex-shrink-0" size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Nordic Design Features */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Home className="text-sas-red" size={24} />
          <h2 className="text-2xl font-bold text-sas-dark">
            {t.nordicDesignTitle}
          </h2>
        </div>
        <p className="text-sas-dark/80 leading-relaxed mb-4">
          {t.nordicDesignDescLong}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {designFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-sas-light/50 rounded-lg px-3 py-2"
            >
              <div className="w-2 h-2 bg-sas-red rounded-full flex-shrink-0"></div>
              <span className="text-sm text-sas-dark">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hygge Section */}
      <div className="bg-gradient-to-br from-gray-100/20 to-sas-light rounded-xl p-6 border border-sas-gray/20">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-sas-red" size={24} />
          <h2 className="text-2xl font-bold text-sas-dark">
            {t.hyggeExperienceTitle}
          </h2>
        </div>
        <p className="text-sas-dark/80 leading-relaxed mb-5">
          {t.hyggeExperienceDescLong}
        </p>
        <div className="grid grid-cols-1 gap-4">
          {hyggeElements.map((element, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-sas-red/20 rounded-full flex items-center justify-center mt-1">
                <Coffee className="text-sas-red" size={16} />
              </div>
              <div>
                <h4 className="font-semibold text-sas-dark mb-1">
                  {element.title}
                </h4>
                <p className="text-sm text-sas-dark/70">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Benefits */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="text-sas-red" size={24} />
          <h2 className="text-2xl font-bold text-sas-dark">
            {t.primeLocation}
          </h2>
        </div>
        <p className="text-sas-dark/80 leading-relaxed mb-4">
          {t.primeLocationDesc}
        </p>
        <div className="space-y-3">
          {locationBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="text-green-600" size={16} />
              </div>
              <span className="text-sas-dark/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-sas-gradient rounded-xl p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {t.readyToExperience}
        </h3>
        <p className="text-gray-100 mb-6">{t.readyToExperienceDesc}</p>
        <button
          onClick={async () => {
            await haptics.buttonPress();
            window.open("https://stayatscandinavia.5mb.app/", "_blank");
          }}
          className="px-8 py-3 bg-white text-sas-red font-bold rounded-full hover:bg-sas-light transition-all transform hover:scale-105 shadow-lg"
        >
          {t.checkAvailability}
        </button>
      </div>
    </div>
  );
}

export default WhatsForPage;
