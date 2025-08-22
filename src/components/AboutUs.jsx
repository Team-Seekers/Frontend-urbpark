import React from 'react';

const About = () => {
  const features = [
    {
      icon: "🚗",
      title: "Smart Parking Solutions",
      description: "AI-powered system to find and reserve parking spots in real-time"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Reduce emissions by minimizing time spent searching for parking"
    },
    {
      icon: "💰",
      title: "Cost Effective",
      description: "Competitive pricing with transparent, upfront costs"
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description: "Intuitive mobile-first design for seamless user experience"
    }
  ];

  const team = [
    {
      name: "PremNath S"},
    {
      name: "Vishal CB"},
    {
      name: "Dhivya Praban RK"},
    {
      name: "Praveen Kumaran MK" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About UrbPark</h1>
          <p className="text-xl text-gray-800 leading-relaxed">
            Revolutionizing urban mobility through smart parking solutions that make cities more livable, sustainable, and efficient.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              We believe that finding parking shouldn't be a source of stress or environmental harm. 
              UrbPark was founded with the vision of creating smarter, more sustainable cities by 
              eliminating the frustration of parking through innovative technology and user-centered design.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 h-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
              {team.map((member, index) => (
                <div key={index} className="text-center w-full max-w-xs">
                  <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;