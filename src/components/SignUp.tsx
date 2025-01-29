import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Unlimited customer reports',
  'Team collaboration features',
  'Mobile app access',
  'Priority support',
  'Advanced analytics',
  'Custom templates',
];

export default function SignUp() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Streamlining Your Customer Reports Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who trust ReportFlow for their customer reporting needs
          </p>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                <span className="text-2xl align-top">$</span>29
                <span className="text-lg text-gray-500 font-normal">/month</span>
              </div>
              <p className="text-gray-600">per user, billed annually</p>
            </div>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-left">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/signup"
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Start Free Trial
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}