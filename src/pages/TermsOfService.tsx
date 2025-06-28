import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { FileText, Shield, CreditCard, Copyright, Scale, AlertTriangle, Mail, Phone } from 'lucide-react';

const TermsOfService = () => {
  // Page-specific meta tags
  usePageMeta({
    title: "Terms of Service - KD Interiors | Service Terms & Conditions",
    description: "Read our terms of service to understand the terms and conditions governing the use of KD Interiors services and website.",
    keywords: "terms of service, terms and conditions, service agreement, KD Interiors",
    ogTitle: "Terms of Service - KD Interiors",
    ogDescription: "Our terms of service outline the terms and conditions for using KD Interiors services and website.",
    canonical: "https://kdinteriors.co.za/terms-of-service"
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-forest-700 to-forest-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <FileText size={32} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-forest-100 max-w-2xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services. By using our website and services, you agree to these terms.
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
                These Terms of Service ("Terms") govern your use of the KD Interiors website (the "Site") and services. By accessing or using our Site, you agree to be bound by these Terms. These Terms are governed by the laws of South Africa.
              </p>
                </div>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Shield size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">1. Use of Our Services</h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree to use our services for lawful purposes only and in accordance with these Terms. You are responsible for all activities conducted under your account and for ensuring that your use of our services complies with all applicable laws and regulations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-0">
                      We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion if we believe that your conduct violates these Terms or is harmful to other users, us, or third parties.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Copyright size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">2. Intellectual Property</h2>
                  </div>
                  <p className="text-gray-700 mb-4">All content on this Site, including but not limited to:</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Text & Graphics</h3>
                      <p className="text-gray-700 text-sm">All written content, descriptions, and graphic elements</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Images & Photos</h3>
                      <p className="text-gray-700 text-sm">Project photos, design images, and visual content</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Logos & Branding</h3>
                      <p className="text-gray-700 text-sm">Company logos, trademarks, and brand elements</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <h3 className="font-semibold text-gray-800 mb-2">Design & Layout</h3>
                      <p className="text-gray-700 text-sm">Website design, layout, and user interface</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    is the property of KD Interiors or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                  </p>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <CreditCard size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">3. Quotes and Payments</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Quote Validity</h3>
                      <p className="text-gray-700 text-sm">All quotes are valid for 30 days from the date of issue</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Payment Terms</h3>
                      <p className="text-gray-700 text-sm">A deposit is required to commence work, with the balance due upon completion</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Currency</h3>
                      <p className="text-gray-700 text-sm">All payments must be made in South African Rand (ZAR)</p>
                    </div>
                    <div className="p-4 bg-forest-50 rounded-lg border border-forest-100">
                      <h3 className="font-semibold text-forest-800 mb-2">Payment Methods</h3>
                      <p className="text-gray-700 text-sm">We accept bank transfers, cash, and other agreed-upon payment methods</p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <AlertTriangle size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">4. Limitation of Liability</h2>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      KD Interiors shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, including but not limited to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Loss of profits, data, or business opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Property damage or personal injury</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Delays in project completion</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Third-party contractor issues</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center mr-4">
                      <Scale size={20} className="text-forest-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">5. Governing Law</h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
              </p>
                    <p className="text-gray-700 leading-relaxed mb-0">
                      Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of South Africa.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">6. Changes to These Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms at any time to reflect changes in our business practices, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
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
                      If you have any questions about these Terms of Service or need clarification on any points, please contact us:
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

export default TermsOfService; 