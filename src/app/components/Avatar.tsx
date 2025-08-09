import React, { useState } from 'react';
import Image from 'next/image';
import { User } from '@/data/users';

interface AvatarProps {
  user: User;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBorder?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-sm',
  lg: 'w-12 h-12 text-sm',
  xl: 'w-14 h-14 text-base',
};

export function Avatar({ 
  user, 
  size = 'lg', 
  showBorder = false, 
  className = '' 
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  const sizeClass = sizeClasses[size];
  const borderClass = showBorder ? 'border-2 border-white' : '';
  
  const sizePixels = {
    sm: 24,
    md: 32, 
    lg: 48,
    xl: 56,
  };
  
  const showImage = user.avatarImage && !imageError;
  
  return (
    <div 
      className={`
        ${sizeClass}
        rounded-full 
        ${!showImage ? `bg-gradient-to-br ${user.avatarGradient}` : 'bg-gray-200'}
        flex items-center justify-center 
        text-white font-bold
        ${borderClass}
        ${size === 'xl' ? 'shadow-lg' : ''}
        overflow-hidden
        relative
        ${className}
      `}
    >
      {showImage ? (
        <Image
          src={user.avatarImage}
          alt={`${user.name} avatar`}
          width={sizePixels[size]}
          height={sizePixels[size]}
          className="rounded-full object-cover w-full h-full"
          onLoad={() => setImageLoading(false)}
          onError={() => {
            setImageError(true);
            setImageLoading(false);
          }}
          priority={size === 'xl'} // Prioritize loading for larger avatars
        />
      ) : (
        <span className={imageLoading && showImage ? 'opacity-0' : 'opacity-100'}>
          {user.initials}
        </span>
      )}
      
      {/* Loading state for image */}
      {imageLoading && showImage && (
        <div className="absolute inset-0 bg-gradient-to-br bg-gray-300 animate-pulse rounded-full flex items-center justify-center text-gray-500 text-xs">
          {user.initials}
        </div>
      )}
    </div>
  );
}

// Specialized avatar for overlapping groups (like header)
interface AvatarGroupProps {
  users: User[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  maxDisplay?: number;
  overlap?: boolean;
  className?: string;
}

export function AvatarGroup({ 
  users, 
  size = 'xl', 
  maxDisplay = 6, 
  overlap = true,
  className = '' 
}: AvatarGroupProps) {
  const displayUsers = users.slice(0, maxDisplay);
  const overlapClass = overlap ? 'space-x-[-12px]' : 'space-x-2';
  
  return (
    <div className={`flex items-center justify-center ${overlapClass} ${className}`}>
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.id}
          user={user}
          size={size}
          showBorder={overlap}
          className={overlap ? 'shadow-lg' : ''}
        />
      ))}
    </div>
  );
}