// JOB DATA

let jobs = [
  {
    id: 1,
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "All",
  },
  {
    id: 2,
    companyName: "TechNova Ltd.",
    position: "Frontend Developer",
    location: "Dhaka",
    type: "Full-time",
    salary: "45,000 BDT",
    description: "Develop responsive user interfaces.",
    status: "All",
  },
  {
    id: 3,
    companyName: "SoftWhere",
    position: "Backend Developer",
    location: "Remote",
    type: "Part-time",
    salary: "35,000 BDT",
    description: "Build scalable backend services.",
    status: "All",
  },
  {
    id: 4,
    companyName: "DataCore",
    position: "UI/UX Designer",
    location: "Chittagong",
    type: "Contract",
    salary: "40,000 BDT",
    description: "Design modern UI using Figma.",
    status: "All",
  },
  {
    id: 5,
    companyName: "CloudEdge",
    position: "DevOps Engineer",
    location: "Dhaka",
    type: "Full-time",
    salary: "60,000 BDT",
    description: "Manage CI/CD pipelines.",
    status: "All",
  },
  {
    id: 6,
    companyName: "BrightKind",
    position: "WordPress Developer",
    location: "Remote",
    type: "Freelance",
    salary: "30,000 BDT",
    description: "Develop custom WordPress themes.",
    status: "All",
  },
  {
    id: 7,
    companyName: "TechBridge",
    position: "Junior JavaScript Developer",
    location: "Sylhet",
    type: "Full-time",
    salary: "28,000 BDT",
    description: "Assist in building web applications.",
    status: "All",
  },
  {
    id: 8,
    companyName: "FutureTech",
    position: "Mobile App Developer",
    location: "Khulna",
    type: "Contract",
    salary: "50,000 BDT",
    description: "Develop Flutter applications.",
    status: "All",
  },
];

/* ================================
   DOM
================================ */

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

// RENDER JOBS WITH FADE EFFECT

function renderJobs() {
  jobContainer.classList.remove("opacity-100");
  jobContainer.classList.add("opacity-0");

  setTimeout(function () {
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

      let card = document.createElement("div");
      card.className = "bg-white rounded-lg p-6 shadow-sm relative";

      card.innerHTML = `
        <button data-id="${job.id}" data-action="delete"
          class="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
          <img src="assets/delete.svg" class="w-10 h-10"/>
        </button>

        <h3 class="font-semibold text-lg">${job.companyName}</h3>
        <p class="text-gray-700 mt-1">${job.position}</p>

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
          <button data-id="${job.id}" data-action="interview"
            class="border border-green-500 text-green-600 text-sm px-4 py-2 rounded
            ${job.status === "Interview" ? "bg-green-500 text-white" : "hover:bg-green-500 hover:text-white"}
            transition">
            INTERVIEW
          </button>

          <button data-id="${job.id}" data-action="rejected"
            class="border border-red-500 text-red-600 text-sm px-4 py-2 rounded
            ${job.status === "Rejected" ? "bg-red-500 text-white" : "hover:bg-red-500 hover:text-white"}
            transition">
            REJECTED
          </button>
        </div>
      `;

      jobContainer.appendChild(card);
    });

    updateDashboard();

    jobContainer.classList.remove("opacity-0");
    jobContainer.classList.add("opacity-100");
  }, 150);
}

// EVENT DELEGATION FOR INTERVIEW, REJECT, DELETE

jobContainer.addEventListener("click", function (event) {
  const button = event.target.closest("button");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (!id || !action) return;

  if (action === "interview") {
    toggleStatus(id, "Interview");
  }

  if (action === "rejected") {
    toggleStatus(id, "Rejected");
  }

  if (action === "delete") {
    deleteJob(id);
  }
});

// TOGGLE STATUS

function toggleStatus(id, newStatus) {
  let job = jobs.find((j) => j.id === id);

  if (job.status === newStatus) {
    job.status = "All";
  } else {
    job.status = newStatus;
  }

  renderJobs();
}

// DELETE JOB

function deleteJob(id) {
  jobs = jobs.filter((j) => j.id !== id);
  renderJobs();
}

// UPDATE DASHBOARD

function updateDashboard() {
  totalCount.innerText = jobs.length;

  let interviewJobs = jobs.filter((j) => j.status === "Interview");
  let rejectedJobs = jobs.filter((j) => j.status === "Rejected");

  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;

  if (currentTab === "All") {
    jobCount.innerText = jobs.length + " jobs";
  } else if (currentTab === "Interview") {
    jobCount.innerText = interviewJobs.length + " jobs";
  } else {
    jobCount.innerText = rejectedJobs.length + " jobs";
  }
}

// TABS

function setActiveTab(activeButton) {
  [allTab, interviewTab, rejectedTab].forEach((btn) => {
    btn.classList.remove("bg-blue-600", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-600");
  });

  activeButton.classList.remove("bg-gray-200", "text-gray-600");
  activeButton.classList.add("bg-blue-600", "text-white");
}

allTab.addEventListener("click", function () {
  currentTab = "All";
  setActiveTab(allTab);
  renderJobs();
});

interviewTab.addEventListener("click", function () {
  currentTab = "Interview";
  setActiveTab(interviewTab);
  renderJobs();
});

rejectedTab.addEventListener("click", function () {
  currentTab = "Rejected";
  setActiveTab(rejectedTab);
  renderJobs();
});

// INITIAL RENDER

renderJobs();
