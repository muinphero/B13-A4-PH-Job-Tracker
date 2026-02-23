// JOB DATA

let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions worldwide.",
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
      "Develop responsive user interfaces using modern JavaScript frameworks.",
    status: "All",
  },
  {
    id: 3,
    companyName: "SoftWhere",
    position: "Backend Developer",
    location: "Remote",
    type: "Part-time",
    salary: "35,000 BDT",
    description: "Build scalable backend services and APIs.",
    status: "All",
  },
  {
    id: 4,
    companyName: "DataCore",
    position: "UI/UX Designer",
    location: "Chittagong",
    type: "Contract",
    salary: "40,000 BDT",
    description: "Design modern and user-friendly interfaces using Figma.",
    status: "All",
  },
  {
    id: 5,
    companyName: "CloudEdge",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "60,000 BDT",
    description: "Manage CI/CD pipelines and cloud infrastructure.",
    status: "All",
  },
  {
    id: 6,
    companyName: "BrightKind",
    position: "WordPress Developer",
    location: "Remote",
    type: "Freelance",
    salary: "30,000 BDT",
    description: "Develop custom WordPress themes and optimize performance.",
    status: "All",
  },
  {
    id: 7,
    companyName: "TechBridge",
    position: "Junior JavaScript Developer",
    location: "Sylhet",
    type: "Full-time",
    salary: "28,000 BDT",
    description: "Assist in building interactive web applications.",
    status: "All",
  },
  {
    id: 8,
    companyName: "FutureTech",
    position: "Mobile App Developer",
    location: "Khulna",
    type: "Contract",
    salary: "50,000 BDT",
    description: "Develop and maintain mobile apps using Flutter.",
    status: "All",
  },
];

// DOM ELEMENTS

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const jobCount = document.getElementById("jobCount");

const allTab = document.getElementById("allTab");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

let currentTab = "All";

// RENDER JOBS

function renderJobs() {
  jobContainer.innerHTML = "";

  let filteredJobs =
    currentTab === "All"
      ? jobs
      : jobs.filter(function (job) {
          return job.status === currentTab;
        });

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach(function (job) {
    let card = document.createElement("div");
    card.className = "bg-white rounded-lg p-6 shadow-sm relative";

    /* Badge Logic */
    let badgeText = "NOT APPLIED";
    let badgeClass = "bg-gray-100 text-gray-600";

    if (job.status === "Interview") {
      badgeText = "INTERVIEW";
      badgeClass = "bg-green-100 text-green-700";
    }

    if (job.status === "Rejected") {
      badgeText = "REJECTED";
      badgeClass = "bg-red-100 text-red-700";
    }

    card.innerHTML = `
      <button onclick="deleteJob(${job.id})"
        class="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
        <img src="assets/delete.svg" class="w-5 h-5"/>
      </button>

      <h3 class="font-semibold text-lg">
        ${job.companyName}
      </h3>

      <p class="text-gray-700 mt-1">
        ${job.position}
      </p>

      <p class="text-gray-500 text-sm mt-3">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      <span class="inline-block text-xs px-3 py-1 rounded mt-4 ${badgeClass}">
        ${badgeText}
      </span>

      <p class="text-gray-600 text-sm mt-4">
        ${job.description}
      </p>

      <div class="flex space-x-3 mt-6">
        <button onclick="updateStatus(${job.id}, 'Interview')"
          class="border border-green-500 text-green-600 text-sm px-4 py-2 rounded hover:bg-green-500 hover:text-white transition">
          INTERVIEW
        </button>

        <button onclick="updateStatus(${job.id}, 'Rejected')"
          class="border border-red-500 text-red-600 text-sm px-4 py-2 rounded hover:bg-red-500 hover:text-white transition">
          REJECTED
        </button>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  updateDashboard();
}
