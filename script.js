// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.style.background = "#e7d7c9";
});

// Home Section Scroll Observer
const homeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const homeSection = document.getElementById("home");
      const homeText = document.querySelector(".home-text");
      const homeImage = document.querySelector(".home-image");
      const socialIcons = document.querySelector(".social-icons");

      if (entry.isIntersecting) {
        homeSection.style.opacity = "1";
        homeSection.style.transform = "translateY(0)";
        homeText.style.opacity = "1";
        homeText.style.transform = "translateX(0)";
        homeImage.classList.add("animate-horizontal-bounce");
        homeImage.style.opacity = "1";
        homeImage.style.transform = "translateX(0)";
        socialIcons.style.opacity = "1";
        socialIcons.style.transform = "translateX(0)";
      } else {
        homeSection.style.opacity = "0";
        homeSection.style.transform = "translateY(20px)";
        homeText.style.opacity = "0";
        homeText.style.transform = "translateX(-50px)";
        homeImage.classList.remove("animate-horizontal-bounce");
        homeImage.style.opacity = "0";
        homeImage.style.transform = "translateX(50px)";
        socialIcons.style.opacity = "0";
        socialIcons.style.transform = "translateX(-50px)";
      }
    });
  },
  { threshold: 0.4 }
);
homeObserver.observe(document.getElementById("home"));

// About Section Scroll Observer
const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".slide-left").forEach((el) => {
          el.classList.add("active-left");
        });
        document.querySelectorAll(".slide-right").forEach((el) => {
          el.classList.add("active-right");
        });
        const profileImg = document.querySelector(".profile-center img");
        if (profileImg) {
          profileImg.classList.add("active-bottom");
        }
      } else {
        document.querySelectorAll(".slide-left").forEach((el) => {
          el.classList.remove("active-left");
        });
        document.querySelectorAll(".slide-right").forEach((el) => {
          el.classList.remove("active-right");
        });
        const profileImg = document.querySelector(".profile-center img");
        if (profileImg) {
          profileImg.classList.remove("active-bottom");
        }
      }
    });
  },
  { threshold: 0.3 }
);
aboutObserver.observe(document.getElementById("about"));

// Education Timeline Scroll Observer
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-timeline");
      } else {
        entry.target.classList.remove("animate-timeline");
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll(".timeline-item").forEach((item) => {
  timelineObserver.observe(item);
});

// Skills Box Scroll Observer
const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const skillsBox = document.getElementById("skills-box");
      const skillLogos = document.querySelectorAll(".skill-logo");

      if (entry.isIntersecting) {
        skillsBox.classList.add("active-skills");
        skillLogos.forEach((logo) => {
          logo.classList.add("active-rotate");
        });
      } else {
        skillsBox.classList.remove("active-skills");
        skillLogos.forEach((logo) => {
          logo.classList.remove("active-rotate");
        });
      }
    });
  },
  { threshold: 0.3 }
);
skillsObserver.observe(document.getElementById("skills"));

// Optional: Rotating Logos
function rotateLogos() {
  const skillLogos = document.querySelectorAll(".skill-logo");
  skillLogos.forEach((logo) => {
    logo.style.animation = "rotate 10s infinite linear";
  });
}
rotateLogos();

/* =====================
   CONTACT SECTION ANIMATION
===================== */
const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const contactSection = document.querySelector(".contact-section");
      const contactLeft = document.querySelector(".contact-left");
      const contactRight = document.querySelector(".contact-right");

      if (entry.isIntersecting) {
        contactLeft.classList.add("slide-in-left");
        contactRight.classList.add("slide-in-right");
      } else {
        contactLeft.classList.remove("slide-in-left");
        contactRight.classList.remove("slide-in-right");
      }
    });
  },
  { threshold: 0.3 }
);
contactObserver.observe(document.querySelector(".contact-section"));
