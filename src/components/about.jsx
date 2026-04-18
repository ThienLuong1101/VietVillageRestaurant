import React, { useState, useEffect, useRef } from 'react';
import { Clock, MapPin, Phone, Facebook, ChefHat, Users, Award } from 'lucide-react';
import about1 from "../about/about1.jpg";
import about4 from "../about/about4.jpg";
import about5 from "../about/about5.jpg";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const aboutInfo = {
    title: "About Us",
    fullStory: "A family run Vietnamese restaurant, just 3 km from the CBD! A short walk from the Thebarton tram stop and AEC!",
    reservation: "Reservations: (08) 8352 1719",
    hours: {
      weekdays: "Tue–Sat: 11am–2pm, 5–10pm",
      sunday: "Sun: 5–10pm",
      monday: "Mon: Closed"
    },
    location: "2 Smith St, Thebarton SA 5031",
    phone: "(08) 8352 1719",
    socials: {
      facebook: "https://www.facebook.com/VietnamVillageRestaurant"
    },
    images: [
      { url: about4, alt: "Restaurant interior" },
      { url: about1, alt: "Chef cooking" },
      { url: about5, alt: "Family owners" },
    ]
  };

  const highlights = [
    { icon: ChefHat, label: "Authentic Recipes", desc: "Traditional family recipes" },
    { icon: Users, label: "Family Run", desc: "Welcoming atmosphere" },
    { icon: Award, label: "Local Favorite", desc: "Loved by the community" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 rounded-full mb-4">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{aboutInfo.title}</h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className={`rounded-2xl overflow-hidden shadow-xl h-80 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <img
                src={aboutInfo.images[0].url}
                alt={aboutInfo.images[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutInfo.images.slice(1).map((image, index) => (
                <div key={index} className={`rounded-2xl overflow-hidden shadow-lg h-48 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${(index + 1) * 120}ms` }}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600" />
              <p className="text-lg leading-relaxed text-gray-700">
                {aboutInfo.fullStory}
              </p>
            </div>

            {/* Highlights */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {highlights.map((h) => (
                <div key={h.label} className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-2">
                    <h.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-sm font-bold text-gray-900">{h.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{aboutInfo.hours.weekdays}</p>
                  <p className="text-gray-700 text-sm">{aboutInfo.hours.sunday}</p>
                  <p className="text-red-600 text-sm font-medium">{aboutInfo.hours.monday}</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{aboutInfo.location}</p>
                  <a
                    href="https://maps.google.com/?q=2+Smith+St+Thebarton+SA+5031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium mt-2 hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">Reservations</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{aboutInfo.phone}</p>
                  <a
                    href={`tel:${aboutInfo.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-1 text-green-600 text-sm font-medium mt-2 hover:underline"
                  >
                    Call now
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <a
                href="https://bookings.ordiagents.org/stories?clientId=7fa37de871a62de22f859c65d272a37fa53d90442b36f127a88aef3d88ba78a6&venueId=68a92867cfabf202c2563a2f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-red-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-red-700 transition-all duration-300 text-center hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Community</span>
              </a>
              <a
                href={aboutInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
