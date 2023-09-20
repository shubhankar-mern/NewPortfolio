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
  postgres,
  python,
  lti,
  cn,
  zeeve,
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
    title: "FullStack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Enthusiast/ Web3",
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
    name: "docker",
    icon: docker,
  },
  {
   name: 'postgres',
   icon: postgres,
  },
 
];

const experiences = [
  {
    title: "Cloud Infra Engineer",
    company_name: "LTI",
    icon: lti,
    iconBg: "#E6DEDD",
    date: "Jun 2020 - Jan 2022",
    points: [
      "MySQL database/user creation, dump/restoration.Perform Server Backups and Restores.",
      "Implemented and administered Microsoft Exchange for seamless communication and collaboration among teammembers, resulting in a 30% increase in productivity.Took server reports as well.",
      "Provided exceptional L1 support to end-users, resolving tickets promptly and efficiently, maintaining a highcustomer satisfaction rate of 95%.",
      "Experience of working with Servers: FTP, Web Server, Mail Servers.",
    ],
  },
  {
    title: "FullStack Developer",
    company_name: "Coding Ninja",
    icon: cn,
    iconBg: "#383E56",
    date: "Oct 2022 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies Like MERN",
      "Got Trained in Fullstack Application Developement in MERN stack",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other students.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Zeeve.io",
    icon: zeeve,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - September 2023",
    points: [
      "Developed REST API using Node.js and PostgreSQL, providing a robust and scalable backend architecture that handles concurrent user requests with a response time of less than 100ms",
      "Migrated Recaptcha v2 to Recaptcha Enterprise, enhancing the security and reliability of the application against bot attacks, resulting in a 90% reduction in fraudulent activities and unauthorized access attempts",
      "Worked on notification service microservice & Integrated new Emails in the notification service backend and sdk, resulting in a 20% increase in timely and accurate email delivery",
      " Designed and developed responsive frontends using React, Bootstrap classes, and Redux from wireframe and figma designs, resulting in a 40% improvement in user experience and engagement",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked in application backend and integrated various critical functionalities also wrote testcases using test cases using Chai and Mocha , achieving a test coverage of 95% across all critical functionalities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Thank you for all the valuable contributions, and knowledge shared.Keep up the good work, shine on the more you do the brighter Zeeve will. ",
    name: "Ghan Vashishtha",
    designation: "CTO",
    company: "Zeeve",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "We have enjoyed your dedication and enthusiasm for your job. We can't thank them enough!We would like to take this opportunity to recognize your many contributions to our company, and to thank you for your commitment and dedication",
    name: "Nandan Jha",
    designation: "HR",
    company: "Zeeve",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "News Bingo",
    description:
      "Web-based platform that allows users login and buy a subscription . Users can select different categories of news they wanna recieve. It uses the news API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/shubhankar-mern/NewsBingo-FullStack-MERN",
  },
  {
    name: "Employee Review CRM",
    description:
      "Web application that helps HR create employee review forms. HRs can create forms and invite employees to fill it and genrate a review report.",
    tags: [
      {
        name: "ejs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/shubhankar-mern/EmployeeReviewCRMapp",
  },
  {
    name: "React MovieApp",
    description:
      "A movieApp made with reactjs with filtering ,pajination etc. It uses the themoviedb API for fetching data. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "themoviedb API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/shubhankar-mern/React_MovieApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
