import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Heart, Shield, Users, Brain, BookOpen } from 'lucide-react';

const About = () => {
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
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Professional Expertise</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              👩‍⚕️ About Me
            </h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">
              Meet Your Therapist
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A qualified psychologist dedicated to helping individuals, couples, and families find clarity, strength, and emotional well-being.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Professional Background
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I hold a Master's and Bachelor's degree in Psychology, with a strong foundation in clinical and counseling skills. I'm certified in Clinical Psychology from HLPS, and trained in Cognitive Behavioral Therapy (CBT) and Rational Emotive Behavior Therapy (REBT)—evidence-based approaches known for their effectiveness in treating a wide range of emotional and behavioral issues.
                </p>
                <p>
                  I am also a proud member of the American Psychological Association (APA), which helps me stay updated with international ethical standards and modern therapeutic techniques.
                </p>
                <p>
                  My approach is client-centered, empathetic, and results-oriented. I believe that each person is unique, and I tailor therapy to suit your specific needs and goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <div className="w-64 h-80 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl mx-auto flex items-center justify-center">
                  <Users className="w-16 h-16 text-blue-600" />
                </div>
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-500 italic">
                    Professional headshot placeholder
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
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
              Education & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive training and ongoing professional development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                items: [
                  "Master's degree in Psychology",
                  "Bachelor's degree in Psychology",
                  "Strong foundation in clinical and counseling skills"
                ]
              },
              {
                icon: Award,
                title: "Certifications",
                items: [
                  "Certified in Clinical Psychology from HLPS",
                  "Trained in Cognitive Behavioral Therapy (CBT)",
                  "Trained in Rational Emotive Behavior Therapy (REBT)"
                ]
              },
              {
                icon: Shield,
                title: "Professional Memberships",
                items: [
                  "American Psychological Association (APA)",
                  "International ethical standards compliance",
                  "Modern therapeutic techniques training"
                ]
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              My Approach to Therapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I believe in creating a collaborative, evidence-based therapeutic environment 
              that empowers clients to achieve lasting positive change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Client-Centered",
                description: "I believe that each person is unique, and I tailor therapy to suit your specific needs and goals. My approach is empathetic and results-oriented."
              },
              {
                icon: Brain,
                title: "Evidence-Based",
                description: "I utilize scientifically-proven therapeutic approaches including CBT and REBT, known for their effectiveness in treating emotional and behavioral issues."
              },
              {
                icon: BookOpen,
                title: "Professional Standards",
                description: "As a member of the American Psychological Association (APA), I maintain international ethical standards and stay updated with modern therapeutic techniques."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 