import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const sections = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, etc.) when you subscribe to our newsletter or contact us",
        "Usage data including pages visited, time spent, and interaction patterns",
        "Technical information such as IP address, browser type, and device information",
        "Cookies and similar tracking technologies to enhance your experience"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our services",
        "To send you newsletters and updates you've subscribed to",
        "To respond to your inquiries and provide customer support",
        "To analyze site usage and improve our content",
        "To ensure security and prevent fraud"
      ]
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Protection",
      content: [
        "We implement industry-standard security measures",
        "Data is encrypted during transmission and at rest",
        "Access to personal information is limited to authorized personnel",
        "Regular security audits and updates",
        "Compliance with GDPR and other privacy regulations"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access to your personal information",
        "Correction of inaccurate data",
        "Deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability upon request"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: November 22, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            At NextGenGuides, we take your privacy seriously. This policy explains how we collect, use, 
            and protect your information when you use our website and services. By using NextGenGuides, 
            you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-12 mb-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Sections */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies and Tracking</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Essential cookies for basic site functionality</li>
                <li>• Analytics cookies to understand user behavior</li>
                <li>• Advertising cookies for personalized content</li>
                <li>• Preference cookies to remember your settings</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You can control cookies through your browser settings.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may share information with:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Email service providers for newsletter delivery</li>
                <li>• Analytics providers for traffic analysis</li>
                <li>• Cloud hosting providers for data storage</li>
                <li>• Payment processors for subscription services</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We only work with reputable third parties who agree to protect your data.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Retention</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                We retain your information only as long as necessary to provide our services and comply 
                with legal obligations. You can request deletion of your personal information at any time.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Our services are not intended for children under 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected such 
                information, please contact us immediately.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">International Transfers</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
          <p className="mb-6">
            If you have questions about this Privacy Policy or want to exercise your rights, 
            please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: privacy@nextgenguides.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            We may update this privacy policy from time to time. We will notify you of any 
            changes by posting the new policy on this page and updating the "Last Updated" date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
