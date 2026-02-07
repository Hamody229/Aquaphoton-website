import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-blue-400 transition-all group"
      >
        <span className="text-lg font-bold tracking-tight uppercase italic">
          {question}
        </span>
        <span
          className={`text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-45 text-blue-500" : "text-slate-600 group-hover:text-blue-400"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 pb-8 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
        }}
      >
        <p className="text-slate-400 font-light leading-relaxed max-w-3xl border-l-2 border-blue-500/30 pl-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      question: "How can I join Aquaphoton Academy?",
      answer:
        "We open membership opportunities during specific periods announced on our platforms. The process usually includes an application form followed by an assessment. The assessment covers both technical topics and soft skills.",
    },
    {
      question: "What are the requirements?",
      answer:
        "We value passion for engineering and learning, commitment and teamwork, and welcome all participants — no prior experience required, as we teach from the ground up.",
    },
    {
      question: "Which majors can apply?",
      answer: "Open to all engineering-related fields.",
    },
    {
      question: "Do I need to know ROVs or robotics before joining?",
      answer:
        "Not at all. Curiosity and dedication matter more than prior knowledge.",
    },
  ];

  return (
    <section id="faq" className="py-32 px-10 bg-ocean-900 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6 text-blue-400">
          <div className="h-[1px] w-12 bg-current"></div>
          <span className="font-mono text-xs tracking-[0.4em] uppercase">
            most asked questions
          </span>
        </div>
        <h2 className="text-6xl font-black mb-16 uppercase tracking-tighter italic">
          FAQ
        </h2>
        <div className="bg-white/2 rounded-[3rem] p-10 md:p-16 border border-white/5 backdrop-blur-xl shadow-2xl">
          {faqs.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}