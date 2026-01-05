"use client";

import { motion } from "framer-motion";

export default function BottomCTA() {
  return (
    <section className="bg-[#485BFF] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block bg-white/20 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-body-bold font-semibold">7-Day Free Trial • No Credit Card Needed</span>
          </div>
        </motion.div>
        <motion.h2 
          className="text-4xl md:text-5xl font-header text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Unlock unlimited access to team productivity features. Supercharge your growth now with Trickly!
        </motion.h2>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="px-8 py-4 bg-white text-[#485BFF] rounded-full font-body-bold font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transform">
            Book a Demo
          </button>
          <button className="px-8 py-4 bg-[#2E29A6] text-white rounded-full font-body-bold font-semibold text-lg hover:bg-blue-800 transition-all duration-200 shadow-lg border-2 border-white/20 cursor-pointer hover:scale-105 hover:shadow-xl transform">
            Get Started for FREE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
