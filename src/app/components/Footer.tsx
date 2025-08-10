export function Footer() {
  return (
    <footer className="w-full">
      {/* New Black Section with Builder's Club Text */}
      <div className="w-full bg-black py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 
            className="font-bold leading-none tracking-tight"
            style={{ 
              fontSize: '80px',
              fontFamily: 'inherit',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              lineHeight: '1',
              margin: '0',
              color: '#626262'
            }}
          >
            Builder&apos;s Club
          </h1>
          
          {/* Copyright and Legal Links Row */}
          <div className="flex justify-between items-center text-xs sm:text-sm mt-8" style={{ color: '#626262' }}>
            {/* Copyright - Left side */}
            <div>
              © 2025 Builder&apos;s Club. All rights reserved.
            </div>
            
            {/* Legal Links - Right side */}
            <div className="flex space-x-6">
              <a 
                href="/tos" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy-policy" 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}