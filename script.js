//Variables
const portfolioBtn = document.querySelector("#portfolio-btn");
const footerBtn = document.querySelector("#second");


//Event Listeners
portfolioBtn.addEventListener("click", () =>{
    const portfolioSection = document.querySelector(".portfolio");
    portfolioSection.scrollIntoView();
});

footerBtn.addEventListener("click", () =>{
    const showcaseSection = document.querySelector(".showcase");
    showcaseSection.scrollIntoView();
});