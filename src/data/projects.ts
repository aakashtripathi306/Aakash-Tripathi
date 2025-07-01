import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "PMS",
    href: "/projects",
    tags: [
      "NodeJs",
      "Reactjs",
      "Tailwindcss",
      "ExpressJs",
      "Vite",
      "React-router-dom",
      "MySQL",
      "Vercel",
      "Render",
      "Socket.io",
      "webrtc",
    ],
    image: {
      DARK: "/images/projects/pms-dashboard.webp",
      LIGHT: "/images/projects/pms-user.webp",
    },
  },
  {
    index: 1,
    title: "Interview Prep AI",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Express",
      "Vite",
      "React-router-dom",
      "Nodejs",
      "MongoDB",
      "OpenAI",
      "Vercel",
      "Render",
    ],
    image: {
      LIGHT: "/images/projects/interview-home.webp",
      DARK: "/images/projects/interview-home.webp",
    },
  },
  {
    index: 2,
    title: "Recipe-App",
    href: "/projects",
    tags: [
      "Reactjs",
      "Vite",
      "Tailwindcss",
      "Nodejs",
      "Express",
      "Mysql",
      "Vercel",
      "GoogleAuth",
    ],
    image: {
      LIGHT: "/images/projects/Recipe-app.webp",
      DARK: "/images/projects/Recipe-app.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "PMS",
    favicon: "/images/projects/logos/task-management.ico",
    imageUrl: [
      "/images/projects/pms-dashboard.webp",
      "/images/projects/pms-user.webp",
    ],
    description:
      "A full-stack Project Management System built with React.js, Node.js, Express.js, MySQL, and Socket.io. Includes real-time task updates, drag-and-drop support, user assignments, video calls using WebRTC, and a responsive dashboard for both admin and users.",
    sourceCodeHref:
      "https://github.com/Aakashtripathi2002/Project-Management-System",
    liveWebsiteHref: "https://project-management-system.aakashprojects.tech",
  },
  {
    name: "INTERVIEW PREP AI",
    favicon: "/images/projects/logos/artificial-intelligence.ico",
    imageUrl: [
      "/images/projects/interview-home.webp",
      "/images/projects/interview-ai.webp",
    ],
    description:
      "An AI-powered interview preparation platform using React.js, Node.js, and Gemini AI (via OpenAI API). Users can practice technical and behavioral questions, get instant feedback, and track progress. MongoDB used for storing user sessions and reports.",
    sourceCodeHref: "https://github.com/Aakashtripathi2002/InterView-Prep-AI",
    liveWebsiteHref: "https://interview-prep-ai.aakashprojects.tech",
  },
  {
    name: "RECIPE APP",
    favicon: "/images/projects/logos/chef.ico",
    imageUrl: ["/images/projects/Recipe-app.webp"],
    description:
      "A dynamic recipe finder and manager built using React.js, Node.js, Express.js, and MySQL. Users can search, save, and categorize recipes. Integrated with Google Auth for user login and includes calorie and nutrition info for each recipe.",
    sourceCodeHref: "https://github.com/Aakashtripathi2002/Recipe-App",
    liveWebsiteHref: "https://recipe-finder.aakashprojects.tech/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio-img.webp",
      "/images/projects/light-porfolio-img.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/Aakashtripathi2002/Aakash-Tripathi",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Home-Workout-Application",
    favicon: "/images/projects/logos/home-workout.ico",
    imageUrl: [
      "/images/projects/Workout-application-home.webp",
      "/images/projects/workout-page.webp",
    ],
    description:
      "A fitness-focused application built with React.js and MUI for home workouts and personalized diet plans. Includes a rest timer, voice coach, workout history tracking, and daily routine guidance for all fitness levels.",
    sourceCodeHref: "https://github.com/Aakashtripathi2002/Workout-Application",
    liveWebsiteHref: "https://workout-application.aakashprojects.tech",
  },
];
