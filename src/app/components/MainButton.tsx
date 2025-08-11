import React from 'react';

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function MainButton({ children, onClick, className = '', disabled = false }: MainButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-gradient-to-b from-[#3D3D3D] to-[#2B2B2B] hover:from-[#333333] hover:to-[#202020] active:from-[#262626] active:to-[#1A1A1A]
        text-white font-semibold 
        px-8 py-4 
        rounded-2xl
        transition-all duration-150 ease-out
        inline-flex items-center justify-center gap-3
        shadow-[0_6px_0_0_#000000] hover:shadow-[0_2px_0_0_#000000]
        transform hover:translate-y-1 active:translate-y-2 active:shadow-none
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_6px_0_0_#000000]
        ${className}
      `}
    >
      <span className="text-lg">{children}</span>
      
      {/* Arrow Icon */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="flex-shrink-0"
      >
        <path 
          d="M4 12H20M20 12L14 6M20 12L14 18" 
          stroke="#F5F5F5" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}