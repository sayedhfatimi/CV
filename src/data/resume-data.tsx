import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

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
		tel: "+44-7818-184258",
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
			badges: ["Remote"],
			title: "Financial Market Analyst",
			start: "2018",
			end: "2024",
			description: "Analysis of financial markets",
		},
		{
			company: "Uber",
			link: "",
			badges: ["Driver"],
			title: "Taxi Driver",
			start: "2020",
			end: "2023",
			description: "Taxi and Food delivery driver/courier",
		},
		{
			company: "Amazon",
			link: "",
			badges: ["Driver"],
			title: "Delivery Driver",
			start: "2019",
			end: "2021",
			description: "Parcel and Grocery delivery driver",
		},
		{
			company: "Deliveroo",
			link: "",
			badges: ["Driver"],
			title: "Delivery Driver",
			start: "2019",
			end: "2021",
			description: "Food and Grocery delivery driver",
		},
		{
			company: "Sitel",
			link: "",
			badges: ["Remote"],
			title: "Customer Service Agent",
			start: "2020",
			end: "2020",
			description:
				"Track and Trace telephone agent during COVID pandemic breakout",
		},
		{
			company: "Tesco",
			link: "",
			badges: ["Watford"],
			title: "Customer Service Assistant",
			start: "2017",
			end: "2017",
			description: "",
		},
		{
			company: "eLeREP",
			link: "",
			badges: ["Harrow"],
			title: "Supervising Technician",
			start: "2015",
			end: "2017",
			description:
				"Responsible for liaising with customers in order to ensure transactions went smoothly and customers were satisfied with their experience in the store. Diagnosis and repair of customers electronics devices i.e Laptops, PCs, Tablets. Managing day to day operations of the store as well as being a first point of contact for customers and employees and running of online eCommerce stores, as well as stock control and inventory management. Introduced and setup multiple new revenue sources, including programming of BIOS/EFI chips for recovery purposes from EFI locks, reprogramming NAND/EEPROM flash memory, data recovery management and OS installation via image restoration for a faster and more efficient service. Designed and coded device tracking system including interface, individual employee access and database. This was highly commended by our customers as it gave them a quick way to check on the progress of repairs without the need for visits or calls to the shop.",
		},
		{
			company: "BarnDoc Healthcare",
			link: "",
			badges: ["Cockfosters"],
			title: "RMS Administrator",
			start: "2014",
			end: "2015",
			description:
				"Data input and database management. Managing correspondence via fax, phone and email with clients, patients and healthcare providers. Contacting patients, GPs and Hospitals and handling strictly confidential patient information.",
		},
		{
			company: "Final Tuition Centre",
			link: "",
			badges: ["Enfield"],
			title: "Mathematics Tutor",
			start: "2013",
			end: "2014",
			description:
				"Organising lesson plans and course material. Teaching students and ensuring that each individual was understanding the content that was necessary for the examinations. Marking work and providing constructive feedback as well as assigning homework and reading material for the week that would assist in the students development. Setting and assisting students in attaining target grades.",
		},
		{
			company: "KiioLabs",
			link: "",
			badges: ["Hendon"],
			title: "Web Development Intern",
			start: "2012",
			end: "2013",
			description:
				"Assisted a group of application developers in producing some web apps. My role in this group involved coding the back end to the design interfaces and ensuring the applications worked as desired. I managed to assist the team in producing two quality applications that gained positive reception from its target audience. During my time with KiioLabs, my ability to code in HTML5, CSS, PHP, MySQL and JavaScript were put to the test, including understanding of JavaScript libraries and their utilisation. I also managed to design and setup multiple databases and learnt how to collaborate with multiple developers at once, ensuring our code interacted and interfaced well with each other.",
		},
	],
	skills: [
		"JavaScript",
		"TypeScript",
		"ReactJS",
		"Next.js",
		"Bootstrap",
		"Tailwind CSS",
		"PHP",
		"HTML",
		"CSS",
		"Server Management",
		"Microsoft Office Suite",
		"LaTeX",
		"Linux",
		"Bash/ZSH/Fish Shell",
		"Wolfram Mathematica",
		"Financial Market Analysis",
		"Component Level Hardware Diagnostic and Repair",
		"Software Diagnostic and Repair",
		"Soldering",
	],
	projects: [
		{
			title: "Plutarc Trading Terminal",
			techStack: [
				"Next.js",
				"TypeScript",
				"ReactJS",
				"Next-Auth.js",
				"Prisma",
				"MySQL",
				"Tailwind CSS",
			],
			description:
				"Demo trading terminal in React and Next.js, implements WebSocket for accessing orderbook data and recent trades, with customizable interface (drag and drop, resize, show/hide elements, persistence of state) and multiple API keys for concurrent trading across multiple accounts. In browser encryption and decryption of API keys and direct communication with exchange backend without use of proxy server. MySQL and Prisma ORM for communication to private database server. Auth.js for social OAuth and/or modularity for alternative authentication methods.",
			link: {
				label: "Plutarc Trading Terminal",
				href: "https://github.com/sayedhfatimi/plutarc",
			},
		},
		{
			title: "Issue Tracker",
			techStack: [
				"Next.js",
				"TypeScript",
				"ReactJS",
				"Next-Auth.js",
				"Radix-UI",
				"Prisma",
				"MySQL",
				"Sentry",
				"Tailwind CSS",
			],
			description:
				"Example issue tracker app developed in Next.js, with integrated OAuth for social logins via Next-Auth.js and Prisma with MySQL for data storage.",
			link: {
				label: "Issue Tracker",
				href: "https://github.com/sayedhfatimi/issue-tracker",
			},
		},
		{
			title: "Game Hub",
			techStack: ["TypeScript", "JavaScript", "ChakraUI", "ReactJS", "Vite"],
			description:
				"Game Hub app for displaying, sorting and search through list of games across multiple platforms.",
			link: {
				label: "Game Hub",
				href: "https://github.com/sayedhfatimi/game-hub",
			},
		},
		{
			title: "Expense Tracker",
			techStack: ["TypeScript", "ReactJS", "Vite", "Zod", "BootStrap"],
			description: "Simple expense tracker app developed in React",
			link: {
				label: "Expense Tracker",
				href: "https://github.com/sayedhfatimi/expense-tracker",
			},
		},
		{
			title: "OEMI",
			techStack: ["Docker", "JavaScript", "MySQL"],
			description: "Online Encyclopedia for Mathematical Identities",
			link: {
				label: "oemi.ltd4.online",
				href: "https://oemi.ltd4.online",
			},
		},
		{
			title: "MexMan",
			techStack: [
				"JavaScript",
				"ReactJS",
				"Node.js",
				"electronJS",
				"HTML",
				"CSS",
				"Semantic UI",
			],
			description:
				"Example interface for multiplatform cryptocurrency portfolio and trading manager in electronjs and ReactJS",
			link: {
				label: "MexMan",
				href: "https://github.com/sayedhfatimi/MexMan",
			},
		},
		{
			title: "SIPUX",
			techStack: [
				"JavaScript",
				"jQuery",
				"Node.js",
				"electronJS",
				"HTML",
				"CSS",
			],
			description:
				"Example interface for multiplatform cryptocurrency wallet in electronjs",
			link: {
				label: "SIPUX",
				href: "https://github.com/sayedhfatimi/SIPUX",
			},
		},
		{
			title: "Media Plugin for Emby",
			techStack: ["C#", "JavaScript", "HTML"],
			description: "DVB Viewer Plugin for Emby Media Server",
			link: {
				label: "Media Plugin for Emby",
				href: "https://github.com/sayedhfatimi/DVBViewerforEmbyPlugin",
			},
		},
		{
			title: "URL Shortener",
			techStack: ["PHP", "CSS", "HTML", "MySQL"],
			description: "URL Shortener for school project",
			link: {
				label: "URL Shortener",
				href: "https://github.com/sayedhfatimi/URL-Shortener",
			},
		},
		{
			title: "Sociomark",
			techStack: ["PHP", "CSS", "HTML", "MySQL", "JavaScript", "jQuery"],
			description: "Bookmarking Web App",
			link: {
				label: "Sociomark",
				href: "https://github.com/sayedhfatimi/Sociomark",
			},
		},
		{
			title: "FBR",
			techStack: ["PHP", "CSS", "HTML", "MySQL", "JavaScript", "jQuery"],
			description:
				"Rehash of Facebook for school project with registration, login, posting and multiple stylesheets",
			link: {
				label: "FBR",
				href: "https://github.com/sayedhfatimi/FBR",
			},
		},
		{
			title: "OliveChat",
			techStack: ["PHP", "CSS", "HTML"],
			description:
				"Basic chat webapp supporting Sony PSPs limited functionality browser",
			link: {
				label: "OliveChat",
				href: "https://github.com/sayedhfatimi/OliveChat",
			},
		},
		{
			title: "TR",
			techStack: ["PHP", "CSS", "HTML", "MySQL", "JavaScript", "jQuery"],
			description: "Rehash of Twitter for school project",
			link: {
				label: "TR",
				href: "https://github.com/sayedhfatimi/TR",
			},
		},
		{
			title: "QuranPlayrr",
			techStack: ["CSS", "HTML", "JavaScript", "jQuery"],
			description:
				"HTML5 audio player for Quran, hooking into API to grab text and audio, and autoscroll for follow along",
			link: {
				label: "QuranPlayrr",
				href: "https://github.com/sayedhfatimi/QuranPlayrr",
			},
		},
	],
} as const;
