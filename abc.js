const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
const sidebar = document.querySelector(".sidebar");
const cross = document.querySelector(".fa-xmark");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".panel-class");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    cross.classList.add("active");
    black.classList.add("active");
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click", () => {
    sidebar.classList.remove("active");
    cross.classList.remove("active");
    black.classList.remove("active");
})
const sign = document.querySelector(".nav-second");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");

})
const search = document.querySelector(".search-input");
search.addEventListener("click", () => {
    black.classList.toggle("active-1")
})

