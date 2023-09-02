var preloaderText = "Welcome to USC 2023";

let i=0;
function typing(){
    if(i<preloaderText.length){
        document.querySelector(".preloader-text").innerHTML += preloaderText.charAt(i);
        i=i+1;
        setTimeout(typing,60)
    }

}
typing();


setTimeout(function(){
    this.document.querySelector(".preloader").style.display = "none";
},4500)



window.addEventListener("click",function(){
    this.document.querySelector(".preloader").style.display = "none";
})




//sticky effect
window.addEventListener("scroll",function(){
    if (window.scrollY>30){
        document.querySelector(".navbar").classList.add("sticky");
    }
    else{
        document.querySelector(".navbar").classList.remove("sticky");
    }
})

const togglebtn = document.querySelector(".toggle-btn");
const togglebtnic = document.querySelector(".togle-btn i")

togglebtn.addEventListener("click", function(){
    document.querySelector(".responsive-dropdown").classList.toggle("click");
})


//navbar dropdown
document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector(".dropdown-toggle");
    const aboutPopup = document.querySelector(".dropdown-content");

    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();
        aboutPopup.classList.toggle("dropdown-active");
        if (aboutPopup.classList.contains("dropdown-active")) {
            aboutLink.style.border = "2px solid var(--content-color)";
            aboutLink.style.backgroundColor = "var(--content-color)";
            aboutLink.style.color = "var(--secondary)";
        } else {
            aboutLink.style.border = "";
            aboutLink.style.backgroundColor = "";
            aboutLink.style.color = "";
        }
    });

    document.addEventListener("click", function (event) {
        if (!aboutLink.contains(event.target) && !aboutPopup.contains(event.target)) {
            aboutPopup.classList.remove("dropdown-active");
            aboutLink.style.border = "";
            aboutLink.style.backgroundColor = "";
            aboutLink.style.color = "";
        }
    });
});


//typing
const changingTextElement = document.getElementById("changing-text");
const cursorElement = document.createElement("span");
cursorElement.classList.add("cursor");
changingTextElement.parentNode.insertBefore(cursorElement, changingTextElement.nextSibling);

const phrases = [
    "ENGINEERING, TECHNOLOGY, AND INNOVATION",
    "HOSTED BY KATHMANDU UNIVERSITY"
];

const colors = [
    "#7f6ee1",
    "#ffff"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function updateChangingText() {
    const currentPhrase = phrases[phraseIndex];
    const currentColor = colors[phraseIndex];
    const currentText = currentPhrase.slice(0, letterIndex);

    changingTextElement.innerHTML = currentText;
    changingTextElement.style.color = currentColor;

    if (!isDeleting && letterIndex === currentPhrase.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 2000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    if (!isDeleting) {
        letterIndex++;
    } else {
        letterIndex--;
    }

    setTimeout(updateChangingText, isDeleting ? 50 : 200);
}

updateChangingText();




//popup image
const popupButton = document.getElementById("popupButton");
const imageContainer = document.getElementById("imageContainer");
  
popupButton.addEventListener("click", () => {
    imageContainer.style.display = "flex";
});
  
  imageContainer.addEventListener("click", () => {
    imageContainer.style.display = "none";
});


//scroll animation

const hidden = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});

hidden.forEach((element)=>{
    observer.observe(element);
});

// Scroll Progress Bar
window.onscroll = function() { scrollProgress() };

function scrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    if (scrolled > 80) {
        document.getElementById("goUp").style.display = "block";
    } else {
        document.getElementById("goUp").style.display = "none";
    }
}


