import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Marx Yeh",
  initials: "MY",
  url: "https://marx.adastra.tw",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/Taipei,+Taiwan",
  description:
    "Engineer and entrepreneur focused on AI and software development. Currently building Adastra, an AI-powered solution for public relations and event management, while exploring social complex systems through ML and DL.",
  summary:
    "My work spans freelancing, leading student-driven projects, and diving deep into research on social complex systems. With expertise in Machine Learning and Deep Learning, I explore innovative ways to model human behavior and solve real-world challenges.\n\nAt Adastra, I’m driving the development of an AI-powered platform for public relations and event management. Collaborating closely with our first client, we’re creating scalable, cutting-edge software tailored to their needs. A relentless problem solver, I thrive at the intersection of AI, technology, and impactful solutions, continuously delivering results that matter.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "PyTorch",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "C++",
    "C#",
    "Rust",
    "AWS",
    "GCP",
    "Azure",
    "Cloudflare",
    "Firebase",
    "Entrepreneurship",
    "Product Management",
    "Data Science",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Social Media Analysis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "b10705052@ntu.edu.tw",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/youmingyeh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%E5%8F%88%E9%8A%98-%E8%91%89-00b50b272/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Adastra",
      href: "https://adastra.tw",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Co-Founder & Product Lead",
      logoUrl: "/adastra.png",
      start: "August 2024",
      end: "Present",
      description:
        "Found Proof-of-Concept and developed the MVP of Adastra, an AI-powered solution for public relations and event management. Collaborated with our first client to create a scalable, cutting-edge software tailored to their needs.",
    },
    {
      company: "Academia Sinica",
      href: "https://www.sinica.edu.tw/en",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Research Assistant",
      logoUrl: "/academia-sinica.png",
      start: "July 2024",
      end: "Present",
      description:
        "Conducting research on social complex systems using Machine Learning and Deep Learning.",
    },
    {
      company: "PDOGS",
      href: "https://pdogs.ntu.im/",
      badges: [],
      location: "Taipei, Taiwan",
      title: "DevOps Engineer",
      logoUrl: "/pdogs.png",
      start: "June 2022",
      end: "August 2022",
      description:
        "Maintained and developed the PDOGS platform, a judge system for programming, CI/CD pipeline and managed the Infrastructure.",
    },
    {
      company: "ChungHwa Telecom Laboratories",
      href: "https://www.chttl.com.tw/en/",
      badges: [],
      location: "Taipei, Taiwan",
      title: "NLP + Developer",
      logoUrl: "/chunghwa.png",
      start: "July 2022",
      end: "August 2022",
      description:
        "Developed a information system for the hundreds of stakeholders.",
    },
  ],
  education: [
    {
      school: "National Taiwan University",
      href: "https://www.ntu.edu.tw",
      degree: "M.S. in Computer Science",
      logoUrl: "/ntu.png",
      start: "2025",
      end: "2027",
    },
    {
      school: "National Taiwan University",
      href: "https://www.ntu.edu.tw",
      degree: "B.M. in Information Management",
      logoUrl: "/ntu.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Adastra",
      href: "https://adastra.tw",
      dates: "August 2024 - Present",
      active: true,
      description:
        "A platform that uses AI to help public relations and event management teams to manage their events and PR campaigns.",
      technologies: [
        "React",
        "Next.js",
        "AI SDK",
        "Typescript",
        "Hono",
        "TailwindCSS",
        "Node.js",
        "SQLite",
        "OpenAI",
        "Cloudflare",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://adastra.tw",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adastra-screenshot.png",
    },
    {
      title: "Glimmer",
      href: "https://glimmer.adastra.tw/",
      dates: "-",
      active: true,
      description:
        "A browser extension that helps you navigate to Google, ChatGPT, Perplexity and other tools with simple highlighting and left-clicking.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Browser Extension",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://glimmer.adastra.tw",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/glimmer.png",
    },
    {
      title: "NTU ArtFest 2024 Riddle City Game",
      href: "https://riddlecity.ntuartfest.com/",
      dates: "2024",
      active: true,
      description:
        "A interactive game that uses riddles to guide players through the NTU campus, showcasing the ArtFest 2024 events. Ended up with 200+ players engaging with the game in 2 weeks.",
      technologies: ["React", "Next.js"],
      links: [
        {
          type: "Website",
          href: "https://riddlecity.ntuartfest.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/riddlecity.png",
    },

    {
      title: "Production Scheduling Optimization",
      href: "https://im-project-demo.vercel.app/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Graduation project of Information Management, using Operations Research and Mixed Integer Programming to optimize the production scheduling of a factory, deployed on Google Cloud Platform with well-designed API and database.",
      technologies: [
        "GuRoBi",
        "Python",
        "FastAPI",
        "Cloud RUn",
        "Pub/Sub",
        "Firestore",
      ],
      links: [
        {
          type: "Website",
          href: "https://im-project-demo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/im-project.png",
    },
    {
      title: "Enhanced INFEKTA",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "A project that enhances the INFEKTA platform, a epidemic model enhanced with generative agents, simulating the dynamics of infectious diseases with LLM Agents.",
      technologies: [
        "Python",
        "LLM",
        "Agent-based Simulation",
        "Epidemic Model",
      ],

      image: "/infekta.gif",
    },
  ],
  hackathons: [
    {
      title: "PDAO 2023",
      dates: "2022",
      location: "Taipei, Taiwan",
      description:
        "Worked as a System Engineer and Problem Setter, developed the scoreboard for the competition.",
      image:
        "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/333039514_3358765871049793_7403106067881270151_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=uj9PMQib-9kQ7kNvgEhiDF7&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=AIWGMSmzVEDofSd7u2nMuMr&oh=00_AYDEjWlBZYXU1T32Rtu0yQd8knRjQOM-CncJ28Adc7ZNjQ&oe=67623F01",
    },

    {
      title: "CodeFest Taipei 2024",
      dates: "2024",
      location: "Taipei, Taiwan",
      description:
        "Developed realtime cilivian reciprocity network with advanced algorithm and Native APIs.",
      image: "https://codefest.taipei/images/logo.svg",
      links: [],
    },
    {
      title: "ANU-NTU Students Hackathon Competition",
      dates: "2024",
      location: "Taipei, Taiwan",
      description:
        "Winning the small hackathon with a project using multimodal generative models to generate montages for investigator to understand the crime scene with witnesses.",

      image: "https://hackathon.ntu.im/images/logo.png",
    },
  ],
} as const;
