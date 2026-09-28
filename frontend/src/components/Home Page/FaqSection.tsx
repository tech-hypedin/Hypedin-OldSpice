'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Who can apply to become an Old Spice Creator?',
    answer: "College students and young creators across India who live on Instagram. If you're ready to create scroll-stopping Reels and drop non-negotiable freshness into every feed, step up and enlist.",
  },
  {
    question: 'Do I need a minimum follower count?',
    answer: 'No. There is no minimum follower count required to register. We care about your creativity, content quality, and engagement.',
  },
  {
    question: 'Does registration guarantee participation?',
    answer: 'No. HYPEDIN will review all registrations and contact shortlisted creators with the next steps.',
  },
  {
    question: 'Will selected creators receive the product?',
    answer: 'Yes, selected creators will receive the relevant campaign product along with the detailed brand brief to create their content.',
  },
  {
    question: 'How will winners be selected?',
    answer: 'Eligible entries will be assessed based on content quality, creativity, and performance against the official contest criteria shared before participation.',
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="scroll-mt-20 py-24 bg-background border-b border-neutral-100 font-['Open_Sans']"
    >
      {/* Inline Font Injection - Independent Google Fonts Load */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
            Intel Base
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`group border rounded-2xl bg-white transition-all duration-300 ${
                  isOpen 
                    ? 'border-primary/40 shadow-lg shadow-primary/5 ring-1 ring-primary/20' 
                    : 'border-neutral-200/80 hover:border-neutral-300 hover:shadow-md'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5 focus:outline-none cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-primary' : 'text-neutral-900 group-hover:text-neutral-950'
                  }`}>
                    {faq.question}
                  </span>

                  {/* Dynamic + / - Icon Switcher */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-primary text-background rotate-180 shadow-md shadow-primary/20' 
                      : 'bg-neutral-100 text-neutral-700 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated Dropdown Answer Box */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-neutral-600 text-sm sm:text-base leading-relaxed border-t border-neutral-100/80 pt-5 font-normal">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Faq;