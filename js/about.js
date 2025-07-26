const aboutTabs = document.querySelectorAll(".tab")

const aboutContent = document.querySelectorAll(".tab-content")

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs.length > 0) {
    aboutTabs[0].click();
  }
})

aboutTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    aboutTabs.forEach((a) => {
      a.classList.remove("active")
    })
    tab.classList.add("active")
    aboutContent.forEach((c) => {
      c.classList.remove("active")
    })
    const activeTab = tab.dataset.section;
    document.getElementById(activeTab).classList.add("active")

    if (activeTab === "experience") {
      const experience = document.querySelector(".experience-list")
      const experienceList = [
        {
          id: 1,
          date: "Jan 2024- JUN 2024",
          position: "Customer Dealing",
          company: "Software House",
          details:
            "I do the games coins Marketing ,deals with customer, solves their quries, Makes their account and Makes the posts for the company Facebook page ",
        }
      ];
      const experienceContent = experienceList.map((ele) => {

        return `
       <div class="experience-box" key=${ele?.id}>
                        <h2>${ele?.date}</h2>
                        <h3>${ele?.position}</h3>
                        <div class="company">
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.company}</p>
                            </div>
                            <p>${ele?.details}</p>
                        </div>
                    </div>
        
        
        `
      }).join("")
      if (experience) {
        experience.innerHTML = experienceContent
      }
    }

     if (activeTab === "education") {
      const education = document.querySelector(".education-list")
      const educationList = [
        {
          id: 1,
          date: "2024 - present",
          degree: "Bachelor in Computer Science (BS CS)",
          institution: "Emerson University Multan",
          details:
            "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript",
        },
        {
          id: 2,
          date: "2021 - 2023",
          degree: "Intermidiate Computer Science (I.C.S)",
          institution: "Army Public School and Collage for Boys Multan",
          details:
            "Focused on C++ programming language. Developed a strong foundation in logical thinking and problem-solving.",
        },
        {
          id: 3,
          date: "2019 - 2021",
          degree: "Maticulation",
          institution: "Army Public School and Collage for Boys Multan",
          details:
            "Completed basic schooling with distinction. Actively participated in computer clubs and tech-related events.",
        },
      ];

      const educationContent = educationList.map((ele) => {
        return `
        <div class="experience-box" key=${ele?.id}>
                        <h2>${ele?.date}</h2>
                        <h3>${ele?.degree}</h3>
                        <div class="company">
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.institution}</p>
                            </div>
                            <p>${ele?.details}</p>
                        </div>
                    </div>
                    `
      }).join("")
      if (education) {
        education.innerHTML = educationContent;
      }

    }

    else if (activeTab === "skills") {
      const skills = document.querySelector(".skill-list")
      const skillList = [
        {
          id: 1,
          name: "HTML - Hyper Text Markup Language",
          icon: "https://portfolio-phi-henna-72.vercel.app/assets/skills/html.png",
        },
        {
          id: 2,
          name: "CSS - Cascading Style Sheet",
          icon: "./Assets/skills/css.png",
        },
        {
          id: 3,
          name: "JavaScript",
          icon: "https://portfolio-phi-henna-72.vercel.app/assets/skills/js.png",
        },
        {
          id: 4,
          name: "MongoDB",
          icon: "https://portfolio-phi-henna-72.vercel.app/assets/skills/mongodb.png",
        },
        {
          id: 5,
          name: "Tailwind CSS",
          icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "https://portfolio-phi-henna-72.vercel.app/assets/skills/node.png",
        },
        {
          id: 7,
          name: "React JS",
          icon: "https://portfolio-phi-henna-72.vercel.app/assets/skills/react.png",
        },
      ];

      const skillContent = skillList.map((ele) => {
        return `
         <div class="skill-box" key=${ele?.id}>
            <img src="${ele?.icon}" alt="${ele?.name}">
              </div>
              </div>
        `
      }).join("")
      if (skills) {
        skills.innerHTML = skillContent;
      }

    }
    else if(activeTab==='about-me'){
const myinfo=document.querySelector(".my-info")
      const infoList = [
        {
          id: 1,
          key: "Name : ",
          value: "Muhammad Talal Aslam",
        },
        {
          id: 2,
          key: "Industry : ",
          value: "Software & IT",
        },
        {
          id: 3,
          key: "Experience : ",
          value: "6 Months",
        },
        {
          id: 4,
          key: "Address : ",
          value: "Street No.6 Ali Park Qasim bela Multan",
        },
      ];
      const infocontent=infoList.map((ele)=>{
        return `
         <div class="info-box" key=${ele.id} >
                        <span> ${ele.key} </span>
                        <span>${ele.value}</span>
                    </div>
        `
      }).join("")
      if(myinfo){
      myinfo.innerHTML=infocontent;
      }
    }
  })
}) 
