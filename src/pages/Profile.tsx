import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
  Send,
  User,
  Users,
  Clock,
  DollarSign,
  Home,
  CheckCircle,
} from "lucide-react";
import { haptics } from "../utils/haptics";
import SocialIcon from "../lib/icons";
import { useLang } from "../context/LanguageContext";

function ProfilePage() {
  const { t } = useLang();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await haptics.success();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-sas-red" size={20} />,
      label: t.email,
      value: "stay@scandinavia.id",
      link: "mailto:stay@scandinavia.id",
    },
    {
      icon: <Phone className="text-sas-red" size={20} />,
      label: t.phone,
      value: "+62 812 3456 7890",
      link: "tel:+6281234567890",
    },
    {
      icon: <MapPin className="text-sas-red" size={20} />,
      label: t.address,
      value: t.footerAddress,
      link: "https://maps.google.com/?q=Tangerang+City+Mall",
    },
  ];

  const bookingInfo = [
    {
      icon: <Clock className="text-sas-red" size={20} />,
      title: t.checkInOut,
      value: t.checkInOutValue,
    },
    {
      icon: <Users className="text-sas-red" size={20} />,
      title: t.maximumGuests,
      value: t.maximumGuestsValue,
    },
    {
      icon: <DollarSign className="text-sas-red" size={20} />,
      title: t.minimumStay,
      value: t.minimumStayValue,
    },
    {
      icon: <Home className="text-sas-red" size={20} />,
      title: t.propertyType,
      value: t.propertyTypeValue,
    },
  ];

  const policies = [
    t.noSmoking,
    t.noPets,
    t.partiesApproval,
    t.quietHours,
    t.respectNeighbors,
    t.reportDamage,
  ];

  return (
    <div className="space-y-6 pb-safe-bottom">
      {/* Header */}
      <div className="bg-sas-gradient text-white p-6 -mx-4 -mt-4 rounded-b-3xl shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <MessageSquare className="mx-auto mb-3" size={40} />
          <h1 className="text-3xl font-bold mb-2 text-white">
            {t.contactAndBooking}
          </h1>
          <p className="text-gray-100">{t.getInTouchDesc}</p>
        </div>
      </div>

      {/* Quick Contact Info */}
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.link}
            onClick={() => haptics.buttonPress()}
            className="bg-white rounded-xl p-4 sas-shadow hover:sas-shadow-lg transition-all duration-300 flex items-center gap-4 active:scale-98"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-sas-light rounded-full flex items-center justify-center">
              {info.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-sas-gray">{info.label}</p>
              <p className="font-semibold text-sas-dark">{info.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Booking Information */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <h2 className="text-2xl font-bold text-sas-dark mb-4 flex items-center gap-2">
          <Calendar className="text-sas-red" size={24} />
          {t.bookingInformation}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {bookingInfo.map((info, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2">
                {info.icon}
                <p className="text-sm text-sas-gray">{info.title}</p>
              </div>
              <p className="font-semibold text-sas-dark ml-7">{info.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <h2 className="text-2xl font-bold text-sas-dark mb-4 flex items-center gap-2">
          <Send className="text-sas-red" size={24} />
          {t.sendInquiry}
        </h2>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="mx-auto text-green-500" size={64} />
            <h3 className="text-xl font-bold text-sas-dark">{t.thankYou}</h3>
            <p className="text-sas-gray">{t.inquiryReceived}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-sas-dark mb-2">
                <User className="inline mr-2" size={16} />
                {t.fullName} *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark placeholder-sas-gray"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sas-dark mb-2">
                <Mail className="inline mr-2" size={16} />
                {t.email} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark placeholder-sas-gray"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sas-dark mb-2">
                <Phone className="inline mr-2" size={16} />
                {t.phoneNumber}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark placeholder-sas-gray"
                placeholder="+62 812 3456 7890"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sas-dark mb-2">
                  {t.checkIn}
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sas-dark mb-2">
                  {t.checkOut}
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sas-dark mb-2">
                <Users className="inline mr-2" size={16} />
                {t.numberOfGuests}
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark"
              >
                <option value="1">{t.guest1}</option>
                <option value="2">{t.guests2}</option>
                <option value="3">{t.guests3}</option>
                <option value="4">{t.guests4}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-sas-dark mb-2">
                <MessageSquare className="inline mr-2" size={16} />
                {t.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-sas-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-sas-red text-sas-dark placeholder-sas-gray resize-none"
                placeholder={t.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              onClick={() => haptics.buttonPress()}
              className="w-full px-6 py-4 bg-sas-gradient text-white font-bold rounded-lg hover:opacity-90 transition-all transform active:scale-98 shadow-lg"
            >
              <Send className="inline mr-2" size={20} />
              {t.sendInquiryButton}
            </button>
          </form>
        )}
      </div>

      {/* House Rules */}
      <div className="bg-white rounded-xl p-6 sas-shadow-lg">
        <h2 className="text-2xl font-bold text-sas-dark mb-4">
          {t.houseRules}
        </h2>
        <div className="space-y-2">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 bg-sas-red/20 rounded-full flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 bg-sas-red rounded-full"></div>
              </div>
              <p className="text-sas-dark/80 text-sm">{policy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-gradient-to-br from-gray-100/20 to-sas-light rounded-xl p-6 border border-sas-gray/20">
        <h2 className="text-2xl font-bold text-sas-dark mb-4 text-center">
          {t.followUs}
        </h2>
        <p className="text-center text-sas-gray mb-6">{t.stayUpdated}</p>
        <div className="flex justify-center gap-4">
          <SocialIcon
            href="https://www.youtube.com/@StayAtScandinavia"
            kind="youtube"
          />
        </div>
      </div>

      {/* Book Direct CTA */}
      <div className="bg-sas-gradient rounded-xl p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-bold mb-3 text-white">
          {t.bookDirectSave}
        </h3>
        <p className="text-gray-100 mb-6">{t.bookDirectSaveDesc}</p>
        <button
          onClick={async () => {
            await haptics.buttonPress();
            window.open("https://stayatscandinavia.5mb.app/", "_blank");
          }}
          className="px-8 py-3 bg-white text-sas-red font-bold rounded-full hover:bg-sas-light transition-all transform hover:scale-105 shadow-lg"
        >
          <Calendar className="inline mr-2" size={20} />
          {t.bookNow}
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-sas-gray space-y-2 pb-4">
        <p>{t.footerCopyright}</p>
        <p className="text-xs">stayatscandinavia.5mb.app</p>
      </div>
    </div>
  );
}

export default ProfilePage;
