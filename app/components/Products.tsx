"use client";

import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#485BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Project Management",
      features: [
        "Unlimited projects & tasks",
        "Adaptive organization system",
        "Custom templates & workflows",
        "Real-time progress tracking"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#485BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Collaboration",
      features: [
        "Unified team workspace",
        "Real-time collaboration",
        "Comments & mentions",
        "Activity feeds & notifications"
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#485BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "AI Integration",
      features: [
        "AI-powered insights",
        "Smart task automation",
        "Predictive analytics",
        "Ask Trickly AI assistant"
      ]
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">Products</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-[#F0F3FF] rounded-lg flex items-center justify-center mb-6">
                {product.icon}
              </div>
              <h3 className="text-2xl font-header text-[#15182F] mb-4">{product.title}</h3>
              <ul className="space-y-3 font-body text-gray-600 mb-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-[#485BFF] font-body-bold font-semibold hover:text-[#2E29A6] transition-all duration-200 cursor-pointer inline-block hover:translate-x-1">Learn more →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
