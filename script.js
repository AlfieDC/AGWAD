const refreshButton = document.getElementById("refreshButton");
const todayLabel = document.getElementById("todayLabel");
const toast = document.getElementById("toast");

function updateDate() {
  const now = new Date();
  todayLabel.textContent = now.toLocaleDateString("en-PH", {
    year: "numeric", month: "short", day: "numeric"
  });
}
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

refreshButton.addEventListener("click", () => {
  // This refreshes the interface only. It does not query an ESP32 or MQTT broker yet.
  refreshButton.disabled = true;
  refreshButton.innerHTML = '<span class="refresh-icon">↻</span> Checking...';
  window.setTimeout(() => {
    refreshButton.disabled = false;
    refreshButton.innerHTML = '<span class="refresh-icon">↻</span> Refresh';
    showToast("No device feed detected. Live readings are not connected yet.");
  }, 500);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

updateDate();


// Leaflet regional map. The center is a broad regional view, not a sampling coordinate.
// Exact site markers must only be added after the research team verifies GPS coordinates.
const mapElement = document.getElementById("agwadMap");
if (mapElement && window.L) {
  const map = L.map("agwadMap", { scrollWheelZoom: false }).setView([12.78, 124.00], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // No site markers are placed yet: the paper names the locations but does not
  // provide exact GPS coordinates for the actual water-sampling points.
  map.on("focus", () => map.scrollWheelZoom.enable());
  map.on("blur", () => map.scrollWheelZoom.disable());
}
