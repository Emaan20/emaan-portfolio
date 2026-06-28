import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandReactNative, TbDatabase, TbWorldWww } from "react-icons/tb";
import { IconType } from "react-icons";
import chatcareDashboardTopics from "../assets/projects/chatcare/chatcare-dashboard-topics.png";
import chatcareMoodTrend from "../assets/projects/chatcare/chatcare-mood-trend.png";
import chatcareFeelingsMix from "../assets/projects/chatcare/chatcare-feelings-mix.png";
import chatcareWelcome from "../assets/projects/chatcare/chatcare-welcome.png";
import chatcareCaregiverLogin from "../assets/projects/chatcare/chatcare-caregiver-login.png";
import chatcarePatientLogin from "../assets/projects/chatcare/chatcare-patient-login.png";
import chatcareAiChat from "../assets/projects/chatcare/chatcare-ai-chat.png";
import chatcareExercises from "../assets/projects/chatcare/chatcare-exercises.png";
import chatcareApprovals from "../assets/projects/chatcare/chatcare-approvals.png";
import chatcareApprovalDetail from "../assets/projects/chatcare/chatcare-approval-detail.png";
import chatcarePatientMonitoring from "../assets/projects/chatcare/chatcare-patient-monitoring.png";
import chatcareMedicationModal from "../assets/projects/chatcare/chatcare-medication-modal.png";
import chatcareCaregiverDashboard from "../assets/projects/chatcare/chatcare-caregiver-dashboard.png";

import tractDashboard from "../assets/projects/tract/tract-dashboard.png";
import tractListProperty from "../assets/projects/tract/tract-list-property.png";
import tractContracts from "../assets/projects/tract/tract-contracts.png";
import tractDealTracker from "../assets/projects/tract/tract-deal-tracker.png";
import tractChat from "../assets/projects/tract/tract-chat.png";
import tractLogin from "../assets/projects/tract/tract-login.png";
import tractSignup from "../assets/projects/tract/tract-signup.png";

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Mobile" | "Languages" | "Tools" | "Others";

export type Skill = {
  name: string;
  category: SkillCategory;
  icon: IconType;
  featured?: boolean;
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  period: string;
  type: string;
  summary: string;
  role: string;
  stack: string[];
  features: string[];
  challenges: string[];
  impact: string;
  github?: string;
  githubUrl?: string;
  live?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  accent: string;
  mockupLabel: string;
  mockupType?: "web" | "mobile";
  coverImage?: string;
  screenshots?: string[];
};

export const profile = {
  name: "Emaan Fatima",
  title: "MERN Stack Developer",
  headline: "Full Stack Software Engineer | AI-First React Developer",
  location: "Lahore, Pakistan",
  phone: "+92 301 8192796",
  email: "ema59983@gmail.com",
  availability: "Available for freelance web and mobile projects",
  cv: "/EmaanFatima-CV.pdf",
  social: {
    github: "",
    linkedin: "",
    portfolio: "",
  },
  about:
    "I build modern web and mobile applications with React, React Native, Node.js, APIs, and AI-enabled workflows. My work focuses on clean interfaces, reusable components, strong responsive behavior, and reliable integration with backend systems.",
  journey:
    "My journey combines frontend engineering, mobile app development, API integration, backend exposure, and AI-first product work. I enjoy turning rough requirements into polished screens, smooth flows, and production-style user experiences.",
  goal:
    "My goal is to grow as a high-impact MERN Stack and React Native developer who can ship premium digital products with thoughtful UX, scalable code, and performance-first execution.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend", icon: FaReact, featured: true },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, featured: true },
  { name: "Redux Toolkit", category: "Frontend", icon: SiRedux, featured: true },
  { name: "React Router", category: "Frontend", icon: TbWorldWww },
  { name: "HTML5", category: "Frontend", icon: FaHtml5 },
  { name: "CSS3", category: "Frontend", icon: FaCss3Alt },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, featured: true },
  { name: "Responsive Design", category: "Frontend", icon: TbWorldWww, featured: true },
  { name: "React Native", category: "Mobile", icon: TbBrandReactNative, featured: true },
  { name: "Expo", category: "Mobile", icon: SiExpo },
  { name: "JavaScript ES6+", category: "Languages", icon: SiJavascript, featured: true },
  { name: "TypeScript", category: "Languages", icon: SiTypescript, featured: true },
  { name: "Python", category: "Languages", icon: FaPython },
  { name: "Node.js", category: "Backend", icon: FaNodeJs, featured: true },
  { name: "Express.js", category: "Backend", icon: FaNodeJs },
  { name: "FastAPI", category: "Backend", icon: SiFastapi },
  { name: "REST APIs", category: "Backend", icon: TbApi, featured: true },
  { name: "WebSocket APIs", category: "Backend", icon: TbApi },
  { name: "JWT Auth", category: "Backend", icon: TbApi },
  { name: "MongoDB", category: "Database", icon: SiMongodb, featured: true },
  { name: "PostgreSQL", category: "Database", icon: SiPostgresql },
  { name: "SQLAlchemy", category: "Database", icon: SiPostgresql },
  { name: "Qdrant", category: "Database", icon: TbDatabase },
  { name: "Firebase", category: "Database", icon: SiFirebase, featured: true },
  { name: "Postman", category: "Tools", icon: SiPostman },
  { name: "Git/GitHub", category: "Tools", icon: FaGithub },
  { name: "Figma-to-Code", category: "Tools", icon: FaFigma },
  { name: "LangChain", category: "Others", icon: TbApi },
  { name: "Gemini / LLM Integration", category: "Others", icon: TbApi },
  { name: "Agile / Scrum", category: "Others", icon: TbWorldWww },
];

export const experiences = [
  {
    role: "Freelance Full Stack / Frontend Developer",
    company: "Remote",
    period: "Mar 2025 - Present",
    summary:
      "Building responsive web and mobile interfaces, integrating APIs, implementing authentication, validation, empty/loading/error states, and debugging UI/API/state issues across client work.",
    stack: ["React", "React Native", "Redux", "Tailwind", "REST APIs", "Postman", "GitHub"],
  },
  {
    role: "Frontend Developer",
    company: "TRACT - US Real Estate Web Application",
    period: "May 2026 - Present",
    summary:
      "Developing role-based seller, wholesaler/realtor, and admin workflows including KYC, listings, bids, contracts, deal tracking, modals, and status transitions.",
    stack: ["React", "Redux", "REST APIs", "Dashboards", "Forms", "Authorization"],
  },
  {
    role: "React Native Developer",
    company: "Sooqz Classifieds Application",
    period: "Mar 2025 - May 2025",
    summary:
      "Built Expo-based classifieds flows with CRUD, real-time sync, offline caching, search, filtering, polling-based messaging, OneSignal notifications, and responsive listing screens.",
    stack: ["React Native", "Expo", "Redux", "OneSignal", "REST CRUD", "Offline Cache"],
  },
  {
    role: "React Web Developer",
    company: "SimCorp Remodeling",
    period: "Aug 2025 - Sep 2025",
    summary:
      "Created a lead-generation site with services, gallery/contact flows, sticky CTAs, mobile click-to-call, semantic markup, lazy loading, caching, SSL/domain deployment, and safe updates.",
    stack: ["React", "React Router", "SEO", "Performance", "Accessibility", "Deployment"],
  },
  {
    role: "Frontend Developer",
    company: "Valet Parking Dubai",
    period: "Feb 2026 - Mar 2026",
    summary:
      "Designed responsive service-page layouts for valet, chauffeur, driver-rental, pick-and-drop, event, and hospitality services with strong navigation and quote/contact actions.",
    stack: ["React", "Responsive UI", "Service Pages", "Lead Forms", "Mobile Navigation"],
  },
];

export const projects: Project[] = [
  {
  id: "chatcare",
  name: "ChatCare",
  subtitle: "AI-Powered Mental Health Application",
  period: "Feb 2025 - Jan 2026",
  type: "Featured",
  summary:
    "A final-year React Native + AI application for mental-health support, combining patient workflows, caregiver dashboards, AI text/voice chat, mood tracking, reminders, and safety-aware AI responses.",
  role: "React Native developer with full-stack AI workflow contribution",
  stack: [
    "React Native",
    "Redux",
    "FastAPI",
    "PostgreSQL",
    "Qdrant",
    "LangChain",
    "Gemini",
    "JWT",
    "WebSockets",
    "RAG",
  ],
  features: [
    "AI text and voice chat with context-aware responses",
    "Mood tracking, session history, medication reminders, and patient onboarding",
    "Caregiver approval flows, emergency risk checks, red-flag detection, and safety protocols",
    "Structured PDF/TXT ingestion for RAG-powered mental-health context",
  ],
  challenges: [
    "Designing emotionally clear flows for sensitive mental-health scenarios",
    "Connecting mobile screens with JWT-protected REST/WebSocket APIs",
    "Supporting AI pipelines for stress scoring, emotional insights, and emergency checks",
  ],
  impact: "Secured 2nd position in the Final Year Project competition.",
  accent: "from-sky-300/45 via-cyan-400/35 to-blue-500/40",
  mockupLabel: "AI Mental Health Mobile App",
  mockupType: "mobile",
  coverImage: chatcareWelcome,
  screenshots: [
    chatcareWelcome,
    chatcareDashboardTopics,
    chatcareMoodTrend,
    chatcareFeelingsMix,
    chatcareAiChat,
    chatcareExercises,
    chatcareApprovals,
    chatcareApprovalDetail,
    chatcarePatientMonitoring,
    chatcareMedicationModal,
    chatcareCaregiverDashboard,
    chatcareCaregiverLogin,
    chatcarePatientLogin,
  ],
},
{
  id: "tract",
  name: "TRACT",
  subtitle: "US Real Estate Web Application",
  period: "May 2026 - Present",
  type: "Product",
  summary:
    "A role-based real-estate platform with seller, wholesaler/realtor, and admin workflows covering authentication, KYC, listings, bids, contracts, deal tracking, and chat.",
  role:
    "Frontend feature developer for production-style business workflows and dashboard experiences.",
  stack: [
    "React",
    "Redux",
    "REST APIs",
    "React Router",
    "Dashboards",
    "Forms",
    "Status Systems",
  ],
  features: [
    "Role-based dashboards and authenticated flows",
    "KYC, listing, bid, contract, and deal-tracking interfaces",
    "Status transitions, validation, loading, empty, and error states",
    "Real-time business workflows for contracts, deal progression, and communication",
  ],
  challenges: [
    "Handling business rules across multiple user roles",
    "Keeping UI state consistent with API status updates",
    "Making dense real-estate workflows readable and responsive",
  ],
  impact:
    "Built production-style UI flows for a real-estate platform with clear business process handling across seller workflows.",
  accent: "from-[#0b4c3b]/70 via-[#17613f]/55 to-[#d2aa2a]/30",
  mockupLabel: "Tract web application",
  mockupType: "web",
  coverImage: tractLogin,
  screenshots: [
    tractDashboard,
    tractListProperty,
    tractContracts,
    tractDealTracker,
    tractChat,
    tractDashboard,
    tractSignup,
  ],
},
  {
    id: "sooqz",
    name: "Sooqz",
    subtitle: "React Native Classifieds Application",
    period: "Mar 2025 - May 2025",
    type: "Freelance",
    summary:
      "An Expo-based classifieds platform with listing creation, CRUD flows, real-time sync, offline caching, search, filtering, polling-based messages, and OneSignal notifications.",
    role: "React Native developer responsible for mobile UI and app flows",
    stack: ["React Native", "Expo", "Redux", "REST CRUD", "OneSignal", "Offline Caching"],
    features: [
      "Mobile listing discovery and classified-post flows",
      "Global state management using Redux",
      "Search, filters, notifications, and polling-based messaging",
      "Responsive mobile UI designed for higher listing engagement",
    ],
    challenges: [
      "Keeping listings available during offline or unstable network states",
      "Designing high-clarity classified browsing flows",
      "Managing real-time-like messaging through polling",
    ],
    impact: "Delivered a smoother mobile classified listing experience.",
    live: "https://play.google.com/store/apps/details?id=com.b4s17.sooqz",
    accent: "from-emerald-400/45 via-cyan-400/35 to-blue-500/40",
    mockupLabel: "Classifieds Mobile App",
  },
  {
    id: "simcorp",
    name: "SimCorp Remodeling",
    subtitle: "Responsive Lead-Generation Website",
    period: "Aug 2025 - Sep 2025",
    type: "Freelance",
    summary:
      "A polished React marketing site for a remodeling service, including service pages, gallery and contact flows, sticky CTAs, mobile click-to-call, optimized assets, SSL, and deployment workflows.",
    role: "React web developer handling UI, performance, accessibility, and deployment updates",
    stack: ["React", "React Router", "Responsive UI", "SEO", "Lazy Loading", "SSL", "Caching"],
    features: [
      "Service, portfolio, about, and contact information architecture",
      "Lead-generation form with email-friendly contact flow",
      "Sticky CTAs and mobile click-to-call behavior",
      "Lightweight bundles, semantic markup, caching, and safe update workflows",
    ],
    challenges: [
      "Balancing visual polish with fast first-load performance",
      "Designing a service website that converts visitors into leads",
      "Maintaining safe deployment and backup workflows",
    ],
    impact: "Improved discoverability, accessibility, and lead-conversion clarity.",
    live: "https://simcorp4u.org",
    accent: "from-orange-300/45 via-pink-400/35 to-violet-500/40",
    mockupLabel: "Remodeling Landing System",
  },
  {
    id: "valet-parking-dubai",
    name: "Valet Parking Dubai",
    subtitle: "Premium Service Website",
    period: "Feb 2026 - Mar 2026",
    type: "Service",
    summary:
      "A responsive service website covering valet parking, chauffeur, driver rental, pick-and-drop, event, and hospitality services with strong navigation and quote/contact actions.",
    role: "Frontend developer creating service pages and conversion-focused layouts",
    stack: ["React", "Responsive Design", "Service Pages", "Lead CTAs", "Mobile Navigation"],
    features: [
      "Dedicated layouts for multiple service categories",
      "Mobile-first navigation and quote/contact actions",
      "Premium visual hierarchy for hospitality and event service users",
      "Reusable page sections for service expansion",
    ],
    challenges: [
      "Presenting multiple services without overwhelming mobile users",
      "Creating trust and premium feel for service-based leads",
      "Keeping CTAs visible without feeling aggressive",
    ],
    impact: "Created a clearer path from service discovery to contact action.",
    live: "https://valetparkingdubai.com",
    accent: "from-yellow-300/45 via-orange-400/35 to-purple-500/40",
    mockupLabel: "Luxury Service Pages",
  },
];

export const services = [
  {
    title: "MERN Stack Development",
    description: "End-to-end web apps with React interfaces, Node/Express API foundations, MongoDB-ready data flows, authentication, validation, and production-style user journeys.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "React Development",
    description: "Modern React pages, reusable components, routing, state handling, form flows, and polished interaction states for fast, maintainable frontend products.",
    tags: ["React", "Router", "Components"],
  },
  {
    title: "React Native Apps",
    description: "Expo-based mobile screens, navigation flows, Redux state, API-connected features, notifications, and responsive mobile UI for Android and iOS experiences.",
    tags: ["Expo", "Redux", "Mobile UI"],
  },
  {
    title: "API Integration",
    description: "Clean REST/WebSocket integration with JWT auth, loading states, empty states, error handling, request validation, and Postman-tested frontend behavior.",
    tags: ["REST APIs", "JWT", "Postman"],
  },
  {
    title: "Responsive UI",
    description: "Mobile-first layouts with strong spacing, readable typography, adaptive grids, accessibility-minded markup, and pixel-polished Tailwind implementation.",
    tags: ["Tailwind", "A11y", "Mobile-first"],
  },
  {
    title: "Dashboard Development",
    description: "Role-based dashboards, tables, filters, status badges, modals, detail pages, and business-workflow screens for admin and product operations.",
    tags: ["Dashboards", "Tables", "Workflows"],
  },
  {
    title: "Frontend Development",
    description: "Frontend feature delivery from rough requirements to refined screens, including routing, UI state, reusable sections, and clean integration with backend teams.",
    tags: ["UI Logic", "SPA", "State"],
  },
  {
    title: "Backend Development",
    description: "Backend-support work with API structure, FastAPI exposure, SQL/PostgreSQL validation, auth-aware endpoints, and data-heavy debugging across product flows.",
    tags: ["FastAPI", "SQL", "Auth"],
  },
  {
    title: "Bug Fixing",
    description: "Structured debugging for UI breakage, API mismatches, validation bugs, responsive issues, inconsistent states, and production-style frontend/backend edge cases.",
    tags: ["Debugging", "QA", "Fixes"],
  },
  {
    title: "Website Optimization",
    description: "Performance-focused improvements using lazy loading, lighter components, semantic HTML, asset optimization, caching awareness, and accessibility cleanup.",
    tags: ["Speed", "SEO", "A11y"],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "COMSATS University Islamabad - Lahore Campus",
    period: "2022 - 2026",
    meta: "CGPA: 3.35",
  },
];

export const certifications = [
  {
    title: "Git/GitHub, Postman, API Testing, and GitHub Copilot Workflow",
    issuer: "Practical project-based experience",
    status: "Portfolio-backed skill proof",
  },
  {
    title: "AI + RAG Integration Exposure",
    issuer: "ChatCare FYP / LangChain + Gemini workflows",
    status: "Project-based implementation",
  },
  {
    title: "React Native + Full Stack Product Development",
    issuer: "ChatCare and Sooqz mobile applications",
    status: "Hands-on development",
  },
];

export const achievements = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Core Technologies", value: 18, suffix: "+" },
  { label: "FYP Position", value: 2, suffix: "nd" },
  { label: "CGPA", value: 3.35, suffix: "" },
];

export const testimonials = [
  {
    quote:
      "Emaan brings strong ownership, clean UI thinking, and the ability to convert requirements into responsive product screens.",
    name: "Client Feedback Placeholder",
    role: "Replace with real client testimonial",
  },
  {
    quote:
      "Her frontend work shows attention to spacing, behavior, and practical API-connected flows across web and mobile.",
    name: "Team Feedback Placeholder",
    role: "Replace after approval",
  },
];
