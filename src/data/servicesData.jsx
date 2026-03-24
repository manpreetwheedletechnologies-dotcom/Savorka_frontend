import service1 from "../assets/serviceimg1.png";
import service2 from "../assets/serviceimg1.png";
import service3 from "../assets/serviceimg1.png";
import service4 from "../assets/serviceimg1.png";
import services1_hero from "../assets/services1_hero.svg";
import services2_hero from "../assets/services2_hero.svg";
import services3_hero from "../assets/services3_hero.svg";
import services4_hero from "../assets/services4_hero.svg";

import solarMain1 from "../assets/mainImg.jpg";
import solarSmall1 from "../assets/smallImg.jpg";
import solarMain2 from "../assets/mainImg.jpg";
import solarSmall2 from "../assets/smallImg.jpg";
import solarMain3 from "../assets/mainImg.jpg";
import solarSmall3 from "../assets/smallImg.jpg";
import solarMain4 from "../assets/mainImg.jpg";
import solarSmall4 from "../assets/smallImg.jpg";

const servicesData = [
  {
    id: 1,
    slug: "on-grid-solar-solutions",
    cardImg: service1,
    heroImg: services1_hero,
    cardTitle: "On-grid Solar Solutions – Best for Residents",
    cardSubtitle: "Best for Residents",
    cardDesc:
      "An on-grid solar system, also called a grid-tied system, is connected to the main electricity grid. It helps reduce electricity bills and maximize returns through seamless grid connectivity.",
    pageHeading: "On-grid Solar Solutions – Best for Residents",
    pageParagraph:
      "An on-grid solar system, also called a grid-tied system, is connected to the main electricity grid. One major benefit of installing an on-grid rooftop solar system is the government subsidy, which ranges from ₹30,000 to ₹78,000, depending on the system capacity.It is the most common choice for Indian homes with a reliable electricity supply, as it can efficiently meet household energy needs.The system includes key components such as solar panels, a solar inverter, mounting structures, a bi-directional meter, and solar accessories like AC/DC cables, combiner boxes, conduit trays, lightning arresters, and MC4 connectors-working together to convert sunlight into usable electricity.",
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
    faqSection: {
      ratingHeading:
        "Savorka boasts an impressive rating of 4.8 from 70+ genuine On-grid customers.",
      faqTitle: "FAQs",
      faqs: [
        {
          question: "Does an on-grid solar system require a battery?",
          answer:
            "No. On-grid solar systems do not require batteries, making them easier to maintain and more affordable compared to off-grid and hybrid systems.",
        },
        {
          question: "Do solar panels work at night?",
          answer:
            "No. Solar panels generate electricity only when exposed to sunlight. At night, an on-grid system draws electricity from the main grid.",
        },
        {
          question: "What is the difference between on-grid and hybrid solar systems?",
          answer:
            "An on-grid solar system is connected only to the utility grid, whereas a hybrid solar system is connected to both the grid and battery storage.",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "off-grid-hybrid-solar-solutions",
    cardImg: service2,
    heroImg: services2_hero,
    cardTitle: "Off-grid Solar Solution- Ideal for Remote Locations",
    cardSubtitle: "Ideal for Remote Locations",
    cardDesc:
      "An off-grid solar system, also called a standalone system, generates electricity from sunlight using solar panels.",
    pageHeading: "Off-grid Solar Solution- Ideal for Remote Locations",
    pageParagraph:
      "An off-grid solar system, also called a standalone system, generates electricity from sunlight using solar panels. Unlike an on-grid system, it is not connected to the utility grid and instead uses batteries to store energy for use when sunlight is unavailable.An off-grid solar system is ideal for remote areas without utility grid access or locations that experience frequent power cuts and unreliable electricity supply.The system consists of solar panels, mounting structures, batteries, a solar charge controller, a solar inverter, and essential solar accessories, all working together to convert and store energy from sunlight.",
    solarSection: {
      titleLine1: "Reliable Off-Grid & Hybrid",
      titleLine2: "Solar Solutions by Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Evaluation of power load and energy needs",
        "Design of off-grid and hybrid solar solutions",
        "Selection and integration of suitable battery banks",
        "Setup and configuration of hybrid inverters",
        "Complete system installation and commissioning",
        "Testing and optimization for efficient performance",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain2,
      smallImage: solarSmall2,
    },
    faqSection: {
      ratingHeading:
        "At Savorka Solar, we create smart and scalable energy systems that deliver the right balance of performance, storage, and cost efficiency for your power requirements.",
      faqTitle: "FAQs",
      faqs: [
        {
          question: "Is there a subsidy for off-grid solar systems?",
          answer:
            "No. Under the PM Surya Ghar Muft Bijli Yojana, the Indian government currently provides subsidies only for on-grid rooftop solar systems, not for off-grid systems.",
        },
        {
          question: "How many batteries are required for an off-grid solar system?",
          answer:
            "The number of batteries depends on the system size and energy requirements. An approximate estimate is: 3 kW system: 8–9 batteries of 100 AH capacity || 5 kW system: 10–11 batteries of 500 AH capacity",
        },
       
      ],
    },
  },
  {
    id: 3,
    slug: "solar-operation-maintenance",
    cardImg: service3,
    heroImg: services3_hero,
    cardTitle: "Solar Operation & Maintenance (O&M)- Ensuring Peak System Performance",
    cardSubtitle: "Ensuring Peak Performance",
    cardDesc:
      "Savorka Solar provides reliable Operation & Maintenance (O&M) services to ensure solar power plants deliver consistent performance and maximum efficiency.",
    pageHeading: "Solar Operation & Maintenance (O&M)- Ensuring Peak System Performance",
    pageParagraph:
      "Savorka Solar provides reliable Operation & Maintenance (O&M) services to ensure solar power plants deliver consistent performance and maximum efficiency. Our proactive approach helps reduce downtime, detect issues early, and maintain optimal energy output throughout the system’s lifecycle.We support both rooftop and large-scale solar installations with regular inspections, preventive care, and prompt corrective services to keep your solar system running smoothly.",
    solarSection: {
      titleLine1: "Trusted Solar Operation",
      titleLine2: "& Maintenance Services",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Regular solar panel cleaning and system inspections.",
        "Evaluation of electrical components and inverter performance.",
        "Continuous monitoring of system output with detailed reporting.",
        "Early detection of system faults and irregularities.",
        "Prompt troubleshooting and corrective maintenance.",
        "Spare parts management and warranty coordination for optimal performance.",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain3,
      smallImage: solarSmall3,
    },
    // faqSection: {
    //   ratingHeading:
    //     "Savorka helps solar assets perform efficiently with professional operation and maintenance support for long-term reliability.",
    //   faqTitle: "FAQs",
    //   faqs: [
    //     {
    //       question: "Why is solar O&M important?",
    //       answer:
    //         "Solar O&M is important because it helps maintain peak performance, reduces downtime, improves energy generation, and increases the lifespan of the system.",
    //     },
    //     {
    //       question: "How often should a solar plant be inspected?",
    //       answer:
    //         "Inspection frequency depends on plant size and site conditions, but regular preventive inspections are recommended to identify issues before they affect performance.",
    //     },
    //     {
    //       question: "Does cleaning solar panels improve efficiency?",
    //       answer:
    //         "Yes. Dust, dirt, and debris can reduce sunlight absorption, so regular cleaning can improve energy output and overall system performance.",
    //     },
    //   ],
    // },
  },
  {
    id: 4,
    slug: "solar-structure-manufacturing",
    cardImg: service4,
    heroImg: services4_hero,
    cardTitle: "Solar Structure Manufacturing-Strong Foundations for Solar Installations",
    cardSubtitle: "Strong Foundations",
    cardDesc:
      "Savorka Solar builds strong and reliable solar mounting structures that are made to perform well in different weather conditions.",
    pageHeading: "Solar Structure Manufacturing-Strong Foundations for Solar Installations",
    pageParagraph:
      "Savorka Solar builds strong and reliable solar mounting structures that are made to perform well in different weather conditions. Designed for stability, safety, and long-term use, our structures keep solar panels properly aligned for better energy generation.We provide customized mounting solutions for RCC rooftops, tin sheds, and ground-mounted solar systems, ensuring the structures meet all required strength and load standards.",
    solarSection: {
      titleLine1: "Durable Solar Structure",
      titleLine2: "Manufacturing with Savorka",
      coverLabel: "What is covered?",
      coveragePoints: [
        "Designing and engineering robust solar mounting structures tailored for different installations.",
        "Providing specialized mounting solutions for both tin shed and RCC rooftop systems.",
        "Developing durable ground-mounted structures for large-scale solar installations.",
        "Creating structure designs based on wind load factors and specific site conditions.",
        "Fabricating and galvanizing structures to ensure durability and corrosion resistance.",
        "Offering complete support for the supply and installation of mounting structures.",
      ],
      yearsText: "9+ YEARS",
      experienceText: "Experience",
      mainImage: solarMain4,
      smallImage: solarSmall4,
    },
    // faqSection: {
    //   ratingHeading:
    //     "Savorka manufactures durable solar structures engineered for safety, stability, and long-term performance across project types.",
    //   faqTitle: "FAQs",
    //   faqs: [
    //     {
    //       question: "Why are mounting structures important in solar projects?",
    //       answer:
    //         "Mounting structures support solar panels securely, maintain proper tilt and alignment, and help the system withstand wind, weather, and long-term environmental stress.",
    //     },
    //     {
    //       question: "Can solar structures be customized for different sites?",
    //       answer:
    //         "Yes. Solar structures can be designed and manufactured according to rooftop type, ground conditions, project size, and technical requirements.",
    //     },
    //     {
    //       question: "What materials are commonly used in solar structures?",
    //       answer:
    //         "High-strength steel, galvanized steel, and aluminum are commonly used because they offer durability, corrosion resistance, and long service life.",
    //     },
    //   ],
    // },
  },
];

export default servicesData;