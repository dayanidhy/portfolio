import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const container = useRef();
  const imageRef = useRef();
  const scrollRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Text Entrance (Bouncy & Fast)
    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      rotate: 2, 
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

    // 2. Image Pop In (Elastic)
    tl.from(imageRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.7)"
    }, "-=0.8");

    // 3. Scroll Indicator Fade In
    tl.from(scrollRef.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 0.5
    });

    // 4. Floating Animation (Infinite Levitation)
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: container });

  return (
    <header ref={container} className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 relative z-10 pt-20">
        
        {/* LEFT: Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6 z-20">
          
          <div className="hero-text inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 font-bold text-sm -rotate-2 backdrop-blur-md">
            👋 Hi, I'm Dayanidhi
          </div>

          <h1 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
            I center <span className="text-purple-500 font-mono bg-white/5 px-2 rounded border border-white/10">&lt;div&gt;</span>s <br />
            <span className="text-zinc-500 text-4xl md:text-6xl">for a living.</span>
          </h1>
          
          <p className="hero-text text-xl text-zinc-400 max-w-md leading-relaxed">
            I build interactive web experiences that look expensive and feel instant. (And yes, I actually write tests).
          </p>

          <div className="hero-text flex flex-wrap gap-4 mt-6">
             <MagneticButton>
                View Selected Work
             </MagneticButton>
             
             <button className="px-8 py-4 border border-white/10 rounded-full text-zinc-400 font-bold hover:bg-white/5 hover:text-white transition-all hover:scale-95 active:scale-90">
                Github
             </button>
          </div>
        </div>

        {/* RIGHT: Floating Image */}
        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

          {/* 3D Memoji (Replace with your own later) */}
          <img 
            ref={imageRef}
            src="https://ouch-cdn2.icons8.com/r6-k1kC8P6J7i4V8Yw_w6.png" 
            alt="3D Developer Character" 
            className="w-[350px] md:w-[500px] object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* BOTTOM: Scroll Indicator */}
        <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 opacity-60">
            <span className="text-xs font-bold tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </div>

    </header>
  )
}