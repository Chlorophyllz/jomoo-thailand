
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-jomoo-background flex flex-col items-center justify-center py-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-lg">
          <QRCodeSVG
            value={window.location.origin + "/form"}
            size={220}
            bgColor="#FFFFFF"
            fgColor="#121212"
            className="rounded"
            style={{ width: 220, height: 220 }}
          />
        </div>
        <Link
          to="/form"
          className="mt-8 inline-block bg-jomoo-accent hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded-md text-lg transition-colors"
        >
          Go to Information Form
        </Link>
      </div>
    </Layout>
  );
};

export default Contact;
