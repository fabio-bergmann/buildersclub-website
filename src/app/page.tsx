import { MainButton } from './components/MainButton';

export default function Home() {
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
        <MainButton>
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
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {/* Course Header */}
          <div className="px-8 py-8 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-2">Course Content</h3>
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
    </div>
  );
}
