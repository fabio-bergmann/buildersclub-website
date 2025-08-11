'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MainButton } from './components/MainButton';
import { DecorativeLines } from './components/DecorativeLines';
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
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null); // Default to all FAQ items collapsed
  const [closingFaq, setClosingFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [postCategory, setPostCategory] = useState('General');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<typeof posts>([]);
  const [postEngagement, setPostEngagement] = useState<Record<string, { likes: number; hasComment: boolean; commentTimestamp?: number }>>({});
  const [userPoints, setUserPoints] = useState(0);
  const [userRank, setUserRank] = useState<number | null>(null);
  
  const lessons = getLessons();
  const totalLessons = getLessonCount();
  const communityAvatars = getCommunityAvatars();
  const youUser = getUserById('you')!;
  const topUsers = getTopUsers(9); // 9 users + potential user = max 10

  // Preload all community avatars for smoother loading
  useEffect(() => {
    const preloadAvatars = () => {
      communityAvatars
        .filter(user => user.avatarImage)
        .forEach(user => {
          const img = new window.Image();
          img.src = user.avatarImage!;
        });
    };

    preloadAvatars();
  }, [communityAvatars]);

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


  const handleTextareaResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
    // Auto-resize textarea
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      const elementRect = pricingSection.getBoundingClientRect();
      const elementTop = elementRect.top + window.scrollY;
      const offset = 50; // 50px margin above
      const targetPosition = elementTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLessonClick = (index: number) => {
    setExpandedLesson(expandedLesson === index ? null : index);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const categoryOptions = [
    {
      value: 'General',
      label: 'General',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.5C21 14.8978 21 15.5967 20.7716 16.1481C20.4672 16.8831 19.8831 17.4672 19.1481 17.7716C18.5967 18 17.8978 18 16.5 18C16.0114 18 15.7671 18 15.5405 18.0535C15.2383 18.1248 14.9569 18.2656 14.7185 18.4645C14.5397 18.6137 14.3931 18.8091 14.1 19.2L12.64 21.1467C12.4229 21.4362 12.3143 21.5809 12.1812 21.6327C12.0647 21.678 11.9353 21.678 11.8188 21.6327C11.6857 21.5809 11.5771 21.4362 11.36 21.1467L9.9 19.2C9.60685 18.8091 9.46028 18.6137 9.2815 18.4645C9.04312 18.2656 8.76169 18.1248 8.45951 18.0535C8.23287 18 7.98858 18 7.5 18C6.10218 18 5.40326 18 4.85195 17.7716C4.11687 17.4672 3.53284 16.8831 3.22836 16.1481C3 15.5967 3 14.8978 3 13.5V7.8Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 'Introductions',
      label: 'Introductions',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 'Support',
      label: 'Support',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      value: 'Announcements',
      label: 'Announcements',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M18.5 16C20.433 16 22 13.0899 22 9.5C22 5.91015 20.433 3 18.5 3M18.5 16C16.567 16 15 13.0899 15 9.5C15 5.91015 16.567 3 18.5 3M18.5 16L5.44354 13.6261C4.51605 13.4575 4.05231 13.3731 3.67733 13.189C2.91447 12.8142 2.34636 12.1335 2.11414 11.3159C2 10.914 2 10.4427 2 9.5C2 8.5573 2 8.08595 2.11414 7.68407C2.34636 6.86649 2.91447 6.18577 3.67733 5.81105C4.05231 5.62685 4.51605 5.54254 5.44354 5.3739L18.5 3M5 14L5.39386 19.514C5.43126 20.0376 5.44996 20.2995 5.56387 20.4979C5.66417 20.6726 5.81489 20.8129 5.99629 20.9005C6.20232 21 6.46481 21 6.98979 21H8.7722C9.37234 21 9.67242 21 9.89451 20.8803C10.0897 20.7751 10.2443 20.6081 10.3342 20.4055C10.4365 20.1749 10.4135 19.8757 10.3675 19.2773L10 14.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const selectedCategory = categoryOptions.find(cat => cat.value === postCategory) || categoryOptions[0];
  
  // Debug logs
  console.log('=== RENDER DEBUG ===');
  console.log('postCategory state:', postCategory);
  console.log('selectedCategory:', selectedCategory.value);
  console.log('isDropdownOpen:', isDropdownOpen);
  console.log('==================');

  const getCategoryIcon = (category: string) => {
    const option = categoryOptions.find(opt => opt.value === category);
    return option ? option.icon : categoryOptions[0].icon;
  };

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diffInMinutes = Math.floor((now - timestamp) / (1000 * 60));
    
    if (diffInMinutes === 0) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-dropdown-container]')) {
          setIsDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);


  const handlePost = () => {
    if (!postTitle.trim() || !postText.trim()) return;
    
    const newPostId = `user-post-${Date.now()}`;
    const newPost: typeof posts[0] & { timestamp?: number } = {
      id: newPostId,
      userId: 'you',
      title: postTitle,
      content: postText,
      timeAgo: 'Just now',
      timestamp: Date.now(),
      category: postCategory,
      categoryIcon: '',
      likes: 0,
      comments: 0,
      lastCommentTime: '',
      commenters: []
    };
    
    // Add new post to the beginning and keep only 3 posts
    setUserPosts(prev => [newPost, ...prev].slice(0, 3));
    
    // Initialize engagement tracking
    setPostEngagement(prev => ({
      ...prev,
      [newPostId]: { likes: 0, hasComment: false }
    }));
    
    // Start engagement simulation
    startEngagementSimulation(newPostId);
    
    // Award points for posting
    const newPoints = userPoints === 0 ? 2000 : userPoints + 100;
    setUserPoints(newPoints);
    setUserRank(1); // Always rank #1 when user posts
    
    // Clear form and close
    setPostTitle('');
    setPostText('');
    setPostCategory('General');
    setIsWriteExpanded(false);
  };

  const startEngagementSimulation = (postId: string) => {
    // First like after 5 seconds
    setTimeout(() => {
      setPostEngagement(prev => ({
        ...prev,
        [postId]: { ...prev[postId], likes: 1 }
      }));
    }, 5000);

    // Gradually increase likes up to 10 over time
    setTimeout(() => {
      const likeInterval = setInterval(() => {
        setPostEngagement(prev => {
          const current = prev[postId];
          if (current && current.likes < 10) {
            return {
              ...prev,
              [postId]: { ...current, likes: current.likes + 1 }
            };
          } else {
            clearInterval(likeInterval);
            return prev;
          }
        });
      }, 10000); // Every 10 seconds
    }, 15000); // Start after first like + 10 seconds

    // Add first comment after 15 seconds total
    setTimeout(() => {
      const randomUsers = ['piotr', 'dmytro', 'manuel', 'brett', 'yasmine', 'brian', 'marcus', 'jakub'];
      const randomCommenter = randomUsers[Math.floor(Math.random() * randomUsers.length)];
      
      setPostEngagement(prev => ({
        ...prev,
        [postId]: { 
          ...prev[postId], 
          hasComment: true, 
          commentTimestamp: Date.now()
        }
      }));

      // Update the post with comment data
      setUserPosts(prev => prev.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              comments: 1, 
              lastCommentTime: 'Just now',
              commenters: [randomCommenter]
            }
          : post
      ));
    }, 15000);
  };


  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 pt-32">
      {/* Profile Images with background lines */}
      <div className="mb-12 mt-12 w-full max-w-xl mx-auto flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={3} elementType="avatars">
          <div className="h-12 flex items-center">
            <AvatarGroup users={communityAvatars} size="lg" overlap={true} priority={true} />
          </div>
        </DecorativeLines>
      </div>

      {/* Main Heading with background lines */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.85}>
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-bold text-black text-center leading-[1.1] tracking-tight">
            From Idea to App with AI
          </h1>
        </DecorativeLines>
      </div>

      {/* Subheading with brackground lines */}
      <div className="w-full max-w-3xl mx-auto mb-14">
        <DecorativeLines edgeAlign={true} verticalExtension={5} elementType="text" textLetterWidthRatio={0.7}>
          <p className="text-xl md:text-2xl text-[#626262] text-center leading-relaxed font-medium">
            Learn, build, and grow in a community of Builder’s
          </p>
        </DecorativeLines>
      </div>

      {/* CTA Button with background lines */}
      <div className="w-full max-w-lg mx-auto mb-20 flex justify-center">
        <DecorativeLines edgeAlign={true} verticalExtension={7} elementType="button">
          <MainButton onClick={scrollToPricing}>
            Join Today
          </MainButton>
        </DecorativeLines>
      </div>

      {/* Background Video */}
      <div className="w-full max-w-4xl mb-8">
        <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-gray-200">
          <video 
            className="w-full h-auto aspect-video object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            {/* Video source will be replaced when actual video is provided */}
            <source src="https://c1mxgmqfaczbm0k0.public.blob.vercel-storage.com/website-video" type="video/mp4" />
            {/* Fallback content for browsers that don't support video */}
            <div className="w-full h-64 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
              <p className="text-gray-600 text-lg font-medium">Video placeholder - will be replaced with actual video</p>
            </div>
          </video>
          
          {/* Loading placeholder overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center hidden">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-medium">Video Loading...</p>
              <p className="text-gray-500 text-sm mt-2">Background video will loop here</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="w-full max-w-4xl">
        <p className="text-[#626262] text-lg text-center mb-4" style={{ fontFamily: 'var(--font-caveat), cursive' }}>Hosted by</p>
        <div className="flex items-center justify-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/profile-fabio.jpg"
              alt="Fabio Bergmann"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          
          {/* Content and Social Icons */}
          <div className="flex flex-col justify-center h-24 ml-6">
            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-xl font-bold text-black mb-1">Fabio Bergmann</h3>
              <p className="text-[#626262] text-base mb-2">
                Founder of Builder&apos;s Club and <a 
                  href="https://sprike.co/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#626262] no-underline hover:text-[#626262] hover:underline cursor-pointer"
                >Sprike</a>
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.youtube.com/@fabio-bergmann/videos" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 text-[#626262]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/fabiobergmann" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-[#626262]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Section */}
      <div className="w-full max-w-4xl mt-44">
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
                  className="px-8 py-6 hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => handleLessonClick(index)}
                >
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    {/* Badge above title on mobile */}
                    <div className="mb-2">
                      {lesson.status === "released" ? (
                        <span className="px-3 py-1 bg-green-50 text-[#2ECC71] text-sm font-medium rounded-md flex items-center space-x-2 w-fit">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>Released</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-yellow-50 text-[#F4B400] text-sm font-medium rounded-md w-fit">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {/* Title and arrow */}
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold">
                        <span className="text-[#626262]">Lesson {lesson.number} –</span>{' '}
                        <span className="text-black">{lesson.title}</span>
                      </h4>
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

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">
                        <span className="text-[#626262]">Lesson {lesson.number} –</span>{' '}
                        <span className="text-black">{lesson.title}</span>
                      </h4>
                    </div>
                    <div className="flex items-center space-x-4">
                      {lesson.status === "released" ? (
                        <span className="px-3 py-1 bg-green-50 text-[#2ECC71] text-sm font-medium rounded-md flex items-center space-x-2">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
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
      <div className="w-full max-w-6xl mt-44">
        {/* Community Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Community</h2>
        
        {/* Community Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Connect with fellow builders and share your journey
        </p>
        
        {/* Community Interface Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Posts Section */}
          <div className="lg:col-span-8 space-y-6">
            {/* Write Something Section */}
            <div className="transition-all duration-500 ease-in-out bg-white rounded-2xl shadow-xs border border-gray-200" data-write-container>
              <div className="p-4">
                {/* Avatar and Main Input Row */}
                <div className="flex items-center space-x-4">
                  <Avatar user={youUser} size="lg" />
                  {!isWriteExpanded ? (
                    <div 
                      onClick={handleWriteClick}
                      className="flex-1 text-[#999999] text-lg cursor-pointer"
                    >
                      Write something
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}
                      placeholder="Title"
                      autoFocus
                      className="flex-1 text-black font-semibold text-xl bg-transparent border-none focus:outline-none placeholder-[#999999]"
                    />
                  )}
                </div>
                
                {/* Description Input - Only show when expanded */}
                <div className={`${isDropdownOpen || isWriteExpanded ? 'overflow-visible' : 'overflow-hidden'} transition-all duration-500 ease-in-out ${
                  isWriteExpanded ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className={`flex items-start mt-3 transition-opacity duration-0 ${
                    isWriteExpanded ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="w-12 mr-4"></div> {/* Spacer to align with title */}
                    <div className="flex-1 space-y-3">
                      <textarea
                        value={postText}
                        onChange={handleTextareaResize}
                        placeholder="Write something"
                        rows={3}
                        className="w-full text-[#626262] text-lg bg-transparent border-none focus:outline-none placeholder-[#BBBBBB] cursor-text resize-none overflow-hidden"
                        style={{ minHeight: '3rem' }}
                      />
                      
                      {/* Category Selector and Buttons Row */}
                      <div className={`flex justify-between items-center transition-all duration-300 delay-200 ${
                        isWriteExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                        {/* Category Selector */}
                        <div className="relative z-50" data-dropdown-container>
                          <button
                            onClick={() => {
                              console.log('Dropdown clicked, current state:', isDropdownOpen);
                              setIsDropdownOpen(!isDropdownOpen);
                            }}
                            className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#626262] bg-white hover:bg-gray-50 focus:outline-none"
                          >
                            {selectedCategory.icon}
                            <span>{selectedCategory.label}</span>
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          <div 
                            className={`absolute left-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-200 ease-out ${
                              isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto z-[99999]' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none z-[-1]'
                            }`}
                            style={{ 
                              backgroundColor: 'white',
                              border: '1px solid #e5e7eb',
                              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                              transformOrigin: 'top',
                              zIndex: isDropdownOpen ? 99999 : -1
                            }}
                          >
                            {categoryOptions.map((option) => (
                              <div
                                key={option.value}
                                onClick={() => {
                                  console.log('==== CATEGORY CLICK ====');
                                  console.log('Clicked option:', option.value);
                                  console.log('Current postCategory before:', postCategory);
                                  setPostCategory(option.value);
                                  setIsDropdownOpen(false);
                                  console.log('Should update to:', option.value);
                                  console.log('========================');
                                }}
                                className="flex items-center space-x-2 w-full px-3 py-2 text-sm text-[#626262] hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg cursor-pointer"
                                role="button"
                                tabIndex={0}
                              >
                                {option.icon}
                                <span>{option.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Cancel and Post Buttons */}
                        <div className="flex space-x-3">
                          <button 
                            onClick={() => {
                              setPostTitle('');
                              setPostText('');
                              setIsWriteExpanded(false);
                            }}
                            className="px-6 py-2 text-[#626262] text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={handlePost}
                            className="px-6 py-2 bg-[#3478F2] text-white text-sm font-medium rounded-lg hover:bg-[#2563EB] transition-colors duration-200"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-3 w-full">
              <button 
                onClick={() => handleCategoryClick('All')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex-1 text-center transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'All' 
                    ? 'bg-[#3478F2] text-white border-[#3478F2]' 
                    : 'bg-white border-gray-200 text-[#626262] hover:bg-gray-50'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => handleCategoryClick('General')}
                className={`px-6 py-3 border rounded-xl text-sm font-medium flex items-center justify-center space-x-2 flex-1 transition-colors duration-200 cursor-pointer ${
                  activeCategory === 'General' 
                    ? 'bg-[#3478F2] text-white border-[#3478F2]' 
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
                    ? 'bg-[#3478F2] text-white border-[#3478F2]' 
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
                    ? 'bg-[#3478F2] text-white border-[#3478F2]' 
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
                    ? 'bg-[#3478F2] text-white border-[#3478F2]' 
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
            {[...userPosts, ...posts].slice(0, 3).map((post) => {
              const user = getUserById(post.userId);
              if (!user) {
                console.warn(`User not found for post ${post.id} with userId: ${post.userId}`);
                return null; // Skip rendering this post if user doesn't exist
              }
              
              const isLiked = likedPosts[post.id] || false;
              const engagement = postEngagement[post.id];
              const baseLikes = engagement ? engagement.likes : post.likes;
              const currentLikes = baseLikes + (isLiked ? 1 : 0);
              
              return (
                <div key={post.id} className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
                  <PostAuthor 
                    user={user}
                    timeAgo={(() => {
                      const postWithTimestamp = post as typeof post & { timestamp?: number };
                      return postWithTimestamp.timestamp ? formatTimeAgo(postWithTimestamp.timestamp) : post.timeAgo;
                    })()}
                    category={post.category}
                    categoryIcon={getCategoryIcon(post.category)}
                  />
                  <div className="ml-15">
                    <h3 className="font-bold text-black text-xl mb-2">{post.title}</h3>
                    <p className="text-[#626262] mb-3">{post.content}</p>
                    <div className="flex items-center space-x-6 text-[#626262] text-sm">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 hover:opacity-70 transition-all duration-200 cursor-pointer ${isLiked ? 'text-[#3478F2]' : 'text-[#626262]'}`}
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
                      {post.commenters && post.commenters.length > 0 && post.comments > 0 && (
                        <div className="flex items-center space-x-2">
                          <div className={`flex ${post.commenters.length > 1 ? '-space-x-1' : ''}`}>
                            {post.commenters.slice(0, 4).map((commenterId) => {
                              const commenter = getUserById(commenterId);
                              console.log(`Post ${post.id} - Looking for commenter: ${commenterId}, found:`, commenter);
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
                          <span>Last comment {post.lastCommentTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Leaderboard - Right column on desktop, below posts on mobile */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-6">
              {/* Leaderboard */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-6 flex justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#626262]">
                      <path d="M12 15C8.68629 15 6 12.3137 6 9V3.44444C6 3.0306 6 2.82367 6.06031 2.65798C6.16141 2.38021 6.38021 2.16141 6.65798 2.06031C6.82367 2 7.0306 2 7.44444 2H16.5556C16.9694 2 17.1763 2 17.342 2.06031C17.6198 2.16141 17.8386 2.38021 17.9397 2.65798C18 2.82367 18 3.0306 18 3.44444V9C18 12.3137 15.3137 15 12 15ZM12 15V18M18 4H20.5C20.9659 4 21.1989 4 21.3827 4.07612C21.6277 4.17761 21.8224 4.37229 21.9239 4.61732C22 4.80109 22 5.03406 22 5.5V6C22 6.92997 22 7.39496 21.8978 7.77646C21.6204 8.81173 20.8117 9.62038 19.7765 9.89778C19.395 10 18.93 10 18 10M6 4H3.5C3.03406 4 2.80109 4 2.61732 4.07612C2.37229 4.17761 2.17761 4.37229 2.07612 4.61732C2 4.80109 2 5.03406 2 5.5V6C2 6.92997 2 7.39496 2.10222 7.77646C2.37962 8.81173 3.18827 9.62038 4.22354 9.89778C4.60504 10 5.07003 10 6 10M7.44444 22H16.5556C16.801 22 17 21.801 17 21.5556C17 19.5919 15.4081 18 13.4444 18H10.5556C8.59188 18 7 19.5919 7 21.5556C7 21.801 7.19898 22 7.44444 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-black text-lg">Leaderboard</h3>
                  </div>
                </div>
                <div className="space-y-3">
                  {userRank && userPoints > 0 && (
                    <LeaderboardEntry 
                      key="you" 
                      user={{
                        ...youUser,
                        points: userPoints,
                        rank: userRank
                      }} 
                    />
                  )}
                  {topUsers.filter(user => user.id !== 'you').slice(0, userRank && userPoints > 0 ? 9 : 10).map((user) => (
                    <LeaderboardEntry 
                      key={user.id} 
                      user={{
                        ...user,
                        rank: userRank && userPoints > 0 ? (user.rank || 0) + 1 : user.rank
                      }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full max-w-6xl mt-44">
        {/* Benefits Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Benefits</h2>
        
        {/* Benefits Subheadline */}
        <p className="text-xl md:text-2xl text-[#626262] text-center max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          What you&apos;ll get when joining Builder&apos;s Club
        </p>
        
        {/* Benefits Grid - Responsive: 1 column mobile, 2 columns tablet, 3 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">Master the Modern AI Tech Stack</h3>
            <p className="text-[#626262] leading-relaxed">Learn Next.js, Supabase, Stripe, GitHub & more – the stack of top startups – while coding with AI in Cursor and Claude Code.</p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">No Coding Experience Required</h3>
            <p className="text-[#626262] leading-relaxed">Designed for non-technical founders – learn to think like a modern product engineer and let AI handle the heavy lifting.</p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M22 8.93137C22 8.32555 22 8.02265 21.8802 7.88238C21.7763 7.76068 21.6203 7.69609 21.4608 7.70865C21.2769 7.72312 21.0627 7.93731 20.6343 8.36569L17 12L20.6343 15.6343C21.0627 16.0627 21.2769 16.2769 21.4608 16.2914C21.6203 16.3039 21.7763 16.2393 21.8802 16.1176C22 15.9774 22 15.6744 22 15.0686V8.93137Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 9.8C2 8.11984 2 7.27976 2.32698 6.63803C2.6146 6.07354 3.07354 5.6146 3.63803 5.32698C4.27976 5 5.11984 5 6.8 5H12.2C13.8802 5 14.7202 5 15.362 5.32698C15.9265 5.6146 16.3854 6.07354 16.673 6.63803C17 7.27976 17 8.11984 17 9.8V14.2C17 15.8802 17 16.7202 16.673 17.362C16.3854 17.9265 15.9265 18.3854 15.362 18.673C14.7202 19 13.8802 19 12.2 19H6.8C5.11984 19 4.27976 19 3.63803 18.673C3.07354 18.3854 2.6146 17.9265 2.32698 17.362C2 16.7202 2 15.8802 2 14.2V9.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">Step-by-step Learning</h3>
            <p className="text-[#626262] leading-relaxed">Stop wasting hours on random YouTube tutorials. Follow a clear, structured path that takes you from idea to launched app fast.</p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29606 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.59409C17.6384 2.53513 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">Build Your Dream App</h3>
            <p className="text-[#626262] leading-relaxed">Turn your idea into a production-ready app in days, not months. Secure, high-performance, and ready to launch.</p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">Exclusive Builder&apos;s Community</h3>
            <p className="text-[#626262] leading-relaxed">Join an invite-only network of serious founders. Get accountability partners, build in public, and connect with fellow builders.</p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white rounded-2xl shadow-xs border border-gray-200 p-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-b from-[#3478F2] to-[#2663EB] flex items-center justify-center mb-4 shadow-[0_3px_0_0_#1E40AF] transform transition-all duration-150">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[20px] font-bold text-black mb-3">Launch & Monetize Confidently</h3>
            <p className="text-[#626262] leading-relaxed">Validate your idea, learn to integrate Stripe for payments of premium features, and start making money from your app.</p>
          </div>
        </div>
      </div>


      {/* New Pricing Section - Designjoy Style */}
      <div id="pricing-section" className="w-full max-w-6xl mt-44">
        {/* New Pricing Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-6">Join Builder&apos;s Club</h2>
        
        
        {/* Cards Container - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Monthly Plan */}
          <div className="group bg-white rounded-2xl shadow-xs border border-gray-200 p-8 pt-20 relative flex flex-col mt-24">
            {/* Overlapping Image */}
            <div className="absolute -top-20 left-4 w-56 h-auto z-10 transition-transform duration-300 group-hover:rotate-[7.64deg]">
              <Image
                src="/images/card-monthly.png"
                alt="Monthly Membership"
                width={300}
                height={225}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-black mb-2">Monthly Membership</h3>
              <div className="mb-4">
                <div className="bg-gradient-to-b from-[#3478F2] to-[#2663EB] text-white px-4 py-2 rounded-lg text-sm font-bold inline-block">
                  🚀 EARLY ACCESS -40%
                </div>
              </div>
              
              <div className="mb-4 mt-6">
                <div className="flex items-baseline gap-4">
                  {/* Original Price - Single line through dollar amount only */}
                  <div className="flex items-baseline">
                    <div className="relative flex items-baseline">
                      <span className="text-4xl font-bold text-gray-400">$</span>
                      <span className="text-5xl font-bold text-gray-400">47</span>
                      {/* Single strikethrough line over dollar amount only */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[2px] bg-gray-400"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Discounted Price - Next to it */}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-black">$</span>
                    <span className="text-5xl font-bold text-black">27</span>
                    <span className="text-[#626262] text-xl ml-2">/month</span>
                  </div>
                </div>
              </div>
              <p className="text-[#626262] mb-0">Join on a monthly basis</p>
            </div>
            
            {/* Separator Line */}
            <div className="border-t border-gray-200 my-8"></div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Exclusive Builder&apos;s Club community access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Complete AI Coding course access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">All future courses included</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">AI coding templates & launch kits</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">Full tech support</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-black">1:1 strategy session with Fabio (20 min)</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <MainButton 
                className="w-full" 
                onClick={() => window.open('https://buy.stripe.com/8x28wR9dh0bX2uYd6M33W00', '_blank')}
              >
                Join Today
              </MainButton>
            </div>
          </div>

          {/* Yearly Plan */}
          <div className="group bg-black rounded-2xl shadow-xs border border-gray-800 p-8 pt-20 relative flex flex-col mt-24">
            {/* Overlapping Image */}
            <div className="absolute -top-20 left-4 w-56 h-auto z-10 transition-transform duration-300 group-hover:rotate-[7.64deg]">
              <Image
                src="/images/card-yearly.png"
                alt="Yearly Membership"
                width={300}
                height={225}
                className="w-full h-auto object-contain rounded-2xl"
                priority
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Yearly Membership</h3>
              <div className="mb-4">
                <div className="bg-gradient-to-b from-[#3478F2] to-[#2663EB] text-white px-4 py-2 rounded-lg text-sm font-bold inline-block">
                  🚀 EARLY ACCESS -40%
                </div>
              </div>
              
              <div className="mb-4 mt-6">
                <div className="flex items-baseline gap-4">
                  {/* Original Price - Single line through dollar amount only */}
                  <div className="flex items-baseline">
                    <div className="relative flex items-baseline">
                      <span className="text-4xl font-bold text-gray-500">$</span>
                      <span className="text-5xl font-bold text-gray-500">32</span>
                      {/* Single strikethrough line over dollar amount only */}
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[2px] bg-gray-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Discounted Price - Next to it */}
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-5xl font-bold text-white">19</span>
                    <span className="text-gray-300 text-xl ml-2">/month</span>
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <p className="text-gray-300">
                  <span className="line-through text-gray-500">$384</span> $228 billed annually
                </p>
              </div>
            </div>
            
            {/* Separator Line */}
            <div className="border-t border-gray-300 my-8"></div>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Exclusive Builder&apos;s Club community access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Complete AI Coding course access</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">All future courses included</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">AI coding templates & launch kits</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">Priority tech support</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#3478F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white">1:1 strategy session with Fabio (40 min)</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <MainButton 
                className="w-full" 
                onClick={() => window.open('https://buy.stripe.com/14AdRbfBFbUF4D6c2I33W01', '_blank')}
              >
                Join Today
              </MainButton>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
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

      {/* Spacer below FAQ section */}
      <div className="h-[200px]"></div>
    </div>
  );
}
