import Image from 'next/image';
import { MainButton } from '../MainButton';
import { WordsPullUp } from '../WordsPullUp';
import { AnimatedBadge } from '../AnimatedBadge';
import { AnimatedCard } from '../AnimatedCard';

export function PricingSection() {
  return (
    <div id="pricing-section" className="w-full max-w-6xl mt-44">
      {/* New Pricing Main Headline */}
      <WordsPullUp 
        text="Join Builder's Club"
        className="text-5xl md:text-6xl font-bold text-black text-center mb-6"
      />
      
      {/* Early Access Badge */}
      <AnimatedBadge>
        <div className="bg-gradient-to-b from-[#3478F2] to-[#2663EB] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14.9998L9 11.9998M12 14.9998C13.3968 14.4685 14.7369 13.7985 16 12.9998M12 14.9998V19.9998C12 19.9998 15.03 19.4498 16 17.9998C17.08 16.3798 16 12.9998 16 12.9998M9 11.9998C9.53214 10.6192 10.2022 9.29582 11 8.04976C12.1652 6.18675 13.7876 4.65281 15.713 3.59385C17.6384 2.53489 19.8027 1.98613 22 1.99976C22 4.71976 21.22 9.49976 16 12.9998M9 11.9998H4C4 11.9998 4.55 8.96976 6 7.99976C7.62 6.91976 11 7.99976 11 7.99976M4.5 16.4998C3 17.7598 2.5 21.4998 2.5 21.4998C2.5 21.4998 6.24 20.9998 7.5 19.4998C8.21 18.6598 8.2 17.3698 7.41 16.5898C7.02131 16.2188 6.50929 16.0044 5.97223 15.9878C5.43516 15.9712 4.91088 16.1535 4.5 16.4998Z" stroke="#92C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          EARLY ACCESS -40% for Lifetime
        </div>
      </AnimatedBadge>
      
      {/* Cards Container - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Monthly Plan */}
        <AnimatedCard index={0} className="group bg-white rounded-2xl shadow-xs border border-gray-200 p-8 pt-20 relative flex flex-col mt-24">
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
              <span className="text-black">Complete AI Coding course access<br /><b>Early Access</b> – Releasing 1-2 lessons / week</span>
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
        </AnimatedCard>

        {/* Yearly Plan */}
        <AnimatedCard index={1} className="group bg-black rounded-2xl shadow-xs border border-gray-800 p-8 pt-20 relative flex flex-col mt-24">
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
              <span className="text-white">Complete AI Coding course access<br /><b>Early Access</b> – Releasing 1-2 lessons / week</span>
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
        </AnimatedCard>
      </div>
    </div>
  );
}