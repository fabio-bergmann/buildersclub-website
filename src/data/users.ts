export interface User {
  id: string;
  name: string;
  initials: string;
  avatarGradient: string;
  avatarImage?: string;
  points?: number;
  rank?: number;
}

export const users: User[] = [
  {
    id: 'piotr',
    name: 'Piotr',
    initials: 'P',
    avatarGradient: 'from-blue-400 to-blue-600',
    avatarImage: '/avatars/piotr.jpg',
    points: 1850,
    rank: 1,
  },
  {
    id: 'dmytro',
    name: 'Dmytro', 
    initials: 'D',
    avatarGradient: 'from-purple-400 to-purple-600',
    avatarImage: '/avatars/dmytro.jpg',
    points: 1580,
    rank: 2,
  },
  {
    id: 'manuel',
    name: 'Manuel',
    initials: 'D', 
    avatarGradient: 'from-green-400 to-green-600',
    avatarImage: '/avatars/manuel.jpg',
    points: 990,
    rank: 3,
  },
  {
    id: 'brett',
    name: 'Brett',
    initials: 'B',
    avatarGradient: 'from-amber-400 to-orange-600',
    avatarImage: '/avatars/brett.jpg',
    points: 845,
    rank: 4,
  },
  {
    id: 'yasmine',
    name: 'Yasmine',
    initials: 'Y',
    avatarGradient: 'from-red-400 to-red-600',
    avatarImage: '/avatars/yasmine.jpg',
    points: 720,
    rank: 5,
  },
  {
    id: 'brian',
    name: 'Brian',
    initials: 'B',
    avatarGradient: 'from-indigo-400 to-indigo-600',
    avatarImage: '/avatars/brian.jpeg',
    points: 675,
    rank: 6,
  },
  {
    id: 'marcus',
    name: 'Marcus',
    initials: 'M',
    avatarGradient: 'from-pink-400 to-pink-600',
    avatarImage: '/avatars/marcus.jpeg',
    points: 550,
    rank: 7,
  },
  {
    id: 'jakub',
    name: 'Jakub',
    initials: 'J',
    avatarGradient: 'from-teal-400 to-teal-600',
    avatarImage: '/avatars/jakub.jpg',
    points: 480,
    rank: 8,
  },
  {
    id: 'gareth',
    name: 'Gareth',
    initials: 'G',
    avatarGradient: 'from-orange-400 to-yellow-600',
    avatarImage: '/avatars/gareth.jpeg',
    points: 420,
    rank: 9,
  },
  {
    id: 'yash',
    name: 'Yash',
    initials: 'Y',
    avatarGradient: 'from-cyan-400 to-cyan-600',
    avatarImage: '/avatars/yash.jpeg',
    points: 380,
    rank: 10,
  },
  {
    id: 'you',
    name: 'You',
    initials: 'YOU',
    avatarGradient: 'from-blue-400 to-blue-600',
    avatarImage: '/avatars/you.webp',
  },
];

// Helper functions for getting users
export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const getTopUsers = (count: number = 10): User[] => {
  return users
    .filter(user => user.rank)
    .sort((a, b) => (a.rank || 0) - (b.rank || 0))
    .slice(0, count);
};

// Community members for header display (first 6 diverse users)
export const getCommunityAvatars = (): User[] => {
  return [
    getUserById('piotr'),      // Blue gradient
    getUserById('dmytro'),     // Purple gradient  
    getUserById('manuel'),     // Green gradient
    getUserById('brett'),      // Amber-orange gradient
    getUserById('yasmine'),    // Red gradient
    getUserById('brian'),      // Indigo gradient
  ].filter(Boolean) as User[]; // Remove any undefined users
};

// Post data with user references
export interface PostData {
  id: string;
  userId: string;
  title: string;
  content: string;
  timeAgo: string;
  category: string;
  categoryIcon: string;
  likes: number;
  comments: number;
  lastCommentTime: string;
  commenters?: string[]; // User IDs of recent commenters
}

export const posts: PostData[] = [
  {
    id: 'post1',
    userId: 'piotr',
    title: 'Just deployed my first AI agent!',
    content: "Finally got my customer support bot working with Claude. It's handling 80% of our tickets automatically now. This course is incredible!",
    timeAgo: '2d',
    category: 'General',
    categoryIcon: '💬',
    likes: 2,
    comments: 4,
    lastCommentTime: '1d ago',
    commenters: ['jennifer'], // Jennifer made the last comment
  },
  {
    id: 'post2', 
    userId: 'dmytro',
    title: 'Best practices for prompt engineering? 🤖',
    content: "I'm building an AI app that generates marketing copy. What are your go-to techniques for getting consistent, high-quality outputs from LLMs?",
    timeAgo: '5d',
    category: 'General',
    categoryIcon: '💬',
    likes: 8,
    comments: 12,
    lastCommentTime: '3d ago',
    commenters: ['piotr', 'manuel', 'brett', 'yasmine'], // Multiple commenters
  },
  {
    id: 'post3',
    userId: 'manuel', 
    title: 'New here - excited to learn! 👋',
    content: "Just joined the community after struggling with my first AI project. Looking forward to learning from everyone and building something amazing together!",
    timeAgo: '1w',
    category: 'Introductions',
    categoryIcon: '👋',
    likes: 5,
    comments: 3,
    lastCommentTime: '5d ago',
    commenters: ['piotr'], // Piotr made the last comment
  },
];