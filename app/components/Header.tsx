"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import desktopLogo from "../desktop_logo.png";
import mediumLogo from "../medium_logo.png";
import smallLogo from "../small_logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between h-16 min-h-[64px] px-3 sm:px-4 lg:px-6 gap-2 sm:gap-4 overflow-hidden">
          <div className="flex items-center flex-shrink-0">
            {/* Desktop Logo - Large screens (lg and above) */}
            <Image
              src={desktopLogo}
              alt="Trickly Logo"
              width={200}
              height={60}
              className="hidden lg:block h-6 w-auto object-contain"
              priority
              quality={100}
            />
            {/* Medium Logo - Tablets (md to lg) */}
            <Image
              src={mediumLogo}
              alt="Trickly Logo"
              width={150}
              height={50}
              className="hidden md:block lg:hidden h-9 w-auto object-contain"
              priority
              quality={100}
            />
            {/* Small Logo - Mobile (below md) */}
            <Image
              src={smallLogo}
              alt="Trickly Logo"
              width={120}
              height={40}
              className="block md:hidden h-8 w-auto object-contain"
              priority
              quality={100}
            />
          </div>
          {/* Desktop Navigation - Large screens (lg and above) */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1 justify-center mx-2 xl:mx-8 min-w-0">
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center cursor-pointer rounded-full px-3 py-1 hover:bg-[#F0F3FF] text-sm">
                Products
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center cursor-pointer rounded-full px-3 py-1 hover:bg-[#F0F3FF] text-sm">
                Solutions
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#pricing" className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-full px-3 py-1 hover:bg-[#F0F3FF] text-sm">Pricing</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center cursor-pointer rounded-full px-3 py-1 hover:bg-[#F0F3FF] text-sm">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center cursor-pointer rounded-full px-3 py-1 hover:bg-[#F0F3FF] text-sm">
                Company
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
          
          {/* Medium Navigation - Tablets and small laptops (md to lg) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-center mx-2 min-w-0">
            <a href="#pricing" className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-full px-2 py-1 hover:bg-[#F0F3FF] text-xs">Pricing</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center cursor-pointer rounded-full px-2 py-1 hover:bg-[#F0F3FF] text-xs">
                More
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            {/* Desktop buttons - Large screens (lg and above) */}
            <button className="hidden xl:block px-3 py-2 text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-full hover:scale-105 font-body text-sm">
              Login
            </button>
            <button className="hidden lg:block px-3 xl:px-4 py-2 bg-[#485BFF] text-white rounded-full hover:bg-[#2E29A6] transition-all duration-200 text-xs xl:text-sm font-body-bold cursor-pointer hover:scale-105 hover:shadow-lg transform whitespace-nowrap">
              <span className="hidden xl:inline">Get Started for FREE</span>
              <span className="xl:hidden">Get Started</span>
            </button>
            
            {/* Medium screens (md to lg) - Compact buttons */}
            <button className="hidden md:block lg:hidden px-3 py-2 bg-[#485BFF] text-white rounded-full hover:bg-[#2E29A6] transition-all duration-200 text-xs font-body-bold cursor-pointer hover:scale-105 hover:shadow-lg transform whitespace-nowrap">
              Get Started
            </button>
            
            {/* Mobile Get Started button */}
            <button className="md:hidden px-3 py-2 bg-[#485BFF] text-white rounded-full hover:bg-[#2E29A6] transition-all duration-200 text-xs font-body-bold cursor-pointer hover:scale-105 hover:shadow-lg transform whitespace-nowrap">
              Get Started
            </button>
            
            {/* Burger Menu Button - Mobile and Medium screens */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-full hover:bg-[#F0F3FF]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-100 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col px-4 py-4 space-y-2">
                <button className="text-left text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center justify-between cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                  Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="text-left text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center justify-between cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                  Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                  Pricing
                </a>
                <button className="text-left text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center justify-between cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                  Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="text-left text-gray-700 hover:text-[#485BFF] transition-all duration-200 flex items-center justify-between cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                  Company
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="pt-2 border-t border-gray-100 mt-2">
                  <button className="w-full text-left text-gray-700 hover:text-[#485BFF] transition-all duration-200 cursor-pointer rounded-lg px-4 py-3 hover:bg-[#F0F3FF] font-body">
                    Login
                  </button>
                  <button className="w-full mt-2 px-4 py-3 bg-[#485BFF] text-white rounded-lg hover:bg-[#2E29A6] transition-all duration-200 font-body-bold cursor-pointer">
                    Get Started for FREE
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
