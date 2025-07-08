// script.js

document.addEventListener("DOMContentLoaded", () =>{
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll(".nav-links a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: "smooth"
        });
      });
    });
  
    // Optional: Show alert on form submission success
    const form = document.querySelector("form");
    form?addEventListener("submit", () => {
      setTimeout(() => alert("Thank you! Your message has been sent."), 500);
    })
  });