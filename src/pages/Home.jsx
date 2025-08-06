import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, BookOpen, ArrowRight, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import HeroBackground from '../assets/Hero1.jpg';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const therapySteps = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Reach out through contact form, email, or WhatsApp. I'll respond within 24–48 hours."
    },
    {
      step: "2", 
      title: "First Session",
      description: "A 60-minute assessment session where we explore your concerns, background, and goals."
    },
    {
      step: "3",
      title: "Personalized Plan", 
      description: "We'll develop a therapy plan tailored to your specific needs and goals."
    },
    {
      step: "4",
      title: "Ongoing Therapy",
      description: "Regular sessions focused on healing, growth, and emotional regulation."
    },
    {
      step: "5",
      title: "Progress Review",
      description: "We'll check progress and adjust the plan as needed for optimal results."
    },
    {
      step: "6",
      title: "Closure or Support",
      description: "Plan for healthy closure or long-term support depending on your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Heading */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroBackground})`
          }}
        />
        {/* Improved Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-green-100/60 to-white/80" />
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[70vh] mt-12">
          {/* Animated Heading with Per-Word Animation */}
          <motion.h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight tracking-wide drop-shadow-xl shadow-blue-100/40 flex flex-wrap justify-center gap-x-2 gap-y-2"
            initial="initial"
            animate="animate"
            variants={{}}
            style={{ textShadow: '0 4px 24px rgba(59,130,246,0.08)' }}
          >
            {[
              { word: 'Welcome', anim: { y: 40, opacity: 0, scale: 0.8 }, to: { y: 0, opacity: 1, scale: 1 } },
              { word: 'to', anim: { y: -40, opacity: 0, scale: 1.2 }, to: { y: 0, opacity: 1, scale: 1 } },
              { word: 'a', anim: { x: -40, opacity: 0, rotate: -10 }, to: { x: 0, opacity: 1, rotate: 0 } },
              { word: 'Safe', anim: { x: 40, opacity: 0, scale: 0.7 }, to: { x: 0, opacity: 1, scale: 1 } },
              { word: 'Space', anim: { y: 40, opacity: 0, scale: 1.1 }, to: { y: 0, opacity: 1, scale: 1 } },
              { word: 'for', anim: { y: -40, opacity: 0, scale: 0.8 }, to: { y: 0, opacity: 1, scale: 1 } },
              { word: 'Your', anim: { x: 40, opacity: 0, rotate: 10 }, to: { x: 0, opacity: 1, rotate: 0 } },
              { word: 'Mind', anim: { y: 40, opacity: 0, scale: 0.8 }, to: { y: 0, opacity: 1, scale: 1 } },
              { word: 'and', anim: { x: -40, opacity: 0, scale: 1.2 }, to: { x: 0, opacity: 1, scale: 1 } },
              { word: 'Emotions', anim: { y: -40, opacity: 0, scale: 0.7 }, to: { y: 0, opacity: 1, scale: 1 } },
            ].map((item, idx) => (
              <motion.span
                key={item.word + idx}
                initial={item.anim}
                animate={item.to}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + idx * 0.13,
                  type: 'spring',
                  stiffness: 120,
                  damping: 18
                }}
                className={
                  idx >= 7
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-500 to-blue-700'
                    : 'text-gray-800'
                }
                style={{ display: 'inline-block', marginRight: 8 }}
              >
                {item.word}
              </motion.span>
            ))}
          </motion.h1>
          {/* Animated Subheading */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-blue-900/80 mb-10 max-w-2xl mx-auto leading-relaxed font-normal md:text-justify lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
Hi, I'm a qualified psychologist dedicated to helping individuals, couples, and families find clarity, strength, and emotional well-being. Whether you're seeking support for personal struggles, relationship issues, or your child’s behavior, I provide professional, evidence-based therapy in a compassionate and nonjudgmental space.
          </motion.p>
          {/* Enhanced Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Link to="/services">
              <motion.button
                className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-2xl hover:from-green-500 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-blue-200"
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(34,197,94,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.12)' }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/booking">
              <motion.button
                className="bg-white border-2 border-blue-400 text-blue-700 px-8 py-4 rounded-full font-semibold text-base hover:bg-blue-50 hover:text-blue-900 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18), 0 1.5px 8px 0 rgba(34,197,94,0.12)' }}
                whileTap={{ scale: 0.98 }}
              >
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-green-50/30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100/20 rounded-full translate-y-40 -translate-x-40" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full px-6 py-3 mb-6"
            >
              <Brain className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Professional Expertise</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-6">👩‍⚕️ About Me</h2>
            <h3 className="text-2xl text-blue-600 font-semibold mb-4">Meet Your Therapist</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I hold a Master's and Bachelor's degree in Psychology, with a strong foundation in clinical and counseling skills. I'm certified in Clinical Psychology from HLPS, and trained in Cognitive Behavioral Therapy (CBT) and Rational Emotive Behavior Therapy (REBT)—evidence-based approaches known for their effectiveness in treating a wide range of emotional and behavioral issues.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                I am also a proud member of the American Psychological Association (APA), which helps me stay updated with international ethical standards and modern therapeutic techniques.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                My approach is client-centered, empathetic, and results-oriented. I believe that each person is unique, and I tailor therapy to suit your specific needs and goals.
              </motion.p>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-xl border border-blue-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Clinical Expertise</h4>
                  <p className="text-sm text-gray-600">CBT & REBT Trained</p>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Client-Centered</h4>
                  <p className="text-sm text-gray-600">Empathetic Approach</p>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">APA Member</h4>
                  <p className="text-sm text-gray-600">Professional Standards</p>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Evidence-Based</h4>
                  <p className="text-sm text-gray-600">Proven Methods</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200/20 rounded-full translate-x-40 translate-y-40" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Comprehensive Care</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-6">💼 Services</h2>
            <h3 className="text-2xl text-blue-600 font-semibold mb-4">Therapy & Counseling Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 group"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">🧠 Individual Therapy</h4>
              <p className="text-gray-600 leading-relaxed">Support for emotional concerns like anxiety, depression, stress, trauma, and self-esteem.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-pink-100 group"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">💑 Couple Counseling</h4>
              <p className="text-gray-600 leading-relaxed">Improve communication, rebuild trust, resolve conflicts, and strengthen emotional connection.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 group"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">👨‍👩‍👧‍👦 Child & Adolescent Counseling</h4>
              <p className="text-gray-600 leading-relaxed">Age-appropriate therapy for behavioral issues, academic stress, low self-esteem, bullying, emotional regulation, and parent-child dynamics.</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100 group"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">🎯 Career Counseling</h4>
              <p className="text-gray-600 leading-relaxed">Explore career paths, academic planning, skill development, and personal strengths.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/services">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-10 py-5 rounded-full font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center gap-3 mx-auto shadow-xl hover:shadow-2xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Assessment Services */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50/30" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-100/20 rounded-full -translate-y-1/2 -translate-x-48" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6"
            >
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="text-purple-800 font-semibold">Psychological Assessment</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-6">🧪 Assessment & Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding yourself is the first step toward positive change. I offer psychological assessments to help you gain valuable insights into your mind and behavior.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl border border-blue-200 group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">📊 IQ Testing</h4>
              <p className="text-gray-600 leading-relaxed">Assess cognitive abilities including memory, reasoning, attention, and problem-solving.</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl border border-green-200 group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">💡 Emotional Intelligence Assessment</h4>
              <p className="text-gray-600 leading-relaxed">Understand your emotional awareness, regulation, empathy, and social skills.</p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl border border-purple-200 group"
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">🧩 Personality Assessment</h4>
              <p className="text-gray-600 leading-relaxed">Gain insights into personality traits, interpersonal style, and behavioral patterns using standardized tools.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All assessments are followed by detailed reports and professional feedback to help guide personal growth, therapy, or academic/career planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Techniques */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full -translate-x-40 translate-y-40" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <Heart className="w-6 h-6 text-green-600" />
              <span className="text-green-800 font-semibold">Evidence-Based Methods</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-6">💬 Therapeutic Techniques</h2>
            <p className="text-xl text-gray-600">
              I use a combination of therapeutic techniques based on your goals and preferences:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Cognitive Behavioral Therapy (CBT)",
              "Rational Emotive Behavior Therapy (REBT)",
              "Psychoeducation & Insight-Oriented Therapy",
              "Mindfulness-Based Strategies",
              "Child-Centered Play Therapy (for younger clients)"
            ].map((technique, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4 group hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-gray-700 font-medium leading-relaxed">{technique}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Therapy Process */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/20 rounded-full translate-x-48" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full px-6 py-3 mb-6"
            >
              <ArrowRight className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Your Journey</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-gray-800 mb-6">🌀 Therapy Process Overview</h2>
            <h3 className="text-2xl text-blue-600 font-semibold mb-4">What to Expect When You Begin Therapy</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
              Starting therapy can feel overwhelming, especially if it's your first time. Here's a simple step-by-step breakdown of how I work with clients:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {therapySteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 relative shadow-xl border border-blue-100 group"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4 mt-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-40 translate-y-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8"
            >
              <Heart className="w-6 h-6 text-white" />
              <span className="text-white font-semibold">Begin Your Journey</span>
            </motion.div>
            
            <h2 className="text-5xl font-bold text-white mb-8">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Take the first step toward mental wellness and emotional well-being. Book your session today.
            </p>
            <Link to="/booking">
              <motion.button 
                className="bg-white text-blue-600 px-12 py-6 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-3 mx-auto shadow-2xl hover:shadow-3xl transform hover:scale-105 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your First Session
                <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 