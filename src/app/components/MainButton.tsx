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
        bg-gradient-to-b from-[#3B81F5] to-[#2663EB] hover:from-[#2563EB] hover:to-[#1D4ED8] active:from-[#1D4ED8] active:to-[#1E40AF]
        text-white font-semibold 
        px-8 py-4 
        rounded-2xl
        transition-all duration-150 ease-out
        inline-flex items-center justify-center gap-3
        shadow-[0_6px_0_0_#1E40AF] hover:shadow-[0_2px_0_0_#1E40AF]
        transform hover:translate-y-1 active:translate-y-2 active:shadow-none
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_6px_0_0_#1E40AF]
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
          stroke="#92C5FD" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}