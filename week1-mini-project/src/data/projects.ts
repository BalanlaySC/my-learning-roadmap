export interface Project {
  id: number;
  title: string;
  description: string
  imageUrl: string;
  technologies: string[];
  link: string;
}

// 2. Create an array of sample project data conforming to the Project interface
const projects: Project[] = [
  {
    id: 1,
    title: "MyTagahanapApp",
    description: "A mobile app written in Java, for my capstone project as final requirement for the BS Information Technology.",
    imageUrl: "/smartphone_map_app_man.png", // Placeholder image URL
    technologies: ["Java", "Python (Flask)", "Php", "MySQL"],
    link: "#" // Dummy link for now
  },
  {
    id: 2,
    title: "Basic Stopwatch",
    description: "Just a stopwatch. Written in vanilla JS",
    imageUrl: "/stopwatch.png",
    technologies: ["JavaScript", "CSS"],
    link: "#"
  },
  {
    id: 3,
    title: "Interactive Profile Card",
    description: "My first React project. A react component showcasing dynamic user profiles with follow and bio toggle features, styled entirely with Tailwind CSS.",
    imageUrl: "/syainsyou_woman.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A dynamic web application to fetch and display current weather and forecasts for any city using a public API.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "Search for recipes by ingredients and discover new culinary ideas with this user-friendly web interface.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "TypeScript", "External API", "CSS Modules"],
    link: "#"
  },
  {
    id: 6,
    title: "Blog Platform UI",
    description: "A responsive frontend for a blogging platform, including post lists, detailed views, and author profiles.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    link: "#"
  },
  {
    id: 7,
    title: "Interactive Quiz App",
    description: "Test your knowledge with a fun and engaging quiz application featuring multiple choice questions and score tracking.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "JavaScript", "State Management"],
    link: "#"
  },
  {
    id: 8,
    title: "Expense Tracker",
    description: "A personal finance tool to log income and expenses, visualize spending habits, and manage budgets.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "TypeScript", "Context API", "Tailwind CSS"],
    link: "#"
  },
  {
    id: 9,
    title: "Landing Page Template",
    description: "A sleek and modern responsive landing page template for a fictitious startup, focusing on design and user experience.",
    imageUrl: "/no_image_logo.png",
    technologies: ["React", "Tailwind CSS", "Animations"],
    link: "#"
  }
];

export default projects;