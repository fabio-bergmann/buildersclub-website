'use client';

import { useState } from 'react';
import { MainButton } from './components/MainButton';
import { DecorativeLines } from './components/DecorativeLines';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getLessons, getLessonCount } from '@/data/lessons';
import { getCommunityAvatars, getUserById, posts, getTopUsers } from '@/data/users';
import { AvatarGroup, Avatar } from './components/Avatar';
import { PostAuthor, LeaderboardEntry } from './components/UserProfile';

export default function Home() {
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [postText, setPostText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [isWriteExpanded, setIsWriteExpanded] = useState(false);
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const lessons = getLessons();
  const totalLessons = getLessonCount();
  const communityAvatars = getCommunityAvatars();
  const youUser = getUserById('you')!;
  const topUsers = getTopUsers(10);

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

  const handleLike = (postId: string) => {
    console.log('Like clicked for post:', postId);
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
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

  const handleLessonClick = (index: number) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 pt-32 pb-20">
      {/* Profile Images with background lines */}
      <div className="mb-12 mt-12 w-full max-w-xl mx-auto flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={3} elementType="avatars">
          <div className="h-12 flex items-center space-x-3">
            <AvatarGroup users={communityAvatars} size="lg" overlap={true} />
            <span className="text-lg font-semibold text-[#626262]">+12</span>
          </div>
        </DecorativeLines>
      </div>

      {/* Main Heading with background lines */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.85}>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-black text-center leading-[1.1] tracking-tight">
            Become Top 1% AI Builder
          </h1>
        </DecorativeLines>
      </div>

      {/* Subheading with background lines */}
      <div className="w-full max-w-3xl mx-auto mb-14">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.7}>
          <p className="text-xl md:text-2xl text-[#626262] text-center leading-relaxed font-medium">
            Learn AI coding, Agents, LLM applications
          </p>
        </DecorativeLines>
      </div>

      {/* CTA Button with background lines */}
      <div className="w-full max-w-lg mx-auto mb-20 flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={7} elementType="button">
          <MainButton onClick={scrollToPricing}>
            Join Now
          </MainButton>
        </DecorativeLines>
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
            <p className="text-[#626262] text-lg">{totalLessons} lessons</p>
          </div>
          
          {/* Course Lessons */}
          <div>
            {lessons.map((lesson, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <div 
                  className="px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleLessonClick(index)}
                >
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">{lesson.formattedTitle}</h4>
                  </div>
                  <div className="flex items-center space-x-4">
                    {lesson.status === "released" ? (
                      <span className="px-3 py-1 bg-green-50 text-[#2ECC71] text-sm font-medium rounded-md flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#2ECC71] rounded-full"></div>
                        <span>Released</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-50 text-[#F4B400] text-sm font-medium rounded-md">
                        Coming Soon
                      </span>
                    )}
                    <svg 
                      className={`w-5 h-5 text-[#626262] transform transition-transform duration-300 ${
                        expandedLesson === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Expandable Description */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedLesson === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-[#626262] leading-relaxed">{lesson.description}</p>
                  </div>
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
                  <Avatar user={youUser} size="lg" />
                  <div className="flex-1 text-[#999999] text-lg">
                    Write something
                  </div>
                </div>
              ) : (
                /* Expanded Input State */
                <div className="space-y-3">
                  {/* Title Input */}
                  <div className="flex items-center space-x-4">
                    <Avatar user={youUser} size="lg" />
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
            <div className="flex items-center space-x-3 w-full">
              <button 
                onClick={() => handleCategoryClick('All')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex-1 text-center transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'All' 
                    ? 'bg-[#3B81F5] text-white border-[#3B81F5]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => handleCategoryClick('General')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex items-center justify-center space-x-2 flex-1 transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'General' 
                    ? 'bg-[#3B81F5] text-white border-[#3B81F5]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.5C21 14.8978 21 15.5967 20.7716 16.1481C20.4672 16.8831 19.8831 17.4672 19.1481 17.7716C18.5967 18 17.8978 18 16.5 18C16.0114 18 15.7671 18 15.5405 18.0535C15.2383 18.1248 14.9569 18.2656 14.7185 18.4645C14.5397 18.6137 14.3931 18.8091 14.1 19.2L12.64 21.1467C12.4229 21.4362 12.3143 21.5809 12.1812 21.6327C12.0647 21.678 11.9353 21.678 11.8188 21.6327C11.6857 21.5809 11.5771 21.4362 11.36 21.1467L9.9 19.2C9.60685 18.8091 9.46028 18.6137 9.2815 18.4645C9.04312 18.2656 8.76169 18.1248 8.45951 18.0535C8.23287 18 7.98858 18 7.5 18C6.10218 18 5.40326 18 4.85195 17.7716C4.11687 17.4672 3.53284 16.8831 3.22836 16.1481C3 15.5967 3 14.8978 3 13.5V7.8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>General</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('Introductions')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex items-center justify-center space-x-2 flex-1 transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'Introductions' 
                    ? 'bg-[#3B81F5] text-white border-[#3B81F5]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Introductions</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('Support')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex items-center justify-center space-x-2 flex-1 transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'Support' 
                    ? 'bg-[#3B81F5] text-white border-[#3B81F5]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Support</span>
              </button>
              <button 
                onClick={() => handleCategoryClick('Announcements')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex items-center justify-center space-x-2 flex-1 transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'Announcements' 
                    ? 'bg-[#3B81F5] text-white border-[#3B81F5]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 16C20.433 16 22 13.0899 22 9.5C22 5.91015 20.433 3 18.5 3M18.5 16C16.567 16 15 13.0899 15 9.5C15 5.91015 16.567 3 18.5 3M18.5 16L5.44354 13.6261C4.51605 13.4575 4.05231 13.3731 3.67733 13.189C2.91447 12.8142 2.34636 12.1335 2.11414 11.3159C2 10.914 2 10.4427 2 9.5C2 8.5573 2 8.08595 2.11414 7.68407C2.34636 6.86649 2.91447 6.18577 3.67733 5.81105C4.05231 5.62685 4.51605 5.54254 5.44354 5.3739L18.5 3M5 14L5.39386 19.514C5.43126 20.0376 5.44996 20.2995 5.56387 20.4979C5.66417 20.6726 5.81489 20.8129 5.99629 20.9005C6.20232 21 6.46481 21 6.98979 21H8.7722C9.37234 21 9.67242 21 9.89451 20.8803C10.0897 20.7751 10.2443 20.6081 10.3342 20.4055C10.4365 20.1749 10.4135 19.8757 10.3675 19.2773L10 14.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Announcements</span>
              </button>
            </div>

            {/* Dynamic Posts */}
            {posts.map((post) => {
              const user = getUserById(post.userId);
              if (!user) {
                console.warn(`User not found for post ${post.id} with userId: ${post.userId}`);
                return null; // Skip rendering this post if user doesn't exist
              }
              
              const isLiked = likedPosts[post.id] || false;
              const currentLikes = post.likes + (isLiked ? 1 : 0);
              
              return (
                <div key={post.id} className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
                  <PostAuthor 
                    user={user}
                    timeAgo={post.timeAgo}
                    category={post.category}
                    categoryIcon={post.categoryIcon}
                  />
                  <div className="ml-15">
                    <h3 className="font-bold text-black text-xl mb-2">{post.title}</h3>
                    <p className="text-[#626262] mb-3">{post.content}</p>
                    <div className="flex items-center space-x-6 text-[#626262] text-sm">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 hover:opacity-70 transition-all duration-200 cursor-pointer ${isLiked ? 'text-[#3B81F5]' : 'text-[#626262]'}`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill={isLiked ? 'currentColor' : 'none'} xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="min-w-[8px] text-center">{currentLikes}</span>
                      </button>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{post.comments}</span>
                      </span>
                      <div className="flex items-center space-x-2">
                        {post.commenters && post.commenters.length > 0 ? (
                          <div className={`flex ${post.commenters.length > 1 ? '-space-x-1' : ''}`}>
                            {post.commenters.slice(0, 4).map((commenterId, index) => {
                              const commenter = getUserById(commenterId);
                              return commenter ? (
                                <Avatar
                                  key={commenter.id}
                                  user={commenter}
                                  size="sm"
                                  showBorder={post.commenters!.length > 1}
                                />
                              ) : null;
                            })}
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                        )}
                        <span>Last comment {post.lastCommentTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right Column - Leaderboard */}
          <div className="col-span-4">
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              {/* Leaderboard */}
              <div>
                <h3 className="font-bold text-black text-lg mb-4">Leaderboard</h3>
                <div className="space-y-3">
                  {topUsers.map((user) => (
                    <LeaderboardEntry key={user.id} user={user} />
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
          Exclusive benefits for Builder&apos;s Club members
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
