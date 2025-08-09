export function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] overflow-hidden">
      <div className="relative w-full h-[240px] sm:h-[290px] md:h-[340px] lg:h-[390px] pt-8">
        {/* Large Brand Text - Perfectly centered */}
        <div className="absolute inset-0 px-4 sm:px-6 lg:px-8">
          <div className="h-full flex items-center justify-center">
            <h2 
              className="font-bold leading-none tracking-tight select-none"
              style={{ 
                fontSize: 'clamp(6.6rem, 16.5vw, 22rem)',
                fontFamily: 'inherit',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                lineHeight: '0.85',
                whiteSpace: 'nowrap',
                margin: '0',
                background: 'linear-gradient(to bottom, #d1d5db 0%, #f5f5f5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Builder's Club
            </h2>
          </div>
        </div>
        
        {/* Copyright and Legal Links - Bottom Row */}
        <div className="absolute bottom-4 left-0 right-0 px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex justify-between items-center text-gray-400 text-xs sm:text-sm">
            {/* Copyright - Left side */}
            <div>
              © 2025 Builder's Club. All rights reserved.
            </div>
            
            {/* Legal Links - Right side */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="hover:text-gray-600 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="hover:text-gray-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="hover:text-gray-600 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}