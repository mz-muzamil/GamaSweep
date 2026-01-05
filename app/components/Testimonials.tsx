"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { 
      quote: "I have used Trickly to help my team reach 3x productivity. Trickly is a breath of fresh air. Our project management teams are obsessed with Trickly and use it every single day to hit their goals. I would recommend this platform to anyone who is serious about growing their teams aggressively.",
      name: "Sarah Johnson",
      role: "Leading Project Management Agency"
    },
    { 
      quote: "I've used Trickly to organize our workflow, and grow our team collaboration to win deals like major enterprise clients. Trickly has been instrumental for my fast growing technology startup, I don't know where I would be without the power of Trickly.",
      name: "Michael Chen",
      role: "Founder, CEO of TechFlow"
    },
    { 
      quote: "Trickly has been a game changer for our operations division in managing projects leveraging the robust task management and collaboration features. Our entire organization is empowered by the power of Trickly and we are excited to continue rolling its usage out to other divisions.",
      name: "Emily Rodriguez",
      role: "Operations Director | Global Corp"
    },
    { 
      quote: "Trickly has been an integral part of our workflow stack. We're a rapidly growing SaaS company. I've been using Trickly since it launched. I used to use other platforms, but there is not a better solution for the price. My entire organization uses Trickly for project management and team collaboration. Thank you for always over delivering Trickly!",
      name: "David Kim",
      role: "Founder, CEO - CloudSync AI"
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">
            Join the world's leading teams using Trickly to transform their workflow
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-[#485BFF] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.quote}"</p>
              <div>
                <div className="font-body-bold font-semibold text-[#15182F]">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
