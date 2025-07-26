const projectList = [
    {
        id: 1,
        number: "01",
        title: "APSACS Webite clone",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error minus ipsam molestiae delectus reiciendis culpa excepturi ad facilis mollitia!",
        techStack: ["HTML", "CSS", "Tailwind CSS", "JQuery"],
        image: "Assets/project1.png",
        liveLink: "https://apsacs.vercel.app/",
        githubLink: "https://github.com/ChaudharyTalal/APSACS",
    }
    // ,

    // {
    //     id: 2,
    //     number: "02",
    //     title: "SAAS Canva Website",
    //     description:
    //         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil error minus ipsam molestiae delectus reiciendis culpa excepturi ad facilis mollitia!",
    //     techStack: ["Next JS ", "Strapi"],
    //     image: "Assets/project1.png",
    //     liveLink: "#",
    //     githubLink: "#",
    // },
];

const projects = document.querySelector(".projects")
let currentIndex = 0;
const renderProjects = (index) => {
    const projectContent = projectList[index];
    const previousDisabled = currentIndex === 0
    const nextDisabled = currentIndex === projectList.length - 1


projects.innerHTML = `
 <div class="project-info">
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>
                    <div class="tech-stack">
    ${projectContent?.techStack?.map((tech,i)=>{
            return `
            <span key=${i}> ${tech} </span>`
        }).join(",")
    }
    
                    </div>

                    
                    <hr>
                    <div class="links">
                        <a target="_blank" href=" ${projectContent?.liveLink} "> <i class="ph ph-arrow-right"></i> </a>
                        <a target="_blank" href="${projectContent?.githubLink} "> <i class="ph ph-github-logo"></i> </a>
                    </div>
                </div>

                 <div class="carousel">
                    <img src="${projectContent?.image} "
                     alt="${projectContent?.title}">
                    <div class="arrows">
                <a href="" id="previous" class=${previousDisabled?"disabled-btn":""}> <i class="ph ph-arrow-left"></i> </a>
                <a href="" id="next" class=${nextDisabled?"disabled-btn":""}><i class="ph ph-arrow-right"></i> </a>
                    </div>
                </div>
`
document.getElementById('previous').addEventListener("click",(e)=>{
    e.preventDefault();
    if(currentIndex>0){
        currentIndex--;
        renderProjects(currentIndex)
    }
})
document.getElementById('next').addEventListener("click",(e)=>{
    e.preventDefault();
    if(currentIndex< projectList.length-1){
        currentIndex++;
        renderProjects(currentIndex)
    }
})
}
renderProjects(currentIndex)