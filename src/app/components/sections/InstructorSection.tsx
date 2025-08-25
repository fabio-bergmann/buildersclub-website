import Image from 'next/image';
import { AnimatedVideo } from '../AnimatedVideo';

export function InstructorSection() {
  return (
    <>
      {/* Background Video */}
      <div className="w-full max-w-4xl mb-8 mx-auto">
        <AnimatedVideo>
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
        </AnimatedVideo>
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
    </>
  );
}