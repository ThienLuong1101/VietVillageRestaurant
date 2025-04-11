import React, { useState, useEffect } from 'react';
import food1 from "../foods/food1.jpg";
import food2 from "../foods/food2.jpg";
import food3 from "../foods/food3.jpg";
import food4 from "../foods/food4.jpg";
import food5 from "../foods/food5.jpg";
import food6 from "../foods/food6.jpg";
import food7 from "../foods/food7.jpg";
import food8 from "../foods/food8.jpg";
import food9 from "../foods/food9.jpg";
import food10 from "../foods/food10.jpg";
import food11 from "../foods/food11.jpg";
import food12 from "../foods/food12.jpg";
import { Book, ArrowRight } from 'lucide-react';

export function FoodGallerySection() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to show/hide sticky menu button
  useEffect(() => {
    const handleScroll = () => {
      // Show the sticky button after scrolling past 300px
      setIsScrolled(window.scrollY > 300 && window.scrollY < 5000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample featured dishes with images
  const featuredDishes = [
    { id: 1, name: "Sweet and Sour Pork", imageUrl: food1 },
    { id: 2, name: "Salt and Pepper Tofu", imageUrl: food2 },
    { id: 3, name: "Roast Pork Soup", imageUrl: food3 },
    { id: 4, name: "Combination Salad", imageUrl: food4 },
    { id: 5, name: "Combination HotPot", imageUrl: food5 },
    { id: 6, name: "Pork Plum Sauce", imageUrl: food6 },
    { id: 7, name: "Roast Duck", imageUrl: food7 },
    { id: 8, name: "Salt Pepper Eggplant", imageUrl: food8 },
    { id: 11, name: "Vietnamese Coffee", imageUrl: food11 },
  ];

  const categories = [
    'all',
    'SEAFOOD',
    'VEGETARIAN',
    'SPECIAL LUNCH MENU'
  ];

  const filteredDishes = featuredDishes;

  return (
    <div id="food-gallery" className="py-16 bg-gray-50 relative">
      {/* Sticky Menu Button */}
      <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <a 
          href="#menu"
          className="flex items-center bg-red-600 text-white px-4 py-3 rounded-l-lg shadow-lg hover:bg-red-700 transition-colors duration-300 group"
        >
          <span className="font-medium mr-2">View Our Menu</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
      
      {/* Alternative Floating Menu Button (Mobile Friendly)
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`}>
        <a 
          href="#menu"
          className="flex items-center justify-center bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          <Book className="w-6 h-6" />
        </a>
      </div> */}

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Dishes</h2>
          <p className="text-gray-600 mb-8">See what our customers love most</p>
        </div>

        {/* Food gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="relative rounded-xl overflow-hidden group"
            >
              <img 
                src={dish.imageUrl} 
                alt={dish.name}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-lg font-semibold">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodGallerySection;