const donateSection = document.getElementById("Donate-section");
const donateTab = document.getElementById("Donate-tab");
const historySection = document.getElementById("History-section");
const historyTab = document.getElementById("History-tab");

historyTab.addEventListener("click", function () {
  historyTab.classList.remove("text-grey");
  historyTab.classList.add("bg-primary", "text-black", "border-0");
  historySection.classList.remove("hidden");

  donateTab.classList.remove("bg-primary", "border-0");
  donateTab.classList.add("text-grey");
  donateSection.classList.add("hidden");
});

donateTab.addEventListener("click", function () {
  donateTab.classList.remove("text-grey");
  donateTab.classList.add("bg-primary", "text-black", "border-0");

  historyTab.classList.remove("bg-primary", "border-0");
  historyTab.classList.add("text-grey");
  historySection.classList.add("hidden");
  donateSection.classList.remove("hidden");
});

function goBlog() {
  window.location.href = "blog.html";
}

function goHome() {
  window.location.href = "index.html";
}
