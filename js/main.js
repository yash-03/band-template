let menuTogglerBtn = document.querySelector(".toggler-button");
let menu = document.querySelector(".main-menu");
menuTogglerBtn.addEventListener("click", () => {
  if (menu.style.display == "block") menu.style.display = "none";
  else menu.style.display = "block";
});

//slider control
/*function sliderHandle(){
    let slides = document.getElementsByClassName("slide");
    let slideIndex = '';

    for(let slide in slides) {
        if(slides[slide] == slides.length) {
            break;
        }
        if(slides[slide].classList.contains("active")){
            slideIndex = slide;
        }
    }
    let nextIndex = +slideIndex + 1;
    slides[slideIndex].classList.remove('active')
    if(nextIndex != slides.length) {
        slides[nextIndex].classList.add('active')
    } else {
        slides[0].classList.add('active')
    }
}
setInterval(sliderHandle,6000);*/

// show more
document.querySelector("#show-more").addEventListener("click", () => {
  document.querySelector(".cards").innerHTML += `
  <div class="card">
    <h4>First Music Event</h4>
    <p>Dec 2011,20:12</p>
    <button>Book Now</button>
  </div>
  <div class="card">
    <h4>First Music Event</h4>
    <p>Dec 2011,20:12</p>
    <button>Book Now</button>
  </div>
  <div class="card">
    <h4>First Music Event</h4>
    <p>Dec 2011,20:12</p>
    <button>Book Now</button>
  </div>
  <div class="card">
    <h4>First Music Event</h4>
    <p>Dec 2011,20:12</p>
    <button>Book Now</button>
  </div>`;
});

// menu active control
const scrollBarMove = (name) => {
  let body = document.body; // For Safari
  let html = document.documentElement; // Chrome, Firefox, IE and Opera places the overflow at the html level, unless else is specified. Therefore, we use the documentElement property for these browsers
  console.log("name", name);
  switch (name) {
    case "home":
      body.scrollTop = 10;
      html.scrollTop = 10;
      break;
    case "about":
      body.scrollTop = 500;
      html.scrollTop = 500;
      break;
    case "tour":
      body.scrollTop = 900;
      html.scrollTop = 900;
      break;
    case "event":
      body.scrollTop = 1050;
      html.scrollTop = 1050;
      break;
    case "gallery":
      body.scrollTop = 1300;
      html.scrollTop = 1300;
      break;
    case "contact":
      body.scrollTop = 2000;
      html.scrollTop = 2000;
      break;
  }
};
const menuLink = document.querySelectorAll(".menu-link");
menuLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    const menuActive = document.querySelector(".menu-active");
    menuActive.classList.remove("menu-active");
    e.preventDefault();
    link.classList.add("menu-active");
    const attr = link.getAttribute("data-name");
    scrollBarMove(attr);
  });
});
