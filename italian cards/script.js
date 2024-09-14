const slides = document.querySelectorAll(".slide")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const show = "show";
let sliderIndex = 0;
previous.addEventListener("click", previousSlide)
next.addEventListener("click", nextSlide)
function previousSlide(){
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = slides.length -1;
    }
    showSlide(sliderIndex)
}
function nextSlide(){
    sliderIndex++;
    if (sliderIndex > slides.length -1){
        sliderIndex = 0;
    }
    showSlide(sliderIndex)
}

function showSlide(n){
   
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove(show)
    }
    slides[n].classList.add(show)
}


const accordions = document.querySelectorAll(".accordion-content")

accordions.forEach(element => {
    element.addEventListener("click", accordionopener)
});

function accordionopener(event){
    accordions.forEach(element => {
        if (!element.isSameNode(event.currentTarget)) {
            element.classList.remove(show)
        }
    })
    event.currentTarget.classList.add(show)
}