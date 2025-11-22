import React from 'react';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const sections = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using NextGenGuides, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services constitutes acceptance of any changes"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Use of Services",
      content: [
        "You must be at least 13 years old to use our services",
        "You may use our services for lawful purposes only",
        "You may not reproduce, distribute, or create derivative works without permission",
        "You may not use automated tools to access our services without authorization"
      ]
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Content and Intellectual Property",
      content: [
        "All content on NextGenGuides is owned by us or our licensors",
        "You may not use our content without proper attribution",
        "User-generated content remains the property of the user",
        "We grant you a limited, non-exclusive license to access our content"
      ]
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Disclaimer of Warranties",
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We do not guarantee the accuracy or completeness of our content",
        "We are not liable for any damages arising from your use of our services",
        "Your use of our services is at your own risk"
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: November 22, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Welcome to NextGenGuides! These Terms of Service govern your use of our website, 
            content, and services. By accessing NextGenGuides, you agree to comply with and be bound 
            by these terms.
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Our total liability shall not exceed $100</li>
                <li>• We are not liable for indirect, incidental, or consequential damages</li>
                <li>• We are not liable for lost profits or data</li>
                <li>• Some jurisdictions do not allow these limitations, so they may not apply to you</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy and Data Protection</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy to understand 
                how we collect, use, and protect your information. By using our services, you 
                consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">User Accounts</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you create an account with us:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• You are responsible for maintaining the confidentiality of your account</li>
                <li>• You are responsible for all activities under your account</li>
                <li>• You must provide accurate and complete information</li>
                <li>• You must notify us immediately of any unauthorized use</li>
                <li>• We reserve the right to suspend or terminate accounts for violations</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prohibited Activities</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You may not:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Violate any applicable laws or regulations</li>
                <li>• Infringe on intellectual property rights</li>
                <li>• Post harmful, offensive, or illegal content</li>
                <li>• Attempt to gain unauthorized access to our systems</li>
                <li>• Interfere with or disrupt our services</li>
                <li>• Use our services for fraudulent or malicious purposes</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Copyright and DMCA</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We respect intellectual property rights. If you believe your copyright has been 
                infringed, please contact us with:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Description of the copyrighted work</li>
                <li>• Location of the allegedly infringing content</li>
                <li>• Your contact information</li>
                <li>• Statement of good faith belief</li>
                <li>• Electronic or physical signature</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We will respond to DMCA notices in accordance with applicable law.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Termination</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                We may terminate or suspend your access to our services immediately, without 
                prior notice, for any reason, including breach of these Terms of Service. 
                Upon termination, your right to use the services will cease immediately.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                These Terms of Service shall be governed by and construed in accordance with 
                the laws of the State of California, without regard to its conflict of law principles.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="mb-6">
            If you have questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: legal@nextgenguides.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
          </div>
        </div>

        {/* Agreement Statement */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              By using NextGenGuides, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              These terms were last updated on November 22, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
