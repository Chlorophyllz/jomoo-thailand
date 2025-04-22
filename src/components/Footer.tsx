
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jomoo-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold text-jomoo-text mb-4">JOMOO Thailand</h3>
            <p className="text-jomoo-muted mb-2">Premium bathroom and kitchen products</p>
            <p className="text-jomoo-muted">
              123 Sukhumvit Road, <br />
              Bangkok 10110, Thailand
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-jomoo-text mb-4">Contact Us</h3>
            <p className="text-jomoo-muted mb-2">Phone: +66 2 123 4567</p>
            <p className="text-jomoo-muted mb-2">Email: info@jomoo-thailand.com</p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-jomoo-muted hover:text-jomoo-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-jomoo-muted hover:text-jomoo-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-jomoo-muted hover:text-jomoo-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-jomoo-text mb-4">Connect With Us</h3>
            <div className="mb-2">
              <img 
                src="/qr-code-placeholder.png" 
                alt="QR Code" 
                className="w-32 h-32 bg-white p-1 rounded-md"
              />
            </div>
            <p className="text-jomoo-muted text-center">Scan to contact us</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-jomoo-muted text-sm">
            &copy; {new Date().getFullYear()} JOMOO Thailand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
