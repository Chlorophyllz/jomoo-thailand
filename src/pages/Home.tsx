
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

interface SectionContent {
  id: number;
  jm_name: string;
  jm_desc: string;
  jm_url: string;
  jm_img: string;
  jm_explore: boolean;
}

const Home: React.FC = () => {
  const [sectionContent, setSectionContent] = useState<SectionContent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSectionContent = async () => {
      try {
        const { data, error } = await supabase
          .from('jomoo_trans_section_content')
          .select('*')
          .eq('sts', true)
          .order('id', { ascending: true });

        if (error) {
          console.error('Error fetching section content:', error);
        } else {
          setSectionContent(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectionContent();
  }, []);

  return (
    <Layout>
      {/* Banner Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-black bg-opacity-60" 
          style={{
            backgroundImage: 'url("https://djpvakobbvnavfyvibah.supabase.co/storage/v1/object/public/jomoo-banner.png")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              JOMOO Stuns at Casa Décor 2025, Redefining Luxury Bathroom Living
            </h1>
            <Link to="/form" className="btn-primary inline-flex items-center mt-8">
              Get our Catalog <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 md:py-24 bg-jomoo-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column - QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-lg p-6 mb-6 shadow-lg">
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
                className="btn-primary inline-flex items-center"
              >
                Go to Information Form <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            {/* Right Column - Contact Information */}
            <div className="text-jomoo-text space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">JOMOO Thailand Headquarters</h3>
                <p className="text-jomoo-muted">123 Sukhumvit Road</p>
                <p className="text-jomoo-muted">Bangkok 10110, Thailand</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                <p className="text-jomoo-muted">Email: contact@jomoo.th</p>
                <p className="text-jomoo-muted">Phone: +66 2 123 4567</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                <p className="text-jomoo-muted">Monday to Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-jomoo-muted">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Paragraph Section */}
      <section className="py-16 md:py-24 bg-jomoo-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-jomoo-text text-lg leading-relaxed">
              Global smart bathroom leader JOMOO has made a stunning appearance at Casa Décor 2025, Spain's premier design event, unveiling a groundbreaking sensory art installation. Set within a 19th-century heritage building on Sagasta Street in Madrid, this striking debut marks the official launch of JOMOO's strategic expansion into Europe. Designed in collaboration with renowned creative firm Summum Studio, JOMOO's themed exhibition "BRUMA: the Ritual of Senses" merges cutting-edge technology with disruptive, future-forward aesthetics. The installation has quickly become one of the most talked-about highlights of this year's Casa Décor.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Content Section */}
      <section className="py-16 md:py-24 bg-jomoo-dark">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">Our Products</h2>
          
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-jomoo-text">Loading content...</p>
            </div>
          ) : (
            <div className="space-y-24">
              {sectionContent.map((item) => (
                <div 
                  key={item.id}
                  className={`grid grid-cols-1 ${item.id % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'} gap-8 items-center`}
                >
                  {/* Image Section (Left for odd IDs, Right for even IDs) */}
                  <div className={`${item.id % 2 === 0 ? 'lg:order-2' : ''} h-full`}>
                    <div className="h-full w-full overflow-hidden rounded-lg">
                      <img 
                        src={item.jm_img} 
                        alt={item.jm_name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Text Section (Right for odd IDs, Left for even IDs) */}
                  <div className={`${item.id % 2 === 0 ? 'lg:order-1' : ''} flex flex-col justify-center h-full`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-jomoo-text mb-4">{item.jm_name}</h3>
                    <p className="text-jomoo-muted text-lg mb-6">{item.jm_desc}</p>
                    
                    {item.jm_explore && (
                      <a 
                        href={item.jm_url} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="btn-outline inline-flex items-center self-start"
                      >
                        Explore more <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-jomoo-accent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Elevate Your Bathroom Experience?</h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
            Get our latest smart bathroom catalog and discover how JOMOO can transform your space.
          </p>
          <Link to="/form" className="bg-white text-jomoo-accent hover:bg-opacity-90 px-6 py-3 rounded-md font-medium transition-all duration-300">
            Download Catalog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
