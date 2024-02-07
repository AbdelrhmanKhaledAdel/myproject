let navbarToggler = document.querySelector(".close");
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});

let megaToggle = document.querySelectorAll(".links li");
for(let i = 0; i < 17; i++){
    megaToggle[i].addEventListener('click', function () {
        megaToggle[i].classList.toggle("showMenu");
    });
}

let header = document.querySelector(".header");
// scroll

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 40) {
        header.setAttribute("class", "header scroll")
    }else {
        header.setAttribute("class", "header")
    }
})


let btn = document.querySelector("button.up")
window.onscroll = function () {
    if(window.scrollY >= 600) {
        btn.classList.add("time");
    }else {
        btn.classList.remove("time");
    }
}
btn.onclick = function () {
    window.scrollTo({
        left:0,
        top: 0,
        behavior: "smooth",
    })
}







let darkModeTheme = document.querySelector(".theme-switch__checkbox")
let darkMode = document.querySelector("button.btn-dark")
let darkModeI = document.querySelector("button.btn-dark i")

function darkModeFunction() {
    let body = document.body;
    body.classList.toggle("dark");

    let theme;

    if(body.classList.contains("dark")) {
        theme = "DARK";
        // darkModeI.classList.replace("bx-moon", "bx-sun")
        document.querySelector(".theme-switch__checkbox").checked = true
    }else {
        theme = "LIGHT";
        // darkModeI.classList.replace("bx-sun", "bx-moon");
        document.querySelector(".theme-switch__checkbox").checked = false
    }
    localStorage.setItem("pageTheme", theme)
}

let getTheme = localStorage.getItem("pageTheme");

if(getTheme == "DARK") {
    document.body.classList = "dark";
    // darkModeI.classList.replace("bx-moon", "bx-sun");
    document.querySelector(".theme-switch__checkbox").checked = true

}
let btnDarkModeIcon = document.querySelector(".dark-mode-icon")
let mainDarkMode = document.querySelector(".dark-mode")

btnDarkModeIcon.addEventListener("click", () => {
    mainDarkMode.classList.toggle("active")
})







let video = document.querySelector(".video")
function openVideo() {
  video.classList.add("videoClicked")
  document.body.style.setProperty("overflow", "hidden")
}
function closeVideo() {
  video.classList.remove("videoClicked")
  document.body.style.removeProperty("overflow")
}

