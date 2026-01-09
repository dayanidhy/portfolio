import React from 'react';

export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-zinc-100">
        Selected Work <span className="text-purple-500">.</span>
      </h2>

      {/* THE GRID PARENT */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 1. FEATURED PROJECT (Takes 2 Columns) */}
        <div className="md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/20 transition-all"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20">
                Featured
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Magnetic Portfolio</h3>
              <p className="text-zinc-400 max-w-sm">
                A high-performance personal site built with React, Tailwind, and GSAP. Features magnetic interactions and smooth scroll physics.
              </p>
            </div>
            {/* Fake UI Preview */}
            <div className="w-full h-32 bg-gradient-to-br from-zinc-800 to-black rounded-xl border border-white/5 mt-6 group-hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center">
                <span className="text-zinc-600 font-mono text-sm">Preview Image Area</span>
            </div>
          </div>
        </div>

        {/* 2. THE TOOLBOX (Takes 1 Column) */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden hover:border-white/20 transition-colors">
           <h3 className="text-xl font-bold text-white mb-6">The Stack</h3>
           <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'GSAP', 'Tailwind', 'Framer', 'Node.js'].map((tech) => (
                  <span key={tech} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-zinc-300 hover:bg-white/10 transition-colors cursor-default">
                    {tech}
                  </span>
              ))}
           </div>
           {/* Decorative Code */}
           <div className="absolute -bottom-4 -right-4 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.25l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z"/></svg>
           </div>
        </div>

        {/* 3. GITHUB / STATUS (Takes 1 Column) */}
        <div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-green-500/30 transition-colors group">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h3 className="text-2xl font-bold text-white">Available</h3>
            <p className="text-zinc-500 text-sm mt-2">Open for freelance projects</p>
            <button className="mt-6 w-full py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white hover:text-black transition-all">
                Copy Email
            </button>
        </div>

        {/* 4. SECOND PROJECT (Takes 2 Columns) */}
        <div className="md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 -translate-x-1/2 group-hover:bg-blue-600/20 transition-all"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">CodeCanvas</h3>
                    <p className="text-zinc-400 mb-6">
                        A developer tool for creating aesthetic code screenshots. Built with React Syntax Highlighter and custom export logic.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                        View Case Study 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
                {/* Visual Placeholder */}
                <div className="w-full md:w-1/2 h-40 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center">
                    <span className="text-zinc-700 text-sm">Project Visual</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}