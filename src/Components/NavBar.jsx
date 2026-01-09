import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function NavBar() {
  const navbar = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTl = useRef();

  useGSAP(() => {
    // Nav Slide In
    gsap.from(".nav-bar", {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: "elastic.out"
    });

    // Mobile Menu Timeline
    menuTl.current = gsap.timeline({ paused: true })
        .to(".mobile-menu-overlay", {
            height: "100vh",
            duration: 0.5,
            ease: "power3.inOut"
        })
        .from(".mobile-link", {
            y: 20,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1
        }, "-=0.3");

  }, { scope: navbar });

  const toggleMenu = () => {
    if (!isMenuOpen) {
        menuTl.current.play();
    } else {
        menuTl.current.reverse();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Removed bg-black from here. This ref now just wraps the logic.
    <div ref={navbar}> 
      
      <nav className="nav-bar fixed flex justify-between items-center top-0 w-full p-6 border-b border-white/5 z-50 bg-black/20 backdrop-blur-xl bg-[#030014]/50">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer select-none group">
          Dayanidhi<span className="text-zinc-500 group-hover:text-white transition-colors duration-300">
            .dev
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Notes</a>
        </div>

        <button className="hidden md:block px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300">
          Let's Talk
        </button>

        <button onClick={toggleMenu} className="md:hidden relative z-50 p-2 text-white focus:outline-none">
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </nav>

      <div className="mobile-menu-overlay fixed top-0 left-0 w-full h-0 bg-transparent backdrop-blur-3xl z-40 flex flex-col items-center justify-center overflow-hidden">
         <div className="flex flex-col gap-8 text-2xl font-bold text-center">
            <a href="#" onClick={toggleMenu} className="mobile-link hover:text-purple-500">Work</a>
            <a href="#" onClick={toggleMenu} className="mobile-link hover:text-purple-500">About</a>
            <a href="#" onClick={toggleMenu} className="mobile-link hover:text-purple-500">Notes</a>
         </div>
      </div>
    </div>
  )
}