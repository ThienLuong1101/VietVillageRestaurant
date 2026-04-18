import { useState, useEffect } from 'react';
import { Facebook, Menu, X, ChevronDown, Phone, MapPin, Clock, Users } from 'lucide-react';
import home1 from "./about/home1.jpg";
import AboutSection from "./components/about.jsx";
import FoodGallerySection from "./components/foodGallery.jsx";
import MenuSection from "./components/menu.jsx";
import ContactSection from "./components/contact.jsx";

const STORIES_URL = 'https://bookings.ordiagents.org/stories?clientId=7fa37de871a62de22f859c65d272a37fa53d90442b36f127a88aef3d88ba78a6&venueId=68a92867cfabf202c2563a2f';
const BOOKING_URL = 'https://bookings.ordiagents.org/?clientId=7fa37de871a62de22f859c65d272a37fa53d90442b36f127a88aef3d88ba78a6&venueId=68a92867cfabf202c2563a2f';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Dishes', href: '#food-gallery' },
    { label: 'Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' },
    { label: 'Community', href: STORIES_URL, external: true },
  ];

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#home" className={`text-lg md:text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            Vietnam Village Restaurant
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              className="ml-3 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
            >
              Reserve
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BOOKING_URL}
              className="mt-2 bg-red-600 text-white px-4 py-3 rounded-xl text-center font-semibold hover:bg-red-700 transition-colors"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url('${home1}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-white text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm tracking-widest uppercase border border-white/30 rounded-full bg-white/10 backdrop-blur-sm animate-fade-in">
            Authentic Vietnamese Cuisine
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
            Vietnam Village Restaurant
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Experience the rich flavors and warm hospitality of traditional Vietnam, right in Thebarton
          </p>
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#menu"
              className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-center text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Menu
            </a>
            <a
              href={BOOKING_URL}
              className="w-full sm:w-auto rounded-full bg-red-600 px-8 py-3.5 text-center font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
            >
              Make a Reservation
            </a>
            <a
              href={STORIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto rounded-full border-2 border-white px-8 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" />
              Community
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white/70 hover:text-white transition-colors animate-bounce">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* Info Bar */}
      <div className="bg-red-700 text-white py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-12 text-sm text-center">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 shrink-0" />
            <span>Tue–Sat: 11am–2pm, 5–10pm &nbsp;|&nbsp; Sun: 5–10pm</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>2 Smith St, Thebarton SA 5031</span>
          </div>
          <a href="tel:0883521719" className="flex items-center gap-2 hover:text-red-200 transition-colors">
            <Phone className="w-4 h-4 shrink-0" />
            <span>(08) 8352 1719</span>
          </a>
        </div>
      </div>

      <AboutSection />
      <FoodGallerySection />
      <MenuSection />
      <ContactSection />

      {/* Community CTA Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Users className="w-10 h-10 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Join Our Community</h3>
          <p className="text-white/90 max-w-xl mx-auto mb-6">
            Share your dining experience, see what others are posting, and be part of the Vietnam Village family.
          </p>
          <a
            href={STORIES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Users className="w-5 h-5" />
            Share Your Story
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Vietnam Village Restaurant</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A family-run Vietnamese restaurant serving authentic dishes made with love and tradition. Just 3 km from the CBD.
              </p>
              {/* <a
                href="https://www.facebook.com/VietnamVillageRestaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="font-medium">Follow us on Facebook</span>
              </a> */}

              {/* Powered by */}
              <div className="mt-8 flex flex-col gap-2">
                <p className="text-gray-400 text-base italic">Powered by</p>
                <a href="https://ordiagents.org" target="_blank" rel="noopener noreferrer">
                  <img src="/ordi-agents-logo-black.png" alt="Ordi Agents Logo" className="h-12 invert" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>2 Smith St, Thebarton SA 5031</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 shrink-0" />
                  <a href="tel:0883521719" className="hover:text-white transition-colors">(08) 8352 1719</a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>
                    Tue–Sat: 11am–2pm, 5–10pm<br />
                    Sun: 5–10pm<br />
                    Mon: Closed
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Vietnam Village Restaurant. Made by Viet An.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
