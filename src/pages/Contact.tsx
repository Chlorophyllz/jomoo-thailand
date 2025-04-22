
import React from 'react';
import Layout from '../components/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-jomoo-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <h1 className="section-title text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-jomoo-dark p-6 rounded-lg flex items-start space-x-4">
                <MapPin className="text-jomoo-accent flex-shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-semibold text-jomoo-text mb-2">Our Address</h3>
                  <p className="text-jomoo-muted">
                    123 Sukhumvit Road, <br />
                    Bangkok 10110, Thailand
                  </p>
                </div>
              </div>
              
              <div className="bg-jomoo-dark p-6 rounded-lg flex items-start space-x-4">
                <Phone className="text-jomoo-accent flex-shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-semibold text-jomoo-text mb-2">Phone Number</h3>
                  <p className="text-jomoo-muted">+66 2 123 4567</p>
                </div>
              </div>
              
              <div className="bg-jomoo-dark p-6 rounded-lg flex items-start space-x-4">
                <Mail className="text-jomoo-accent flex-shrink-0 h-6 w-6" />
                <div>
                  <h3 className="font-semibold text-jomoo-text mb-2">Email</h3>
                  <p className="text-jomoo-muted">info@jomoo-thailand.com</p>
                </div>
              </div>
              
              <div className="bg-jomoo-dark p-6 rounded-lg">
                <h3 className="font-semibold text-jomoo-text mb-4">Business Hours</h3>
                <ul className="text-jomoo-muted space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* QR Code */}
            <div className="flex flex-col items-center justify-center bg-jomoo-dark p-10 rounded-lg">
              <h2 className="text-2xl font-bold text-jomoo-text mb-6">Quick Contact</h2>
              <div className="mb-6">
                <img 
                  src="/qr-code-placeholder.png" 
                  alt="QR Code" 
                  className="w-64 h-64 bg-white p-3 rounded-lg mx-auto"
                />
              </div>
              <p className="text-jomoo-muted text-center max-w-md">
                Scan this QR Code to fill out our contact form or get in touch with us directly.
              </p>
            </div>
          </div>
          
          {/* Google Maps Placeholder */}
          <div className="mt-16 bg-jomoo-dark h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-jomoo-text text-lg font-semibold mb-2">Google Maps Location</p>
              <p className="text-jomoo-muted">Interactive map will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
