import React from 'react';
import { X } from 'lucide-react';
import menu1 from "../menus/image1.jpg";
import menu2 from "../menus/image2.jpg";
import menu3 from "../menus/image2mb.jpg";
import menu4 from "../menus/image4mb.jpg";
import menu5 from "../menus/image3mb.jpg";
import menu6 from "../menus/image1mb.jpg";

export function MenuSection() {
  // Define the menu images for both mobile and desktop
  const menuImages = [
    { id: 1, url: menu1, alt: "Menu Page 1" },
    { id: 2, url: menu2, alt: "Menu Page 2" },
    { id: 3, url: menu3, alt: "Menu Page 3" },
    { id: 4, url: menu5, alt: "Menu Page 4" },
    { id: 5, url: menu4, alt: "Menu Page 5" },
    { id: 6, url: menu6, alt: "Menu Page 6" },
  ];

  return (
    <section id="menu" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Menu</h2>

        {/* Desktop view: Show 1 image */}
        <div className="hidden md:block">
          {menuImages.slice(0, 2).map((image) => (
            <div
              key={image.id}
              className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-red-600 mb-8"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', // prevent any repeating of the image
                height: '70vh',
                width: '100%',
                borderRadius: '16px',
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
                style={{ visibility: 'hidden' }} // Hidden so only the background is visible
              />
            </div>
          ))}
        </div>

        {/* Mobile view: Show images in a full-height single column */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {menuImages.slice(2, 6).map((image) => (
            <div
              key={image.id}
              className="bg-white p-4 rounded-2xl shadow-md border-l-4 border-red-600"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', // prevent repetition
                height: '100vh',
                width: '100%',
                borderRadius: '16px',
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
                style={{ visibility: 'hidden' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
