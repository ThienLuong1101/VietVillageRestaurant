import React from 'react';
import { Clock, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import about1 from "../about/about1.jpg";
import about4 from "../about/about4.jpg";
import about5 from "../about/about5.jpg";
export function AboutSection() {
  const aboutInfo = {
    title: "About Us",
    fullStory: "A family run Vietnamese restaurant, just 3 km from the CBD! A short walk from the Thebarton tram stop and AEC!",
    reservation: "Reservations: (08) 8352 1719",
    hours: {
      weekdays: "Tue-Sat: 11 am–2 pm, 5–10 pm",
      sunday: "Sun: 5–10 pm",
      monday: "Mon: Closed"
    },
    location: "2 Smith St, Thebarton SA 5031",
    phone: "(08) 8352 1719",
    socials: {
      facebook: "https://www.facebook.com/VietnamVillageRestaurant"
    },
    images: [
      {
        url: about4,
        alt: "Restaurant interior",
      },
      {
        url: about1,
        alt: "Chef cooking",
      },
      {
        url: about5,
        alt: "Family owners",
      }
    ]
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{aboutInfo.title}</h2>
         
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img 
                src={aboutInfo.images[0].url} 
                alt={aboutInfo.images[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {aboutInfo.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg h-48">
                  <img 
                    src={image.url} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-red-600">
              <p className="text-lg leading-relaxed text-gray-700">
                {aboutInfo.fullStory}
                 
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-gray-800">Hours</h3>
                </div>
                <p className="text-gray-700">{aboutInfo.hours.weekdays}</p>
                <p className="text-gray-700">{aboutInfo.hours.sunday}</p>
                <p className="text-gray-700">{aboutInfo.hours.monday}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-700">{aboutInfo.location}</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h3 className="font-semibold text-gray-800">Reservations</h3>
                  
                </div>
                <p className="text-gray-700">{aboutInfo.phone}</p>
              </div>
            </div>

            {/* CTA and Social */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <a 
                href="#menu" 
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-300"
              >
                View Our Menu
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;