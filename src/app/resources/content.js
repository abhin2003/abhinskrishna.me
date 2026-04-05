const person = {
  firstName: "Abhin",
  lastName: "S Krishna",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Web3, AI, and backend engineering, and share practical
      insights on building decentralized systems.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abhin2003",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abhin-s-krishna/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abhinskrishna3@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing work in Web3, AI, and backend systems.`,
  headline: <>Developer focused on Web3, AI, and backend systems</>,
  subline: (
    <>
      I'm Abhin, a developer specializing in Rust, Python, and decentralized applications.
      I build scalable automation tools and AI-driven platforms with a strong focus on
      performance, security, and real-world impact.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, a developer specializing in Web3, AI, and backend systems from ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Developer specializing in Web3, AI, and backend systems with hands-on experience in
        Rust, Python, and decentralized applications.
        Proven ability to build scalable automation tools and AI-driven platforms with a strong
        focus on performance, security, and real-world impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Elna",
        timeframe: "2024",
        role: "Rust Developer",
        achievements: [
          <>
            Migrated decentralized AI systems from Motoko to Rust, improving performance and
            scalability.
          </>,
          <>
            Optimized backend logic for distributed environments and enhanced reliability across
            distributed systems.
          </>,
        ],
        images: [],
      },
      {
        company: "Elna",
        timeframe: "2023 – 2024",
        role: "Motoko Developer",
        achievements: [
          <>
            Built decentralized AI applications on ICP with secure contract workflows.
          </>,
          <>
            Designed smart contract logic for secure data handling and privacy-preserving
            interactions.
          </>,
        ],
        images: [],
      },
      {
        company: "Techdia",
        timeframe: "2023",
        role: "Python Developer",
        achievements: [
          <>
            Developed automation frameworks using Selenium and Appium for scalable testing and
            process automation.
          </>,
          <>
            Built end-to-end automation pipelines that improved test coverage and deployment
            consistency.
          </>,
        ],
        images: [],
      },
      {
        company: "Harish Info Solutions",
        timeframe: "2022",
        role: "Freelance UI/UX Designer",
        achievements: [
          <>
            Designed intuitive user interfaces and improved UX across web and mobile projects.
          </>,
          <>
            Delivered responsive design systems that strengthened client product experiences.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "M.Tech in Data Science & Artificial Intelligence",
        description: <>CUSAT, Cochin — Expected Jun 2027</>,
      },
      {
        name: "B.Tech in Computer Science",
        description: <>CUSAT, Cochin — Jun 2021 – Jun 2025</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>
            Rust, Python, Motoko, C, SQL, HTML, CSS
          </>
        ),
      },
      {
        title: "Technologies",
        description: (
          <>
            Web3, Blockchain, AI/ML, DApps, ICP
          </>
        ),
      },
      {
        title: "Tools",
        description: (
          <>
            Selenium, Appium, ADB, Git, Docker
          </>
        ),
      },
      {
        title: "Concepts",
        description: (
          <>
            Backend development, distributed systems, smart contracts
          </>
        ),
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Web3, AI, and engineering...",
  description: `Read what ${person.name} has been working on recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Web3, AI, and backend projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
