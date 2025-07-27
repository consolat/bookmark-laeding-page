document.addEventListener("DOMContentLoaded", function() {
  // Mobile Menu Toggle
  const hamburgerBtn = document.querySelector(".hamburger-icon");
  const navLinks = document.querySelector(".nav-links");
  const hamburgerIcon = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close-icon");
  const body = document.body;

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function() {
      const isOpen = navLinks.classList.toggle("active");
      
      // Toggle between hamburger and close icon
      if (isOpen) {
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
        body.style.overflow = "hidden"; // Prevent scrolling
      } else {
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
        body.style.overflow = "auto"; // Enable scrolling
      }
    });
  }

  // Tab System
  const tabNavItems = document.querySelectorAll(".tab-nav li");
  const tabBodies = document.querySelectorAll(".tab-body");

  // Initialize first tab as active
  if (tabNavItems.length > 0 && !document.querySelector(".tab-nav .active")) {
    tabNavItems[0].classList.add("active");
    tabBodies[0].classList.add("active");
  }

  tabNavItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Remove active class from all tabs
      tabNavItems.forEach(tab => tab.classList.remove("active"));
      tabBodies.forEach(tab => tab.classList.remove("active"));
      
      // Add active class to clicked tab
      item.classList.add("active");
      tabBodies[index].classList.add("active");
    });
  });

  // FAQ Accordion
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      
      // Close all other questions
      questions.forEach(q => {
        if (q !== question) q.classList.remove("active");
      });
      
      // Toggle current question
      question.classList.toggle("active");
    });
  });
});