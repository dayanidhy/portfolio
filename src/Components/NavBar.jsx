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
          <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
          {/* Renamed Notes to Stack to be more relevant */}
          <a href="#work" className="hover:text-purple-400 transition-colors">Stack</a> 
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        </div>

        {/* CTA BUTTON - Scrolls to Contact */}
        <a 
          href="#contact"
          className="hidden md:block px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Let's Talk
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