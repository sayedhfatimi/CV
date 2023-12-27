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
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
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
      school: "Queen Mary, University of London ",
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
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "PHP",
    "HTML",
    "CSS",
    "Financial Market Analysis",
    "Component Level Hardware Diagnostic and Repair"
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
