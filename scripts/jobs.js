// JOBS DATA

let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "All",
  },

  {
    id: 2,
    companyName: "TechNova Ltd.",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "45,000 BDT",
    description:
      "Develop responsive user interfaces using modern JavaScript frameworks and REST APIs.",
    status: "All",
  },

  {
    id: 3,
    companyName: "SoftWhere",
    position: "Backend Developer",
    location: "Remote",
    type: "Part-time",
    salary: "35,000 BDT",
    description:
      "Build and maintain scalable backend services using Node.js and database integration.",
    status: "All",
  },

  {
    id: 4,
    companyName: "DataCore",
    position: "UI/UX Designer",
    location: "Chittagong",
    type: "Contract",
    salary: "40,000 BDT",
    description:
      "Design modern and user-friendly interfaces using Figma and design systems.",
    status: "All",
  },

  {
    id: 5,
    companyName: "CloudEdge",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "60,000 BDT",
    description:
      "Manage CI/CD pipelines, Docker containers and cloud infrastructure services.",
    status: "All",
  },

  {
    id: 6,
    companyName: "BrightKind",
    position: "WordPress Developer",
    location: "Remote",
    type: "Freelance",
    salary: "30,000 BDT",
    description:
      "Develop custom WordPress themes and optimize site performance.",
    status: "All",
  },

  {
    id: 7,
    companyName: "TechBridge",
    position: "Junior JavaScript Developer",
    location: "Sylhet",
    type: "Full-time",
    salary: "28,000 BDT",
    description:
      "Assist in building interactive web applications using modern JavaScript.",
    status: "All",
  },

  {
    id: 8,
    companyName: "FutureTech",
    position: "Mobile App Developer",
    location: "Khulna",
    type: "Contract",
    salary: "50,000 BDT",
    description:
      "Develop and maintain mobile applications using Flutter framework.",
    status: "All",
  },
];

// DOM SELECTIONS

// Main Containers
const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

//Dashboard Counters
const totalCount = document.getElementById("totalCount");
const interViewCount = document.getElementById("interViewCount");
const rejectedCount = document.getElementById("rejectedCount");

// Job Count Text
const jobCount = document.getElementById("jobCount");

// Tab Buttons
const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");
