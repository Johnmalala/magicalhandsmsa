import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, CheckCircle, Star } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const productCategories = [
    {
      title: 'Rubber Stamps',
      description: 'Professional rubber stamps for all your office and business needs',
      image: '/images/rubber-stamp-1.jpg',
      products: [
        {
          name: 'Self-inking Stamps',
          description: 'Convenient automatic ink application with thousands of impressions',
          image: '/images/rubber-stamp-3.jpg',
          features: ['Up to 10,000 impressions', 'Quick setup', 'Clean impressions', 'Multiple ink colors'],
          popular: true
        },
        {
          name: 'Manual Stamps',
          description: 'Traditional rubber stamps with separate ink pads',
          image: '/images/rubber-stamp-1.jpg',
          features: ['Durable rubber construction', 'Custom designs', 'Various sizes', 'Long-lasting'],
          popular: false
        },
        {
          name: 'Date Stamps',
          description: 'Adjustable date stamps with rotating wheels',
          image: '/images/rubber-stamp-2.jpg',
          features: ['Easy date adjustment', 'Self-inking mechanism', 'Clear date impressions', 'Professional appearance'],
          popular: false
        }
      ]
    },
    {
      title: 'Company Seals',
      description: 'Official seals for legal documents and corporate use',
      image: '/images/company-seals.jpg',
      products: [
        {
          name: 'Embossing Seals',
          description: 'Raised impression seals for official documents',
          image: '/images/company-seals.jpg',
          features: ['Raised embossed impression', 'Durable metal construction', 'Custom corporate designs', 'Legal compliance'],
          popular: true
        },
        {
          name: 'Common Seals',
          description: 'Standard company seals for general business use',
          image: '/images/company-seal-2.jpg',
          features: ['Standard corporate format', 'Professional appearance', 'Quality materials', 'Quick delivery'],
          popular: false
        }
      ]
    },
    {
      title: 'Photo Mounts',
      description: 'Professional photo mounting and framing services',
      image: '/images/photo-mount.jpg',
      products: [
        {
          name: 'A4 & A3 Photo Mounts',
          description: 'Standard size photo mounting for documents and certificates',
          image: '/images/photo-mount.jpg',
          features: ['Professional mounting', 'Archive quality materials', 'Clean finish', 'Protective backing'],
          popular: false
        },
        {
          name: 'Custom Size Mounts',
          description: 'Tailored mounting solutions for any photo size',
          image: '/images/photo-mount-2.jpg',
          features: ['Any custom dimensions', 'Professional appearance', 'Quality backing board', 'Precise cutting'],
          popular: false
        },
        {
          name: 'Personalized Mounts',
          description: 'Custom designed mounts with personal touches',
          image: '/images/photo-mount-2.jpg',
          features: ['Custom text addition', 'Logo integration', 'Color coordination', 'Special occasions'],
          popular: true
        }
      ]
    },
    {
      title: 'Branding Services',
      description: 'Complete branding and marketing material solutions',
      image: '/images/rubber-stamp-3.jpg',
      products: [
        {
          name: 'Business Cards',
          description: 'Professional business cards that make lasting impressions',
          image: '/images/rubber-stamp-3.jpg',
          features: ['Premium card stock', 'Full color printing', 'Various finishes', 'Quick turnaround'],
          popular: true
        },
        {
          name: 'Banners & Posters',
          description: 'Eye-catching banners and posters for marketing',
          image: '/images/rubber-stamp-3.jpg',
          features: ['Large format printing', 'Weather resistant options', 'Vibrant colors', 'Custom sizes'],
          popular: false
        },
        {
          name: 'T-shirts & Mugs',
          description: 'Branded merchandise for promotions and gifts',
          image: '/images/rubber-stamp-3.jpg',
          features: ['Quality materials', 'Durable printing', 'Various colors', 'Bulk orders available'],
          popular: false
        },
        {
          name: 'Corporate Gifts',
          description: 'Branded corporate gifts and promotional items',
          image: '/images/rubber-stamp-3.jpg',
          features: ['Wide product range', 'Custom branding', 'Professional packaging', 'Volume discounts'],
          popular: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products & Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Professional quality products for all your business documentation and branding needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700361655"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone size={20} />
                <span>Call to Order: 0700 361 655</span>
              </a>
              <a
                href="https://wa.me/254700361655"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              {/* Category Header */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h2>
                    <p className="text-xl text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:+254700361655"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                      >
                        <Phone size={18} />
                        <span>Call to Order</span>
                      </a>
                      <a
                        href="https://wa.me/254700361655"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: productIndex * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col"
                  >
                    {product.popular && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 z-10">
                        <Star size={14} />
                        <span>Popular</span>
                      </div>
                    )}
                    
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {product.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                              <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col gap-2 mt-auto">
                        <a
                          href="tel:+254700361655"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                        >
                          <Phone size={16} />
                          <span>Call to Order</span>
                        </a>
                        <a
                          href="https://wa.me/254700361655"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                        >
                          <MessageCircle size={16} />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us to discuss your specific requirements and get a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700361655"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone size={20} />
                <span>Call: 0700 361 655</span>
              </a>
              <a
                href="https://wa.me/254700361655"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
