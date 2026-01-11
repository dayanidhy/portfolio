import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MagneticButton from './MagneticButton';
import { Bug, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const container = useRef();
  const codeCardRef = useRef();
  const nameRef = useRef(null); // Ref for the flashlight name

  // FLASHLIGHT LOGIC
  const handleMouseMove = (e) => {
    if (!nameRef.current) return;
    
    const { left, top } = nameRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    nameRef.current.style.setProperty('--x', `${x}px`);
    nameRef.current.style.setProperty('--y', `${y}px`);
  };

  useGSAP(() => {
    // ... (Keep your existing GSAP animations here) ...
    const tl = gsap.timeline();
    tl.from(".grid-line", { scaleY: 0, transformOrigin: "top", duration: 1.5, stagger: 0.1, ease: "power3.inOut" });
    tl.from(".hero-element", { y: 100, opacity: 0, duration: 1.2, stagger: 0.1, ease: "power4.out" }, "-=1");
    tl.from(codeCardRef.current, { y: 50, opacity: 0, rotate: 5, duration: 1.5, ease: "power2.out" }, "-=1");
    gsap.to(codeCardRef.current, { y: -20, rotation: -2, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }, { scope: container });

  return (
    <header ref={container} className="min-h-screen relative pt-32 pb-20 px-6 overflow-hidden flex flex-col justify-center">
        
        {/* ... (Keep Background Grid & Glow) ... */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 pointer-events-none opacity-20">
            {[...Array(13)].map((_, i) => (
                <div key={i} className="grid-line w-[1px] h-full bg-white/10 relative">
                     {(i % 4 === 0) && <div className="absolute top-1/2 w-1 h-1 bg-white/50 -left-[1.5px]"></div>}
                </div>
            ))}
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-0 relative z-10">
            
            {/* 1. STATUS BADGE */}
            <div className="hero-element md:col-span-3 flex items-start pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-zinc-300">
                    <Bug className="w-3 h-3 text-purple-400" />
                    <span>DEBUGGING REALITY</span>
                </div>
            </div>

            {/* 2. CODE CARD (Keep existing code) */}
            <div className="hero-element md:col-start-8 md:col-span-5 relative z-20 md:translate-x-12 md:translate-y-12">
                 <div ref={codeCardRef} className="w-full bg-[#050505] border border-white/10 rounded-xl p-6 shadow-2xl backdrop-blur-md">
                    {/* ... (Keep your Code Card content) ... */}
                    <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                             <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                        </div>
                        <span className="text-[10px] text-zinc-600 font-mono">DIGITAL_PHYSICS.js</span>
                    </div>
                    <div className="space-y-2 font-mono text-xs md:text-sm">
                        <div className="flex gap-4"><span className="text-zinc-600">01</span><span><span className="text-purple-400">const</span> <span className="text-white">Dayanidhi</span> = <span className="text-yellow-300">new</span> <span className="text-green-400">Engineer()</span>;</span></div>
                        <div className="flex gap-4"><span className="text-zinc-600">02</span><span><span className="text-white">Dayanidhi</span>.<span className="text-blue-400">build</span>(<span className="text-orange-400">"Future"</span>);</span></div>
                    </div>
                 </div>
            </div>

            {/* 3. FLASHLIGHT HEADLINE */}
            <div className="hero-element md:col-span-10 md:col-start-1 md:-mt-12 relative z-30">
                <h1 className="text-6xl md:text-[9vw] font-bold tracking-tighter text-white leading-[0.85] uppercase">
                    I am <br />
                    
                    {/* THE FLASHLIGHT TEXT */}
                    <span 
                        ref={nameRef}
                        onMouseMove={handleMouseMove}
                        className="cursor-crosshair select-none text-zinc-700 md:text-transparent transition-colors duration-300 block"
                        style={{
                            backgroundImage: 'radial-gradient(circle 200px at var(--x, 50%) var(--y, 50%), #ffffff, #27272a)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            '--x': '50%',
                            '--y': '50%'
                        }}
                    >
                        Dayanidhi
                        <span className="text-purple-500">.</span>
                    </span>
                </h1>
            </div>

            {/* 4. DESCRIPTION & BUTTONS */}
            <div className="hero-element md:col-start-2 md:col-span-5 mt-8 md:mt-16 space-y-8">
                <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                    Building interactive web experiences that feel instant, look expensive, and convert users. No templates. Just code.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <MagneticButton>VIEW WORK</MagneticButton>
                    <button className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 text-sm font-bold tracking-widest hover:bg-white hover:text-black transition-colors group">
                        THE STACK
                        <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    </button>
                </div>
            </div>

            {/* 5. SCROLL INDICATOR */}
            <div className="hero-element md:col-start-11 md:col-span-2 flex items-end justify-end md:pb-4 hidden md:flex">
                 <div className="text-right">
                    <p className="text-xs text-zinc-500 font-mono mb-2">SCROLL TO EXPLORE</p>
                    <div className="w-full h-[1px] bg-zinc-800">
                        <div className="w-1/3 h-full bg-purple-500 animate-scroll-bar"></div>
                    </div>
                 </div>
            </div>

        </div>
    </header>
  )
}