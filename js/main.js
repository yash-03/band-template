let menuTogglerBtn = document.querySelector(".toggler-button");
let menu = document.querySelector(".main-menu");
menuTogglerBtn.addEventListener("click", () => {
    if(menu.style.display == "block")
        menu.style.display = "none";
    else
        menu.style.display = "block";
})