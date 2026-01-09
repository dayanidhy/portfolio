import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import BentoGrid from './Components/BentoGrid';
import Footer from './Components/Footer';

export default function App() {
  return (
    // 1. GLOBAL WRAPPER: Force full height and black background
    <div className="bg-black min-h-screen w-full text-white font-sans overflow-x-hidden relative">
      
      {/* 2. BACKGROUND BLOBS: Moved here so they sit behind EVERYTHING */}
      {/* Top Left: Deep Violet */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Bottom Right: Deep Indigo (Neighbor to Violet) */}
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none z-0"></div>
      
      {/* 3. NAVBAR: Sits on top (z-50 is inside the component) */}
      <NavBar />
      
      {/* 4. HERO: The main content */}
      <Hero />
      <BentoGrid />

      <Footer />
      
    </div>
  )
}