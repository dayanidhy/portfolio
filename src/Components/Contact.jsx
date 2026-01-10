import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-[#030014] relative overflow-hidden" id="contact">
      
      {/* Background Gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: The Pitch */}
        <div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
             Let's work <br />
             <span className="text-purple-500">together.</span>
           </h2>
           <p className="text-zinc-400 text-lg mb-8 max-w-md">
             I help brands and founders build expensive-looking websites that convert. No templates, just pure physics and code.
           </p>
           
           <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    📧
                  </div>
                  <a href="mailto:hello@dayanidhi.dev" className="hover:text-white transition-colors">
                    hello@dayanidhi.dev
                  </a>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    📍
                  </div>
                  <span>Andhra Pradesh, India</span>
              </div>
           </div>
        </div>

        {/* RIGHT: The Form */}
        <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm space-y-6"
        >
            {/* REPLACE THIS WITH YOUR WEB3FORMS ACCESS KEY LATER */}
            <input type="hidden" name="access_key" value="8391b38b-8edb-4a6c-a8d6-5e3084e8aecf" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="John Doe" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="john@company.com" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Project Budget</label>
                <select 
                  name="budget"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none"
                >
                    <option value="10k-20k">₹10k - ₹20k (Landing Page)</option>
                    <option value="20k-50k">₹20k - ₹50k (Full Website)</option>
                    <option value="50k+">₹50k+ (Custom Application)</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Tell me about your project..." 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-all active:scale-95"
            >
                Send Message
            </button>
        </form>

      </div>
    </section>
  )
}