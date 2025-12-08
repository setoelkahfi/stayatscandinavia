import { Calendar, MapPin, Users, Wifi, Coffee, Sparkles, Star, Home as HomeIcon } from "lucide-react";
import { haptics } from "../utils/haptics";

function HomePage() {

  const handleBookNow = async () => {
    await haptics.buttonPress();
    window.open("https://stayatscandinavia.5mb.app/", "_blank");
  };

  const features = [
    {
      icon: <MapPin className="text-nordic-blue" size={24} />,
      title: "Premium Location",
      description: "Located in Tangerang City Mall with easy access to shopping, dining, and entertainment",
    },
    {
      icon: <HomeIcon className="text-nordic-blue" size={24} />,
      title: "Nordic Design",
      description: "Authentic Scandinavian furniture and décor focusing on comfort and minimalist elegance",
    },
    {
      icon: <Wifi className="text-nordic-blue" size={24} />,
      title: "Modern Amenities",
      description: "High-speed WiFi, smart home features, and all modern conveniences for a comfortable stay",
    },
    {
      icon: <Coffee className="text-nordic-blue" size={24} />,
      title: "Hygge Experience",
      description: "Experience the Danish concept of 'hygge' - creating a warm atmosphere and enjoying life",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      date: "April 2023",
      text: "The Stay at Scandinavia apartment exceeded all our expectations. The Nordic design elements created such a peaceful environment, and the location in Tangerang City Mall was perfect for our needs.",
      rating: 5,
    },
    {
      name: "David Lee",
      date: "June 2023",
      text: "We loved the minimalist design and the attention to detail. The apartment had everything we needed and more. It was the perfect blend of style and comfort.",
      rating: 5,
    },
  ];

  const amenities = [
    "King Size Bed",
    "Full Kitchen",
    "Smart TV",
    "Air Conditioning",
    "Washing Machine",
    "24/7 Security",
    "Parking Space",
    "Swimming Pool",
  ];

  return (
    <div className="space-y-8 pb-safe-bottom">
      {/* Hero Section */}
      <div className="relative -mx-4 -mt-4 mb-8">
        <div className="bg-nordic-gradient text-white p-8 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold text-white mb-2">
              Stay at Scandinavia
            </h1>
            <p className="text-lg text-nordic-warm">
              Experience authentic Scandinavian living in the heart of Indonesia
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                onClick={handleBookNow}
                className="px-6 py-3 bg-white text-nordic-blue font-semibold rounded-full hover:bg-nordic-light transition-all transform hover:scale-105 shadow-lg"
              >
                <Calendar className="inline mr-2" size={20} />
                Book Now
              </button>
              <button
                onClick={() => {
                  haptics.selection();
                  document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-nordic-dark/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-nordic-dark/40 transition-all"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 nordic-shadow text-center">
          <Users className="mx-auto mb-2 text-nordic-blue" size={28} />
          <p className="text-sm text-nordic-gray">Capacity</p>
          <p className="font-bold text-nordic-dark">2-4 Guests</p>
        </div>
        <div className="bg-white rounded-xl p-4 nordic-shadow text-center">
          <MapPin className="mx-auto mb-2 text-nordic-blue" size={28} />
          <p className="text-sm text-nordic-gray">Location</p>
          <p className="font-bold text-nordic-dark">Tangerang</p>
        </div>
      </div>

      {/* Scandinavian Experience Section */}
      <div className="bg-white rounded-xl p-6 nordic-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-nordic-blue" size={24} />
          <h2 className="text-2xl font-bold text-nordic-dark">Scandinavian Experience</h2>
        </div>
        <p className="text-nordic-dark/80 leading-relaxed mb-4">
          Our apartment combines the clean lines and functionality of Scandinavian design 
          with the warmth and hospitality of Indonesia.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-nordic-light/50 rounded-lg px-3 py-2"
            >
              <div className="w-2 h-2 bg-nordic-blue rounded-full"></div>
              <span className="text-sm text-nordic-dark">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-nordic-dark text-center mb-6">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 nordic-shadow hover:nordic-shadow-lg transition-all duration-300 fade-in animate-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-nordic-light rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-nordic-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-nordic-dark/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Experiences */}
      <div className="space-y-4" id="gallery">
        <h2 className="text-2xl font-bold text-nordic-dark text-center mb-6">
          Guest Experiences
        </h2>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 nordic-shadow-lg"
          >
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
              ))}
            </div>
            <p className="text-nordic-dark/80 leading-relaxed mb-4 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-nordic-dark">{testimonial.name}</p>
                <p className="text-sm text-nordic-gray">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-nordic-gradient rounded-xl p-8 text-center text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-3">
          Experience Scandinavian Living
        </h2>
        <p className="text-nordic-warm mb-6">
          Our premium apartment at Tangerang City Mall offers a perfect blend of Nordic design and comfort.
        </p>
        <button
          onClick={handleBookNow}
          className="px-8 py-3 bg-white text-nordic-blue font-bold rounded-full hover:bg-nordic-light transition-all transform hover:scale-105 shadow-lg"
        >
          <Calendar className="inline mr-2" size={20} />
          Book Your Stay Now
        </button>
      </div>

      {/* Footer Info */}
      <div className="text-center text-sm text-nordic-gray space-y-2 pb-4">
        <p className="flex items-center justify-center gap-2">
          <MapPin size={16} />
          Tangerang City Mall, Tangerang, Indonesia
        </p>
        <p>© 2025 Stay at Scandinavia. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;