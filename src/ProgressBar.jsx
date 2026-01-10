import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// 1. Register the plugin
gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
  const barRef = useRef(null);

  useGSAP(() => {
    // 2. Animate scaleX from 0 to 1 based on total scroll
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none", // Important: Linear ease for scrubbers
      scrollTrigger: {
        trigger: document.documentElement, // The whole page
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Smooth scrubbing (lag)
      }
    });
  });

  return (
    <div 
      ref={barRef}
      className="fixed top-0 left-0 w-full h-1 bg-purple-500 z-[100] origin-left scale-x-0" 
      // 'origin-left' makes it grow from left to right
    />
  );
}