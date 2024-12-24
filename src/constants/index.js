import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Trading Desk",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Financial Management",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];


const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Iboon Technologies",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jan 2024 - May 2024",
    points: [
      "Led development of 9 machine learning and deep learning models for emotion detection utilizing face landmarks on live camera, optimizing data acquisition and preprocessing, enhancing accuracy by up to 12% in certain systems. Utilized SQL for data analysis to streamline data preparation for model training",
"Directed presentation of model as lead intern, effectively communicating findings and showcasing results to team",

    ],
},
  {
    title: "Automation Intern",
    company_name: "Iboon Technologies",
    icon: tcs,
    iconBg: "#000000",
    date: "June 2023 - August 2023",
    points: [
      "Integrated a Python-based application for gauging arm-length, reducing system time consumption by 68% and improved efficiency across 5 data processing stages. Collaborated with a cross-functional team of 8 members and deployed applicationusing AWS, ensuring scalability and real-time access",
"Applied advanced math and statistics to analyze datasets in Python, creating predictive models that improved accuracy by 15% across multiple test scenarios"
    ],
  },
  
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [


];

const projects = [
  {
    name: "Forex Back-Testing and Automation",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "It involves designing a system to evaluate the performance of forex trading strategies by simulating their outcomes using historical data. The project likely includes building a back-testing engine, integrating financial data sources, analyzing performance metrics, and automating trading processes with rule-based algorithms or machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "OANDA",
        color: "green-text-gradient",
      },
      {
        name: "Financial Analysis",
        color: "pink-text-gradient",
      },
    ],
    image: payment,

  },
  {
    name: "Deep Emotion Classifier ",
    description:
      "Collected brain activity data from multiple regions using a 25-electrode EEG machine. Pre-processed frequency data for deep learning models, analyzing and representing the execution of various techniques. Conducted system analytics, documented accuracy, and utilized Power BI for comprehensive data visualization.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine/Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "blue-text-gradient",
      },
    ],
    image: intelligence2,
   
  },
  {
    name: "Sports Community App",
    description:
      "Engineered an app that connects sports enthusiasts, enabling users to host and join events across 10+ sports categories. Built a secure backend with Firestore to support login, messaging, scoring, and profile management. Designed a professional and interactive UI in Figma and implemented it in Flutter, incorporating 15+ animations and loading screens to ensure smooth transitions and an engaging user experience.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firestore",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: rental,

  },
];

export { services, technologies, experiences, testimonials, projects };
