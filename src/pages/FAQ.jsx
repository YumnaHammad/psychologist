import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQAccordion from '../components/FAQAccordion';
import { ArrowRight, Shield, Users, Globe, FileText, UserCheck, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What kind of clients do you work with?",
      answer: "Individuals, couples, adolescents, and children (ages 8+), addressing a wide range of concerns including anxiety, depression, stress, trauma, relationship issues, behavioral problems, academic stress, and life transitions."
    },
    {
      question: "Do you offer online therapy?",
      answer: "Yes. Secure and confidential online sessions are available through encrypted, secure platforms. Online therapy offers the same level of professional care as in-person sessions, with the added convenience of attending from the comfort of your own space."
    },
    {
      question: "Are assessments valid for school or workplace use?",
      answer: "Yes, I use standardized tools with professional interpretation. All assessments are followed by detailed reports and professional feedback that can be used for academic planning, career development, or workplace accommodations when appropriate."
    },
    {
      question: "How should I prepare for the first session?",
      answer: "Just bring yourself. We'll begin with a relaxed, open conversation where we'll explore your concerns, background, and goals. There's no need to prepare anything specific - the first session is about getting to know each other and understanding how I can help you."
    },
    {
      question: "What is your confidentiality policy?",
      answer: "Your privacy is my top priority. All sessions are private and your information will never be shared without your written consent. Notes and records are stored securely and only accessible by me. Information shared in therapy is confidential, except in rare cases where there is risk of serious harm to you or someone else, if required by a court of law, or if there's a concern of abuse involving a child, elder, or vulnerable individual."
    },
    {
      question: "What are your cancellation policies?",
      answer: "Cancellations must be made at least 12 hours in advance. Late cancellations (under 12 hours) may be charged a 50% fee. No-shows may be charged in full. In the rare case I need to reschedule, I will notify you promptly."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Most therapy sessions are 50-60 minutes long, though couple counseling sessions may be 60-75 minutes. Assessment sessions vary in length depending on the type of assessment - IQ and personality assessments typically take 2-3 hours, while emotional intelligence assessments take about 90 minutes."
    },
    {
      question: "Do you offer sessions in languages other than English?",
      answer: "Yes, I offer sessions in both English and Urdu. This allows me to work effectively with clients who are more comfortable expressing themselves in their native language."
    },
    {
      question: "What therapeutic approaches do you use?",
      answer: "I use evidence-based approaches including Cognitive Behavioral Therapy (CBT), Rational Emotive Behavior Therapy (REBT), psychoeducation, insight-oriented therapy, mindfulness-based strategies, and child-centered play therapy for younger clients. The specific approach is tailored to your individual needs and goals."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone experiencing emotional distress, relationship difficulties, life transitions, or simply wanting to understand themselves better. If you're considering therapy, it's often a sign that it could be helpful. The best way to know is to schedule an initial consultation where we can discuss your specific situation and determine if therapy would be beneficial for you."
    }
  ];

  const confidentialityInfo = [
    "All sessions are private and your information will never be shared without your written consent",
    "Notes and records are stored securely and only accessible by me",
    "Online sessions are conducted through encrypted, secure platforms",
    "Information shared in therapy is confidential, except in rare cases where there is risk of serious harm to you or someone else, if required by a court of law, or if there's a concern of abuse involving a child, elder, or vulnerable individual"
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
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <span className="text-blue-800 font-semibold">Common Questions</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              ❓ FAQs
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about therapy, assessments, and my practice.
              If you don't see what you're looking for, feel free to reach out directly.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-8" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Confidentiality Section */}
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
              🔐 Confidentiality Policy
            </h2>
            <h3 className="text-xl text-blue-600 font-semibold mb-4">
              Your privacy is my top priority
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a professional psychologist, I am fully committed to protecting your confidentiality. 
              Here's how I ensure your privacy:
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Privacy Protection</h3>
              </div>
              <ul className="space-y-3">
                {confidentialityInfo.slice(0, 2).map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Secure Sessions</h3>
              </div>
              <ul className="space-y-3">
                {confidentialityInfo.slice(2).map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-8">
              If you have any concerns about confidentiality, please feel free to ask.
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm here to help. Reach out directly for personalized answers to your specific questions.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">About My Practice</h3>
              <p className="text-gray-600 text-sm">Learn more about my approach and qualifications</p>
              <Link to="/about" className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2 inline-block">
                Learn More →
              </Link>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Services & Pricing</h3>
              <p className="text-gray-600 text-sm">Explore my therapy and assessment services</p>
              <Link to="/services" className="text-green-600 hover:text-green-700 text-sm font-medium mt-2 inline-block">
                View Services →
              </Link>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Book a Session</h3>
              <p className="text-gray-600 text-sm">Ready to get started? Book your first session</p>
              <Link to="/booking" className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-2 inline-block">
                Book Now →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 