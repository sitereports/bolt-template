import React from 'react';
import {
  ClipboardCheck,
  Image,
  MessageSquare,
  Bell,
  BarChart,
  Cloud,
} from 'lucide-react';

const features = [
  {
    icon: ClipboardCheck,
    title: 'Structured Reports',
    description: 'Create standardized reports with customizable templates for consistency across your team.',
  },
  {
    icon: Image,
    title: 'Rich Media Support',
    description: 'Attach photos, documents, and other files directly to your reports.',
  },
  {
    icon: MessageSquare,
    title: 'Team Comments',
    description: 'Collaborate with your team through inline comments and discussions.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Stay updated with real-time notifications about report activities.',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track customer interactions and team performance with detailed analytics.',
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Access your reports anywhere, anytime with secure cloud storage.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for Customer Reporting
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to streamline your customer visit documentation process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}