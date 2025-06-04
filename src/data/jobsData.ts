export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  posted: string;
  logo: string;
}

export const jobsData: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco",
    type: "Full-time",
    salary: "$120k - $150k",
    description: "Join our innovative team to build cutting-edge web applications using React, TypeScript, and modern development practices.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "CSS/Tailwind expertise"],
    posted: "2 days ago",
    logo: "🚀"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "New York",
    type: "Full-time",
    salary: "$80k - $110k",
    description: "Create beautiful and intuitive user experiences for our digital products. Work with cross-functional teams to deliver exceptional designs.",
    requirements: ["Figma expertise", "User research skills", "Portfolio required"],
    posted: "1 day ago",
    logo: "🎨"
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Build scalable backend systems and APIs. Work with microservices architecture and cloud technologies.",
    requirements: ["Node.js/Python", "AWS/GCP experience", "Database design"],
    posted: "3 days ago",
    logo: "☁️"
  },
  {
    id: 4,
    title: "Product Manager",
    company: "StartupXYZ",
    location: "Austin",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Lead product strategy and development for our growing SaaS platform. Work closely with engineering and design teams.",
    requirements: ["3+ years PM experience", "Agile methodology", "Analytics tools"],
    posted: "1 week ago",
    logo: "📊"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "InfraTech",
    location: "Seattle",
    type: "Full-time",
    salary: "$115k - $145k",
    description: "Manage and optimize our cloud infrastructure. Implement CI/CD pipelines and monitoring solutions.",
    requirements: ["Kubernetes", "Docker", "Terraform", "AWS"],
    posted: "5 days ago",
    logo: "⚙️"
  },
  {
    id: 6,
    title: "Marketing Specialist",
    company: "GrowthCo",
    location: "Los Angeles",
    type: "Part-time",
    salary: "$50k - $70k",
    description: "Drive digital marketing campaigns and content strategy. Analyze performance metrics and optimize conversion rates.",
    requirements: ["Digital marketing", "Google Analytics", "Content creation"],
    posted: "4 days ago",
    logo: "📈"
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "Boston",
    type: "Full-time",
    salary: "$125k - $160k",
    description: "Apply machine learning and statistical analysis to solve complex business problems. Work with large datasets and predictive models.",
    requirements: ["Python/R", "Machine Learning", "SQL", "Statistics"],
    posted: "6 days ago",
    logo: "🤖"
  },
  {
    id: 8,
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Remote",
    type: "Contract",
    salary: "$90k - $120k",
    description: "Develop native mobile applications for iOS and Android. Collaborate with designers to implement pixel-perfect UIs.",
    requirements: ["React Native/Flutter", "iOS/Android", "Mobile UI/UX"],
    posted: "1 day ago",
    logo: "📱"
  },
  {
    id: 9,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Washington DC",
    type: "Full-time",
    salary: "$95k - $125k",
    description: "Monitor and protect our systems from security threats. Implement security protocols and conduct vulnerability assessments.",
    requirements: ["Security frameworks", "Network security", "Risk assessment"],
    posted: "3 days ago",
    logo: "🔒"
  }
];
