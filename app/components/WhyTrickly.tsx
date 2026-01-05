"use client";

import CounterStat from "./CounterStat";

export default function WhyTrickly() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-header text-[#15182F] mb-4">Why Trickly?</h2>
        </div>

        {/* Awards */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <div className="text-center">
            <div className="text-sm font-body-bold font-semibold text-gray-600 mb-2">Software Advice</div>
            <div className="text-xs text-gray-500">Front Runners 2024</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-body-bold font-semibold text-gray-600 mb-2">GetApp</div>
            <div className="text-xs text-gray-500">Category Leaders 2024</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-body-bold font-semibold text-gray-600 mb-2">Product Hunt</div>
            <div className="text-xs text-gray-500">Product of the Day 2024</div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <CounterStat 
            end={10000} 
            suffix="+" 
            label="Teams using Trickly"
          />
          <CounterStat 
            end={50000} 
            suffix="+" 
            label="Active users"
          />
          <div className="text-center">
            <div className="text-5xl font-header text-[#485BFF] mb-2">24/7</div>
            <div className="text-gray-600">Live support to help you succeed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
