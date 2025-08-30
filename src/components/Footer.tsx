import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MH</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Magical Hands MSA</h3>
                <p className="text-sm text-gray-400">Branding You Can Trust</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for quality rubber stamps, company seals, photo mounts, and professional branding services in Mombasa, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+254700361655" className="text-gray-400 hover:text-white transition-colors">
                  0700 361 655
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@magicalhandsmsa.com" className="text-gray-400 hover:text-white transition-colors">
                  info@magicalhandsmsa.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-400">Mombasa, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Clock size={16} className="text-blue-400" />
              <span className="text-gray-400 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock size={16} className="text-blue-400" />
              <span className="text-gray-400 text-sm">Sat: 9:00 AM - 4:00 PM</span>
            </div>
            
            <h4 className="font-semibold mb-2">Payment Methods</h4>
            <p className="text-gray-400 text-sm">M-Pesa • Bank Transfer • Cash</p>
            
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Magical Hands MSA. All rights reserved. | Quality craftsmanship since day one.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
