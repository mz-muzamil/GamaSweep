"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Solutions from "./components/Solutions";
import WhyTrickly from "./components/WhyTrickly";
import Testimonials from "./components/Testimonials";
import BrowserExtension from "./components/BrowserExtension";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Products />
      <Solutions />
      <WhyTrickly />
      <Testimonials />
      <BrowserExtension />
      <Features />
      <FAQ />
      <BottomCTA />
      <Footer />
    </div>
  );
}
