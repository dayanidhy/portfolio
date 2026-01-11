import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function NavBar() {
  const navbar = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuTl = useRef();

  useGSAP(() => {
    gsap.from(".nav-bar", {
        y: -20,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    });

    menuTl.current = gsap.timeline({ paused: true })
        .to(".mobile-menu-overlay", {
            height: "100vh",
            duration: 0.5,
            ease: "power3.inOut"
        })
        .from(".mobile-link", {
            y: 30,
            opacity: 0,
            duration: 0.5,
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

  // Helper to close menu when a mobile link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) toggleMenu();
  };

  return (
    <div ref={navbar}>
      <nav className="nav-bar fixed flex justify-between items-center top-0 w-full px-6 py-6 z-50 mix-blend-difference text-white">
        
        {/* LOGO - Scrolls to Top */}
        <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          Dayanidhi<span className="text-purple-500">.dev</span>
        </a>
        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide">
          <a href="#work" className="group relative h-4 overflow-hidden block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Work</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-purple-500">Work</span>
          </a>
          <a href="#stack" className="group relative h-4 overflow-hidden block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Stack</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-purple-500">Stack</span>
          </a>
          <a href="#about" className="group relative h-4 overflow-hidden block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">About</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-purple-500">About</span>
          </a>
          <a href="#contact" className="group relative h-4 overflow-hidden block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">Contact</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full text-purple-500">Contact</span>
          </a>
        </div>

        {/* CTA BUTTON - Scrolls to Contact */}
        <a 
          href="#contact"
          className="group relative hidden md:inline-flex h-10 items-center justify-center px-6 bg-white overflow-hidden rounded-full transition-colors duration-300 hover:bg-purple-500"
        >
          {/* 1. ORIGINAL TEXT (Black - Slides UP) */}
          <span className="absoulute w-full h-full block flex items-center justify-center text-black text-xs font-bold uppercase tracking-widest transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
            Let's Talk
          </span>

          {/* 2. NEW TEXT (White - Slides IN from Bottom) */}
          <span className="absolute w-full h-full flex items-center justify-center text-white text-xs font-bold uppercase tracking-widest transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0">
            Let's Talk
          </span>
        </a>

        {/* MOBILE HAMBURGER */}
        <button onClick={toggleMenu} className="md:hidden relative z-50 text-white mix-blend-difference">
          {isMenuOpen ? (
            <span className="text-sm font-bold">CLOSE</span>
          ) : (
            <span className="text-sm font-bold">MENU</span>
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className="mobile-menu-overlay fixed top-0 left-0 w-full h-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center overflow-hidden">
         <div className="flex flex-col gap-10 text-4xl font-bold text-center tracking-tighter">
            <a href="#work" onClick={handleLinkClick} className="mobile-link hover:text-purple-500 transition-colors">Work</a>
            <a href="#work" onClick={handleLinkClick} className="mobile-link hover:text-purple-500 transition-colors">Stack</a>
            <a href="#about" onClick={handleLinkClick} className="mobile-link hover:text-purple-500 transition-colors">About</a>
            <a href="#contact" onClick={handleLinkClick} className="mobile-link hover:text-purple-500 transition-colors">Contact</a>
         </div>
      </div>
    </div>
  )
}