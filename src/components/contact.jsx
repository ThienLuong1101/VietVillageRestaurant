import React, { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';

export function ContactSection() {
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

  const contactCards = [
    {
      icon: Phone,
      title: 'Reservations',
      content: '(08) 8352 1719',
      href: 'tel:0883521719',
      label: 'Call now',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '2 Smith St, Thebarton SA 5031',
      href: 'https://maps.google.com/?q=2+Smith+St+Thebarton+SA+5031',
      label: 'Get directions',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Tue–Sat: 11am–2pm, 5–10pm',
      extra: 'Sun: 5–10pm | Mon: Closed',
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-red-600 bg-red-50 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            We'd love to welcome you to our family table. Book a table or drop by for an authentic Vietnamese experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <div
              key={card.title}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${card.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-700 mb-1 font-medium">{card.content}</p>
              {card.extra && <p className="text-gray-500 text-sm mb-4">{card.extra}</p>}
              {card.href && (
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:text-red-700 transition-colors mt-3"
                >
                  {card.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Map Embed */}
        <div className={`rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <iframe
            title="Vietnam Village Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.558686339849!2d138.5709859757589!3d-34.91428977284144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c6a73828190f%3A0x2e3e5f5e5e5e5e5e!2s2%20Smith%20St%2C%20Thebarton%20SA%205031!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://bookings.ordiagents.org/?clientId=7fa37de871a62de22f859c65d272a37fa53d90442b36f127a88aef3d88ba78a6&venueId=68a92867cfabf202c2563a2f"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
          >
            <Navigation className="w-5 h-5" />
            Reserve Your Table
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
