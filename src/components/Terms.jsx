import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            UrbPark - Smart Parking Solution
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using UrbPark's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                UrbPark provides an intelligent parking management platform that allows users to locate, 
                reserve, and pay for parking spaces through our web application. Our service integrates 
                multiple technologies including OCR, mapping services, and AI-powered recommendations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Registration and Account</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>3.1 Account Creation:</strong> To use our services, you must create an account by providing:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Full name</li>
                  <li>Valid vehicle registration number</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Other required identification details</li>
                </ul>
                <p><strong>3.2 Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>
                <p><strong>3.3 Accurate Information:</strong> You agree to provide accurate, current, and complete information and to update such information as necessary.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Collection and Privacy</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>We collect and process the following types of data:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, contact details, vehicle information</li>
                  <li><strong>Location Data:</strong> IP geolocation for service optimization</li>
                  <li><strong>Usage Data:</strong> Service usage patterns and preferences</li>
                  <li><strong>Payment Information:</strong> Processed securely through Razorpay</li>
                  <li><strong>OCR Data:</strong> Vehicle number plate recognition for verification</li>
                </ul>
                <p>All personal data is stored securely in our database and processed in accordance with applicable privacy laws.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>5.1 Payment Processing:</strong> All payments are processed through Razorpay, a secure payment gateway.</p>
                <p><strong>5.2 Pricing:</strong> Parking fees are displayed before booking and may vary based on location, duration, and demand.</p>
                <p><strong>5.3 Refunds:</strong> Refund policies are subject to specific conditions and will be processed according to our refund policy.</p>
                <p><strong>5.4 Failed Payments:</strong> In case of payment failure, your booking may be cancelled.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>Our service integrates with the following third-party providers:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Razorpay:</strong> For secure payment processing</li>
                  <li><strong>Google Maps API:</strong> For location services and navigation</li>
                  <li><strong>Google Gemini API:</strong> For AI-powered features and recommendations</li>
                  <li><strong>IP Geolocation API:</strong> For location-based services</li>
                  <li><strong>OCR Services:</strong> For vehicle number plate recognition</li>
                </ul>
                <p>Use of these services is subject to their respective terms of service and privacy policies.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. User Responsibilities</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>You agree to:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Provide accurate vehicle registration information</li>
                  <li>Park only in designated and booked spaces</li>
                  <li>Comply with parking duration limits</li>
                  <li>Report any issues or damages immediately</li>
                  <li>Not misuse or abuse the service</li>
                  <li>Follow all applicable traffic and parking laws</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide uninterrupted service, we do not guarantee 100% uptime. 
                Services may be temporarily unavailable due to maintenance, technical issues, or circumstances 
                beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                UrbPark shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of the service. Our total liability shall not exceed the amount paid 
                by you for the service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account at any time for violation of these terms. 
                You may terminate your account by contacting our support team.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modifications</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of 
                significant changes, and continued use of the service constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Team:</strong> PremNath S, Vishal CB, Dhivya Praban RK, PraveenKumaran MK<br />
                  <strong>Email:</strong> urbparkticketing@gmail.com<br />
                  <strong>Phone:</strong> +91 9655811578
                </p>
              </div>
            </section>

          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 font-semibold">
              By using UrbPark, you acknowledge that you have read, understood, and agree to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;