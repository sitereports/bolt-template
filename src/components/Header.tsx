import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ClipboardList className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-900">ReportSync</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-600 hover:text-green-600 transition-colors">Features</Link>
          <Link to="/pricing" className="text-gray-600 hover:text-green-600 transition-colors">Pricing</Link>
          <Link to="/contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</Link>
          <Link to="/login" className="text-gray-600 hover:text-green-600 transition-colors">Login</Link>
          <Link to="/signup" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}