// =========================================================
// PORTFOLIO DATA — Single source of truth for all content
// Update this file to change any information on the site
// =========================================================

export const personal = {
  name: 'Anubhavi Jaiswal',
  firstName: 'Anubhavi',
  headline: 'I build software that solves real problems.',
  subheadline:
    'Computer Science student at VIT Bhopal, exploring full-stack engineering, AI-powered applications, and products that make technology more useful.',
  email: 'anubhavijaiswal@example.com', // Update with actual email
  github: 'https://github.com/anubhavi-jaiswal', // Update with actual URL
  linkedin: 'https://linkedin.com/in/anubhavi-jaiswal', // Update with actual URL
  resumeUrl: '/resume.pdf',
  availabilityStatus: 'Open to internships for 2026–27',
  currentFocus: 'Full-stack engineering & AI applications',
};

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Vellore Institute of Technology, Bhopal',
    shortName: 'VIT Bhopal',
    period: '2023 – 2027',
    cgpa: '9.03 / 10',
    status: 'Current',
  },
];

export const projects = [
  {
    id: 'safesphere',
    name: 'SafeSphere.AI',
    tagline: 'AI-assisted content moderation for safer digital spaces.',
    problem:
      'Online platforms struggle to efficiently identify toxic text and harmful images at scale without manual review overhead.',
    what:
      'Built a full-stack content moderation application that integrates AI moderation APIs to classify potentially toxic text and harmful images in real time, wrapped in a browser extension and backend API with Redis caching for performance.',
    decisions: [
      'Redis caching to avoid redundant API calls for repeated content, reducing latency and cost.',
      'Modular pipeline separating text analysis, image analysis, and caching layers.',
      'Browser extension architecture for in-context moderation without page navigation.',
      'Privacy-first approach: content is processed, not stored long-term.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'Redis', 'Browser Extension APIs', 'External AI APIs'],
    previewType: 'moderation',
    github: 'https://github.com/anubhavi-jaiswal/safesphere-ai',
    demo: null,
    status: 'Completed',
    accentColor: '#00F59B',
    featured: true,
  },
  {
    id: 'nodeflow',
    name: 'NodeFlow',
    tagline: 'Interactive network topology simulation with anomaly detection.',
    problem:
      'Understanding network behavior and anomalies is difficult without visual, interactive tooling for simulation and analysis.',
    what:
      'Built a full-stack network simulation application featuring interactive network topologies, real-time traffic visualization, and anomaly detection. Users can create nodes, simulate packet flow, and observe how the system flags abnormal traffic patterns.',
    decisions: [
      'React-based interactive canvas for intuitive drag-and-drop topology building.',
      'MongoDB for persisting topology configurations and simulation history.',
      'Real-time traffic simulation using React state and timer-based packet propagation.',
      'Anomaly detection logic using threshold-based packet delay and packet loss analysis.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'SVG/Canvas'],
    previewType: 'network',
    github: 'https://github.com/anubhavi-jaiswal/nodeflow',
    demo: null,
    status: 'Completed',
    accentColor: '#3B82F6',
    featured: true,
  },
  {
    id: 'ipdr',
    name: 'IPDR Communication Analysis Tool',
    tagline: 'Analyzing 100,000+ communication records with interactive visualization.',
    problem:
      'Investigators and analysts need to extract patterns and insights from large volumes of communication records efficiently.',
    what:
      'Built a JavaScript/React application for analyzing and visualizing large communication datasets (100,000+ records), with interactive filters, data extraction, and chart-based visual summaries using Recharts.',
    decisions: [
      'Client-side data processing with optimized filtering to handle large record volumes.',
      'Recharts for composable, interactive data visualizations including bar, line, and pie charts.',
      'Exportable filtered datasets for downstream investigative workflows.',
      'Column-based filter architecture for flexible query composition.',
    ],
    technologies: ['JavaScript', 'React', 'Recharts', 'CSV Processing'],
    previewType: 'data',
    github: 'https://github.com/anubhavi-jaiswal/ipdr-analysis',
    demo: null,
    status: 'Completed',
    accentColor: '#A855F7',
    featured: true,
  },
];

export const skills = {
  Languages: ['Java', 'JavaScript', 'SQL'],
  Frontend: ['React.js', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  'Databases & Tools': ['MySQL', 'MongoDB', 'Redis', 'Git', 'GitHub', 'Recharts'],
  'CS Fundamentals': ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'],
};

export const experience = [
  {
    role: 'President & Student Coordinator',
    org: 'Google Developer Groups On Campus',
    orgShort: 'GDG on Campus',
    location: 'VIT Bhopal',
    period: 'Aug 2025 – Sep 2026',
    type: 'Leadership',
    highlights: [
      'Led a technical student community of developers at VIT Bhopal as the chapter President.',
      'Organized and coordinated developer events, technical workshops, and speaker sessions.',
      'Managed cross-functional collaboration between technical and non-technical teams.',
      'Oversaw website development, event logistics, and project coordination for the chapter.',
      'Built a community platform for student developers to collaborate and grow.',
    ],
  },
  {
    role: 'Web Team Member',
    org: 'Google Developer Groups On Campus',
    orgShort: 'GDG on Campus',
    location: 'VIT Bhopal',
    period: '2024 – 2025',
    type: 'Technical',
    highlights: [
      'Developed and maintained the GDG on Campus VIT Bhopal chapter website.',
      'Collaborated with the design and content teams for event pages and announcements.',
      'Contributed to technical event organization and community growth efforts.',
    ],
  },
];

export const achievements = [
  {
    title: 'NPTEL Introduction to Machine Learning',
    badge: 'Elite + Silver',
    detail: 'Top 5% nationwide placement',
    category: 'Certification',
    icon: 'certificate',
    verified: true,
  },
  {
    title: 'Visionary Hackathon',
    badge: '2nd Place',
    detail: 'Competitive inter-college hackathon',
    category: 'Hackathon',
    icon: 'trophy',
    verified: true,
  },
  {
    title: "CyberShield '25",
    badge: '3rd Place',
    detail: 'Cybersecurity-focused competition',
    category: 'Competition',
    icon: 'shield',
    verified: true,
  },
];
