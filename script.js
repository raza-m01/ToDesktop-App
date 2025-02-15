const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR=-48*4;
const initialTranslateRTL=36*4;

function setupIntersectionObserver(element,isLTR, speed){

    const intersectionCallback=(entries)=>{

        const isIntersecting=entries[0].isIntersecting;
        // console.log(element,isIntersecting);
        if(isIntersecting){
            document.addEventListener('scroll',scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }

    }

    const intersectionObserver=new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler(){
        const translatex=(window.innerHeight-element.getBoundingClientRect().top)*speed;

        let totalTranslate=0;
        if(isLTR){

            totalTranslate=translatex+initialTranslateLTR;

        }else{
            totalTranslate= -(translatex+initialTranslateRTL);

        }
        element.style.transform =`translateX(${totalTranslate}px)`;
    }

}


const line1=document.getElementById('line1');
const line2=document.getElementById('line2');
const line3=document.getElementById('line3');
const line4=document.getElementById('line4');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
setupIntersectionObserver(line4,true,0.8);

// const dtElements=document.querySelectorAll('dt');

// dtElements.forEach((element)=>{

//     element.addEventListener('click',()=>{
//         const ddId= element.getAttribute('aria-controls');
//         const ddElement=document.getElementById(ddId);
//         const ddArrowIcon=element.querySelectorAll('i')[0];
//         ddElement.classList.toggle('hidden');
//         ddArrowIcon.classList.toggle('-rotate-180');
//     });

// });

// const dtElements = document.querySelectorAll("dt");

// dtElements.forEach((element) => {
//     element.addEventListener("click", () => {
//         const ddId = element.getAttribute("aria-controls");
//         const ddElement = document.getElementById(ddId);
//         const ddArrowIcon = element.querySelector("i");

//         // Close all other dd elements in the same column
//         document.querySelectorAll("dd").forEach((dd) => {
//             if (dd !== ddElement) {
//                 dd.classList.add("hidden");
//                 dd.previousElementSibling.querySelector("i").classList.add("-rotate-180");
//             }
//         });

//         // Toggle clicked FAQ
//         ddElement.classList.toggle("hidden");
//         ddArrowIcon.classList.toggle("-rotate-180");
//     });
// });

// const dtElements = document.querySelectorAll("dt");

// dtElements.forEach((element) => {
//     element.addEventListener("click", () => {
//         const ddId = element.getAttribute("aria-controls");
//         const ddElement = document.getElementById(ddId);
//         const ddArrowIcon = element.querySelector("i");

//         // Find the parent container (grid item) of the clicked FAQ
//         const parentContainer = element.closest(".group");

//         // Close only other FAQs in the same column (not globally)
//         parentContainer.parentElement.querySelectorAll(".group dd").forEach((dd) => {
//             if (dd !== ddElement) {
//                 dd.classList.add("hidden");
//                 dd.previousElementSibling.querySelector("i").classList.add("-rotate-180");
//             }
//         });

//         // Toggle the clicked FAQ
//         ddElement.classList.toggle("hidden");
//         ddArrowIcon.classList.toggle("-rotate-180");
//     });
// });

// const dtElements = document.querySelectorAll("dt");

// dtElements.forEach((element) => {
//     element.addEventListener("click", () => {
//         const ddId = element.getAttribute("aria-controls");
//         const ddElement = document.getElementById(ddId);
//         const ddArrowIcon = element.querySelector("i");

//         // Close all other FAQs in the same grid
//         document.querySelectorAll("dd").forEach((dd) => {
//             if (dd !== ddElement) {
//                 dd.classList.add("hidden");
//                 dd.previousElementSibling.querySelector("i").classList.add("-rotate-180");
//             }
//         });

//         // Toggle only the clicked FAQ
//         ddElement.classList.toggle("hidden");
//         ddArrowIcon.classList.toggle("-rotate-180");

//         // Fix grid behavior by ensuring FAQ height expands naturally
//         const parent = ddElement.closest(".group");
//         parent.classList.toggle("h-auto");
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".group button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const answer = this.parentElement.nextElementSibling;
            const icon = this.querySelector("svg");

            // Toggle visibility of answer
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
                this.setAttribute("aria-expanded", "true");
                icon.classList.add("-rotate-180"); // Rotate icon on expand
            } else {
                answer.style.display = "none";
                this.setAttribute("aria-expanded", "false");
                icon.classList.remove("-rotate-180"); // Reset icon rotation
            }
        });
    });
});
