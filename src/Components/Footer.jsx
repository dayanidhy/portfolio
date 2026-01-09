import React, { useRef } from 'react';

export default function Footer() {
  const textRef = useRef(null);

  // The Logic: Track mouse relative to the text
  const handleMouseMove = (e) => {
    if (!textRef.current) return;
    
    const { left, top } = textRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Update CSS variables instantly (No React Re-render = High Performance)
    textRef.current.style.setProperty('--x', `${x}px`);
    textRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <footer className="w-full py-20 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        
        {/* TOP SECTION (Call to Action) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                    Ready to build?
                </h2>
                <p className="text-zinc-400 max-w-sm">
                    I am currently available for freelance projects. Let's turn your idea into a visual masterpiece.
                </p>
            </div>
            
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
                Start a Project
            </button>
        </div>

        {/* MIDDLE SECTION (Links) */}
        <div className="flex gap-10 text-sm font-medium text-zinc-500 uppercase tracking-wider">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Github</a>
        </div>

        {/* BOTTOM SECTION: The Flashlight Name */}
        <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-zinc-600 text-xs">
                © 2026 Dayanidhi.dev
            </div>
            
            {/* THE MAGIC HAPPENS HERE */}
            <h1 
                ref={textRef}
                onMouseMove={handleMouseMove}
                className="text-[12vw] leading-none font-bold select-none tracking-tighter cursor-crosshair transition-opacity duration-500"
                style={{
                    // 1. Transparent Text
                    color: 'transparent',
                    // 2. The Gradient follows variables --x and --y
                    backgroundImage: 'radial-gradient(circle 300px at var(--x, 50%) var(--y, 50%), white, #18181b)',
                    // 3. Clip background to text shape
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    // 4. Fallback for when mouse isn't moving
                    '--x': '50%',
                    '--y': '50%'
                }}
            >
                Dayanidhi
            </h1>
        </div>

      </div>
    </footer>
  )
}