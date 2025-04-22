
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FileDown } from 'lucide-react';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally connect to a backend service
    console.log('Form submitted:', { name, email });
    setSubmitted(true);
    // Reset form
    setName('');
    setEmail('');
    
    // Show success message briefly
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="bg-jomoo-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title text-center">Information Form</h1>
            <p className="text-jomoo-muted text-center mb-12">
              Please fill out this form to receive updates and product information from JOMOO Thailand.
            </p>

            {/* Form Section */}
            <div className="bg-jomoo-dark rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-jomoo-text mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-jomoo-text mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Submit
                </button>
                
                {submitted && (
                  <div className="mt-4 p-3 bg-green-900 text-green-100 rounded-md text-center">
                    Thank you! Your information has been submitted successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Download Section */}
            <div className="bg-jomoo-dark rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Download Files</h2>
              <p className="text-jomoo-muted mb-8">
                Access our product catalogs and technical specifications below.
              </p>
              
              <div className="space-y-4">
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-jomoo-text">JOMOO Product Catalog 2023</h3>
                      <p className="text-jomoo-muted text-sm">PDF - 12.5 MB</p>
                    </div>
                    <button className="btn-outline flex items-center">
                      <FileDown className="mr-2 h-5 w-5" />
                      Download
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-jomoo-text">Technical Specifications</h3>
                      <p className="text-jomoo-muted text-sm">PDF - 8.3 MB</p>
                    </div>
                    <button className="btn-outline flex items-center">
                      <FileDown className="mr-2 h-5 w-5" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-800 rounded-md">
                <p className="text-jomoo-muted text-sm text-center">
                  Note: These files will be updated regularly. Visit again for the latest versions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
