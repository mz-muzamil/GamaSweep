"use client";

import { motion } from "framer-motion";

export default function Solutions() {
  const solutions = [
    { title: "Sales Leaders", desc: "Trickly: The #1 Platform for Sales Leaders to Seamlessly Manage Deals and Drive Revenue" },
    { title: "Project Managers", desc: "Maximizing Project Success with Advanced Planning, Tracking, and Team Coordination" },
    { title: "Startups", desc: "Startups Use Trickly to Organize, Collaborate and Scale Their Teams Globally" },
    { title: "Marketing Agencies", desc: "Helping Marketing Agencies Streamline Campaigns, Win More Clients & Deliver Results 24/7" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for teams of all sizes and industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-[#F0F3FF] to-white rounded-xl p-6 border border-[#F0F3FF] hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-header text-[#15182F] mb-3">{solution.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{solution.desc}</p>
              <a href="#" className="inline-block mt-4 text-[#485BFF] font-body-bold font-semibold hover:text-[#2E29A6] text-sm transition-all duration-200 cursor-pointer hover:translate-x-1">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
