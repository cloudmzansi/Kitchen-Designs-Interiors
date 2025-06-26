import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-200 border-b border-gray-300 shadow-sm">
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
              <div className="prose prose-lg text-gray-700">
                <p>
                  This Privacy Policy describes how KD Interiors ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website (the "Site") or use our services. This policy is governed by the laws of South Africa, including the Protection of Personal Information Act (POPIA).
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                <p>We may collect the following types of personal information:</p>
                <ul>
                  <li>
                    <strong>Personal Identification Information:</strong> Name, email address, phone number, and physical address.
                  </li>
                  <li>
                    <strong>Technical Information:</strong> IP address, browser type, operating system, and browsing behavior on our Site.
                  e</li>
                  <li>
                    <strong>Project Information:</strong> Details about your renovation or design project, including preferences and requirements.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul>
                  <li>To provide and maintain our services.</li>
                  <li>To communicate with you about your project or inquiries.</li>
                  <li>To improve our Site and services.</li>
                  <li>To comply with legal obligations.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or as necessary to provide our services (e.g., sharing with trusted contractors).
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
                <p>
                  Under POPIA, you have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:info@kdinteriors.co.za">info@kdinteriors.co.za</a>.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies</h2>
                <p>
                  Our Site may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the Site.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  Email: <a href="mailto:info@kdinteriors.co.za">info@kdinteriors.co.za</a>
                  <br />
                  Phone: <a href="tel:+27799352223">+27 79 935 2223</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 