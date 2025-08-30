import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Custom Rubber Stamps',
      category: 'Rubber Stamps',
      image: '/images/rubber-stamp-1.jpg',
      description: 'Various custom rubber stamps for different business needs'
    },
    {
      id: 2,
      title: 'Company Seals Collection',
      category: 'Company Seals',
      image: '/images/company-seals.jpg',
      description: 'Professional embossing seals for official documents'
    },
    {
      id: 3,
      title: 'Mounted Photo Certificates',
      category: 'Photo Mounts',
      image: '/images/photo-mount.jpg',
      description: 'Professional certificate and photo mounting services'
    },
    {
      id: 4,
      title: 'Business Card Designs',
      category: 'Branding',
      image: '/images/rubber-stamp-3.jpg',
      description: 'Creative business card designs for various industries'
    },
    {
      id: 5,
      title: 'Self-Inking Stamps',
      category: 'Rubber Stamps',
      image: '/images/rubber-stamp-3.jpg',
      description: 'High-quality self-inking stamps with clean impressions'
    },
    {
      id: 6,
      title: 'Corporate Banners',
      category: 'Branding',
      image: '/images/rubber-stamp-3.jpg',
      description: 'Large format banners for corporate events and promotions'
    },
    {
      id: 7,
      title: 'Date Stamps Collection',
      category: 'Rubber Stamps',
      image: '/images/rubber-stamp-2.jpg',
      description: 'Professional date stamps for office documentation'
    },
    {
      id: 8,
      title: 'Branded Merchandise',
      category: 'Branding',
      image: '/images/rubber-stamp-3.jpg',
      description: 'Custom branded t-shirts, mugs, and promotional items'
    },
    {
      id: 9,
      title: 'Photo Frame Mounts',
      category: 'Photo Mounts',
      image: '/images/photo-mount-2.jpg',
      description: 'Professional photo mounting with decorative frames'
    }
  ];

  const categories = ['All', 'Rubber Stamps', 'Company Seals', 'Photo Mounts', 'Branding'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              Discover the quality and craftsmanship that goes into every project we complete
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(item.image)}
                      className="bg-white text-gray-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"
                    >
                      <ZoomIn size={24} />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery item"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let us bring your vision to life with the same quality and attention to detail you see in our portfolio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700361655"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Call: 0700 361 655
              </a>
              <a
                href="https://wa.me/254700361655"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
