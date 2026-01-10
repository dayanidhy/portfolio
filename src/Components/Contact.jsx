import React, { useState } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Your actual Web3Forms Access Key
    formData.append("access_key", "8391b38b-8edb-4a6c-a8d6-5e3084e8aecf");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset(); // Clear the form
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    } catch (error) {
        setResult("Something went wrong. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-6 bg-[#0a0a0a] relative overflow-hidden" id="contact">
      
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
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            
            <form onSubmit={onSubmit} className="space-y-6">
                
                {/* Bot Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          placeholder="John Doe" 
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-700"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          placeholder="john@company.com" 
                          required
                          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-700"
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
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-zinc-700"
                    ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Message */}
                {result && (
                    <p className={`text-center text-sm font-medium mt-4 ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                        {result}
                    </p>
                )}
            </form>
        </div>

      </div>
    </section>
  )
}