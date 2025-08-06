import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, BookOpen, Heart, Brain } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Support a Child Struggling Emotionally",
      excerpt: "Learn effective strategies to help children navigate their emotions, build resilience, and develop healthy coping mechanisms. This comprehensive guide covers age-appropriate techniques for supporting children through difficult emotional experiences.",
      category: "Child Psychology",
      readTime: "8 min read",
      date: "March 15, 2024",
      image: "child-emotion",
      tags: ["Child Development", "Emotional Support", "Parenting"]
    },
    {
      id: 2,
      title: "Is Your Relationship Emotionally Healthy?",
      excerpt: "Discover the key indicators of a healthy relationship and learn how to assess the emotional well-being of your partnership. This article provides practical tools and insights for building stronger, more fulfilling relationships.",
      category: "Relationships",
      readTime: "10 min read",
      date: "March 10, 2024",
      image: "relationship-health",
      tags: ["Relationships", "Communication", "Emotional Health"]
    },
    {
      id: 3,
      title: "Signs You May Benefit from Therapy",
      excerpt: "Recognize the subtle and not-so-subtle signs that therapy could be beneficial for you. From persistent stress to life transitions, learn when seeking professional help is the right choice for your mental wellness.",
      category: "Mental Health",
      readTime: "6 min read",
      date: "March 5, 2024",
      image: "therapy-signs",
      tags: ["Mental Health", "Self-Care", "Therapy"]
    }
  ];

  const categories = [
    { name: "Child Psychology", count: 5, icon: Heart },
    { name: "Relationships", count: 8, icon: Heart },
    { name: "Mental Health", count: 12, icon: Brain },
    { name: "Self-Care", count: 6, icon: BookOpen }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              📚 Blog / Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educational articles, mental health insights, and practical tips to support your journey toward 
              emotional well-being. Explore evidence-based information written to help you understand yourself 
              and others better.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Posts */}
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
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based insights and practical advice for mental wellness and personal growth
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Blog post image placeholder</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
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
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find articles that match your interests and current needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.count} articles
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to receive the latest mental health insights, tips, and new articles directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <motion.button
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
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
              More Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore additional resources to support your mental wellness journey
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Free Resources</h3>
              <p className="text-gray-600 mb-6">
                Download free worksheets, guides, and tools to support your mental health journey.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Browse Resources →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Self-Care Tips</h3>
              <p className="text-gray-600 mb-6">
                Practical self-care strategies and mindfulness exercises you can practice at home.
              </p>
              <button className="text-green-600 hover:text-green-700 font-semibold">
                Explore Tips →
              </button>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <Brain className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mental Health Education</h3>
              <p className="text-gray-600 mb-6">
                Learn about different mental health conditions and evidence-based treatment approaches.
              </p>
              <button className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Take the Next Step?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              While reading about mental health is valuable, sometimes professional support is what you need. 
              I'm here to help you on your journey toward emotional well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <motion.button
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Session
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
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

export default Blog; 