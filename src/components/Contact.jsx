import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const SERVICE_ID = "service_mlui4ev";
    const TEMPLATE_ID = "template_7osi8um";
    const PUBLIC_KEY = "tvUaTMJCmMpd3pBWZ";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatusMessage({ type: "success", text: "Message sent successfully!" });
          e.target.reset();
          
          setTimeout(() => setStatusMessage(null), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage({ type: "error", text: "Failed to send message. Please try again." });
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-6 md:px-10 relative border-t border-white/5 bg-black/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full lg:w-[40%] text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-blue-500 uppercase tracking-tighter italic">
            Contact <span className="text-white">US</span>
          </h2>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
            <input
              type="email"
              name="user_email" 
              required
              placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-blue-500 outline-none transition-all backdrop-blur-sm text-sm md:text-base text-white"
            />
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              className="w-full bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-blue-500 outline-none transition-all backdrop-blur-sm text-sm md:text-base text-white"
            />
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest transition-all shadow-md shadow-blue-600/10 text-sm md:text-base 
                ${isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}`}
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>

            {statusMessage && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-sm font-mono mt-2 ${statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              >
                {statusMessage.text}
              </motion.p>
            )}
          </form>
        </div>

        <div className="w-full lg:w-[60%] relative group">
          <div className="absolute -inset-2 bg-blue-600/5 rounded-[2rem] md:rounded-[3rem] blur-xl group-hover:bg-blue-600/10 transition-all duration-700" />

          <div className="relative aspect-video bg-blue-900/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden shadow-xl transition-transform duration-700 group-hover:scale-[1.01]">
            <img
              src="/Team_Photo.jpg"
              alt="Aquaphoton Team"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-700"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/1200x800/000814/3b82f6?text=Team+Photo";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 z-30">
              <h3 className="text-white font-black text-2xl md:text-5xl italic tracking-tighter uppercase drop-shadow-md">
                The Team <span className="text-blue-500">Behind</span>
              </h3>
              <p className="text-blue-400 font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] mt-2 md:mt-3 opacity-90">
                Aquaphoton Academy 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}