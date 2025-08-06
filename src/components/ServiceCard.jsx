import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features, price, duration }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {features && (
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="border-t border-gray-100 pt-6">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">${price}</span>
              <span className="text-gray-500 text-sm ml-1">/session</span>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 