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