import React from 'react';
import { ArrowLeft, Users, Target, Award, Heart } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onBack }) => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      avatar: "👨‍💼",
      bio: "Tech enthusiast with 10+ years in AI and web development."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Content",
      avatar: "👩‍💻",
      bio: "Passionate writer focused on making tech accessible to everyone."
    },
    {
      name: "Mike Williams",
      role: "Lead Developer",
      avatar: "👨‍🔬",
      bio: "Full-stack developer specializing in React and AI integration."
    },
    {
      name: "Emma Davis",
      role: "Community Manager",
      avatar: "👩‍🎨",
      bio: "Building bridges between tech and creative communities."
    }
  ];

  const stats = [
    { number: "50K+", label: "Monthly Readers" },
    { number: "200+", label: "Published Articles" },
    { number: "15+", label: "Expert Contributors" },
    { number: "99%", label: "Reader Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </button>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">NextGen</span>Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make cutting-edge technology accessible to everyone. 
            Through comprehensive guides, expert insights, and practical tutorials, we help you 
            stay ahead in the rapidly evolving digital landscape.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To democratize technology knowledge by providing clear, comprehensive, and practical 
              content that empowers individuals and businesses to thrive in the digital age.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become the most trusted resource for technology education, helping millions worldwide 
              unlock their potential through accessible, high-quality learning content.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build content with our community, for our community. Your feedback shapes everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quality Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every article is thoroughly researched, fact-checked, and reviewed by industry experts.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Practical Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on actionable insights you can apply immediately to real-world challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            NextGenGuides started in 2023 with a simple question: "Why is technology so complicated?" 
            What began as a small blog has grown into a comprehensive platform serving thousands of readers 
            worldwide. We believe that technology should empower, not intimidate, and we're committed to 
            breaking down complex topics into digestible, actionable content that helps you succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
