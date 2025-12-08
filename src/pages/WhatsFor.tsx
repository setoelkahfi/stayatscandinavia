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
  Sparkles
} from "lucide-react";
import { haptics } from "../utils/haptics";

interface Amenity {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: "essential" | "comfort" | "facility";
}

function WhatsForPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const amenities: Amenity[] = [
    {
      icon: <Wifi className="text-nordic-blue" size={28} />,
      title: "High-Speed WiFi",
      description: "Complimentary fiber optic internet throughout the apartment",
      category: "essential",
    },
    {
      icon: <Wind className="text-nordic-blue" size={28} />,
      title: "Air Conditioning",
      description: "Climate control in all rooms for your comfort",
      category: "essential",
    },
    {
      icon: <Tv className="text-nordic-blue" size={28} />,
      title: "Smart TV",
      description: "55-inch 4K Smart TV with streaming services",
      category: "comfort",
    },
    {
      icon: <Coffee className="text-nordic-blue" size={28} />,
      title: "Coffee & Tea",
      description: "Premium coffee maker with complimentary coffee and tea",
      category: "comfort",
    },
    {
      icon: <Utensils className="text-nordic-blue" size={28} />,
      title: "Full Kitchen",
      description: "Modern kitchen with all appliances and cookware",
      category: "essential",
    },
    {
      icon: <Bath className="text-nordic-blue" size={28} />,
      title: "Premium Bathroom",
      description: "Rain shower, premium toiletries, and fluffy towels",
      category: "comfort",
    },
    {
      icon: <Bed className="text-nordic-blue" size={28} />,
      title: "Luxury Bedding",
      description: "King-size bed with premium linens and pillows",
      category: "comfort",
    },
    {
      icon: <Car className="text-nordic-blue" size={28} />,
      title: "Parking",
      description: "Dedicated parking space in secure garage",
      category: "facility",
    },
    {
      icon: <Shield className="text-nordic-blue" size={28} />,
      title: "24/7 Security",
      description: "Round-the-clock security and CCTV surveillance",
      category: "facility",
    },
    {
      icon: <Dumbbell className="text-nordic-blue" size={28} />,
      title: "Fitness Center",
      description: "Access to mall's modern gym and fitness facilities",
      category: "facility",
    },
    {
      icon: <Users className="text-nordic-blue" size={28} />,
      title: "Swimming Pool",
      description: "Rooftop pool with stunning city views",
      category: "facility",
    },
    {
      icon: <Building2 className="text-nordic-blue" size={28} />,
      title: "Mall Access",
      description: "Direct access to shopping, dining, and entertainment",
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
    { id: "all", label: "All Amenities", icon: <Star size={18} /> },
    { id: "essential", label: "Essential", icon: <Home size={18} /> },
    { id: "comfort", label: "Comfort", icon: <Sparkles size={18} /> },
    { id: "facility", label: "Facilities", icon: <Building2 size={18} /> },
  ];

  const filteredAmenities = selectedCategory === "all" 
    ? amenities 
    : amenities.filter(a => a.category === selectedCategory);

  const designFeatures = [
    "Minimalist Scandinavian furniture",
    "Natural wood accents",
    "Neutral color palette",
    "Abundant natural light",
    "Indoor plants",
    "Cozy textiles and throws",
    "Functional storage solutions",
    "Quality craftsmanship",
  ];

  const hyggeElements = [
    {
      title: "Warm Lighting",
      description: "Soft, ambient lighting creates a cozy atmosphere",
    },
    {
      title: "Comfortable Seating",
      description: "Plush sofas and chairs perfect for relaxation",
    },
    {
      title: "Natural Materials",
      description: "Wood, wool, and cotton for an authentic feel",
    },
    {
      title: "Peaceful Environment",
      description: "Quiet, serene space away from city noise",
    },
  ];

  return (
    <div className="space-y-8 pb-safe-bottom">
      {/* Header */}
      <div className="bg-nordic-gradient text-white p-6 -mx-4 -mt-4 rounded-b-3xl shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <Sparkles className="mx-auto mb-3" size={40} />
          <h1 className="text-3xl font-bold mb-2 text-white">Amenities & Features</h1>
          <p className="text-nordic-warm">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-nordic-dark">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-nordic-gradient text-white shadow-lg"
                  : "bg-white text-nordic-dark hover:bg-nordic-light nordic-shadow"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-sm text-nordic-gray font-medium">
        Showing {filteredAmenities.length} {filteredAmenities.length === 1 ? "amenity" : "amenities"}
      </div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredAmenities.map((amenity, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 nordic-shadow hover:nordic-shadow-lg transition-all duration-300 fade-in animate-in"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "both",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-nordic-light rounded-full flex items-center justify-center">
                {amenity.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-nordic-dark mb-1">
                  {amenity.title}
                </h3>
                <p className="text-nordic-dark/70 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
              <Check className="text-green-500 flex-shrink-0" size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Nordic Design Features */}
      <div className="bg-white rounded-xl p-6 nordic-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Home className="text-nordic-blue" size={24} />
          <h2 className="text-2xl font-bold text-nordic-dark">Nordic Design</h2>
        </div>
        <p className="text-nordic-dark/80 leading-relaxed mb-4">
          Our apartment showcases authentic Scandinavian design principles, 
          combining functionality with aesthetic beauty.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {designFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-nordic-light/50 rounded-lg px-3 py-2"
            >
              <div className="w-2 h-2 bg-nordic-blue rounded-full flex-shrink-0"></div>
              <span className="text-sm text-nordic-dark">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hygge Section */}
      <div className="bg-gradient-to-br from-nordic-warm/20 to-nordic-light rounded-xl p-6 border border-nordic-gray/20">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="text-nordic-blue" size={24} />
          <h2 className="text-2xl font-bold text-nordic-dark">Hygge Experience</h2>
        </div>
        <p className="text-nordic-dark/80 leading-relaxed mb-5">
          Experience the Danish concept of 'hygge' - a quality of coziness and comfortable 
          conviviality that engenders a feeling of contentment and well-being.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {hyggeElements.map((element, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-nordic-blue/20 rounded-full flex items-center justify-center mt-1">
                <Coffee className="text-nordic-blue" size={16} />
              </div>
              <div>
                <h4 className="font-semibold text-nordic-dark mb-1">{element.title}</h4>
                <p className="text-sm text-nordic-dark/70">{element.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Benefits */}
      <div className="bg-white rounded-xl p-6 nordic-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="text-nordic-blue" size={24} />
          <h2 className="text-2xl font-bold text-nordic-dark">Prime Location</h2>
        </div>
        <p className="text-nordic-dark/80 leading-relaxed mb-4">
          Located in Tangerang City Mall, you'll enjoy:
        </p>
        <div className="space-y-3">
          {[
            "Direct access to 200+ shops and boutiques",
            "50+ dining options from casual to fine dining",
            "Cinema and entertainment venues",
            "Walking distance to business district",
            "Easy access to public transportation",
            "Safe and secure neighborhood",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="text-green-600" size={16} />
              </div>
              <span className="text-nordic-dark/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-nordic-gradient rounded-xl p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-3 text-white">Ready to Experience Scandinavia?</h3>
        <p className="text-nordic-warm mb-6">
          Book your stay and immerse yourself in Nordic comfort and style.
        </p>
        <button
          onClick={async () => {
            await haptics.buttonPress();
            window.open("https://stayatscandinavia.5mb.app/", "_blank");
          }}
          className="px-8 py-3 bg-white text-nordic-blue font-bold rounded-full hover:bg-nordic-light transition-all transform hover:scale-105 shadow-lg"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}

export default WhatsForPage;