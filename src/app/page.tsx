'use client';

import { useState } from 'react';
import { MainButton } from './components/MainButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const [post1Liked, setPost1Liked] = useState(false);
  const [post2Liked, setPost2Liked] = useState(false);
  const [post3Liked, setPost3Liked] = useState(false);
  const [postText, setPostText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [isWriteExpanded, setIsWriteExpanded] = useState(false);

  const faqItems = [
    {
      id: "1",
      title: "What makes AI Builders Club different from other courses?",
      content:
        "AI Builders Club focuses on practical, hands-on learning with real-world projects. You&apos;ll build actual AI applications from scratch, learn cutting-edge techniques, and join a community of builders who support each other&apos;s growth.",
    },
    {
      id: "2",
      title: "How long does it take to complete the course?",
      content:
        "The course contains 60 lessons totaling 10 hours and 4 minutes of content. Most students complete it in 4-6 weeks studying part-time, but you have lifetime access to learn at your own pace.",
    },
    {
      id: "3",
      title: "What if I&apos;m a complete beginner to AI development?",
      content:
        "Perfect! The course is designed for beginners. We start with fundamentals and gradually build up to advanced concepts. You'll learn everything from basic prompt engineering to building complex AI agents.",
    },
    {
      id: "4",
      title: "Do I get access to the community forever?",
      content:
        "Yes! Your membership includes lifetime access to our exclusive community where you can network with fellow builders, get help with projects, and stay updated on the latest AI developments.",
    },
    {
      id: "5",
      title: "What kind of projects will I build?",
      content:
        "You&apos;ll build real AI applications including customer support bots, content generation tools, AI-powered SaaS applications with payment systems, and much more. Each project teaches practical skills you can use professionally.",
    },
    {
      id: "6",
      title: "Is there a money-back guarantee?",
      content:
        "Yes! We offer a 30-day money-back guarantee. If you&apos;re not completely satisfied with the course content and community, we&apos;ll refund your purchase, no questions asked.",
    },
  ];

  const handleLike = (postNumber: number) => {
    console.log('Like clicked for post:', postNumber);
    switch(postNumber) {
      case 1:
        setPost1Liked(prev => {
          console.log('Post 1 liked state changing from', prev, 'to', !prev);
          return !prev;
        });
        break;
      case 2:
        setPost2Liked(prev => {
          console.log('Post 2 liked state changing from', prev, 'to', !prev);
          return !prev;
        });
        break;
      case 3:
        setPost3Liked(prev => {
          console.log('Post 3 liked state changing from', prev, 'to', !prev);
          return !prev;
        });
        break;
    }
  };

  const handleWriteClick = () => {
    setIsWriteExpanded(true);
  };

  const handleWriteBlur = () => {
    if (!postTitle && !postText) {
      setIsWriteExpanded(false);
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 pt-32 pb-20">
      {/* Profile Images */}
      <div className="flex items-center justify-center mb-16 mt-16 space-x-[-12px]">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white shadow-lg z-10"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white shadow-lg z-20"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-3 border-white shadow-lg z-30"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-3 border-white shadow-lg z-40"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-3 border-white shadow-lg z-30"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white shadow-lg z-20"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-black text-center max-w-5xl leading-[1.1] mb-8 tracking-tight">
        Become Top 1% AI Builder
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mb-14 leading-relaxed font-medium">
        Learn AI coding, Agents, LLM applications
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-20">
        <MainButton onClick={scrollToPricing}>
          Join Now
        </MainButton>
      </div>

      {/* Terminal Mockup */}
      <div className="w-full max-w-3xl mb-20">
        <div className="bg-[#1a1b26] rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          {/* Terminal Header */}
          <div className="bg-[#24283b] px-5 py-4 flex items-center border-b border-gray-700">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-300 text-sm font-medium">cruip.com</span>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="px-6 py-8 font-mono text-base">
            <div className="text-gray-300">
              <span className="text-[#7dcfff]">npm login</span>
              <span className="text-gray-500"> --registry=https://npm.pkg.github.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <div className="w-full max-w-4xl mt-32">
        {/* Course Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Course</h2>
        
        {/* Course Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Everything you need to become an AI builder
        </p>
        
        <div className="bg-white rounded-2xl shadow-xs overflow-hidden border border-gray-200">
          {/* Course Header */}
          <div className="px-8 py-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-2">AI Coding</h3>
            <p className="text-[#626262] text-lg">12 sections • 60 lessons • 10 hr 4 min total</p>
          </div>
          
          {/* Course Sections */}
          <div className="divide-y divide-gray-200">
            {[
              { title: "Section 1 – Project overview", lessons: "5 lessons" },
              { title: "Section 2 – Designing UI with v0", lessons: "7 lessons" },
              { title: "Section 3 – Environment and Cursor setup", lessons: "6 lessons" },
              { title: "Section 4 – Version control with Git & Github", lessons: "4 lessons" },
              { title: "Section 5 – Supabase tables, storage and RLS", lessons: "5 lessons" },
              { title: "Section 6 – Pro level prompting strategies", lessons: "5 lessons" },
              { title: "Section 7 – Building core app features", lessons: "4 lessons" },
              { title: "Section 8 – Integrating AI SDK for AI functionality", lessons: "5 lessons" },
              { title: "Section 9 – Integrating Resend for email", lessons: "4 lessons" },
              { title: "Section 10 – Integrating Stripe for SaaS payments", lessons: "7 lessons" },
              { title: "Section 11 – Building the admin dashboard", lessons: "4 lessons" },
              { title: "Section 12 – Domains and deployments with Vercel", lessons: "4 lessons" }
            ].map((section, index) => (
              <div key={index} className="px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <h4 className="text-lg font-semibold text-black mb-1">{section.title}</h4>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-[#626262] font-medium">{section.lessons}</span>
                  <svg 
                    className="w-5 h-5 text-[#626262] transform transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="w-full max-w-6xl mt-32">
        {/* Community Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Community</h2>
        
        {/* Community Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Connect with fellow builders and share your journey
        </p>
        
        {/* Community Interface Mockup */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Posts */}
          <div className="col-span-8 space-y-6">
            {/* Write Something Section */}
            <div className={`transition-all duration-300 ease-in-out ${isWriteExpanded ? 'bg-white p-6' : 'bg-white p-4'} rounded-2xl shadow-xs border border-gray-200`}>
              {!isWriteExpanded ? (
                /* Default Clickable State */
                <div 
                  onClick={handleWriteClick}
                  className="flex items-center space-x-4 cursor-pointer hover:bg-gray-50 rounded-xl p-2 transition-colors duration-200"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    YOU
                  </div>
                  <div className="flex-1 text-[#999999] text-lg">
                    Write something
                  </div>
                </div>
              ) : (
                /* Expanded Input State */
                <div className="space-y-3">
                  {/* Title Input */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                      YOU
                    </div>
                    <input
                      type="text"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      onBlur={handleWriteBlur}
                      placeholder="Title"
                      autoFocus
                      className="flex-1 text-black font-semibold text-xl bg-transparent border-none focus:outline-none placeholder-[#999999]"
                    />
                  </div>
                  
                  {/* Description Input - No avatar, aligned with title text */}
                  <div className="flex items-start">
                    <div className="w-12 mr-4"></div> {/* Spacer to align with title */}
                    <input
                      type="text"
                      value={postText}
                      onChange={(e) => setPostText(e.target.value)}
                      onBlur={handleWriteBlur}
                      placeholder="Write something"
                      className="flex-1 text-[#888888] text-lg bg-transparent border-none focus:outline-none placeholder-[#BBBBBB]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-3">
              <div className="px-6 py-3 bg-[#626262] text-white rounded-xl text-sm font-medium">All</div>
              <div className="px-6 py-3 text-[#626262] text-sm font-medium bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span>General</span>
              </div>
              <div className="px-6 py-3 text-[#626262] text-sm font-medium bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V8m0 0V6a2 2 0 012-2h10a2 2 0 012 2v2"/>
                </svg>
                <span>Introductions</span>
              </div>
              <div className="px-6 py-3 text-[#626262] text-sm font-medium bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <span>Support</span>
              </div>
              <div className="px-6 py-3 text-[#626262] text-sm font-medium bg-white border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
                <span>Announcements</span>
              </div>
              <div className="ml-auto">
                <svg className="w-5 h-5 text-[#626262]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {/* Post 1 */}
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
                  M
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-black">Michael</span>
                    <span className="text-[#626262] text-sm">2d • 💬 General</span>
                  </div>
                  <h3 className="font-bold text-black text-xl mb-2">Just deployed my first AI agent!</h3>
                  <p className="text-[#626262] mb-3">Finally got my customer support bot working with Claude. It&apos;s handling 80% of our tickets automatically now. This course is incredible!</p>
                  <div className="flex items-center space-x-6 text-[#626262] text-sm">
                    <button 
                      onClick={() => handleLike(1)}
                      className={`flex items-center space-x-1 hover:opacity-70 transition-all duration-200 cursor-pointer ${post1Liked ? 'text-[#3B81F5]' : 'text-[#626262]'}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill={post1Liked ? 'currentColor' : 'none'} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="min-w-[8px] text-center">{post1Liked ? 3 : 2}</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>4</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600"></div>
                      <span>Last comment 1d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                  J
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-black">James</span>
                    <span className="text-[#626262] text-sm">5d • 💬 General</span>
                  </div>
                  <h3 className="font-bold text-black text-xl mb-2">Best practices for prompt engineering? 🤖</h3>
                  <p className="text-[#626262] mb-3">I&apos;m building an AI app that generates marketing copy. What are your go-to techniques for getting consistent, high-quality outputs from LLMs?</p>
                  <div className="flex items-center space-x-6 text-[#626262] text-sm">
                    <button 
                      onClick={() => handleLike(2)}
                      className={`flex items-center space-x-1 hover:opacity-70 transition-all duration-200 cursor-pointer ${post2Liked ? 'text-[#3B81F5]' : 'text-[#626262]'}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill={post2Liked ? 'currentColor' : 'none'} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="min-w-[8px] text-center">{post2Liked ? 9 : 8}</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>12</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-2 border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white"></div>
                      </div>
                      <span>Last comment 3d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm font-bold">
                  R
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-black">Robert</span>
                    <span className="text-[#626262] text-sm">1w • 👋 Introductions</span>
                  </div>
                  <h3 className="font-bold text-black text-xl mb-2">New here - excited to learn! 👋</h3>
                  <p className="text-[#626262] mb-3">Just joined the community after struggling with my first AI project. Looking forward to learning from everyone and building something amazing together!</p>
                  <div className="flex items-center space-x-6 text-[#626262] text-sm">
                    <button 
                      onClick={() => handleLike(3)}
                      className={`flex items-center space-x-1 hover:opacity-70 transition-all duration-200 cursor-pointer ${post3Liked ? 'text-[#3B81F5]' : 'text-[#626262]'}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill={post3Liked ? 'currentColor' : 'none'} xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="min-w-[8px] text-center">{post3Liked ? 6 : 5}</span>
                    </button>
                    <span className="flex items-center space-x-1">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>3</span>
                    </span>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                      <span>Last comment 5d ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Leaderboard */}
          <div className="col-span-4">
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              {/* Leaderboard */}
              <div>
                <h3 className="font-bold text-black text-lg mb-4">Leaderboard</h3>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Michael", points: "1850", avatar: "from-blue-400 to-blue-600" },
                    { rank: 2, name: "James", points: "1580", avatar: "from-purple-400 to-purple-600" },
                    { rank: 3, name: "Robert", points: "990", avatar: "from-green-400 to-green-600" },
                    { rank: 4, name: "Jennifer", points: "845", avatar: "from-amber-400 to-orange-600" },
                    { rank: 5, name: "David", points: "720", avatar: "from-red-400 to-red-600" },
                    { rank: 6, name: "Sarah", points: "675", avatar: "from-indigo-400 to-indigo-600" },
                    { rank: 7, name: "Jessica", points: "550", avatar: "from-pink-400 to-pink-600" },
                    { rank: 8, name: "Christopher", points: "480", avatar: "from-teal-400 to-teal-600" },
                    { rank: 9, name: "Ashley", points: "420", avatar: "from-orange-400 to-yellow-600" },
                    { rank: 10, name: "Matthew", points: "380", avatar: "from-cyan-400 to-cyan-600" }
                  ].map((user) => (
                    <div key={user.rank} className="flex items-center space-x-3">
                      <span className="w-6 text-center font-semibold text-[#626262] text-sm">{user.rank}</span>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${user.avatar}`}></div>
                      <div className="flex-1">
                        <div className="font-medium text-black text-sm">{user.name}</div>
                      </div>
                      <div className="text-[#3B81F5] font-semibold text-sm">{user.points}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="w-full max-w-6xl mt-32">
        {/* Perks Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Perks</h2>
        
        {/* Perks Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Exclusive benefits for AI Builders Club members
        </p>
        
        {/* Perks Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Perk 1 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 1</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the first perk. This will be replaced with actual benefits later.</p>
          </div>

          {/* Perk 2 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 2</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the second perk. This will be replaced with actual benefits later.</p>
          </div>

          {/* Perk 3 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 3</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the third perk. This will be replaced with actual benefits later.</p>
          </div>

          {/* Perk 4 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 4</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the fourth perk. This will be replaced with actual benefits later.</p>
          </div>

          {/* Perk 5 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 5</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the fifth perk. This will be replaced with actual benefits later.</p>
          </div>

          {/* Perk 6 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-3">Perk Title 6</h3>
            <p className="text-[#626262] leading-relaxed">Placeholder description for the sixth perk. This will be replaced with actual benefits later.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing-section" className="w-full max-w-5xl mt-32">
        {/* Pricing Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Pricing</h2>
        
        {/* Pricing Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Choose the plan that fits your AI building journey
        </p>
        
        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Basic</h3>
              <p className="text-[#626262] mb-6">Perfect for getting started with AI development</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-black">$49</span>
                <span className="text-[#626262] text-xl">/month</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Access to all course content</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Community access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Basic AI coding tutorials</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Email support</span>
              </div>
            </div>
            
            <button className="w-full bg-white border-2 border-gray-300 text-[#626262] font-semibold py-4 px-8 rounded-xl hover:border-gray-400 hover:text-black transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xs border-2 border-[#3B81F5] p-8 relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-[#3B81F5] to-[#2663EB] text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">Pro</h3>
              <p className="text-[#626262] mb-6">Everything you need to become a top 1% AI builder</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-black">$99</span>
                <span className="text-[#626262] text-xl">/month</span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Everything in Basic</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Advanced AI agent tutorials</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">1-on-1 mentorship sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Priority community support</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Exclusive project templates</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#626262]">Live weekly Q&A sessions</span>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-[#3B81F5] to-[#2663EB] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Start Building Now
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-4xl mt-32">
        {/* FAQ Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">FAQ</h2>
        
        {/* FAQ Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Frequently asked questions about AI Builders Club
        </p>
        
        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full" defaultValue="1">
          {faqItems.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-4 border-b border-gray-300 last:border-b-0">
              <AccordionTrigger className="text-left text-lg font-semibold text-black hover:text-[#3B81F5] focus-visible:ring-2 focus-visible:ring-[#3B81F5] focus-visible:ring-offset-2 [&>svg]:text-[#626262] [&>svg]:w-5 [&>svg]:h-5">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[#626262] pb-4 pt-2 text-base leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
