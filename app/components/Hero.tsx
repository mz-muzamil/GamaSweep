"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Gradient Background - Success.ai Style */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F3FF]/60 via-white/90 to-white rounded-3xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F0F3FF]/20 to-transparent rounded-3xl -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#485BFF]/3 via-[#F0F3FF]/10 to-transparent rounded-3xl -z-10"></div>
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-[#485BFF]/4 via-transparent to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-[#15F5BA]/4 via-transparent to-transparent rounded-full blur-3xl -z-10"></div>
      
      <div className="relative z-10">
        {/* Badge */}
        <motion.div 
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2.5 rounded-full text-sm font-body-bold font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            700M+ PROFESSIONALS
          </div>
        </motion.div>

        {/* Profile Cards and Main Content */}
        <div className="relative mb-16 min-h-[400px]">
          {/* Left Profile Card - Absolute Position */}
          <motion.div 
            className="hidden lg:block absolute -left-4 xl:-left-8 top-20 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-body-bold font-semibold text-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-body-bold font-semibold text-[#15182F] text-sm truncate">Benjamin Lopez</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-body-bold font-semibold flex-shrink-0">Verified</span>
                </div>
                <div className="text-xs text-gray-600 truncate">benjamin@airbnb.com</div>
                <div className="text-xs text-gray-500">Lead Designer</div>
              </div>
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="text-center px-4 lg:px-20 xl:px-32 relative z-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-header text-[#15182F] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Find and Win Your <span className="text-[#485BFF]">Ideal Customers</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl font-body text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join the world's first platform offering unlimited and accurate access to 700M+ contacts. Reach anyone, anywhere, anytime with AI.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-5xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-full shadow-xl border border-gray-200 p-2.5">
                <div className="flex-1 flex items-center gap-3 px-5 py-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search by name, company, or email"
                    className="flex-1 outline-none text-gray-700 font-body text-base"
                  />
                </div>
                <motion.button 
                  className="px-8 py-3 bg-[#485BFF] text-white rounded-full font-body-bold font-semibold hover:bg-[#2E29A6] transition-all duration-200 shadow-lg cursor-pointer whitespace-nowrap text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Free Search
                </motion.button>
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-body-bold font-semibold">246 Reviews</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 font-body-bold font-semibold">G 175 Reviews</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Profile Card - Absolute Position */}
          <motion.div 
            className="hidden lg:block absolute -right-4 xl:-right-8 top-20 bg-white rounded-xl p-4 shadow-lg border border-gray-100 z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-body-bold font-semibold text-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-pink-500 to-rose-600"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-body-bold font-semibold text-[#15182F] text-sm truncate">Chloe Garcia</span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-body-bold font-semibold flex-shrink-0">Verified</span>
                </div>
                <div className="text-xs text-gray-600 truncate">chloe.garcia@netflix.com</div>
                <div className="text-xs text-gray-500">Sales Manager</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* UI Elements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Information Card */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
            <h3 className="font-body-bold font-semibold text-[#15182F] mb-4">Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-700">henry.arthur@info.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-gray-700">(217) 555-0113</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-body-bold font-semibold">in</div>
                <span className="text-sm text-gray-700">Henry Art</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-xs text-gray-600 mb-1">General Electric</div>
              <div className="text-sm font-body-bold font-semibold text-[#15182F]">Business Sales Executive</div>
              <div className="text-xs text-gray-500">March 2015 – October 2024</div>
            </div>
          </motion.div>

          {/* Email Performance Card */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </div>
            <h3 className="font-body-bold font-semibold text-[#15182F] mb-4">Warmup email sent</h3>
            <div className="flex gap-4 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-gray-600">Landed in spam</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-gray-600">Landed in inbox</span>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                { day: 'Sun', spam: 35, inbox: 65 },
                { day: 'Mon', spam: 20, inbox: 80 },
                { day: 'Tue', spam: 25, inbox: 75 },
                { day: 'Wed', spam: 45, inbox: 55 },
                { day: 'Thu', spam: 30, inbox: 70 },
                { day: 'Fri', spam: 15, inbox: 85 },
              ].map((item) => (
                <div key={item.day} className="flex items-center gap-3">
                  <div className="w-10 text-xs text-gray-600 font-body">{item.day}</div>
                  <div className="flex-1 h-5 bg-gray-100 rounded overflow-hidden flex">
                    <div 
                      className="bg-purple-500 h-full" 
                      style={{ width: `${item.spam}%` }}
                    ></div>
                    <div 
                      className="bg-orange-500 h-full" 
                      style={{ width: `${item.inbox}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
