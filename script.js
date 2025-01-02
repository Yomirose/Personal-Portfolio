const menuList = document.querySelector("#menuList");
const menuIcon = document.querySelector(".menu-icon");
const menuLinks = document.querySelectorAll("#menuList a");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuList.classList.remove("show")
    })
});