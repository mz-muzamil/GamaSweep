"use client";

import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    { q: "Can I try the platform before committing?", a: "Yes! You can explore the platform with our free trial and access all features firsthand." },
    { q: "How many team members can I add?", a: "Team member limits depend on your plan—upgrade for increased team size limits." },
    { q: "What integrations are available?", a: "You can integrate with popular tools like Slack, Google Workspace, Microsoft Teams, and more using our API." },
    { q: "Is my team's data secure?", a: "Yes, we use enterprise-grade security with encryption, regular backups, and compliance with industry standards." },
    { q: "Do you offer solutions for large organizations?", a: "Yes, we offer enterprise plans with custom features, dedicated support, and advanced security options." },
    { q: "Are there discounts for yearly plans?", a: "Yes, we offer discounts for annual subscriptions, giving you the best value." },
    { q: "What kind of support do you provide?", a: "We provide 24/7 live support, comprehensive documentation, and dedicated account managers for enterprise customers." },
    { q: "Have more questions?", a: "Check out our Help Center or contact our support team for additional assistance." },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">FAQ's</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] transform"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-body-bold font-semibold text-[#15182F] mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
                <svg className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
