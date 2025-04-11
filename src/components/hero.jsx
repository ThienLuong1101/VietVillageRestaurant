import React from "react";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 bg-black bg-opacity-50">
          {/* You can insert a logo or brand name on the left */}
          <div className="text-white text-xl font-bold">
            Vietnam Village
          </div>
          {/* Nav buttons */}
          <div className="flex space-x-4">
            <a
              href="#home"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Home
            </a>
            <a
              href="#menu"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/p/AF1QipOGiKEHBu6Up94ntYl4tOA6YKU0iCfaGujr6ArB=s1360-w1360-h1020')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
              Vietnam Village Restaurant
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center">
              Experience authentic Vietnam cuisine
            </p>
            <a 
              href="#menu" 
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition duration-300"
            >
              View Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
