"use client";

export default function BrowserExtension() {
  return (
    <section className="bg-[#485BFF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-header text-white mb-6">
              Trickly Browser Extension - It's Free!
            </h2>
            <p className="text-xl text-[#F0F3FF] mb-8">
              Access your projects, tasks, and team updates from any website. Stay productive without leaving your workflow.
            </p>
            <button className="px-8 py-4 bg-white text-[#485BFF] rounded-full font-body-bold font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105 hover:shadow-xl transform">
              Add to Chrome — it's free
            </button>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-[#96E9C6] rounded w-3/4"></div>
                <div className="h-4 bg-[#96E9C6] rounded w-1/2"></div>
                <div className="h-4 bg-[#96E9C6] rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
