//   <!-- Calendar Script -->

const monthYear = document.getElementById("monthYear");
const calendar = document.getElementById("calendar");
const dateLabel = document.getElementById("dateLabel");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Month names
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  // Update header
  monthYear.innerHTML = months[month] + "<br><span>" + year + "</span>";

  // First and last day of the month
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // Clear old days
  calendar.innerHTML = "";

  // Fill empty slots before 1st
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("day");
    calendar.appendChild(emptyCell);
  }

  // Fill days of the month
  for (let d = 1; d <= lastDate; d++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.textContent = d;

    // Highlight today
    const today = new Date();
    if (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayCell.classList.add("today");
    }

    calendar.appendChild(dayCell);
  }

  // Update footer date
  let today = new Date();
  dateLabel.textContent =
    String(today.getDate()).padStart(2, "0") +
    "/" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "/" +
    today.getFullYear();
}

// Buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
