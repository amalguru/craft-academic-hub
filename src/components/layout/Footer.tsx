import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-eduBlue-600">Edu<span className="text-eduGreen-600">Craft</span></span>
            </Link>
            <p className="text-gray-600 mb-4">
              Connecting students with academic project professionals across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-eduBlue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-eduBlue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-eduBlue-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-eduBlue-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Our Services</Link></li>
              <li><Link to="/order" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Order Now</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Service Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Academic Essays</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Technical Projects</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Research Papers</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-eduBlue-600 transition-colors">Presentations</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-eduBlue-600" />
                <a href="mailto:amalanathang20@gmail.com" className="text-gray-600 hover:text-eduBlue-600 transition-colors">
                  amalanathang20@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-eduBlue-600" />
                <a href="tel:+919025775763" className="text-gray-600 hover:text-eduBlue-600 transition-colors">
                  +91 902 577 5763
                </a>
              </li>
              <li className="mt-4">
                <Link to="/contact">
                  <button className="bg-eduGreen-500 hover:bg-eduGreen-600 text-white py-2 px-4 rounded-md transition-colors">
                    Get Support
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} EduCraft Projects. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/privacy" className="hover:text-eduBlue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-eduBlue-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
