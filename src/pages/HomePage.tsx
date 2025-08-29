import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, CheckCircle, Star, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Rubber Stamps',
      description: 'Self-inking, manual, and date stamps for all your office needs',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300.png',
      features: ['Self-inking Stamps', 'Manual Stamps', 'Date Stamps', 'Custom Designs']
    },
    {
      title: 'Company Seals',
      description: 'Professional embossing seals and common seals for official documents',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300.png',
      features: ['Embossing Seals', 'Common Seals', 'Official Documents', 'Legal Compliance']
    },
    {
      title: 'Photo Mounts',
      description: 'Custom photo mounting services in various sizes',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300.png',
      features: ['A4 & A3 Sizes', 'Custom Sizes', 'Personalized Mounts', 'Quality Materials']
    },
    {
      title: 'Branding Services',
      description: 'Complete branding solutions for your business',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300.png',
      features: ['Business Cards', 'Banners & Posters', 'T-shirts & Mugs', 'Corporate Gifts']
    }
  ];

  const whyChooseUs = [
    { icon: CheckCircle, title: 'Quality Craftsmanship', description: 'Premium materials and expert workmanship' },
    { icon: CheckCircle, title: 'Fast Delivery', description: 'Quick turnaround times for urgent orders' },
    { icon: CheckCircle, title: 'Affordable Prices', description: 'Competitive pricing without compromising quality' },
    { icon: CheckCircle, title: 'Local Expertise', description: 'Based in Mombasa, serving the entire coast region' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Welcome to <span className="text-yellow-400">Magical Hands MSA</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Quality Rubber Stamps, Seals & Branding in Mombasa
              </p>
              <p className="text-lg mb-8 text-blue-200 leading-relaxed">
                Your trusted partner for professional rubber stamps, company seals, photo mounts, and complete branding solutions. We deliver quality craftsmanship with fast, reliable service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+254700361655"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={20} />
                  <span>Call: 0700 361 655</span>
                </a>
                <a
                  href="https://wa.me/254700361655"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <Phone size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
              
              <a
                href="mailto:info@magichandsmsa.com"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>info@magichandsmsa.com</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400.png"
                alt="Magical Hands MSA Services"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive branding and documentation solutions to meet all your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Magical Hands MSA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine years of experience with modern techniques to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and quote
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
                <Phone size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
