import React, { useRef } from 'react';

export default function Footer() {
  const textRef = useRef(null);

  // The "Flashlight" Logic
  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    
    const { left, top } = textRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    textRef.current.style.setProperty('--x', `${x}px`);
    textRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <footer className="w-full py-20 px-6 bg-[#030014] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow for Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* TOP SECTION: The Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                    Have a crazy idea?
                </h2>
                <p className="text-zinc-400 max-w-md text-lg">
                    I’m currently available for freelance work. If you have the budget, I have the code.
                </p>
            </div>
            
            <a 
              href="mailto:hello@dayanidhi.dev" 
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
                <span className="relative z-10 group-hover:text-purple-600 transition-colors">Start a Project</span>
                {/* Button Hover Fill Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </a>
        </div>

        {/* MIDDLE SECTION: Social Links */}
        <div className="flex flex-wrap gap-10 text-sm font-bold text-zinc-500 uppercase tracking-widest">
            {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map((link) => (
               <a key={link} href="#" className="hover:text-purple-400 transition-colors duration-300">
                  {link}
               </a>
            ))}
        </div>

        {/* BOTTOM SECTION: The Massive Flashlight Name */}
        <div className="w-full border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-zinc-600 text-xs font-mono">
                © 2026 Dayanidhi.dev <br />
                Andhra Pradesh, India
            </div>
            
            {/* THE FLASHLIGHT TEXT */}
            <h1 
                ref={textRef}
                onMouseMove={handleMouseMove}
                className="text-[12vw] leading-[0.8] font-bold tracking-tighter cursor-crosshair select-none
                           text-zinc-800 md:text-transparent transition-colors duration-300"
                style={{
                    // On Desktop, this gradient is revealed by the mouse
                    backgroundImage: 'radial-gradient(circle 250px at var(--x, 50%) var(--y, 50%), #ffffff, #18181b)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    // Default center position
                    '--x': '50%',
                    '--y': '50%'
                }}
            >
                DAYANIDHI
            </h1>
        </div>

      </div>
    </footer>
  )
}