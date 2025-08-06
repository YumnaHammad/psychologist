import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Instagram, Youtube, Mail, Phone, MapPin, Shield, FileText, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-3" />
              <span className="text-xl font-bold">Dr. Sarah Johnson</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional psychologist dedicated to helping individuals, couples, and families find clarity, 
              strength, and emotional well-being through evidence-based therapy and compassionate care.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white transition-colors">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span>[your email]</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span>[your number]</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>[City / Online]</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-blue-400" />
                <span>Mon-Sat: 10 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Terms of Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                Terms & Conditions
              </h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>• All services are offered by a trained psychologist under ethical guidelines.</p>
                <p>• Services are available in-person and online.</p>
                <p>• Sessions are 50–60 minutes long unless specified otherwise.</p>
                <p>• Clients are expected to arrive on time (in-person or online).</p>
                <p>• Therapy does not include medication prescriptions.</p>
              </div>
            </div>

            {/* Payment Terms */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Payment Terms
              </h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>• Payment is due before the session via approved methods.</p>
                <p>• Receipts available upon request.</p>
                <p>• Sliding scale available for those in need.</p>
                <p>• Insurance may be accepted (contact for details).</p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-orange-400" />
                Cancellation Policy
              </h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>• Cancellations must be made at least 12 hours in advance.</p>
                <p>• Late cancellations (under 12 hours) may be charged a 50% fee.</p>
                <p>• No-shows may be charged in full.</p>
                <p>• In the rare case I need to reschedule, I will notify you promptly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-400" />
            Privacy Policy
          </h4>
          <div className="text-sm text-gray-300 space-y-2">
            <p>
              Your privacy is my top priority. As a professional psychologist, I am fully committed to protecting your confidentiality. 
              All sessions are private and your information will never be shared without your written consent. Notes and records are 
              stored securely and only accessible by me. Online sessions are conducted through encrypted, secure platforms. 
              Information shared in therapy is confidential, except in rare cases where there is risk of serious harm to you or 
              someone else, if required by a court of law, or if there's a concern of abuse involving a child, elder, or vulnerable individual.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Dr. Sarah Johnson. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cancellation" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 