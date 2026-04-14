// NOTE: Replace image imports with your actual asset paths.
import service1 from "../assets/residential.png";
import service2 from "../assets/c&I.jpeg";
import service3 from "../assets/ground.jpeg";
import service4 from "../assets/factory.png";

import services1_hero from "../assets/services1_hero.jpeg";
import services2_hero from "../assets/services2_hero.svg"
import services3_hero from "../assets/services3_hero.svg";
import services4_hero from "../assets/services4_hero.svg";

import solarMain1 from "../assets/mainImg.jpeg";
import solarSmall1 from "../assets/smallImg.jpeg";
import solarMain2 from "../assets/mainImg.jpeg";
import solarSmall2 from "../assets/smallImg.jpeg";
import solarMain3 from "../assets/mainImg.jpeg";
import solarSmall3 from "../assets/smallImg.jpeg";
import solarMain4 from "../assets/mainImg.jpeg";
import solarSmall4 from "../assets/smallImg.jpeg";

const servicesData = [
  // ─────────────────────────────────────────────
  // 1. RESIDENTIAL SOLAR SOLUTIONS
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "residential",
    cardImg: service1,
    heroImg: service1,
    cardTitle: "Residential Solar Solutions",
    cardSubtitle: "Best for Residents",
    cardDesc:
      "Solar solutions for homes designed to reduce electricity bills and maximize long-term savings.",
    pageHeading: "Residential Solar Solutions",
    pageParagraph:
      "We provide customized rooftop solar solutions for homes, helping homeowners reduce electricity bills and become energy independent. Our systems are designed for maximum efficiency, durability, and long-term savings.",

    keyFeatures: [
      "Grid-tied, hybrid & off-grid systems",
      "High-efficiency solar panels",
      "Smart inverters with monitoring",
      "Net metering support",
      "Low maintenance systems",
    ],

    benefits: [
      "Up to 80–90% reduction in electricity bills",
      "Environment-friendly energy",
      "Government subsidy support",
      "Increase in property value",
    ],

    process: [
      "Site survey & energy assessment",
      "System design & proposal",
      "Installation & commissioning",
      "After-sales support",
    ],

    // PM Surya Ghar: Muft Bijli Yojana
    pmSuryaGhar: {
      title: "PM Surya Ghar: Muft Bijli Yojana",
      subtitle: "Residential Solar Support",
      about:
        "The PM Surya Ghar: Muft Bijli Yojana is a Government of India initiative aimed at promoting rooftop solar installations in residential homes. The scheme enables homeowners to generate their own electricity and significantly reduce monthly electricity bills.",
      subsidyTitle: "Subsidy Benefits",
      subsidyNote:
        "Under this scheme, homeowners can avail central financial assistance (CFA):",
      subsidyPoints: [
        { label: "1 kW System", amount: "Up to ₹30,000" },
        { label: "2 kW System", amount: "Up to ₹60,000" },
        { label: "3 kW & Above", amount: "Up to ₹78,000" },
      ],
      subsidyFootnote:
        "This reduces your overall solar installation cost significantly.",
      schemeFeatures: [
        "Government-approved subsidy directly to customer",
        "Supports on-grid solar systems with net metering",
        "Easy online application process",
        "Promotes clean and green energy",
      ],
      eligibility: [
        "Indian residential property owners",
        "Valid electricity connection",
        "Rooftop space available for solar installation",
      ],
      howWeHelp: [
        "Documentation & application support",
        "System design as per government norms",
        "Vendor registration & compliance",
        "Net metering approval",
        "Smooth subsidy processing",
      ],
      whyItMatters: [
        "Lower upfront investment",
        "Faster return on investment (ROI)",
        "Long-term free electricity generation",
        "Contribution to a sustainable future",
      ],
    },

    solarSection: {
      titleLine1: "Join the On-Grid Solar",
      titleLine2: "Revolution with Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Site survey and feasibility assessment",
        "Customized solar system design and engineering",
        "Support with net metering documentation",
        "Supply of high-efficiency solar modules and inverters",
        "Rooftop and ground-mounted solar installations",
        "System testing, commissioning, and grid integration",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain1,
      smallImage: solarSmall1,
    },

    faqSection:null,
  },

  // ─────────────────────────────────────────────
  // 2. C&I (COMMERCIAL & INDUSTRIAL) SOLAR
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: "commercial-industrial-solar",
    cardImg: service2,
    heroImg: service2,
    cardTitle: "C&I Solar Solutions",
    cardSubtitle: "Commercial & Industrial",
    cardDesc:
      "Our Commercial & Industrial solar solutions help businesses reduce operational costs and improve sustainability.",
    pageHeading: "C&I (Commercial & Industrial) Solar Solutions",
    pageParagraph:
      "Our Commercial & Industrial (C&I) solar solutions help businesses reduce operational costs and improve sustainability. We design scalable systems tailored to your energy needs.",

    keyFeatures: [
      "Large-scale solar installations",
      "Custom energy optimization",
      "Rooftop & ground-mounted options",
      "Remote monitoring systems",
      "Fast ROI (Return on Investment)",
    ],

    benefits: [
      "Significant reduction in electricity costs",
      "Tax benefits & accelerated depreciation",
      "Energy security for operations",
      "Strong ESG (Environmental, Social, Governance) impact",
    ],

    process: [
      "Energy audit",
      "Feasibility analysis",
      "Engineering & design",
      "Installation & maintenance",
    ],

    solarSection: {
      titleLine1: "Scalable C&I Solar",
      titleLine2: "Solutions by Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Energy audit and load analysis",
        "Custom solar system design for commercial and industrial premises",
        "Rooftop and ground-mounted installation options",
        "High-efficiency panels and smart inverter supply",
        "Remote monitoring and performance reporting",
        "Installation and maintenance support",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain2,
      smallImage: solarSmall2,
    },

    faqSection: null,
  },

  // ─────────────────────────────────────────────
  // 3. GROUND MOUNTED SOLAR PROJECTS
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: "ground-mounted-solar",
    cardImg: service3,
    heroImg: service3,
    cardTitle: "Ground Mounted Solar Projects",
    cardSubtitle: "Large-Scale Energy Generation",
    cardDesc:
      "High-performance ground-mounted solar systems ideal for large-scale energy generation.",
    pageHeading: "Ground Mounted Solar Projects",
    pageParagraph:
      "We develop high-performance ground-mounted solar systems ideal for large-scale energy generation. These are best suited for industries, institutions, and utility projects.",

    keyFeatures: [
      "Utility-scale solar plants",
      "Fixed tilt & tracking systems",
      "Optimized land utilization",
      "High energy output design",
    ],

    benefits: [
      "Maximum power generation",
      "Suitable for unused land",
      "Long-term stable returns",
      "Scalable and future-ready",
    ],

    process: [
      "Land assessment",
      "Project planning",
      "Engineering & procurement",
      "Installation & commissioning",
    ],

    solarSection: {
      titleLine1: "Utility-Scale Ground",
      titleLine2: "Mounted Solar by Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Land assessment and solar irradiance analysis",
        "Project planning and feasibility study",
        "Engineering, procurement, and construction (EPC)",
        "Fixed tilt and solar tracking system options",
        "High-capacity inverter and transformer supply",
        "Installation, commissioning, and O&M support",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain3,
      smallImage: solarSmall3,
    },

    faqSection: null,
  },

  // ─────────────────────────────────────────────
  // 4. SOLAR STRUCTURE MANUFACTURING
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: "solar-structure-manufacturing",
    cardImg: service4,
    heroImg: service4,
    cardTitle: "Solar Structure Manufacturing",
    cardSubtitle: "Strong Foundations for Solar Installations",
    cardDesc:
      "We manufacture high-quality solar mounting structures designed for durability, strength, and long life.",
    pageHeading: "Solar Structure Manufacturing",
    pageParagraph:
      "We manufacture high-quality solar mounting structures designed for durability, strength, and long life. Our structures are engineered to withstand harsh weather conditions.",

    keyFeatures: [
      "Hot-dip galvanized structures",
      "Customized design solutions",
      "High load-bearing capacity",
      "Corrosion-resistant materials",
    ],

    applications: [
      "Rooftop solar systems",
      "Ground-mounted projects",
      "Industrial solar installations",
    ],

    benefits: [
      "Long lifespan (20–25 years)",
      "Strong & reliable support",
      "Easy installation",
      "Cost-effective solutions",
    ],

    solarSection: {
      titleLine1: "Durable Solar Structure",
      titleLine2: "Manufacturing with Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Designing and engineering robust solar mounting structures",
        "Specialized mounting solutions for tin shed and RCC rooftop systems",
        "Durable ground-mounted structures for large-scale installations",
        "Structure designs based on wind load factors and site conditions",
        "Fabricating and galvanizing for durability and corrosion resistance",
        "Complete support for supply and installation of mounting structures",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain4,
      smallImage: solarSmall4,
    },

    faqSection: null,
  },
];

export default servicesData;