import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, AlertTriangle, Loader } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((error) => {
        setSubmissionStatus('error');
        console.error(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone / WhatsApp',
      value: '0700 361 655',
      link: 'tel:+254700361655',
      description: 'Call or WhatsApp us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@magicalhandsmsa.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@magicalhandsmsa.com',
      description: 'Send us an email and we\'ll respond promptly'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mombasa, Kenya',
      link: '#',
      description: 'Serving Mombasa and the entire coast region'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      link: '#',
      description: 'We\'re here when you need us most'
    }
  ];

  const services = [
    'Rubber Stamps',
    'Company Seals',
    'Photo Mounts',
    'Business Cards',
    'Banners & Posters',
    'Corporate Gifts',
    'Other'
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Get in touch with us for all your rubber stamps, seals, and branding needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700361655"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone size={20} />
                <span>Call Now: 0700 361 655</span>
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

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link !== '#' ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors block mb-2"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    {info.value}
                  </p>
                )}
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" onChange={handleChange} />
                  </label>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                {submissionStatus === 'success' && (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg flex items-center space-x-3">
                    <CheckCircle size={24} />
                    <div>
                      <p className="font-bold">Message Sent!</p>
                      <p>Thank you for contacting us. We'll get back to you shortly.</p>
                    </div>
                  </div>
                )}

                {submissionStatus === 'error' && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg flex items-center space-x-3">
                    <AlertTriangle size={24} />
                    <div>
                      <p className="font-bold">Something went wrong.</p>
                      <p>Please try again or contact us directly via phone or WhatsApp.</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submissionStatus === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {submissionStatus === 'submitting' ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Let's Start Your Project
              </h3>
              <p className="text-blue-100 mb-8">
                Ready to get started? Contact us today and let's discuss how we can help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Quick Response</h4>
                    <p className="text-blue-100 text-sm">
                      Call or WhatsApp us at 0700 361 655 for immediate assistance with your project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Detailed Quotes</h4>
                    <p className="text-blue-100 text-sm">
                      Email us your requirements and we'll provide a detailed quote within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Turnaround</h4>
                    <p className="text-blue-100 text-sm">
                      Most orders completed within 2-3 days. Rush orders available for urgent needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <h4 className="font-semibold mb-4">Payment Methods Accepted</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">M-Pesa</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Bank Transfer</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Cash</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us in Mombasa
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Mombasa, serving the entire coastal region
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Magical Hands MSA
            </h3>
            <p className="text-gray-600 mb-6">
              Mombasa, Kenya<br />
              Serving the entire coastal region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+254700361655"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Call for Directions
              </a>
              <a
                href="https://wa.me/254700361655"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                WhatsApp Location
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
