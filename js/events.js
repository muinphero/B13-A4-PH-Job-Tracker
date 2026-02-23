// Job Container Click (Event Delegation)

jobContainer.addEventListener("click", function (e) {
  const id = Number(e.target.dataset.id);
  const action = e.target.dataset.action;

  if (!id || !action) return;

  if (action === "interview") {
    updateStatus(id, "Interview");
  }

  if (action === "rejected") {
    updateStatus(id, "Rejected");
  }

  if (action === "delete") {
    deleteJob(id);
  }

  renderJobs();
});

// Tabs Click

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => {
      btn.classList.remove("border-indigo-600", "text-indigo-600");
      btn.classList.add("border-transparent");
    });

    this.classList.add("border-indigo-600", "text-indigo-600");

    currentTab = this.dataset.tab;
    renderJobs();
  });
});
