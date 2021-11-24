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
    <h4>First Music Event12</h4>
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
