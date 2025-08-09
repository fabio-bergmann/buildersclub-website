import React from 'react';
import { User } from '@/data/users';
import { Avatar } from './Avatar';

interface UserProfileProps {
  user: User;
  showPoints?: boolean;
  showRank?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
  className?: string;
}

export function UserProfile({ 
  user, 
  showPoints = false, 
  showRank = false,
  size = 'lg',
  layout = 'horizontal',
  className = '' 
}: UserProfileProps) {
  const isHorizontal = layout === 'horizontal';
  const layoutClass = isHorizontal ? 'flex items-center space-x-3' : 'flex flex-col items-center space-y-2';
  
  return (
    <div className={`${layoutClass} ${className}`}>
      <Avatar user={user} size={size} />
      <div className={`${isHorizontal ? 'flex-1' : 'text-center'}`}>
        <div className="font-medium text-black text-sm">{user.name}</div>
        {showPoints && user.points && (
          <div className="text-[#3B81F5] font-semibold text-sm">{user.points}</div>
        )}
      </div>
      {showRank && user.rank && (
        <span className="w-6 text-center font-semibold text-[#626262] text-sm">{user.rank}</span>
      )}
    </div>
  );
}

// Specialized component for leaderboard entries
interface LeaderboardEntryProps {
  user: User;
  className?: string;
}

export function LeaderboardEntry({ user, className = '' }: LeaderboardEntryProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className="w-6 text-center font-semibold text-[#626262] text-sm">{user.rank}</span>
      <Avatar user={user} size="md" />
      <div className="flex-1">
        <div className="font-medium text-black text-sm">{user.name}</div>
      </div>
      <div className="text-[#3B81F5] font-semibold text-sm">{user.points}</div>
    </div>
  );
}

// Specialized component for post authors
interface PostAuthorProps {
  user: User;
  timeAgo: string;
  category: string;
  categoryIcon: React.ReactNode;
  className?: string;
}

export function PostAuthor({ 
  user, 
  timeAgo, 
  category, 
  categoryIcon, 
  className = '' 
}: PostAuthorProps) {
  return (
    <div className={`flex items-start space-x-3 ${className}`}>
      <Avatar user={user} size="lg" />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-semibold text-black">{user.name}</span>
        </div>
        <div className="text-[#626262] text-sm flex items-center space-x-1 mb-2">
          <span>{timeAgo} •</span>
          <span className="inline-flex">{categoryIcon}</span>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}