
import { Clock, MapPin, Phone, Menu, Instagram, Facebook, Twitter } from 'lucide-react';
import home1 from "./about/home1.jpg";
import AboutSection from "./components/about.jsx";
import FoodGallerySection from "./components/foodGallery.jsx";
import MenuSection from "./components/menu.jsx";
import ContactSection from "./components/contact.jsx";

function App() {
  
  
 

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${home1}')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">Vietnam Village Restaurant</h1>
            <p className="text-xl md:text-2xl mb-8 text-center">Experience authentic Vietnam cuisine</p>
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a href="#menu" className="w-full rounded-full bg-white px-8 py-3 text-center text-black transition duration-300 hover:bg-opacity-90 sm:w-auto">
                View Menu
              </a>
              <a href="https://bookings.ordiagents.org/?clientId=7fa37de871a62de22f859c65d272a37fa53d90442b36f127a88aef3d88ba78a6&venueId=68a92867cfabf202c2563a2f" className="w-full rounded-full bg-red-500 px-8 py-3 text-center font-bold text-white transition duration-300 hover:bg-white hover:text-black sm:w-auto">
                Make a Reservation
              </a>
            </div>
            
          </div>
        </div>
      </div>
          <ContactSection />
      <AboutSection />
    
      <FoodGallerySection />
      <MenuSection/>
      
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