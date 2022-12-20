
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(el => {

       const button = el.querySelector(".dropdown-btn");

       button.addEventListener("click", () => {
              // Toggle one
              el.classList.toggle("open");

       });
});

const burgerBtn = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close_btn");

burgerBtn.addEventListener("click", () => {
       openNavbar();
});

closeBtn.addEventListener("click", () => {
       closeNavbar()
});

function openNavbar() {
       overlay.classList.add("open");
       overlay.style.transition = "all .5s ease";
       mobileNavbar.classList.add("open");
       mobileNavbar.style.transition = "all .3s ease .5s";
}

function closeNavbar() {
       mobileNavbar.classList.remove("open");
       mobileNavbar.style.transition = "all .3s ease";
       overlay.classList.remove("open");
       overlay.style.transition = "all .5s ease .3s";
}