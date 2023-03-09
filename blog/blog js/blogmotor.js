const header = document.querySelector(".bars");
const navList = document.querySelector("nav ul");

header.addEventListener('click', function () {
    navList.classList.toggle('slide');
})