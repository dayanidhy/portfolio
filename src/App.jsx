import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import BentoGrid from './Components/BentoGrid';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen w-full text-white selection:bg-white selection:text-black">
      <NavBar />
      
      {/* 1. HERO */}
      <Hero />
      
      {/* 2. WORK SECTION (Linked to #work) */}
      <section id="work">
        <BentoGrid />
      </section>

      {/* 3. STACK/NOTES (Linked to #stack) */}
      {/* Ideally, put your Tech Stack grid here, or link it to BentoGrid for now */}
      
      {/* 4. CONTACT SECTION (Linked to #contact) */}
      <section id="contact">
        <Contact />
      </section>

      {/* 5. ABOUT (Linked to Footer for now) */}
      <section id="about">
        <Footer />
      </section>
      
    </main>
  );
}