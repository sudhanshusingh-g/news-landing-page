// Get elements
const menuIcon = document.querySelector(".menu img");
const closeIcon = document.querySelector(".close img");
const mobileMenu = document.querySelector(".mobile_menu");
const overlay = document.createElement("div");
overlay.className = "overlay";

// Append overlay to the body
document.body.appendChild(overlay);

// Function to open mobile menu
function openMenu() {
  mobileMenu.classList.add("active");
  overlay.style.display = "block";
  document.body.classList.add("no-scroll"); // Disable scrolling
}

// Function to close mobile menu
function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll"); // Re-enable scrolling
}

// Event listeners
menuIcon.addEventListener("click", openMenu);
closeIcon.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu); // Close menu when clicking outside
