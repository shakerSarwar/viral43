
const openBnt = document.querySelector("#side-menu")
const closeBnt = document.querySelector(".close-menu")
const desctopSiteMenu = document.querySelector("#desctop-site-menu")

openBnt.addEventListener("click", () => {
    console.log("object");
    desctopSiteMenu.classList.toggle("hide-desctop-site-menu")
})

closeBnt.addEventListener("click", () => {
    console.log("object", desctopSiteMenu);
    desctopSiteMenu.classList.toggle("hide-desctop-site-menu")
})