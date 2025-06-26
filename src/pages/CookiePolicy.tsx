import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Cookie Policy</h1>
          <div className="prose prose-lg text-gray-700">
            <p>
              This Cookie Policy explains how KD Interiors ("we", "us", or "our") uses cookies and similar technologies on our website (the "Site"). This policy is compliant with South African regulations, including the Protection of Personal Information Act (POPIA).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the Site to function and cannot be switched off.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Site.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the Site to provide enhanced functionality and personalization.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Your Choices</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls. Please note that if you choose to reject cookies, you may still use our Site, though your access to some functionality and areas may be restricted.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
              <br />
              Email: <a href="mailto:info@kdinteriors.co.za">info@kdinteriors.co.za</a>
              <br />
              Phone: <a href="tel:+27799352223">+27 79 935 2223</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 