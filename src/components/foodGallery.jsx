import React, { useState, useEffect, useRef } from 'react';
import food1 from "../foods/food1.jpg";
import food2 from "../foods/food2.jpg";
import food3 from "../foods/food3.jpg";
import food4 from "../foods/food4.jpg";
import food5 from "../foods/food5.jpg";
import food6 from "../foods/food6.jpg";
import food7 from "../foods/food7.jpg";
import food8 from "../foods/food8.jpg";
import food11 from "../foods/food11.jpg";
import food13 from "../foods/food13.jpg";
import food14 from "../foods/food14.jpg";
import food15 from "../foods/food15.jpg";
import { ArrowRight, X, ZoomIn } from 'lucide-react';

const dishes = [
  { id: 1, name: "Sweet and Sour Pork", imageUrl: food1 },
  { id: 2, name: "Salt and Pepper Tofu", imageUrl: food2 },
  { id: 3, name: "Roast Duck Soup", imageUrl: food3 },
  { id: 4, name: "Beef Salad", imageUrl: food4 },
  { id: 5, name: "Combination HotPot", imageUrl: food5 },
  { id: 6, name: "Pork Plum Sauce", imageUrl: food6 },
  { id: 7, name: "Roast Duck", imageUrl: food7 },
  { id: 8, name: "Salt Pepper Eggplant", imageUrl: food8 },
  { id: 11, name: "Vietnamese Coffee", imageUrl: food11 },
  { id: 13, name: "Chicken Ginger Chili", imageUrl: food13 },
  { id: 14, name: "Stir-Fried Mixed Vegetable", imageUrl: food14 },
  { id: 15, name: "Crispy Fried Fish Barramundi", imageUrl: food15 },
];

export function FoodGallerySection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300 && window.scrollY < 6000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // Fallback: ensure visibility after 2s no matter what
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="food-gallery" ref={sectionRef} className="py-20 bg-gray-50 relative">
      {/* Sticky Menu Button */}
      <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ${isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
        <a
          href="#menu"
          className="flex items-center bg-red-600 text-white px-5 py-4 rounded-l-xl shadow-xl hover:bg-red-700 transition-colors duration-300 group"
        >
          <span className="font-semibold mr-2 text-sm">View Menu</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 rounded-full mb-4">
            Our Kitchen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Dishes</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Handcrafted recipes passed down through generations, made with fresh local ingredients
          </p>
        </div>

        {/* Food gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`group relative rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${150 + (index % 6) * 80}ms` }}
              onClick={() => setLightbox(dish)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.imageUrl}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-xl font-bold mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {dish.name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to view</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setLightbox(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.imageUrl}
              alt={lightbox.name}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white text-xl font-semibold mt-4">{lightbox.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodGallerySection;
