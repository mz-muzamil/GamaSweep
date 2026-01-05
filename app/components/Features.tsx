"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    "Unlimited Projects",
    "Unlimited Tasks",
    "Team Collaboration",
    "AI-Powered Insights",
    "Custom Workflows",
    "Advanced Analytics"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">
            Truly unlimited team productivity platform.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dominate your projects. Maximize efficiency. Reduce costs. Achieve it all with Trickly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-[#F0F3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#485BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="font-body-bold font-semibold text-[#15182F]">{feature}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#485BFF] text-white rounded-full font-body-bold font-semibold text-lg hover:bg-[#2E29A6] transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transform">
            Get Started for FREE
          </button>
        </div>
      </div>
    </section>
  );
}
