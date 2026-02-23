// Render Jobs
function renderJobs() {
  jobContainer.innerHTML = "";

  let filteredJobs;

  if (currentTab === "All") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter((job) => job.status === currentTab);
  }

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }

  filteredJobs.forEach((job) => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-xl shadow";

    card.innerHTML = `
      <h3 class="text-lg font-semibold">${job.position}</h3>
      <p class="text-gray-500">${job.companyName}</p>

      <p>📍 ${job.location}</p>
      <p>💼 ${job.type}</p>
      <p>💰 ${job.salary}</p>

      <p class="mt-2 text-sm">${job.description}</p>

      <div class="flex space-x-2 mt-4">
        <button data-id="${job.id}" data-action="interview"
          class="bg-green-500 text-white px-3 py-1 rounded">
          Interview
        </button>

        <button data-id="${job.id}" data-action="rejected"
          class="bg-red-500 text-white px-3 py-1 rounded">
          Rejected
        </button>
      </div>

      <button data-id="${job.id}" data-action="delete"
        class="text-sm text-red-500 mt-3">
        Delete
      </button>
    `;

    jobContainer.appendChild(card);
  });

  updateDashboard();
}

// Update Status
function updateStatus(id, status) {
  const job = jobs.find((job) => job.id === id);
  job.status = status;
}

// Delete Job
function deleteJob(id) {
  jobs = jobs.filter((job) => job.id !== id);
}

// Update Dashboard
function updateDashboard() {
  totalCount.innerText = jobs.length;

  interviewCount.innerText = jobs.filter(
    (job) => job.status === "Interview",
  ).length;

  rejectedCount.innerText = jobs.filter(
    (job) => job.status === "Rejected",
  ).length;

  if (currentTab === "All") {
    jobCount.innerText = jobs.length + " Jobs";
  } else {
    jobCount.innerText =
      jobs.filter((job) => job.status === currentTab).length + " Jobs";
  }
}
