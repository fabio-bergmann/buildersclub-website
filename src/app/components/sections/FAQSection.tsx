'use client';

import { useState } from 'react';

export function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [closingFaq, setClosingFaq] = useState<string | null>(null);

  const faqItems = [
    {
      id: "1",
      title: "Is there a refund policy?",
      content:
        "Yes! I'm confident you'll love Builder's Club, but if you feel it's not the right fit, I offer a 7-day money-back guarantee — no questions asked.",
    },
    {
      id: "2",
      title: "Who is Builder's Club for?",
      content:
        "Builder's Club is for non-technical founders serious about building their own apps, and business owners who want to develop internal tools to streamline their processes.",
    },
    {
      id: "3",
      title: "Do I need any previous coding experience?",
      content:
        "No coding experience is required. Many of our members are non-technical andstarted as complete beginners — I'll take you from zero to a finished, production-ready app.",
    },
    {
      id: "4",
      title: "What tech stack will I learn?",
      content:
        "You'll learn modern AI-powered development tools and frameworks, including: Claude Code & Cursor (AI coding), Next.js (frontend framework), Supabase, Vercel, GitHub, Resend, Stripe, and more.",
    },
    {
      id: "5",
      title: "What if I get stuck or need support?",
      content:
        "You're never alone — the community includes me and other experienced builders ready to help. Post your question and you'll get a response within 24 hours (often much faster). I'll also teach you how to debug problems yourself so you can grow as an independent builder.",
    },
    {
      id: "6",
      title: "What can I do with this knowledge?",
      content:
        "With the skills you'll gain, you can: Build your own SaaS or AI product, Create internal tools to automate and improve your business processes.",
    },
    {
      id: "7",
      title: "I have another question.",
      content:
        "Email me anytime at <a href='mailto:fabio@buildersclub.co' className='text-blue-600 hover:text-blue-800 underline'>fabio@buildersclub.co</a> — I'm happy to help.",
    },
  ];

  return (
    <div className="w-full max-w-4xl mt-44">
      {/* FAQ Main Headline */}
      <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">FAQ</h2>
      
      {/* FAQ Subheadline */}
      <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
        Frequently asked questions about Builder&apos;s Club
      </p>
      
      {/* FAQ Items */}
      <div className="w-full">
        {faqItems.map((item) => (
          <div key={item.id} className="py-4 border-b border-gray-300 last:border-b-0">
            <button 
              className="w-full text-left text-lg font-semibold text-black hover:text-[#3478F2] focus-visible:ring-2 focus-visible:ring-[#3478F2] focus-visible:ring-offset-2 focus:outline-none py-2"
              onClick={() => {
                if (expandedFaq === item.id) {
                  // If clicking the same item, just close it
                  setExpandedFaq(null);
                } else {
                  // If clicking a different item, start closing animation for current item
                  if (expandedFaq) {
                    setClosingFaq(expandedFaq);
                    // Small delay to allow closing to start, then open the new one
                    setTimeout(() => {
                      setExpandedFaq(item.id);
                      setClosingFaq(null);
                    }, 50);
                  } else {
                    // No item open, just open the new one
                    setExpandedFaq(item.id);
                  }
                }
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span>{item.title}</span>
                <svg 
                  className={`w-5 h-5 text-[#626262] transform transition-transform duration-300 ${
                    expandedFaq === item.id ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            {/* Expandable Content with smooth animation */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                (expandedFaq === item.id) ? 'max-h-96 opacity-100' : 
                (closingFaq === item.id) ? 'max-h-0 opacity-0' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-[#626262] pb-4 pt-2 text-base leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}