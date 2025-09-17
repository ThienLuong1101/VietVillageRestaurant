import React from 'react';
import virtualAssistantImage from "../about/Ordi_logo2.png";

export function ContactSection() {
  const contactInfo = {
    aiAgent: {
      phone: "+61871009132",
      description: "24/7 virtual assistant for reservations outside working hours"
    }
  };

  const handleAICall = () => {
    window.open(`tel:${contactInfo.aiAgent.phone}`, '_self');
  };

  return (
    <section id="contact" className="pt-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          
          {/* AI Assistant */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg border border-purple-100">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-full overflow-hidden animate-bounce">
                {virtualAssistantImage ? (
                  <img 
                    src={virtualAssistantImage} 
                    alt="Virtual Assistant"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs font-bold">VA</span>
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-gray-800">Call Ordi for Reservation</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4">{contactInfo.aiAgent.description}</p>
            <button
              onClick={handleAICall}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold shadow-md"
            >
              Call Anytime: {contactInfo.aiAgent.phone}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;