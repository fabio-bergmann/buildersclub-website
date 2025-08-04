export interface Lesson {
  title: string;
  description: string;
  status: 'released' | 'coming-soon';
}

export interface LessonWithNumber extends Lesson {
  number: number;
  formattedTitle: string;
}

// Raw lesson data - only specify title, description, and status
const lessonsData: Lesson[] = [
  {
    title: "Project overview",
    status: "released",
    description: "Get introduced to the complete AI application we'll be building throughout the course. Learn about the architecture, tech stack, and project goals."
  },
  {
    title: "Designing UI with v0",
    status: "released",
    description: "Discover how to leverage Vercel's v0 AI tool to rapidly prototype and design beautiful user interfaces for your AI applications."
  },
  {
    title: "Environment and Cursor setup",
    status: "released",
    description: "Set up your development environment with Cursor IDE and configure all necessary tools for efficient AI development workflow."
  },
  {
    title: "Version control with Git & Github",
    status: "released",
    description: "Master Git workflows and GitHub best practices specifically tailored for AI project development and collaboration."
  },
  {
    title: "Supabase tables, storage and RLS",
    status: "released",
    description: "Learn to design and implement database schemas, file storage, and Row Level Security policies using Supabase for your AI application."
  },
  {
    title: "Pro level prompting strategies",
    status: "released",
    description: "Master advanced prompt engineering techniques to get consistent, high-quality outputs from language models in production applications."
  },
  {
    title: "Building core app features",
    status: "coming-soon",
    description: "Implement the core functionality of your AI application including user authentication, data processing, and business logic."
  },
  {
    title: "Integrating AI SDK for AI functionality",
    status: "coming-soon",
    description: "Integrate powerful AI capabilities using the Vercel AI SDK to add language model functionality to your application."
  },
  {
    title: "Integrating Resend for email",
    status: "coming-soon",
    description: "Set up automated email notifications and communications using Resend API for user engagement and system notifications."
  },
  {
    title: "Integrating Stripe for SaaS payments",
    status: "coming-soon",
    description: "Implement subscription billing and payment processing with Stripe to monetize your AI application as a SaaS product."
  },
  {
    title: "Building the admin dashboard",
    status: "coming-soon",
    description: "Create a comprehensive admin dashboard to monitor usage, manage users, and analyze your AI application's performance."
  },
  {
    title: "Domains and deployments with Vercel",
    status: "coming-soon",
    description: "Deploy your completed AI application to production using Vercel with custom domains and performance optimizations."
  }
];

// Helper functions
export const getLessons = (): LessonWithNumber[] => {
  return lessonsData.map((lesson, index) => ({
    ...lesson,
    number: index + 1,
    formattedTitle: `Lesson ${index + 1} – ${lesson.title}`
  }));
};

export const getLessonCount = (): number => {
  return lessonsData.length;
};

export const getReleasedLessons = (): LessonWithNumber[] => {
  return getLessons().filter(lesson => lesson.status === 'released');
};

export const getComingSoonLessons = (): LessonWithNumber[] => {
  return getLessons().filter(lesson => lesson.status === 'coming-soon');
};

export const getReleasedCount = (): number => {
  return getReleasedLessons().length;
};