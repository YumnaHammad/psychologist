import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import { ArrowRight, Star, Heart, Users, Brain } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "A.S.",
      rating: 5,
      text: "Dr. Johnson helped me overcome my anxiety and depression. Her approach is both professional and compassionate. I feel like a completely different person now - more confident and in control of my emotions.",
      service: "Individual Therapy"
    },
    {
      id: 2,
      name: "M.K.",
      rating: 5,
      text: "My husband and I were struggling with communication issues. Through couple counseling, we learned how to express our feelings better and resolve conflicts constructively. Our relationship is stronger than ever.",
      service: "Couple Counseling"
    },
    {
      id: 3,
      name: "R.A.",
      rating: 5,
      text: "I was worried about my 12-year-old son's behavioral issues at school. Dr. Johnson's child counseling approach was perfect - she made him feel comfortable and helped him develop better coping skills.",
      service: "Child Counseling"
    },
    {
      id: 4,
      name: "S.H.",
      rating: 5,
      text: "The career counseling sessions helped me identify my strengths and find a career path that truly fits my personality and skills. I'm now in a job I love and feel fulfilled.",
      service: "Career Counseling"
    },
    {
      id: 5,
      name: "L.T.",
      rating: 5,
      text: "The IQ and personality assessments provided valuable insights into my cognitive abilities and behavioral patterns. The detailed report helped me understand myself better and make informed decisions.",
      service: "Psychological Assessment"
    },
    {
      id: 6,
      name: "N.P.",
      rating: 5,
      text: "Online therapy sessions were just as effective as in-person ones. Dr. Johnson's warm personality and professional approach made me feel comfortable even through video calls.",
      service: "Online Therapy"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Helped",
      color: "blue"
    },
    {
      icon: Heart,
      number: "95%",
      label: "Satisfaction Rate",
      color: "green"
    },
    {
      icon: Brain,
      number: "8+",
      label: "Years Experience",
      color: "purple"
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      color: "orange"
    }
  ];

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
              <Heart className="w-6 h-6 text-pink-600" />
              <span className="text-pink-800 font-semibold">Client Success Stories</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              💬 Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from clients who have experienced positive transformation through therapy. 
              These testimonials reflect the real experiences of individuals, couples, and families 
              who have worked with me to achieve mental wellness and personal growth.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}-600`} />
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from clients who have transformed their lives through therapy
            </p>
          </motion.div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Individual Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.service}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split('.')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Clients Choose Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional expertise combined with genuine care and understanding
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">
                I provide a warm, accepting environment where you can feel safe to explore your thoughts, 
                feelings, and experiences without fear of judgment.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Evidence-Based Approach</h3>
              <p className="text-gray-600">
                I utilize scientifically-proven therapeutic approaches including CBT and REBT, 
                known for their effectiveness in treating emotional and behavioral issues.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Treatment</h3>
              <p className="text-gray-600">
                Each person is unique, and I tailor therapy to suit your specific needs and goals. 
                Your treatment plan is designed specifically for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the hundreds of clients who have transformed their lives through therapy. 
              Take the first step toward mental wellness today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Session
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 