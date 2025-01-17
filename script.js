// Handle mobile menu toggle
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Handle active link based on scroll or click
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links a");

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.remove("text-red-400", "underline");
    if (link.href.includes(id)) {
      link.classList.add("text-red-400", "underline");
    }
  });
};

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  setActiveLink(current);
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    setActiveLink(targetId);
  });
});



// Initialize the typing animation
const typingAnimationElement = document.getElementById('typing-Animation');

// Create an array of typing text
const typingTexts = ['Backend Developer'];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
for (let i = 0; i < text.length; i++) {
	setTimeout(() => {
	typingAnimationElement.textContent += text[i];
	}, i * 200); // Increase the delay to slow down the typing animation
}
	        
// Once the animation is complete, reset the text and start over
setTimeout(() => {
	typingAnimationElement.textContent = '';
	playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}, text.length * 200);
}

// Start the typing animation loop
playTypingAnimation(typingTexts[0]);