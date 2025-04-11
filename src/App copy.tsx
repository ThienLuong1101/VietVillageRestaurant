import { useState, useEffect } from 'react';
import { Clock, MapPin, Phone, Menu, Instagram, Facebook, Twitter } from 'lucide-react';

import AboutSection from "./components/about.jsx";
import FoodGallerySection from "./components/foodGallery.jsx";
import MenuSection from "./components/menu.jsx";

function App() {
  const menuItems = [
    {
      category: "CHINESE SOUP",
      items: [
        { name: "Short Soup", description: "", price: "$7.5" },
        { name: "Chicken Sweet Corn Soup", description: "", price: "$7.5" },
        { name: "Chicken and Mushroom soup", description: "", price: "$7.5" },
        { name: "Crabmeat Sweetcorn soup", description: "", price: "$8.5" },
        { name: "Crabmeat Asparagus soup", description: "", price: "$8.5" }
      ]
    },
    {
      category: "LARGE SOUP TO SHARE (Vietnamese)",
      items: [
        { name: "Hot & Sour Chicken Soup", description: "", price: "$22.9 / $32.9" },
        { name: "Combination Soup", description: "(Chicken, Prawn, Squid & Pork)", price: "$22.9 / $32.9" },
        { name: "Hot & Sour King Prawn Soup", description: "", price: "$23.9 / $35.9" }
      ]
    },
    {
      category: "ENTRÉE",
      items: [
        { name: "Cold Rolls (2)", description: "", price: "$6.0" },
        { name: "Spring Rolls (2)", description: "", price: "$5.5" },
        { name: "Dim Sims (2) Steamed or Fried", description: "", price: "$5.5" },
        { name: "Satay Chicken (2)", description: "", price: "$7.6" },
        { name: "Satay Beef (2)", description: "", price: "$7.6" },
        { name: "Prawn Fritters (5)", description: "", price: "$12.0" },
        { name: "Deep Fried Scallops (8)", description: "", price: "$12.0" },
        { name: "Salt and Pepper Quail (1)", description: "", price: "$12.0" }
      ]
    },
    {
      category: "NOODLES",
      items: [
        { name: "Singapore Noodles", description: "", price: "$21.9" },
        { name: "Seafood Rice/Egg/Hokkien Noodles", description: "", price: "$27.9" },
        { name: "Combination Crispy Fried Noodles", description: "", price: "$21.9" },
        { name: "Combination Hokkien/Rice Noodles", description: "", price: "$21.9" },
        { name: "Chicken/Beef Black Bean Noodles", description: "", price: "$21.9" }
      ]
    },
    {
      category: "RICE",
      items: [
        { name: "Rice Hotpot", description: "", price: "S ($23.9) / M ($30.9) / L ($40.9)" },
        { name: "Fried Rice", description: "", price: "S ($10.9) / L ($13.9) / XL ($25.0)" },
        { name: "Curry Fried Rice", description: "", price: "S ($10.9) / L ($13.9)" },
        { name: "Steamed Rice", description: "", price: "S ($2.5) / L ($3.5)" }
      ]
    },
    {
      category: "VIETNAMESE SALADS",
      items: [
        { name: "Chicken Salad", description: "", price: "$20.9" },
        { name: "Beef Salad", description: "", price: "$20.9" },
        { name: "King Prawn Salad", description: "", price: "$26.9" },
        { name: "Combination Salad", description: "", price: "$21.9" }
      ]
    },
    {
      category: "DUCK",
      items: [
        { name: "Roast Duck Vietnamese Style", description: "", price: "$32.9" },
        { name: "Duck with Vegetables", description: "", price: "$25.9" },
        { name: "Combination Duck", description: "", price: "$29.9" },
        { name: "Duck in Black Bean Sauce (Battered)", description: "", price: "$25.9" },
        { name: "Lemon Duck (Battered)", description: "", price: "$25.9" },
        { name: "Sweet and Sour Duck (Battered)", description: "", price: "$25.9" }
      ]
    },
    {
      category: "STEAK",
      items: [
        { name: "Steak Chili Lemongrass", description: "", price: "$20.9" },
        { name: "Steak Coconut Milk and Lemongrass", description: "", price: "$20.9" },
        { name: "Steak with Basil Sauce", description: "", price: "$20.9" },
        { name: "Steak in Black Bean Sauce", description: "", price: "$20.9" },
        { name: "Steak and Vegetables", description: "", price: "$20.9" },
        { name: "Steak with Cashew Nuts", description: "", price: "$21.9" },
        { name: "Steak Plum Sauce (Battered)", description: "", price: "$20.9" },
        { name: "Satay Steak (Main)", description: "", price: "$20.9" },
        { name: "Sour Grilled Beef", description: "", price: "$20.9" },
        { name: "Shanghai Steak", description: "", price: "$20.9" },
        { name: "Sze Chuan Steak (Spicy)", description: "", price: "$20.9" },
        { name: "Sizzling Steak Vietnamese Style", description: "", price: "$21.9" },
        { name: "Mongolian Steak", description: "", price: "$21.9" },
        { name: "Sizzling Fillet Steak", description: "", price: "$30.9" }
      ]
    },
    {
      category: "CHICKEN",
      items: [
        { name: "Chicken with Chili Lemongrass", description: "", price: "$20.9" },
        { name: "Chicken, Coconut Milk &Lemongrass", description: "", price: "$20.9" },
        { name: "Chicken with Basil Sauce", description: "", price: "$20.9" },
        { name: "Chicken with Black Bean Sauce", description: "", price: "$20.9" },
        { name: "Satay Chicken (Main)", description: "", price: "$20.9" },
        { name: "Boneless Lemon Chicken (Battered)", description: "", price: "$20.9" },
        { name: "Boneless Honey Chicken (Battered)", description: "", price: "$20.9" },
        { name: "Chicken Ginger Chilli (Battered)", description: "", price: "$20.9" },
        { name: "Chicken Omelet", description: "", price: "$20.9" },
        { name: "Curry Chicken", description: "", price: "$20.9" },
        { name: "Sze Chuan Chicken (Spicy)", description: "", price: "$20.9" },
        { name: "Mongolian Chicken", description: "", price: "$21.9" },
        { name: "Chicken and Cashew Nuts", description: "", price: "$21.9" },
        { name: "Chicken and Vegetables", description: "", price: "$20.9" },
        { name: "Crispy Fried Chicken (with Bones)", description: "", price: "$19.9" },
        { name: "Crispy Lemon Chicken (with bones)", description: "", price: "$19.9" }
      ]
    },
    {
      category: "PORK",
      items: [
        { name: "Pork Chili Lemongrass", description: "", price: "$20.9" },
        { name: "Pork in Coconut Milk & Lemongrass", description: "", price: "$20.9" },
        { name: "Pork and Cashew Nuts", description: "", price: "$21.9" },
        { name: "Pork and Vegetables", description: "", price: "$20.9" },
        { name: "Roast Pork with Chili Vegetables", description: "", price: "$22.9" },
        { name: "Roast Pork with Fresh Salad", description: "", price: "$22.9" },
        { name: "Braised Ginger Pork in Fish Sauce", description: "", price: "$20.9" },
        { name: "Honey Garlic Pork (Battered)", description: "", price: "$20.9" },
        { name: "Pork Ginger Chili (Battered)", description: "", price: "$20.9" },
        { name: "Pork in Peking Sauce (Battered)", description: "", price: "$20.9" },
        { name: "Pork in Plum Sauce (Battered)", description: "", price: "$20.9" },
        { name: "Pork in Black Bean Sauce (Battered)", description: "", price: "$20.9" },
        { name: "Sweet and Sour Pork (Battered)", description: "", price: "$20.9" }
      ]
    },
    {
      category: "SEAFOOD",
      items: [
        { name: "Combination Seafood & Vegetables", description: "", price: "$26.9" },
        { name: "Combination Seafood in Basil Sauce", description: "", price: "$26.9" },
        { name: "Prawn, Coconut Milk & Lemongrass", description: "", price: "$26.9" },
        { name: "Prawn with Chili and Lemongrass", description: "", price: "$26.9" },
        { name: "Prawn with Vegetables", description: "", price: "$26.9" },
        { name: "Prawn with Black Bean sauce", description: "", price: "$26.9" },
        { name: "Prawn and Cashew Nuts", description: "", price: "$27.9" },
        { name: "Honey Prawn (Battered)", description: "", price: "$26.9" },
        { name: "Prawn and Basil Sauce", description: "", price: "$26.9" },
        { name: "Sweet and Sour Prawns", description: "", price: "$26.9" },
        { name: "Curry King Prawns", description: "", price: "$26.9" },
        { name: "Sizzling Garlic King Prawns", description: "", price: "$26.9" },
        { name: "Satay King Prawns (Main)", description: "", price: "$26.9" },
        { name: "King Prawn Omelet", description: "", price: "$26.9" },
        { name: "Salt and Pepper Prawn", description: "", price: "$26.9" },
        { name: "Sze Chuan Prawn (Spicy)", description: "", price: "$26.9" },
        { name: "Scallops with Ginger Sauce", description: "", price: "$27.9" },
        { name: "Scallops & Cashew Nuts", description: "", price: "$27.9" },
        { name: "Curry Scallops", description: "", price: "$27.9" },
        { name: "Scallops and Seasonal Vegetables", description: "", price: "$27.9" },
        { name: "Scallops with Black Bean Sauce", description: "", price: "$27.9" },
        { name: "Sweet and Sour Scallops", description: "", price: "$27.9" },
        { name: "Salt and Pepper Scallops", description: "", price: "$27.9" },
        { name: "Sze Chuan Scallops (Spicy)", description: "", price: "$27.9" },
        { name: "Squid Chili Lemongrass", description: "", price: "$23.9" },
        { name: "Salt and Pepper Squid", description: "", price: "$23.9" }
      ]
    },
    {
      category: "VEGETARIAN",
      items: [
        { name: "Vegt Rice Hotpot S", description: "", price: "$21.9" },
        { name: "Vegt Rice Hotpot M", description: "", price: "$29.9" },
        { name: "Vegt Rice Hotpot L", description: "", price: "$37.9" },
        { name: "Vegetarian Fried Rice S", description: "", price: "$10.5" },
        { name: "Vegetarian Fried Rice L", description: "", price: "$13.5" },
        { name: "Vegetarian Hokkien Noodles", description: "", price: "$19.9" },
        { name: "Vegetarian Rice Noodles", description: "", price: "$19.9" },
        { name: "Vegetarian Singapore Noodles", description: "", price: "$19.9" },
        { name: "Stir-Fried Mixed Vegetables", description: "", price: "$17.9" },
        { name: "Steamed Vegetables", description: "", price: "$17.9" },
        { name: "Sweet and Sour Tofu", description: "", price: "$18.9" },
        { name: "Curry Vegetables", description: "", price: "$18.9" },
        { name: "Bok Choy with Oyster Sauce", description: "", price: "$17.9" },
        { name: "Chinese Broccoli in Oyster Sauce", description: "", price: "$17.9" },
        { name: "Vegetarian Vietnamese Salad", description: "", price: "$17.9" },
        { name: "Tofu & Vegetables", description: "", price: "$18.9" },
        { name: "Tofu with Chili and Lemongrass", description: "", price: "$18.9" },
        { name: "Tofu with Coconut Milk & Lemongrass", description: "", price: "$18.9" },
        { name: "Tofu with Black Bean Sauce", description: "", price: "$18.9" },
        { name: "Salt and Pepper Tofu", description: "", price: "$18.9" },
        { name: "Salt and Pepper Eggplant", description: "", price: "$18.9" }
      ]
    },
    {
      category: "SPECIAL LUNCH MENU",
      items: [
        { name: "Roast Pork", description: "Rice Dishes with your choice of", price: "$17.0" },
        { name: "Crispy Fried Chicken (With Bones)", description: "Rice Dishes with your choice of", price: "$15.5" },
        { name: "Chicken/Steak Black Bean Sauce", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Chicken/Steak with Vegetables", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Chicken/Steak Chili Lemongrass", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Chicken/Steak in Coconut Milk and Lemongrass", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Sze Chuan Chicken/Steak", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Prawn & Vegetables", description: "Rice Dishes with your choice of", price: "$19.5" },
        { name: "Prawn & Cashew Nuts", description: "Rice Dishes with your choice of", price: "$19.5" },
        { name: "Sze Chuan King Prawn", description: "Rice Dishes with your choice of", price: "$19.5" },
        { name: "Chicken Ginger Chili (Battered)", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Salt & Peppered Squid", description: "Rice Dishes with your choice of", price: "$17.0" },
        { name: "Honey/Lemon Chicken (Boneless)", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Tofu & Vegetables", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Tofu, Coconut Milk and Lemongrass", description: "Rice Dishes with your choice of", price: "$16.0" },
        { name: "Chicken OR Steak OR Roast Pork", description: "Vermicelli Noodle and Salad Bowls with your choice of", price: "$17.0" },
        { name: "Tofu OR Veg Spring Rolls", description: "Vermicelli Noodle and Salad Bowls with your choice of", price: "$17.0" },
        { name: "Spring Rolls & Roast Pork Combo", description: "Vermicelli Noodle and Salad Bowls with your choice of", price: "$18.5" }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('all');
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Handle scroll event to show/hide sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      // Get the menu section element
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        const menuPosition = menuSection.getBoundingClientRect().top;
        const menuHeight = menuSection.getBoundingClientRect().height;
        
        // Show sticky nav when user scrolls past the category buttons in the menu section
        // and hide it when scrolling back up above the menu
        if (menuPosition < 0 && Math.abs(menuPosition) < menuHeight) {
          setShowStickyNav(true);
        } else {
          setShowStickyNav(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Modified function to always scroll to top of menu section
  const scrollToMenuAndSetCategory = (categoryId) => {
    setActiveCategory(categoryId);
    
    // Always scroll to the top of the menu section
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      const yOffset = -20; // Small offset to account for padding
      const y = menuElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation Bar - Logo removed */}
      {showStickyNav && (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-3 px-4 transition-all duration-300 transform translate-y-0">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 overflow-x-auto">
                <button 
                  onClick={() => scrollToMenuAndSetCategory('all')}
                  className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-300`}
                >
                  All
                </button>
                {menuItems.map((category, index) => (
                  <button 
                    key={index}
                    onClick={() => scrollToMenuAndSetCategory(category.category)}
                    className={`px-4 py-2 rounded-full ${activeCategory === category.category ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-300 whitespace-nowrap`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/p/AF1QipOGiKEHBu6Up94ntYl4tOA6YKU0iCfaGujr6ArB=s1360-w1360-h1020')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Vietnam Village Restaurant</h1>
            <p className="text-xl md:text-2xl mb-8 text-center">Experience authentic Vietnam cuisine</p>
            <a href="#menu" className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300">
              View Menu
            </a>
          </div>
        </div>
      </div>

      <AboutSection />
      <FoodGallerySection />
      
      {/* Menu Section */}
      <div id="menu" className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Menu</h2>
            <p className="text-gray-600 mb-8">Crafted with love and tradition</p>
            
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-300`}
              >
                All
              </button>
              {menuItems.map((category, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 rounded-full ${activeCategory === category.category ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'} transition duration-300 whitespace-nowrap`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {activeCategory === 'all' ? (
              menuItems.map((category, index) => (
                <div key={index} className="mb-12" id={category.category}>
                  <h3 className="text-2xl font-semibold mb-6 text-center bg-red-50 py-3 rounded-lg text-red-600">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-200 pb-4 hover:bg-gray-50 p-3 rounded-lg transition duration-300">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                          <h4 className="text-lg font-medium">{item.name}</h4>
                          <span className="text-lg text-red-600 font-medium">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              menuItems.filter(category => category.category === activeCategory).map((category, index) => (
                <div key={index} className="mb-12" id={category.category}>
                  <h3 className="text-2xl font-semibold mb-6 text-center bg-red-50 py-3 rounded-lg text-red-600">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-200 pb-4 hover:bg-gray-50 p-3 rounded-lg transition duration-300">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                          <h4 className="text-lg font-medium">{item.name}</h4>
                          <span className="text-lg text-red-600 font-medium">{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
          <Menu/>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Vietnam Village Restaurant</h3>
              <p className="mt-2 text-gray-400">Authentic Vietnam Experience</p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.facebook.com/VietnamVillageRestaurant/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-600"
              >
                <Facebook className="w-6 h-6 cursor-pointer" />
              </a>
            </div>

          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; Made by Viet An</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;