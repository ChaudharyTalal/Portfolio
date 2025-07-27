const toggle = document.querySelector("#menu-toggle");

if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
  });
}

const words = ["Developer", "Mentor", "UI/UX Designer"];

// WORD TYPING ANIMATION

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDealy = 100;
let nextWordDelay = 1000;

const type = () => {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    // console.log(typingText.textContent)
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, nextWordDelay);
    } else {
      setTimeout(type, typingDelay);
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    // console.log(typingText.textContent);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingDealy);
    }
  }
};
document.addEventListener("DOMContentLoaded", () => {
  if (words?.length) {
    type();
  }
});

// SWitching Tabs Event

const navLinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");

navLinks.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault();

    //Adding and remivng class on nav links
      navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    links.classList.add("active");

     //Adding and remivng class on sections 
      const tabName = links.dataset.tab;
    tabs.forEach((tab) => {
          if ((tab.id === tabName)) {
            tab.classList.add("active");
            } 
              else {
              tab.classList.remove("active");
              }
      });
      

      // click on protfolio to show Home class
      const brandHome = document.querySelector(".pol");
brandHome.addEventListener("click", () => {
  // Remove active from all nav links
  navLinks.forEach((l) => l.classList.remove("active"));

  // Set Home nav link active
  const homeLink = document.querySelector('[data-tab="home"]');
  if (homeLink) homeLink.classList.add("active");

  // Show only the home section
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.id === "home");
  });

});





    // Services      
     if (tabName === "services") {
  const serviceList = [
    {
      id: 1,
      icon: "ph-code",
      text: "Website Development",
      para: "I build responsive and modern websites using the latest technologies like HTML, CSS, JavaScript, React, and MERN stack.",
    },
    {
      id: 2,
      icon: "ph-paint-brush",
      text: "UX/UI Design",
      para: "Custom mobile apps for Android and iOS using React Native and Expo, designed to provide excellent UI/UX and performance.",
    },
    {
      id: 3,
      icon: "ph-trend-up",
      text: "SEO Optimization",
      para: "I improve website visibility on search engines with optimized structure, keywords, and performance best practices.",
    },
    {
      id: 4,
      icon: "ph-palette",
      text: "Graphic Design",
      para: "Offering expert advice and solutions for tech projects, helping individuals and startups with project planning and stack decisions.",
    },
    {
      id: 5,
      icon: "ph-video",
      text: "Mentorship & Training",
      para: "Personal mentorship for beginners to advanced learners in web development, including live coding sessions and career guidance.",
    },
    {
      id: 6,
      icon: "ph-camera",
      text: "Photography",
      para: "End-to-end delivery of freelance projects — from planning to deployment — with quality assurance and post-launch support.",
    },
  ];

  const services = document.getElementsByClassName("service-list");

  const innerContent = serviceList.map((l) => `
    <div class="box" id="service-${l.id}">
      <div class="head-icons">
        <i class="ph ${l.icon}"></i>
        <span><i class="ph ph-arrow-down"></i></span>
      </div>
      <h3>${l.text}</h3>
      <div class="spacer"></div>
      <p>${l.para}</p>
    </div>
  `).join(""); // <- IMPORTANT: .join()

  Array.from(services).forEach((ele) => {
    ele.innerHTML = innerContent;
  });
}


 if (toggle) {
      toggle.checked = false;
      toggle.dispatchEvent(new Event("change"));
}

    
  })
})
