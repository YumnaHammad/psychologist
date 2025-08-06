import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  User, 
  Send, 
  CheckCircle,
  Instagram,
  Youtube,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/20 rounded-full translate-x-40 translate-y-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <MessageSquare className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Get in Touch</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              📞 Contact Page
            </h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">
              Reach Out with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I'm here to help you on your journey toward mental wellness. Whether you have questions, 
              want to schedule a session, or just need to talk, I'm ready to listen and support you.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">[your email]</p>
              <p className="text-gray-500 text-xs mt-1">I'll respond within 24-48 hours</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm">[your number]</p>
              <p className="text-gray-500 text-xs mt-1">Quick responses for urgent matters</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">[City / Online]</p>
              <p className="text-gray-500 text-xs mt-1">In-person and online sessions available</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Media</h3>
              <p className="text-gray-600 text-sm">Instagram & YouTube</p>
              <p className="text-gray-500 text-xs mt-1">[Insert social links]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Prefer to send a message?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this form to reach out with any questions, concerns, or to schedule a consultation. 
              I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please share your message, questions, or concerns. I'm here to help and will respond as soon as possible."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. I've received your message and will get back to you within 24-48 hours.
                </p>
                <p className="text-sm text-gray-500">
                  Please check your email for a confirmation message.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow me on social media for mental health tips, insights, and updates about my practice.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl">
              <Instagram className="w-16 h-16 text-pink-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Instagram</h3>
              <p className="text-gray-600 mb-6">
                Daily mental health tips, mindfulness exercises, and insights into therapy and psychology.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                Follow on Instagram
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <Youtube className="w-16 h-16 text-red-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">YouTube</h3>
              <p className="text-gray-600 mb-6">
                Educational videos about mental health, therapy techniques, and self-care strategies.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                Subscribe to Channel
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              If you're ready to begin your therapy journey, I'm here to support you every step of the way. 
              Don't hesitate to reach out - taking the first step is often the most important one.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Quick Response</h3>
                <p className="text-sm text-gray-600">I typically respond within 24-48 hours</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">Confidential</h3>
                <p className="text-sm text-gray-600">All communications are kept private and secure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-semibold text-gray-800 mb-2">No Pressure</h3>
                <p className="text-sm text-gray-600">Feel free to ask questions without any obligation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 