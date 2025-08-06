import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { 
  Brain, 
  Heart, 
  Users, 
  BookOpen, 
  BarChart3, 
  Lightbulb, 
  UserCheck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const therapyServices = [
    {
      icon: Brain,
      title: "🧠 Individual Therapy",
      description: "Support for emotional concerns like anxiety, depression, stress, trauma, and self-esteem.",
      features: [
        "Personalized treatment plans",
        "Evidence-based approaches",
        "Safe, confidential environment",
        "Progress tracking"
      ],
      price: "150",
      duration: "50-60 minutes"
    },
    {
      icon: Heart,
      title: "💑 Couple Counseling",
      description: "Improve communication, rebuild trust, resolve conflicts, and strengthen emotional connection.",
      features: [
        "Communication skills training",
        "Conflict resolution strategies",
        "Trust rebuilding techniques",
        "Relationship strengthening"
      ],
      price: "180",
      duration: "60-75 minutes"
    },
    {
      icon: Users,
      title: "👨‍👩‍👧‍👦 Child & Adolescent Counseling",
      description: "Age-appropriate therapy for behavioral issues, academic stress, low self-esteem, bullying, emotional regulation, and parent-child dynamics.",
      features: [
        "Age-appropriate techniques",
        "Play therapy for younger clients",
        "Parent consultation included",
        "School collaboration when needed"
      ],
      price: "140",
      duration: "45-60 minutes"
    },
    {
      icon: BookOpen,
      title: "🎯 Career Counseling",
      description: "Explore career paths, academic planning, skill development, and personal strengths.",
      features: [
        "Career path exploration",
        "Academic planning guidance",
        "Skill assessment and development",
        "Personal strengths identification"
      ],
      price: "160",
      duration: "60 minutes"
    }
  ];

  const assessmentServices = [
    {
      icon: BarChart3,
      title: "📊 IQ Testing",
      description: "Assess cognitive abilities including memory, reasoning, attention, and problem-solving.",
      features: [
        "Comprehensive cognitive assessment",
        "Detailed analysis report",
        "Professional interpretation",
        "Recommendations for development"
      ],
      price: "200",
      duration: "2-3 hours"
    },
    {
      icon: Lightbulb,
      title: "💡 Emotional Intelligence Assessment",
      description: "Understand your emotional awareness, regulation, empathy, and social skills.",
      features: [
        "Emotional awareness evaluation",
        "Regulation skills assessment",
        "Empathy and social skills analysis",
        "Development strategies"
      ],
      price: "180",
      duration: "90 minutes"
    },
    {
      icon: UserCheck,
      title: "🧩 Personality Assessment",
      description: "Gain insights into personality traits, interpersonal style, and behavioral patterns using standardized tools.",
      features: [
        "Standardized personality tools",
        "Trait analysis and insights",
        "Interpersonal style assessment",
        "Behavioral pattern identification"
      ],
      price: "220",
      duration: "2-3 hours"
    }
  ];

  const therapeuticTechniques = [
    "Cognitive Behavioral Therapy (CBT)",
    "Rational Emotive Behavior Therapy (REBT)",
    "Psychoeducation & Insight-Oriented Therapy",
    "Mindfulness-Based Strategies",
    "Child-Centered Play Therapy (for younger clients)"
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
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Professional Services</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              💼 Services
            </h1>
            <h2 className="text-2xl text-blue-600 font-semibold mb-6">
              Therapy & Counseling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional, evidence-based therapy in a compassionate and nonjudgmental space. 
              Whether you're seeking support for personal struggles, relationship issues, or your child's behavior, 
              I provide comprehensive mental health services tailored to your unique needs.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Therapy Services */}
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
              Therapy & Counseling Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health support for individuals, couples, and families
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {therapyServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Assessment Services */}
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
              🧪 Assessment & Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding yourself is the first step toward positive change. I offer psychological assessments 
              to help you gain valuable insights into your mind and behavior.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {assessmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All assessments are followed by detailed reports and professional feedback to help guide personal growth, 
              therapy, or academic/career planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Therapeutic Techniques */}
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
              💬 Therapeutic Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I use a combination of therapeutic techniques based on your goals and preferences:
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {therapeuticTechniques.map((technique, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-md flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{technique}</span>
              </motion.div>
            ))}
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step toward mental wellness and emotional well-being. Book your session today.
            </p>
            <Link to="/booking">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Session
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 