import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import menu1 from "../menus/image1.jpg";
import menu2 from "../menus/image2.jpg";
import menu3 from "../menus/image2mb.jpg";
import menu4 from "../menus/image4mb.jpg";
import menu5 from "../menus/image3mb.jpg";
import menu6 from "../menus/image1mb.jpg";

const menuImages = [
  { id: 1, url: menu1, alt: "Menu Page 1", label: "Main Menu" },
  { id: 2, url: menu2, alt: "Menu Page 2", label: "Drinks & Specials" },
  { id: 3, url: menu3, alt: "Menu Page 1", label: "Lunch Menu" },
  { id: 4, url: menu5, alt: "Menu Page 2", label: "Seafood Selection" },
  { id: 5, url: menu4, alt: "Menu Page 3", label: "Chef's Recommendations" },
  { id: 6, url: menu6, alt: "Menu Page 4", label: "Desserts" },
];

export function MenuSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
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

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? menuImages.length - 1 : prev - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === menuImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev === 0 ? menuImages.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev === menuImages.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section id="menu" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 rounded-full mb-4">
            Browse Our Selection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            From traditional pho to sizzling stir-fries, explore our full range of authentic Vietnamese dishes
          </p>
        </div>

        {/* Desktop: larger cards */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6">
          {menuImages.slice(0, 2).map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="h-[500px] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6 text-gray-900" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{image.label}</span>
                <h3 className="text-white text-lg font-bold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked full-width */}
        <div className="md:hidden grid grid-cols-1 gap-4">
          {menuImages.slice(2).map((image, index) => (
            <div
              key={image.id}
              className={`group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
              onClick={() => openLightbox(index + 2)}
            >
              <div className="h-[70vh] min-h-[400px] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white/70 text-xs uppercase tracking-wider font-medium">{image.label}</span>
                <h3 className="text-white text-base font-bold">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-gray-500 mb-4 text-sm">Tap any menu to enlarge</p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={goPrev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2 z-10"
            onClick={goNext}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-3xl w-full animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <img
              src={menuImages[lightboxIndex].url}
              alt={menuImages[lightboxIndex].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <span className="text-white/60 text-sm uppercase tracking-wider">{menuImages[lightboxIndex].label}</span>
              <p className="text-white text-lg font-semibold">{menuImages[lightboxIndex].alt}</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {menuImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === lightboxIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default MenuSection;
