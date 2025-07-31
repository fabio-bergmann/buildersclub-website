export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-4 py-20">
      {/* Profile Images */}
      <div className="flex items-center justify-center mb-16 space-x-[-12px]">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white shadow-lg z-10"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white shadow-lg z-20"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 border-3 border-white shadow-lg z-30"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-3 border-white shadow-lg z-40"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-3 border-white shadow-lg z-30"></div>
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white shadow-lg z-20"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold text-gray-900 text-center max-w-5xl leading-[1.1] mb-8 tracking-tight">
        The website builder you&apos;re looking for
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mb-14 leading-relaxed font-medium">
        Simple is a modern website builder powered by AI that changes how companies create user interfaces together.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
          Start Free Trial
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border border-gray-300 transition-colors shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
          Learn More
        </button>
      </div>

      {/* Terminal Mockup */}
      <div className="w-full max-w-3xl">
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
    </div>
  );
}
