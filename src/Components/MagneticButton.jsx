import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MagneticButton({ children }) {
  const buttonRef = useRef(null);

  useGSAP(() => {
    const button = buttonRef.current;
    
    // The "Spring" effect (QuickTo is best for mouse movement)
    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = button.getBoundingClientRect();
      
      // Calculate center
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // The Math: Distance from center / 5 (To make it subtle)
      const x = (clientX - centerX) / 5;
      const y = (clientY - centerY) / 5;

      xTo(x);
      yTo(y);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: buttonRef });

  return (
    <button 
      ref={buttonRef}
      className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-colors"
    >
      {children}
    </button>
  );
}