import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Shield, Lock, Eye, User, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  // Page-specific meta tags
  usePageMeta({
    title: "Privacy Policy | KD Interiors Cape Town",
    description: "Learn how KD Interiors Cape Town collects, uses, and protects personal information in accordance with POPIA and data protection regulations.",
    ogTitle: "Privacy Policy | KD Interiors Cape Town",
    ogDescription: "Learn how KD Interiors Cape Town collects, uses, and protects personal information in accordance with POPIA and data protection regulations.",
    canonical: "https://kdinteriors.co.za/privacy-policy"
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-forest-700 to-forest-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we protect and handle your personal information in compliance with POPIA regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8 p-6 bg-forest-50 rounded-xl border border-forest-100">
                  <p className="text-gray-700 leading-relaxed mb-0">
                    <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-0">
                  This Privacy Policy describes how KD Interiors ("we", "us", or "our") collects, uses, and discloses your personal information when you visit our website (the "Site") or use our services. This policy is governed by the laws of South Africa, including the Protection of Personal Information Act (POPIA).
                </p>
                </div>
                
                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <User size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">1. Information We Collect</h2>
                  </div>
                  <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
                  <div className="grid md:grid-cols-1 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Personal Identification Information</h3>
                      <p className="text-gray-700 text-sm">Name, email address, phone number, and physical address.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Technical Information</h3>
                      <p className="text-gray-700 text-sm">IP address, browser type, operating system, and browsing behavior on our Site.</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Project Information</h3>
                      <p className="text-gray-700 text-sm">Details about your renovation or design project, including preferences and requirements.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Eye size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h2>
                  </div>
                  <p className="text-gray-700 mb-4">We use the information we collect for various purposes, including:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>To provide and maintain our services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>To communicate with you about your project or inquiries</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>To improve our Site and services</span>
                  </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>To comply with legal obligations</span>
                  </li>
                </ul>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Lock size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">3. Information Sharing and Disclosure</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as required by law or as necessary to provide our services (e.g., sharing with trusted contractors for project completion).
                  </p>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">4. Data Security</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security measures to maintain the safety of your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">5. Your Rights Under POPIA</h2>
                  <p className="text-gray-700 mb-4">Under POPIA, you have the following rights:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Access</h3>
                      <p className="text-gray-700 text-sm">Request access to your personal information</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Correction</h3>
                      <p className="text-gray-700 text-sm">Request correction of inaccurate information</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Deletion</h3>
                      <p className="text-gray-700 text-sm">Request deletion of your personal information</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Objection</h3>
                      <p className="text-gray-700 text-sm">Object to processing of your information</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    To exercise these rights, please contact us at <a href="mailto:info@kdinteriors.co.za" className="text-forest-700 hover:text-forest-800 underline">info@kdinteriors.co.za</a>.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">6. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date.
                  </p>
                </section>

                <section className="mb-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">7. Contact Us</h2>
                  </div>
                  <div className="bg-gradient-to-r from-forest-50 to-forest-100 p-6 rounded-xl border border-forest-200">
                    <p className="text-gray-700 mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail size={16} className="text-forest-700 mr-3" />
                        <a href="mailto:info@kdinteriors.co.za" className="text-forest-700 hover:text-forest-800 underline">info@kdinteriors.co.za</a>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-forest-700 mr-3" />
                        <a href="tel:+27799352223" className="text-forest-700 hover:text-forest-800 underline">+27 79 935 2223</a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 