export function BenefitsSection() {
  return (
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
  );
}