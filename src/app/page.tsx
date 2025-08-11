'use client';

import { useEffect } from 'react';
import { getCommunityAvatars } from '@/data/users';
import { HeroSection } from './components/sections/HeroSection';
import { InstructorSection } from './components/sections/InstructorSection';
import { CourseSection } from './components/sections/CourseSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';

export default function Home() {
  const communityAvatars = getCommunityAvatars();

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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      const elementRect = pricingSection.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Detect mobile screen size
      const isMobile = window.innerWidth < 768;
      
      if (isMobile) {
        // On mobile: scroll to show the pricing section title closer to top
        const targetPosition = Math.max(0, absoluteElementTop - 50);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      } else {
        // On desktop: center the section in viewport (current behavior)
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        const targetPosition = Math.max(0, middle);
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center px-4 pt-32">
      <HeroSection onJoinTodayClick={scrollToPricing} />
      <InstructorSection />
      <CourseSection />
      <CommunitySection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      
      {/* Spacer below FAQ section */}
      <div className="h-[200px]"></div>
    </div>
  );
}