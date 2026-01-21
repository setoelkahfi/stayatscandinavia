import {
  Calendar,
  MapPin,
  Users,
  Wifi,
  Coffee,
  Sparkles,
  Star,
  Home as HomeIcon,
} from "lucide-react";
import { haptics } from "../utils/haptics";
import { useLang } from "../context/LanguageContext";
import { openUrl } from "@tauri-apps/plugin-opener";

function HomePage() {
  const { t } = useLang();

  const handleBookNow = async () => {
    await haptics.buttonPress();
    openUrl("https://wa.me/081363222197");
  };

  const features = [
    {
      icon: <MapPin className="text-sas-red" size={24} />,
      title: t.premiumLocation,
      description: t.premiumLocationDesc,
    },
    {
      icon: <HomeIcon className="text-sas-red" size={24} />,
      title: t.nordicDesign,
      description: t.nordicDesignDesc,
    },
    {
      icon: <Wifi className="text-sas-red" size={24} />,
      title: t.modernAmenities,
      description: t.modernAmenitiesDesc,
    },
    {
      icon: <Coffee className="text-sas-red" size={24} />,
      title: t.hyggeExperience,
      description: t.hyggeExperienceDesc,
    },
  ];

  const testimonials = [
    {
      name: t.testimonial1Name,
      date: t.testimonial1Date,
      text: t.testimonial1Text,
      rating: 5,
    },
    {
      name: t.testimonial2Name,
      date: t.testimonial2Date,
      text: t.testimonial2Text,
      rating: 5,
    },
  ];

  const amenities = [
    t.kingSizeBed,
    t.fullKitchen,
    t.smartTv,
    t.airConditioning,
    t.washingMachine,
    t.security24,
    t.parkingSpace,
    t.swimmingPool,
  ];

  return (
    <div className="space-y-8 pb-safe-bottom">
      {/* Hero Section */}
      <div className="relative -mx-4 -mt-4 mb-8">
        <div className="bg-sas-gradient text-white p-8 rounded-b-3xl shadow-lg">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold text-white mb-2">
              {t.homeHeroTitle}
            </h1>
            <p className="text-lg text-gray-100">{t.homeHeroSubtitle}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <button
                onClick={handleBookNow}
                className="px-6 py-3 bg-white text-sas-red font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                <Calendar className="inline mr-2" size={20} />
                {t.bookNow}
              </button>
              <button
                onClick={() => {
                  haptics.selection();
                  document
                    .getElementById("gallery")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 bg-black/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-black/40 transition-all"
              >
                {t.viewGallery}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 sas-shadow text-center">
          <Users className="mx-auto mb-2 text-sas-red" size={28} />
          <p className="text-sm text-sas-gray">{t.capacity}</p>
          <p className="font-bold text-sas-dark">{t.guests24}</p>
        </div>
        <div className="bg-white rounded-xl p-4 sas-shadow text-center">
          <MapPin className="mx-auto mb-2 text-sas-red" size={28} />
          <p className="text-sm text-sas-gray">{t.location}</p>
          <p className="font-bold text-sas-dark">{t.tangerang}</p>
        </div>
      </div>

      {/* Scandinavian Experience Section */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-sas-red" size={24} />
          <h2 className="text-2xl font-bold text-sas-dark">
            {t.scandinavianExperience}
          </h2>
        </div>
        <p className="text-sas-dark/80 leading-relaxed mb-4">
          {t.scandinavianExperienceDesc}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-sas-light/50 rounded-lg px-3 py-2"
            >
              <div className="w-2 h-2 bg-sas-red rounded-full"></div>
              <span className="text-sm text-sas-dark">{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-sas-dark text-center mb-6">
          {t.whatWeOffer}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sas-shadow hover:sas-shadow-lg transition-all duration-300 fade-in animate-in"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-sas-light rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-sas-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sas-dark/70 text-sm leading-relaxed">
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
        <h2 className="text-2xl font-bold text-sas-dark text-center mb-6">
          {t.guestExperiences}
        </h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl p-6 sas-shadow-lg">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-yellow-400"
                  size={16}
                />
              ))}
            </div>
            <p className="text-sas-dark/80 leading-relaxed mb-4 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sas-dark">{testimonial.name}</p>
                <p className="text-sm text-sas-gray">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-sas-gradient rounded-xl p-8 text-center text-white shadow-xl">
        <h2 className="text-2xl font-bold mb-3">
          {t.experienceScandinavianLiving}
        </h2>
        <p className="text-gray-100 mb-6">
          {t.experienceScandinavianLivingDesc}
        </p>
        <button
          onClick={handleBookNow}
          className="px-8 py-3 bg-white text-sas-red font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
        >
          <Calendar className="inline mr-2" size={20} />
          {t.bookYourStayNow}
        </button>
      </div>

      {/* Footer Info */}
      <div className="text-center text-sm text-sas-gray space-y-2 pb-4">
        <p className="flex items-center justify-center gap-2">
          <MapPin size={16} />
          {t.footerAddress}
        </p>
        <p>{t.footerCopyright}</p>
      </div>
    </div>
  );
}

export default HomePage;
