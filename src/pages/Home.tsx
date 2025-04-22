
import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-black" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.7
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Premium Bathroom & Kitchen Solutions
            </h1>
            <p className="text-jomoo-muted text-lg md:text-xl mb-8 max-w-2xl">
              Experience luxury and innovation with JOMOO Thailand's premium range of bathroom and kitchen products.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24 bg-jomoo-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center">Featured Products</h2>
          <p className="text-jomoo-muted text-center max-w-3xl mx-auto mb-12">
            Discover our premium selection of bathroom and kitchen solutions that combine elegant design with innovative technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-jomoo-dark rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Modern Faucet" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Modern Faucets</h3>
                <p className="text-jomoo-muted mb-4">Elegant design meets innovative technology for your kitchen and bathroom.</p>
                <a href="#" className="text-jomoo-accent hover:underline inline-flex items-center">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-jomoo-dark rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                  alt="Luxury Shower" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Showers</h3>
                <p className="text-jomoo-muted mb-4">Transform your daily routine into a spa-like experience with our premium showers.</p>
                <a href="#" className="text-jomoo-accent hover:underline inline-flex items-center">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-jomoo-dark rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Smart Toilet" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Toilets</h3>
                <p className="text-jomoo-muted mb-4">Cutting-edge technology for unparalleled comfort and hygiene in your bathroom.</p>
                <a href="#" className="text-jomoo-accent hover:underline inline-flex items-center">
                  Explore <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-jomoo-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="section-title">About JOMOO Thailand</h2>
              <p className="text-jomoo-muted mb-6">
                JOMOO Thailand is a leading provider of premium bathroom and kitchen products, 
                combining innovative technology with elegant design to create products that enhance everyday living.
              </p>
              <p className="text-jomoo-muted mb-6">
                With a commitment to quality and sustainability, we strive to deliver products 
                that not only look beautiful but also contribute to a more sustainable future.
              </p>
              <Link to="#" className="btn-outline inline-block">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571781565036-d3f759be73e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="About JOMOO" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-jomoo-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Home?</h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
            Discover how JOMOO Thailand's premium products can transform your bathroom and kitchen spaces.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-jomoo-accent hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-all duration-300">
              Contact Us
            </Link>
            <Link to="/form" className="border border-white text-white hover:bg-white hover:text-jomoo-accent px-6 py-3 rounded-md font-medium transition-all duration-300">
              Information Form
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
