import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const container = useRef();

  useGSAP(() => {
    // Select all elements with the class 'bento-card'
    const cards = gsap.utils.toArray('.bento-card');

    gsap.from(cards, {
      y: 50,           // Move up from 50px down
      opacity: 0,      // Fade in
      duration: 1,
      stagger: 0.2,    // 0.2s delay between each card (One by one)
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%", // Animation starts when top of Grid hits 80% of screen height
        toggleActions: "play none none reverse" // Reverses if you scroll back up
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-zinc-100">
        Selected Work <span className="text-purple-500">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* CARD 1: Added 'bento-card' class */}
        <div className="bento-card md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500">
           {/* ... Keep your existing content inside ... */}
           <h3 className="text-3xl font-bold text-white mb-2">Dayanidhi.dev v1</h3>
           <p className="text-zinc-400">A masterclass in React performance.</p>
           {/* ... */}
        </div>

        {/* CARD 2: Added 'bento-card' class */}
        <div className="bento-card bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative hover:border-white/20 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6">The Arsenal</h3>
           {/* ... Keep content ... */}
        </div>

        {/* CARD 3: Added 'bento-card' class */}
        <div className="bento-card bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-purple-500/30 transition-colors group">
            <h3 className="text-2xl font-bold text-white">The Lab</h3>
            {/* ... Keep content ... */}
        </div>

        {/* CARD 4: Added 'bento-card' class */}
        <div className="bento-card md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <h3 className="text-2xl font-bold text-white mb-2">Design System</h3>
            {/* ... Keep content ... */}
        </div>

      </div>
    </section>
  )
}