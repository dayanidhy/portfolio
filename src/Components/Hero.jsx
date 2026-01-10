import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const container = useRef();
  const codeCardRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Hero Text Reveal (Elegant Slide Up)
    tl.from(".hero-text", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power3.out"
    });

    // 2. Code Card Tilt & Float Entrance
    tl.from(codeCardRef.current, {
      y: 100,
      opacity: 0,
      rotateX: -10,
      duration: 1.5,
      ease: "power2.out"
    }, "-=0.8");

    // 3. Infinite Floating Animation for the Card
    gsap.to(codeCardRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: container });

  return (
    <header ref={container} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-30 md:pt-20 relative z-10 overflow-hidden">
        
        {/* BACKGROUND GLOW (Subtle & Deep) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* LEFT: The "Expensive" Copy */}
        <div className="md:w-1/2 flex flex-col items-start gap-8 z-20">
          
          <div className="hero-text flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
             Available for Freelance
          </div>

          <h1 className="hero-text text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
            I engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                digital physics.
            </span>
          </h1>
          
          <p className="hero-text text-xl text-zinc-400 max-w-lg leading-relaxed">
            I don't just center divs. I build interactive web experiences that feel instant, look expensive, and convert users.
          </p>

          <div className="hero-text flex gap-4 mt-2">
             <MagneticButton>
                View Selected Work
             </MagneticButton>
             
             <button className="px-8 py-4 bg-transparent border border-zinc-700 rounded-full text-white font-medium hover:bg-white hover:text-black transition-all">
                The Stack
             </button>
          </div>
        </div>

        {/* RIGHT: The "Glass Code" Card */}
        <div className="md:w-1/2 flex justify-center mt-16 md:mt-0 relative perspective-1000">
          
          {/* THE CARD */}
          <div 
            ref={codeCardRef}
            className="relative w-full max-w-md bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-y-12 rotate-z-2"
          >
            {/* Card Header (Mac Buttons) */}
            <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-auto text-xs text-zinc-600 font-mono">Hero.jsx</div>
            </div>

            {/* The Code Content (Visual Only) */}
            <div className="font-mono text-sm space-y-2">
                <div className="flex">
                    <span className="text-purple-400 mr-2">const</span>
                    <span className="text-yellow-200">Engineer</span>
                    <span className="text-white mx-2">=</span>
                    <span className="text-white">{`{`}</span>
                </div>
                <div className="pl-6 text-zinc-400">
                    name: <span className="text-green-400">'Dayanidhi'</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                    skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'GSAP'</span>],
                </div>
                <div className="pl-6 text-zinc-400">
                    hardWorker: <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-6 text-zinc-400">
                    problemSolver: <span className="text-orange-400">true</span>,
                </div>
                 <div className="pl-6 text-zinc-400">
                    hireable: <span className="text-blue-400">function</span>() {`{`}
                </div>
                <div className="pl-12 text-zinc-500">
                    return <span className="text-green-400">"Let's build magic"</span>;
                </div>
                <div className="pl-6 text-zinc-400">
                    {`}`}
                </div>
                <div className="text-white">{`}`}</div>
            </div>

            {/* Reflection Shine */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none rounded-2xl"></div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Scroll</span>
            <div className="w-[1px] h-8 bg-zinc-700"></div>
        </div>

    </header>
  )
}