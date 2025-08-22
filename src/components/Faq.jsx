import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does UrbPark work?",
      answer: "UrbPark uses real-time data to show you available parking spots near your destination. Simply enter where you're going, browse available spots, reserve one that works for you, and navigate directly to your space."
    },
    {
      question: "How much does it cost to use UrbPark?",
      answer: "UrbPark is free to download and browse available parking. You only pay for the parking spots you reserve, with transparent pricing shown upfront. There are no hidden fees or subscription costs."
    },
    {
      question: "Can I cancel my parking reservation?",
      answer: "Yes, you can cancel your reservation up to 15 minutes before your reserved time without any penalty. Cancellations made less than 15 minutes before may incur a small cancellation fee."
    },
    {
      question: "What if I arrive and my reserved spot is occupied?",
      answer: "If your reserved spot is occupied, please contact our support team immediately through the app. We'll help you find an alternative spot and ensure you're not charged for the unavailable space."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use industry-standard encryption and work with trusted payment processors to ensure your financial information is always secure. We never store your full payment details on our servers."
    },
    {
      question: "Can I extend my parking time?",
      answer: "Yes, you can extend your parking time directly through the app, subject to availability. If the spot is available, you'll be charged the additional time at the same rate."
    },
    {
      question: "Do you offer monthly or weekly parking passes?",
      answer: "Yes, we offer discounted rates for weekly and monthly parking passes at participating locations. Check the app for available long-term parking options in your area."
    },
    {
      question: "What cities does UrbPark operate in?",
      answer: "UrbPark is currently available in major metropolitan areas and expanding rapidly. Check our app or website for the most up-to-date list of supported cities."
    },
    {
      question: "How do I report a problem with a parking spot?",
      answer: "You can report issues directly through the app using the 'Report Problem' feature on your booking details page. Our team will investigate and resolve the issue promptly."
    },
    {
      question: "Can I share my parking spot with others?",
      answer: "Currently, parking reservations are individual. However, we're working on features that will allow users to share or transfer reservations. Stay tuned for updates!"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about UrbPark
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="#/contact"
            className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors duration-200 hover:scale-105 transform"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;