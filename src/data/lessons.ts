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
    title: "Welcome & Overview",
    status: "released",
    description: "Discover why AI coding is one of the most valuable skills you can learn today and how it can help you turn ideas into real products or useful tools—quickly. We’ll outline what you’ll achieve in this course and how to get the most from Builder’s Club through active building, sharing your progress, and connecting with other members."
  },
  {
    title: "Tools & Tech Stack",
    status: "released",
    description: "Get introduced to the modern web development stack we’ll use throughout the course. We’ll walk through each tool, explain its role in the build process, and share why it’s part of our setup—so you know exactly what you’ll be learning to work with as we progress."
  },
  {
    title: "What App We’re Building",
    status: "released",
    description: "Get a walkthrough of the AI-powered X Post Generator we’ll build together in this course. You’ll see the app’s purpose, its core features—from training the AI on your writing style to generating and managing posts—and how it fits into the concept of an AI wrapper: a focused, user-friendly product built on top of powerful language models."
  },
  {
    title: "Setup Cursor",
    status: "coming-soon",
    description: "Install Cursor from scratch and get comfortable navigating the interface. We’ll go through every setting and panel so you know exactly where everything is before we start coding."
  },
  {
    title: "Setup Claude Code",
    status: "coming-soon",
    description: "Set up Claude Code inside Cursor and learn the basics of using it for code assistance. We’ll walk through the installation, configuration, and interface so you’re ready to work seamlessly with AI coding tools."
  },
  {
    title: "Starter Template",
    status: "coming-soon",
    description: "Learn how to start new projects with a ready-to-use Next.js template that includes built-in security, authentication, and project structure—so you never have to start from zero again."
  },
  {
    title: "Next.js & Tech Basics",
    status: "coming-soon",
    description: "Understand the core concepts of Next.js and how it powers both the frontend and backend of our application. You’ll learn enough to think and work like a product engineer, ready to build and scale real apps."
  },
  {
    title: "GitHub – Code Management",
    status: "coming-soon",
    description: "Set up GitHub and learn modern version control workflows: creating branches, making pull requests, merging code, and managing deployments—all the skills you need to work efficiently alone or in a team."
  },
  {
    title: "Supabase – Authentication & Database",
    status: "coming-soon",
    description: "Integrate Supabase into your app for secure user authentication and robust database storage. We’ll set up sign-up/login flows, configure Row Level Security, and create the database tables we need."
  },
  {
    title: "App Dashboard Design",
    status: "coming-soon",
    description: "Design and build the main dashboard of our app. We’ll create the user interface, connect it to live data, and make sure it’s both functional and visually consistent."
  },
  {
    title: "AI SDK – Integrating AI",
    status: "coming-soon",
    description: "Add AI features to your app using the Vercel AI SDK. We’ll connect to language models, send structured prompts, and handle responses—turning your app into an intelligent, interactive tool."
  },
  {
    title: "Stripe – Payments & Memberships",
    status: "coming-soon",
    description: "Set up Stripe for subscription payments and membership tiers. We’ll also build an AI credit system so users can have usage-based limits tied to their plan."
  },
  {
    title: "Vercel – Deployment",
    status: "coming-soon",
    description: "Deploy your app to the web with Vercel. We’ll connect it to GitHub, configure your settings, and make your application live for real users."
  },
  {
    title: "Resend – Transactional Emails",
    status: "coming-soon",
    description: "Implement email functionality using Resend for everything from user notifications to marketing campaigns—keeping your users informed and engaged."
  },
  {
    title: "User Roles",
    status: "coming-soon",
    description: "Create and manage multiple user roles in your app, such as admin and standard user. We’ll use Supabase’s Row Level Security to control access to different features and data."
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
