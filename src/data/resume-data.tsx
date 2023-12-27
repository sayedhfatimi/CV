import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";
import OEMILogo from "../images/logos/oemi.png";

export const RESUME_DATA = {
  name: "Sayed Hamid Fatimi",
  initials: "SHF",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "An enthusiastic and dedicated individual, highly motivated with a strong work ethic.",
  summary:
    "I enjoy getting tasks done quickly and as accurately as possible, being as efficient as possible, especially with repetitive tasks, my analysis skills enable me to break down jobs and restructure my work routine to best suit the workload and meet strict deadlines. I don’t shy away from new opportunities and enjoy being challenged physically and intellectually and always hope I learn something new.",
  avatarUrl: "https://avatars.githubusercontent.com/u/12563377?v=4",
  personalWebsiteUrl: "https://sayedhfatimi.com",
  contact: {
    email: "hamid@fatimi.co.uk",
    tel: "+447818184258",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sayedhfatimi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sayedhfatimi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sayedhfatimi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Queen Mary, University of London",
      degree: "BSc Physics",
      start: "2011",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Self Employed",
      link: "",
      badges: [],
      title: "Financial Market Analyst",
      start: "2018",
      end: "2024",
      description: "Analysis of financial markets",
    },
    {
      company: "Uber",
      link: "",
      badges: [],
      title: "Taxi Driver",
      start: "2020",
      end: "2023",
      description: "Taxi and Food delivery driver/courier",
    },
    {
      company: "Amazon",
      link: "",
      badges: [],
      title: "Delivery Driver",
      start: "2019",
      end: "2021",
      description: "Parcel and Grocery delivery driver",
    },
    {
      company: "Deliveroo",
      link: "",
      badges: [],
      title: "Delivery Driver",
      start: "2019",
      end: "2021",
      description: "Food and Grocery delivery driver",
    },
    {
      company: "Sitel",
      link: "",
      badges: [],
      title: "Customer Service Agent",
      start: "2020",
      end: "2020",
      description: "Track and Trace telephone agent during COVID pandemic breakout",
    },
    {
      company: "Tesco",
      link: "",
      badges: [],
      title: "Customer Service Assistant",
      start: "2017",
      end: "2017",
      description: "",
    },
    {
      company: "eLeREP",
      link: "",
      badges: [],
      title: "Supervising Technician",
      start: "2015",
      end: "2017",
      description: "Responsible for liaising with customers in order to ensure transactions went smoothly and customers were satisfied with their experience in the store. Diagnosis and repair of customers electronics devices i.e Laptops, PCs, Tablets. Managing day to day operations of the store as well as being a first point of contact for customers and employees and running of online eCommerce stores, as well as stock control and inventory management. Introduced and setup multiple new revenue sources, including programming of BIOS/EFI chips for recovery purposes from EFI locks, reprogramming NAND/EEPROM flash memory, data recovery management and OS installation via image restoration for a faster and more efficient service. Designed and coded device tracking system including interface, individual employee access and database. This was highly commended by our customers as it gave them a quick way to check on the progress of repairs without the need for visits or calls to the shop.",
    },
    {
      company: "BARNDOC HEALTHCARE LIMITED",
      link: "",
      badges: [],
      title: "RMS Administrator",
      start: "2014",
      end: "2015",
      description: "Data input and database management. Managing correspondence via fax, phone and email with clients, patients and healthcare providers. Contacting patients, GPs and Hospitals and handling strictly confidential patient information.",
    },
    {
      company: "Final Tuition Centre",
      link: "",
      badges: [],
      title: "Mathematics Tutor",
      start: "2013",
      end: "2014",
      description: "Organising lesson plans and course material. Teaching students and ensuring that each individual was understanding the content that was necessary for the examinations. Marking work and providing constructive feedback as well as assigning homework and reading material for the week that would assist in the students development. Setting and assisting students in attaining target grades.",
    },
    {
      company: "KiioLabs",
      link: "",
      badges: [],
      title: "Web Development Intern",
      start: "2012",
      end: "2013",
      description: "Assisted a group of application developers in producing some web apps. My role in this group involved coding the back end to the design interfaces and ensuring the applications worked as desired. I managed to assist the team in producing two quality applications that gained positive reception from its target audience. During my time with KiioLabs, my ability to code in HTML5, CSS, PHP, MySQL and JavaScript were put to the test, including understanding of JavaScript libraries and their utilisation. I also managed to design and setup multiple databases and learnt how to collaborate with multiple developers at once, ensuring our code interacted and interfaced well with each other.",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Bootstrap",
    "PHP",
    "HTML",
    "CSS",
    "Office Suite",
    "Financial Market Analysis",
    "Component Level Hardware Diagnostic and Repair",
    "Software Diagnostic and Repair"
  ],
  projects: [
    {
      title: "OEMI",
      techStack: [
        "Docker",
        "JavaScript",
        "MySQL",
      ],
      description: "Online Encyclopedia for Mathematical Identities",
      logo: OEMILogo,
      link: {
        label: "oemi.online",
        href: "https://oemi.online/",
      },
    },

  ],
} as const;
